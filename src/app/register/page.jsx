'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const router = useRouter();
  const { register, isAuthenticated } = useAuth(); // Usamos el hook de autenticación
  
  // Si ya está autenticado, redireccionamos (protección adicional)
  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    // Usamos la función register del contexto en lugar de fetch directo
    const result = await register(form);

    if (result.success) {
      router.push('/login');
    } else {
      setError(result.error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Crear cuenta</h1>
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            style={{ ...styles.input, flex: 1 }}
          />
          <input
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            style={{ ...styles.input, flex: 1 }}
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Registrarme
        </button>

        <div style={styles.loginLink}>
          ¿Ya tienes una cuenta? <Link href="/login" style={{color: '#0078E7'}}>Iniciar sesión</Link>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: '#172B4D',
    textAlign: 'center',
  },
  error: {
    color: '#D0454C',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #CCD0D5',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#00C279',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  loginLink: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666'
  }
};