import React, { useState } from 'react';
import CardForResume from './CardForResume';
import HowToUse from './HowToUse';

/**
 * Datos de ejemplo para las tarjetas, adaptados al estilo Trello
 * Manteniendo la estructura pero adaptando el contenido
 */
const CARDS_DATA = [
  {
    id: 'bandeja',
    title: "Bandeja de entrada",
    description: "Si lo tienes en mente, entonces colócalo en la bandeja de entrada. Registra tus tareas pendientes en cualquier lugar y momento.",
    color: "#00C2E0", // color turquesa Trello
    howToUse: {
      tittle: "Cómo usar la bandeja de entrada",
      usage: "Coloca todas tus ideas y tareas pendientes aquí para no olvidarlas. Luego organízalas en tus tableros."
    }
  },
  {
    id: 'tableros',
    title: "Tableros",
    description: "Tu lista de tareas pendientes puede ser larga, ¡pero manejable! Mantente al tanto de todo, desde las 'tareas por hacer' hasta los 'objetivo cumplido'.",
    color: "#FF9F1A", // color naranja Trello
    howToUse: {
      tittle: "Cómo usar los tableros",
      usage: "Organiza tus tareas en tableros temáticos. Mueve las tarjetas desde 'Por hacer' hasta 'Terminado' para seguir tu progreso."
    }
  },
  {
    id: 'planificador',
    title: "Planificador",
    description: "Arrastra, suelta y termina. Mete las tareas más importantes en el calendario y dedica tiempo a lo que de verdad importa.",
    color: "#0079BF", // color azul Trello
    howToUse: {
      tittle: "Cómo usar el planificador",
      usage: "Añade fechas a tus tareas y visualízalas en el calendario. Prioriza lo importante y mantén el enfoque en lo que realmente importa."
    }
  },
];

/**
 * Componente CardsSection que muestra tarjetas interactivas y su información
 * Rediseñado para imitar el estilo visual de Trello
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

      {/* Columna derecha: zona de visualización */}
      <aside 
        className="slider-aside" 
        aria-label={`Visualización de ${CARDS_DATA[activeIndex]?.title || 'la función seleccionada'}`}
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