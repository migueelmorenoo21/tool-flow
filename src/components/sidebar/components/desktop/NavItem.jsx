import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ title, to }) => { // Desestructuramos las props correctamente
  return (
    <li>
      <Link to={to} className="nav-item">{title}</Link>
    </li>
  );
};

export default NavItem;