import React from 'react';
import NavItem from './components/desktop/NavItem';
import { InboxIcon, HomeIcon, DashboardIcon } from '../common/NavIcons'; // Importa los íconos

function DesktopNavBar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {/* Logo al principio */}
                <div className="sidebar-logo">
                    <img src="/favsinfondo.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <NavItem title="Home" to="/" icon={HomeIcon} />
                    <NavItem title="Bandeja de entrada" to="/mydashboards" icon={InboxIcon} />
                    <NavItem title="Create Dashboard" to="/create-dashboard" icon={DashboardIcon} />
                    <NavItem title="Profile" to="/profile" />
                    <NavItem title="About Us" to="/about-us" />
                </ul>
            </nav>
        </aside>
    );
}

export default DesktopNavBar;