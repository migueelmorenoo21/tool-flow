import React from 'react';
import NavItem from './components/desktop/NavItem';
import { InboxIcon, HomeIcon, DashboardIcon } from '../common/NavIcons'; // Importa los íconos

function DesktopNavBar({ toggleSidebar }) {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {/* Logo al principio */}
                <div className="sidebar-logo">
                    <img src="/favsinfondo.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <NavItem title="Home" to="/" icon={HomeIcon} onClick={toggleSidebar} />
                    <NavItem title="Bandeja de entrada" to="/mydashboards" icon={InboxIcon} onClick={toggleSidebar} />
                    <NavItem title="Create Dashboard" to="/create-dashboard" icon={DashboardIcon} onClick={toggleSidebar} />
                    <NavItem title="Profile" to="/profile" onClick={toggleSidebar} />
                    <NavItem title="About Us" to="/about-us" onClick={toggleSidebar} />
                </ul>
            </nav>
        </aside>
    );
}

export default DesktopNavBar;