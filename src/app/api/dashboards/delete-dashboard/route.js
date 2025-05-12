export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const connectionString = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const pool = new Pool({ connectionString });

// Middleware para verificar autenticación
async function getUserIdFromToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('tf_token')?.value;
  
  if (!token) return null;
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.sub;
  } catch (error) {
    return null;
  }
}

// ÚNICAMENTE elimina un dashboard
export async function DELETE(req, { params }) {
  let client;
  
  try {
    // Verificar autenticación
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const dashboardId = params.id;
    
    // Conectar a la base de datos
    client = await pool.connect();
    
    // Verificar que el dashboard pertenezca al usuario
    const checkResult = await client.query(
      `SELECT 1 FROM dashboards WHERE id = $1 AND usuario_id = $2`,
      [dashboardId, userId]
    );
    
    if (checkResult.rows.length === 0) {
      return NextResponse.json({ error: 'Dashboard no encontrado' }, { status: 404 });
    }
    
    // Eliminar el dashboard (las tareas se eliminarán automáticamente por la restricción ON DELETE CASCADE)
    await client.query(
      `DELETE FROM dashboards WHERE id = $1`,
      [dashboardId]
    );
    
    return NextResponse.json({ message: 'Dashboard eliminado correctamente' });
    
  } catch (error) {
    console.error('Error al eliminar dashboard:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}