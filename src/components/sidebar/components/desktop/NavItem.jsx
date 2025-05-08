import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js

const NavItem = ({ title, href, icon: Icon, onClick }) => { // Cambiamos `to` por `href` para Next.js
  return (
    <li className="nav-item">
      <Link href={href} className="nav-link" onClick={onClick}>
        {Icon && <Icon className="nav-icon" />} {/* Renderiza el ícono si existe */}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default NavItem;