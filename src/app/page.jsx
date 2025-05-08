import React from 'react';
import Hero from '../components/home/Hero'; 
import ResumeSection from '../components/home/ResumeSection'; 

// Importación de estilos CSS
import '../components/home/css/main-home.css';
import '../components/home/css/hero.css';
import '../components/home/css/cards.css';
import '../components/home/css/resumesection.css';

/**
 * Componente Home para la página principal
 * Integra todos los componentes de la página de inicio
 */
const Home = () => {
  return (
    <div className="content">
      <Hero />
      <ResumeSection />
    </div>
  );
};

export default Home;