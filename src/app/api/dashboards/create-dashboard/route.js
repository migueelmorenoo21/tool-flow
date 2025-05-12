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

// ÚNICAMENTE crea un nuevo dashboard
export async function POST(req) {
  let client;
  
  try {
    // Verificar autenticación
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    // Parsear datos del body
    const { titulo, descripcion, color } = await req.json();
    
    if (!titulo) {
      return NextResponse.json({ error: 'El título es obligatorio' }, { status: 400 });
    }
    
    // Conectar a la base de datos
    client = await pool.connect();
    
    // Insertar el dashboard
    const result = await client.query(
      `INSERT INTO dashboards (usuario_id, titulo, descripcion, color)
       VALUES ($1, $2, $3, $4)
       RETURNING id, titulo, descripcion, color, created_at`,
      [userId, titulo, descripcion || null, color || '#0079BF']
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
    
  } catch (error) {
    console.error('Error al crear dashboard:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}