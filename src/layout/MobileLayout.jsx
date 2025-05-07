import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavBar from '../components/sidebar/MobileNavBar'

const MobileLayout = () => {
  return (
    <div className="app-container mobile">
      <MobileNavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default MobileLayout