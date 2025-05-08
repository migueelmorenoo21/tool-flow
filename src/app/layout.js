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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/tareasflow.png" type="image/png" />

        {/* Metadatos básicos */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TareaFlow – Organiza tus tareas y proyectos</title>
        <meta
          name="description"
          content="TareaFlow es tu espacio para capturar, organizar y dar seguimiento a todas tus tareas y proyectos de manera sencilla y colaborativa."
        />
        <meta
          name="keywords"
          content="TareaFlow, gestión de tareas, productividad, kanban, planificador, colaboración"
        />
        <meta name="author" content="TareaFlow" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="TareaFlow – Organiza tus tareas y proyectos" />
        <meta
          property="og:description"
          content="Captura, organiza y divide tus tareas con TareaFlow. Tu productividad, de hoy en adelante, será imparable."
        />
        <meta property="og:url" content="https://tareaflow.com" />
        <meta property="og:site_name" content="TareaFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://tareaflow.com/heroimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vista previa de TareaFlow en acción" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TareaFlowApp" />
        <meta name="twitter:title" content="TareaFlow – Organiza tus tareas y proyectos" />
        <meta
          name="twitter:description"
          content="TareaFlow te ayuda a capturar, organizar y dar seguimiento a todas tus tareas de forma colaborativa."
        />
        <meta name="twitter:image" content="https://tareaflow.com/heroimage.png" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}