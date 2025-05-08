import React from 'react';
import NavItem from './components/desktop/NavItem';
import { InboxIcon, HomeIcon, DashboardIcon } from '../common/NavIcons'; // Importa los íconos
import '../../assets/css/sidebardesktop.css'; // Importa el archivo de estilos

function DesktopNavBar({ toggleSidebar }) {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {/* Logo al principio */}
                <div className="sidebar-logo">
                    <img src="/favsinfondo.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <NavItem title="Home" href="/" icon={HomeIcon} onClick={toggleSidebar} />
                    <NavItem title="Bandeja de entrada" href="/mydashboards" icon={InboxIcon} onClick={toggleSidebar} />
                    <NavItem title="Create Dashboard" href="/create-dashboard" icon={DashboardIcon} onClick={toggleSidebar} />
                    <NavItem title="Profile" href="/profile" onClick={toggleSidebar} />
                    <NavItem title="About Us" href="/about-us" onClick={toggleSidebar} />
                </ul>
            </nav>
        </aside>
    );
}

export default DesktopNavBar;