import React from 'react'

function DesktopNavBar () {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/mydashboards">My Dashboards</a></li>
                    <li><a href="/create-dashboard">Create Dashboard</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default DesktopNavBar;