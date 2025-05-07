import React, { useState } from 'react';
import CardForResume from './CardForResume';
import HowToUse from './HowToUse';

/**
 * Datos de ejemplo para las tarjetas
 * En una aplicación real, estos datos podrían venir de una API o props
 */
const CARDS_DATA = [
  {
    id: 'card1',
    title: "Organiza tus tareas",
    description: "Crea y organiza tus tareas fácilmente.",
    color: "#1E90FF", // color principal
    howToUse: {
      tittle: "Cómo usar esta aplicación",
      usage: "1. Crea una cuenta. 2. Inicia sesión. 3. Crea y organiza tus tareas."
    }
  },
  {
    id: 'card2',
    title: "Colabora con tu equipo",
    description: "Trabaja junto a tu equipo en tiempo real.",
    color: "#32CD32", // color éxito
    howToUse: {
      tittle: "Cómo colaborar con tu equipo",
      usage: "1. Invita a tus compañeros. 2. Asigna tareas. 3. Trabaja en tiempo real."
    }
  },
  {
    id: 'card3',
    title: "Gestiona tus proyectos",
    description: "Mantén un seguimiento de tus proyectos y tareas.",
    color: "#FF6347", // color advertencia
    howToUse: {
      tittle: "Cómo gestionar tus proyectos",
      usage: "1. Crea un nuevo proyecto. 2. Añade tareas. 3. Asigna tareas a los miembros del equipo."
    }
  },
];

/**
 * Componente CardsSection que muestra tarjetas interactivas y su información relacionada
 * Implementa un slider simple y selección de tarjetas activas
 */
const CardsSection = () => {
  // Estado para controlar qué tarjeta está activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Manejador para cambiar la tarjeta activa
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="cards-section">
      {/* Columna izquierda: lista de tarjetas */}
      <aside className="cards-list" aria-label="Lista de características">
        {CARDS_DATA.map((card, index) => (
          <div
            key={card.id}
            className={`card-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex={0}
            aria-pressed={activeIndex === index}
            aria-label={`Seleccionar ${card.title}`}
          >
            <CardForResume
              title={card.title}
              description={card.description}
              color={card.color}
            />
          </div>
        ))}
      </aside>

      {/* Columna derecha: slider de HowToUse */}
      <aside 
        className="slider-aside" 
        aria-label={`Instrucciones para ${CARDS_DATA[activeIndex]?.title || 'la función seleccionada'}`}
      >
        <div
          className="slides"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {CARDS_DATA.map((card, index) => (
            <div 
              className="slide" 
              key={card.id}
              aria-hidden={activeIndex !== index}
            >
              <HowToUse
                tittle={card.howToUse.tittle}
                usage={card.howToUse.usage}
              />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default CardsSection;