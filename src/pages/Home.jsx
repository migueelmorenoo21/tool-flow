import React from 'react';
import Hero from '../components/home/Hero';
import ResumeSection from '../components/home/ResumeSection';

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