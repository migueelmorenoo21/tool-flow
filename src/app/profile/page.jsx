'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  
  // Si está cargando, mostramos un indicador
  if (loading) {
    return (
      <div style={styles.container}>
        <p style={styles.loading}>Cargando información del perfil...</p>
      </div>
    );
  }
  
  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }
  
  // Manejador para el botón de cerrar sesión
  const handleLogout = async () => {
    await logout();
    // No necesitamos redireccionar aquí ya que la función logout 
    // en AuthContext ya maneja la redirección
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mi Perfil</h1>
      
      <div style={styles.card}>
        <div style={styles.userAvatar}>
          {user.nombre && user.nombre[0].toUpperCase()}
          {user.apellido && user.apellido[0].toUpperCase()}
        </div>
        
        <div style={styles.userInfo}>
          <h2 style={styles.userName}>
            {user.nombre} {user.apellido}
          </h2>
          <p style={styles.userRole}>{user.rol || 'Usuario'}</p>
          
          <div style={styles.infoSection}>
            <h3 style={styles.sectionTitle}>Información de Cuenta</h3>
            <div style={styles.infoRow}>
              <span style={styles.label}>Nombre de usuario:</span>
              <span style={styles.value}>{user.username}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.label}>Email:</span>
              <span style={styles.value}>{user.email}</span>
            </div>
            {user.telefono && (
              <div style={styles.infoRow}>
                <span style={styles.label}>Teléfono:</span>
                <span style={styles.value}>{user.telefono}</span>
              </div>
            )}
          </div>
          
          {/* Botón de cerrar sesión */}
          <button 
            onClick={handleLogout}
            style={styles.logoutButton}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '1rem',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#172B4D',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  userAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#0078E7',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  userInfo: {
    width: '100%',
  },
  userName: {
    fontSize: '1.8rem',
    margin: '0 0 0.3rem 0',
    textAlign: 'center',
  },
  userRole: {
    color: '#666',
    margin: '0 0 2rem 0',
    textAlign: 'center',
    fontSize: '1.1rem',
    textTransform: 'capitalize',
  },
  infoSection: {
    marginTop: '1rem',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#172B4D',
  },
  infoRow: {
    display: 'flex',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    padding: '0.5rem',
    borderBottom: '1px solid #f5f5f5',
  },
  label: {
    width: '180px',
    color: '#666',
    fontWeight: '500',
  },
  value: {
    flex: '1',
    color: '#333',
  },
  logoutButton: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#D82C0D',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginTop: '1rem',
    fontWeight: '500',
  }
};

export default ProfilePage;