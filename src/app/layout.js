"use client";
import '../assets/css/global.css';
import '../assets/css/mobilenavbar.css';
import '../layout/closesidebar.css';
import { useEffect, useState } from 'react';
import MobileLayout from '../layout/MobileLayout';
import DesktopLayout from '../layout/DesktopLayout';

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}