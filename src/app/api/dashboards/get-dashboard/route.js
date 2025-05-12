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

// ÚNICAMENTE obtiene un dashboard específico
export async function GET(req, { params }) {
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
    
    // Obtener el dashboard
    const result = await client.query(
      `SELECT id, titulo, descripcion, color, created_at, updated_at
       FROM dashboards 
       WHERE id = $1 AND usuario_id = $2`,
      [dashboardId, userId]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Dashboard no encontrado' }, { status: 404 });
    }
    
    return NextResponse.json(result.rows[0]);
    
  } catch (error) {
    console.error('Error al obtener dashboard:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}