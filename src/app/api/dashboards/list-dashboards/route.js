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

// ÚNICAMENTE lista los dashboards del usuario
export async function GET() {
  let client;
  
  try {
    // Verificar autenticación
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    // Conectar a la base de datos
    client = await pool.connect();
    
    // Obtener todos los dashboards del usuario
    const result = await client.query(
      `SELECT id, titulo, descripcion, color, created_at, updated_at
       FROM dashboards
       WHERE usuario_id = $1
       ORDER BY updated_at DESC`,
      [userId]
    );
    
    return NextResponse.json(result.rows);
    
  } catch (error) {
    console.error('Error al listar dashboards:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}