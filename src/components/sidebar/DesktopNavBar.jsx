import React from 'react'
import { Link } from 'react-router-dom'

function DesktopNavBar () {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mydashboards">My Dashboards</Link></li>
                    <li><Link to="/create-dashboard">Create Dashboard</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </nav>
        </aside>
    )
}
export default DesktopNavBar;