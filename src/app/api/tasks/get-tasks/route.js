export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const connectionString = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const pool = new Pool({ connectionString });

// Middleware para verificar autenticación y acceso a tarea
async function checkTaskAccess(taskId) {
  const cookieStore = cookies();
  const token = cookieStore.get('tf_token')?.value;
  
  if (!token) return null;
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.sub;
    
    const client = await pool.connect();
    
    // Verificar que la tarea pertenezca a un dashboard del usuario
    const result = await client.query(
      `SELECT t.* FROM tasks t
       JOIN dashboards d ON t.dashboard_id = d.id
       WHERE t.id = $1 AND d.usuario_id = $2`,
      [taskId, userId]
    );
    
    client.release();
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return result.rows[0];
    
  } catch (error) {
    return null;
  }
}

// ÚNICAMENTE obtiene una tarea específica
export async function GET(req, { params }) {
  try {
    const taskId = params.id;
    const task = await checkTaskAccess(taskId);
    
    if (!task) {
      return NextResponse.json({ error: 'No autorizado o tarea no encontrada' }, { status: 404 });
    }
    
    return NextResponse.json(task);
    
  } catch (error) {
    console.error('Error al obtener tarea:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}