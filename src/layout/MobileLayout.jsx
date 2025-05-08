import React from 'react';
import MobileNavBar from '../components/sidebar/MobileNavBar';

const MobileLayout = ({ children }) => { // Recibe `children` como prop en lugar de usar `Outlet`
  return (
    <div className="app-container mobile">
      <MobileNavBar />
      <main className="content">
        {children} {/* Renderiza los hijos pasados desde Next.js */}
      </main>
    </div>
  );
};

export default MobileLayout;