import React from 'react';
import NavItem from './components/desktop/NavItem';

function DesktopNavBar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {/* Logo al principio */}
                <div className="sidebar-logo">
                    <img src="/logo.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <NavItem title="Home" to="/" />
                    <NavItem title="My Dashboards" to="/mydashboards" />
                    <NavItem title="Create Dashboard" to="/create-dashboard" />
                    <NavItem title="Profile" to="/profile" />
                    <NavItem title="About Us" to="/about-us" />
                </ul>
            </nav>
        </aside>
    );
}

export default DesktopNavBar;