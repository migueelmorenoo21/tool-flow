import { Outlet } from 'react-router-dom'
import React from 'react';
import DesktopNavBar from '../components/sidebar/DesktopNavBar'

function DesktopLayout() {
  return (
    <div className="app-container">
      <DesktopNavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default DesktopLayout;