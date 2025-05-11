-- db.sql
-- --------------------------------------------------
-- Script de creación de la base de datos para TareaFlow
-- Incluye tablas de personas, usuarios, dashboards y tareas
-- PostgreSQL 13+
-- --------------------------------------------------

-- 1. Habilita la extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Tablas principales

-- 2.1. Personas (datos personales sin credenciales)
DROP TABLE IF EXISTS personas CASCADE;
CREATE TABLE personas (
  id           UUID      PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre       TEXT      NOT NULL,
  apellido     TEXT,
  email        TEXT      NOT NULL UNIQUE,
  telefono     TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.2. Usuarios (credenciales y login)
DROP TABLE IF EXISTS usuarios CASCADE;
CREATE TABLE usuarios (
  id           UUID      PRIMARY KEY DEFAULT uuid_generate_v4(),
  persona_id   UUID      NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  username     TEXT      NOT NULL UNIQUE,
  password_hash TEXT     NOT NULL,
  rol          TEXT      NOT NULL DEFAULT 'user',    -- 'user', 'admin', etc.
  last_login   TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_usuarios_persona ON usuarios(persona_id);

-- 2.3. Dashboards (espacios de trabajo)
DROP TABLE IF EXISTS dashboards CASCADE;
CREATE TABLE dashboards (
  id           UUID      PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id   UUID      NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo       TEXT      NOT NULL,
  descripcion  TEXT,
  color        TEXT      DEFAULT '#0079BF',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_dashboards_usuario ON dashboards(usuario_id);

-- 2.4. Tareas (cards)
DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id            UUID      PRIMARY KEY DEFAULT uuid_generate_v4(),
  dashboard_id  UUID      NOT NULL REFERENCES dashboards(id) ON DELETE CASCADE,
  titulo        TEXT      NOT NULL,
  descripcion   TEXT,
  due_date      DATE,
  completada    BOOLEAN   NOT NULL DEFAULT FALSE,
  prioridad     TEXT      CHECK (prioridad IN ('low','medium','high')) DEFAULT 'low',
  orden         INTEGER   NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_tasks_dashboard ON tasks(dashboard_id);
CREATE INDEX idx_tasks_completada ON tasks(completada);

-- 3. Función y triggers para actualizar 'updated_at' automáticamente

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para personas
CREATE TRIGGER set_timestamp_personas
BEFORE UPDATE ON personas
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- Trigger para usuarios
CREATE TRIGGER set_timestamp_usuarios
BEFORE UPDATE ON usuarios
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- Trigger para dashboards
CREATE TRIGGER set_timestamp_dashboards
BEFORE UPDATE ON dashboards
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- Trigger para tasks
CREATE TRIGGER set_timestamp_tasks
BEFORE UPDATE ON tasks
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- 4. Datos de ejemplo (opcional)

-- INSERT INTO personas (nombre, apellido, email, telefono) VALUES
--   ('Juan', 'Pérez', 'juan.perez@example.com', '555-1234');

-- INSERT INTO usuarios (persona_id, username, password_hash) VALUES
--   ('<uuid-juan>', 'juanp', '$2b$10$encryptedpassword...');

-- INSERT INTO dashboards (usuario_id, titulo, descripcion) VALUES
--   ('<uuid-usuario>', 'Marketing', 'Campañas y lanzamientos');

-- INSERT INTO tasks (dashboard_id, titulo, descripcion, due_date, prioridad, orden) VALUES
--   ('<uuid-dashboard>','Lanzar campaña','Configurar anuncios','2025-06-01','high',1);

-- --------------------------------------------------
-- Fin del script
-- --------------------------------------------------
