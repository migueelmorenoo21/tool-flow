import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente CardForResume para mostrar tarjetas con información resumida
 * @param {string} title - Título de la tarjeta
 * @param {string} description - Descripción o contenido de la tarjeta
 * @param {string} color - Color de la barra lateral (código hexadecimal)
 */
const CardForResume = ({ title, description, color }) => {
  return (
    <div className="card-for-resume">
      {/* Barra de color lateral */}
      <div 
        className="color-bar" 
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      
      {/* Contenido de la tarjeta */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

CardForResume.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string
};

CardForResume.defaultProps = {
  color: 'var(--color-primary)' // Color por defecto de la barra lateral
};

export default CardForResume;