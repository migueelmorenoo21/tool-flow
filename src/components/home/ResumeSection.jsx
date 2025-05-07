import React from 'react';
import CardsSection from './cards/CardsSection';

/**
 * Componente ResumeSection para mostrar una sección de resumen
 * con título y componente CardsSection
 */
const ResumeSection = () => {
  return (
    <section className="resume-section">
      <h2>Tu centro neurálgico de confianza.</h2>
      <div className="cards-container">
        <CardsSection />
      </div>
    </section>
  );
};

export default ResumeSection;