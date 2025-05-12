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

// ÚNICAMENTE crea una nueva tarea
export async function POST(req, { params }) {
  let client;
  
  try {
    // Verificar autenticación
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const dashboardId = params.id;
    
    // Parsear datos del body
    const { titulo, descripcion, due_date } = await req.json();
    
    if (!titulo) {
      return NextResponse.json({ error: 'El título es obligatorio' }, { status: 400 });
    }
    
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
    
    // Insertar la tarea
    const result = await client.query(
      `INSERT INTO tasks (dashboard_id, titulo, descripcion, due_date)
       VALUES ($1, $2, $3, $4)
       RETURNING id, titulo, descripcion, due_date, completada, updated_at`,
      [
        dashboardId, 
        titulo, 
        descripcion || null, 
        due_date ? new Date(due_date) : null
      ]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
    
  } catch (error) {
    console.error('Error al crear tarea:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}