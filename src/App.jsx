import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DesktopLayout from './layout/DesktopLayout'
import MobileLayout  from './layout/MobileLayout'

import Home from './pages/Home'
import MyDashboards from './pages/MyDashboards'
import CreateDashboard from './pages/CreateDashboard'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'

function App() {
  // 1. Estado que indica si estamos en móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // 2. Efecto para añadir/limpiar listener de resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // ← solo al montar y desmontar

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route con layout dinámico */}
        <Route
          path="/"
          element={isMobile ? <MobileLayout /> : <DesktopLayout />}
        >
          {/* Rutas hijas: se inyectan en el <Outlet /> del layout */}
          <Route index                  element={<Home />}            />
          <Route path="mydashboards"    element={<MyDashboards />}    />
          <Route path="create-dashboard" element={<CreateDashboard />} />
          <Route path="profile"         element={<Profile />}         />
          <Route path="about-us"        element={<AboutUs />}        />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
