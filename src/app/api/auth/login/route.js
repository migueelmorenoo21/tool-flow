// Fuerza el runtime Node (Next.js App Router)
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import bcrypt          from 'bcrypt';
import jwt             from 'jsonwebtoken';
import { serialize }   from 'cookie';
import { Pool }        from 'pg';

/* ---------- Config PG --------------------------------------------------- */
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('📌  Falta DATABASE_URL');
}

// 1. Log rápido del DSN (sin password) --------------
try {
  const pgUrl = new URL(connectionString);
  console.log('📡  DATABASE_URL:', {
    host    : pgUrl.hostname,
    port    : pgUrl.port || 5432,
    database: pgUrl.pathname.replace(/^\//, ''),
    user    : pgUrl.username,
  });
} catch (err) {
  console.warn('⚠️  DATABASE_URL no es una URL válida');
}

const pool = new Pool({ connectionString });

/* ---------- Config JWT -------------------------------------------------- */
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) console.error('📌  Falta JWT_SECRET');

/* ---------- Handler POST /api/auth/login -------------------------------- */
export async function POST(req) {
  let client;

  try {
    /* 1. Parseo de body --------------------------------------------------- */
    const { username, password } = await req.json();
    console.log('🔐  Intento de login:', username);

    if (!username || !password) {
      console.warn('⚠️  Credenciales incompletas');
      return NextResponse.json({ error: 'Faltan credenciales' }, { status: 400 });
    }

    /* 2. Conexión a PG ---------------------------------------------------- */
    client = await pool.connect();

    // 2.1 INFO exacta de la sesión ----------------------------
    const meta = await client.query(`
      select current_database()  as db,
             current_schema()    as schema,
             inet_server_addr()  as host,
             inet_server_port()  as port
    `);
    console.log('🐘  Conectado a PG:', meta.rows[0]);

    /* 3. Consulta de usuario --------------------------------------------- */
    const { rows } = await client.query(
      'SELECT id, password_hash FROM usuarios WHERE username = $1',
      [username]
    );
    console.log('🔎  Resultado query:', rows);

    const user = rows[0];
    if (!user) {
      console.warn('❌  Usuario no encontrado');
      return NextResponse.json({ error: 'Usuario o contraseña inválidos' }, { status: 401 });
    }

    /* 4. Comparar contraseña --------------------------------------------- */
    const valid = await bcrypt.compare(password, user.password_hash);
    console.log('🔑  Contraseña válida:', valid);
    if (!valid) {
      console.warn('❌  Contraseña incorrecta');
      return NextResponse.json({ error: 'Usuario o contraseña inválidos' }, { status: 401 });
    }

    /* 5. Generar JWT y cookie -------------------------------------------- */
    const token  = jwt.sign({ sub: user.id, username }, JWT_SECRET, { expiresIn: '7d' });
    console.log('🪙  JWT generado:', token.slice(0, 16), '…');

    const cookie = serialize('tf_token', token, {
      httpOnly : true,
      secure   : process.env.NODE_ENV === 'production',
      sameSite : 'lax',
      path     : '/',
      maxAge   : 60 * 60 * 24 * 7, // 7 días
    });

    const res = NextResponse.json({ message: 'Autenticado' });
    res.headers.set('Set-Cookie', cookie);

    console.log('✅  Login OK para', username);
    return res;

  } catch (err) {
    console.error('💥  Login API error:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}
