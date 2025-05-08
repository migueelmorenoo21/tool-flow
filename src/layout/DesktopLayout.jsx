import React, { useState } from 'react';
import DesktopNavBar from '../components/sidebar/DesktopNavBar';
import Footer from '../components/footer/Footer';
import './closesidebar.css'; // Asegúrate de tener un archivo CSS para los estilos del layout

function DesktopLayout({ children }) { // Recibe `children` como prop en lugar de usar `Outlet`
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {isSidebarOpen && <DesktopNavBar toggleSidebar={toggleSidebar} />}
      <button
        className={`sidebar-toggle ${isSidebarOpen ? 'open' : 'closed'}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? '←' : '→'}
      </button>
      <main className={`content ${isSidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
        {children} {/* Renderiza los hijos pasados desde Next.js */}
      </main>
      <Footer />
    </div>
  );
}

export default DesktopLayout;