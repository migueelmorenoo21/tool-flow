import React, { useState } from 'react';
import NavItem from './components/desktop/NavItem';
import { HomeIcon, InboxIcon, DashboardIcon } from '../common/NavIcons'; // Importa los íconos
/**
 * Componente MobileNavBar - Barra de navegación para dispositivos móviles
 * con menú hamburguesa que despliega las mismas opciones de navegación que el sidebar
 */
function MobileNavBar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Barra de navegación principal */}
      <nav className="mobile-navbar">
        {/* Botón de menú hamburguesa */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-icon">
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          </span>
        </button>

        {/* Título/Logo de la aplicación */}
        <div className="app-title">
          <img src="/favsinfondo.png" alt="Logo" className="logo-movil" />
        </div>

        {/* Botón de perfil u otras acciones rápidas */}
        <button className="profile-button" aria-label="Perfil">
          <div className="avatar">
            <span>U</span>
          </div>
        </button>
      </nav>

      {/* Menú desplegable */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {/* Navegación usando el mismo componente NavItem que en desktop */}
          <ul className="menu-items">
            {/* Usamos los mismos NavItems que en el DesktopNavBar */}
            <NavItem title="Home" to="/" icon={HomeIcon} />
            <NavItem title="Bandeja de entrada" to="/mydashboards" icon={InboxIcon}/>
            <NavItem title="Create Dashboard" to="/create-dashboard" icon={DashboardIcon}/>
            <NavItem title="Profile" to="/profile" />
            <NavItem title="About Us" to="/about-us" />
          </ul>
          
          {/* Footer del menú */}
          <div className="mobile-menu-footer">
            <p>© 2025 Tarea Flow</p>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}

export default MobileNavBar;