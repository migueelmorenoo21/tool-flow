import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ title, to, icon: Icon }) => { // Desestructuramos la prop `icon` y la renombramos como `Icon`
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {Icon && <Icon className="nav-icon" />} {/* Renderiza el ícono si existe */}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default NavItem;