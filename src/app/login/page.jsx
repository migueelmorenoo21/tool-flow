'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();
  const { login, isAuthenticated } = useAuth(); // Usamos el hook de autenticación

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

    // Usamos la función login del contexto en lugar de fetch directo
    const result = await login(form);

    if (result.success) {
      router.push('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Iniciar sesión</h1>
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Usuario"
          autoComplete="username"
          value={form.username}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '4rem auto',
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
  input: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #CCD0D5',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#0078E7',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
};