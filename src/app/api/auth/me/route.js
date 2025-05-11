export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { cookies } from 'next/headers';

const connectionString = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const pool = new Pool({ connectionString });

export async function GET() {
  let client;
  
  try {
    // Obtener la cookie con el token
    const cookieStore = cookies();
    const token = cookieStore.get('tf_token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }
    
    // Verificar el token
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.sub;
    
    // Obtener información del usuario
    client = await pool.connect();
    const { rows } = await client.query(`
      SELECT 
        u.id, 
        u.username, 
        u.rol, 
        p.nombre, 
        p.apellido, 
        p.email
      FROM usuarios u
      JOIN personas p ON u.persona_id = p.id
      WHERE u.id = $1
    `, [userId]);
    
    if (!rows.length) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }
    
    // Devolver datos del usuario (sin información sensible)
    const userData = rows[0];
    delete userData.password_hash;
    
    return NextResponse.json(userData);
    
  } catch (error) {
    console.error('Error en /api/auth/me:', error);
    
    // Si el error es por token expirado o inválido
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return NextResponse.json(
        { error: 'Sesión inválida' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    if (client) client.release();
  }
}