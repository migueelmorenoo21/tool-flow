import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Crear una cookie vacía con fecha de expiración en el pasado
  const cookie = serialize('tf_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // Expirada
  });

  // Devolver respuesta con instrucción para eliminar la cookie
  const response = NextResponse.json({ message: 'Sesión cerrada' });
  response.headers.set('Set-Cookie', cookie);
  
  return response;
}