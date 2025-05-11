// src/app/api/auth/register/route.js

// 1. Esto fuerza que Next.js utilice el runtime de Node.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Pool } from "pg";

// 2. Leemos y comprobamos la URL de conexión
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("📌 No existe DATABASE_URL en process.env");
}

const pool = new Pool({ connectionString });

export async function POST(req) {
  let client;
  try {
    const { nombre, apellido, email, username, password } = await req.json();

    if (!nombre || !email || !username || !password) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    client = await pool.connect();

    // 3. Comprobamos usuario y email
    const { rows: userRows } = await client.query(
      "SELECT 1 FROM usuarios WHERE username = $1",
      [username]
    );
    if (userRows.length) {
      return NextResponse.json({ error: "Usuario ya existe" }, { status: 409 });
    }

    const { rows: personaRows } = await client.query(
      "SELECT 1 FROM personas WHERE email = $1",
      [email]
    );
    if (personaRows.length) {
      return NextResponse.json({ error: "Email ya registrado" }, { status: 409 });
    }

    // 4. Hash de la contraseña
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // 5. Transacción para insertar ambas filas
    await client.query("BEGIN");

    const personaRes = await client.query(
      `INSERT INTO personas (nombre, apellido, email)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [nombre, apellido || null, email]
    );
    const personaId = personaRes.rows[0].id;

    await client.query(
      `INSERT INTO usuarios (persona_id, username, password_hash)
       VALUES ($1, $2, $3)`,
      [personaId, username, password_hash]
    );

    await client.query("COMMIT");
    return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
  } catch (err) {
    // Si hay error durante la transacción, hacemos rollback
    if (client) {
      try { await client.query("ROLLBACK"); }
      catch (rollbackErr) { console.error("Rollback error:", rollbackErr); }
    }

    console.error("Register API error:", err);

    // Manejo de errores únicos de PostgreSQL
    if (err.code === "23505") {
      if (err.constraint === "personas_email_key") {
        return NextResponse.json({ error: "Email ya registrado" }, { status: 409 });
      }
      if (err.constraint === "usuarios_username_key") {
        return NextResponse.json({ error: "Usuario ya existe" }, { status: 409 });
      }
      return NextResponse.json({ error: "Datos duplicados" }, { status: 409 });
    }

    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}
