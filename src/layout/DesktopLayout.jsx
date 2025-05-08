import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import DesktopNavBar from '../components/sidebar/DesktopNavBar';
import Footer from '../components/footer/Footer';
import './closesidebar.css'; // Asegúrate de tener un archivo CSS para los estilos del layout

function DesktopLayout() {
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
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DesktopLayout;