import React from 'react';
import CardsSection from './cards/CardsSection';

/**
 * Componente ResumeSection para mostrar una sección inspirada en Trello
 * con título, subtítulo, descripción y componente CardsSection
 */
const ResumeSection = () => {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h2 className="resume-title">DESCUBRE SOBRE TAREA FLOW</h2>
        <h3 className="resume-subtitle">Tu centro neurálgico de productividad</h3>
        <p className="resume-description">
        En TareaFlow, tu productividad despega con nuestra Bandeja Inteligente, Tableros Kanban personalizables y Planificador Integrado. Cada tarea, idea o recordatorio —por pequeña que sea— encuentra su espacio perfecto, manteniéndote enfocado, organizado y rindiendo siempre al máximo.
        </p>
      </div>
      <div className="cards-container">
        <CardsSection />
      </div>
    </section>
  );
};

export default ResumeSection;