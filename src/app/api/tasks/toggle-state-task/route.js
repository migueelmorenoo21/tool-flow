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

// ÚNICAMENTE actualiza el estado de completado de una tarea
export async function PATCH(req, { params }) {
  let client;
  
  try {
    // Verificar autenticación
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const taskId = params.id;
    const { completada } = await req.json();
    
    if (completada === undefined) {
      return NextResponse.json({ error: 'El campo completada es requerido' }, { status: 400 });
    }
    
    // Conectar a la base de datos
    client = await pool.connect();
    
    // Verificar que la tarea pertenezca a un dashboard del usuario
    const checkResult = await client.query(
      `SELECT 1 FROM tasks t
       JOIN dashboards d ON t.dashboard_id = d.id
       WHERE t.id = $1 AND d.usuario_id = $2`,
      [taskId, userId]
    );
    
    if (checkResult.rows.length === 0) {
      return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
    }
    
    // Actualizar solo el estado de completado
    const result = await client.query(
      `UPDATE tasks 
       SET completada = $1 
       WHERE id = $2
       RETURNING id, titulo, completada, updated_at`,
      [completada, taskId]
    );
    
    return NextResponse.json(result.rows[0]);
    
  } catch (error) {
    console.error('Error al actualizar estado de tarea:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}