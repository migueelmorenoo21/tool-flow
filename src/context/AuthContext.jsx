'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

// Componente proveedor del contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Verificar si el usuario está autenticado al cargar la página
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Redireccionar según el estado de autenticación
  useEffect(() => {
    if (loading) return;

    // Si está autenticado y visita login o register, redirigir a home
    if (user && (pathname === '/login' || pathname === '/register')) {
      router.push('/');
    }

    // Si no está autenticado y visita rutas protegidas, redirigir a login
    const protectedRoutes = ['/dashboard', '/perfil', '/tareas'];
    if (!user && protectedRoutes.some(route => pathname.startsWith(route))) {
      router.push('/login');
    }
  }, [user, pathname, loading, router]);

  // Función para iniciar sesión
  const login = async (credentials) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        // Obtener datos del usuario después de iniciar sesión exitosamente
        const userData = await fetch('/api/auth/me').then(r => r.json());
        setUser(userData);
        return { success: true };
      } else {
        const error = await res.json();
        return { success: false, error: error.error || 'Credenciales inválidas' };
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Función para registrar un nuevo usuario
  const register = async (userData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        return { success: true };
      } else {
        const error = await res.json();
        return { success: false, error: error.error || 'Error en el registro' };
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Error durante el logout:', error);
    }
  };

  // Valores y funciones que expondrá el contexto
  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Componente para proteger rutas que requieren autenticación
export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? children : null;
}