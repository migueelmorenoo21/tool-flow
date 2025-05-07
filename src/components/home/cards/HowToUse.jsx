import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente HowToUse para mostrar instrucciones de uso
 * @param {string} tittle - Título de las instrucciones (mantiene el nombre original)
 * @param {string} usage - Texto de instrucciones de uso
 */
const HowToUse = ({ tittle, usage }) => {
  return (
    <div className="how-to-use-card">
      <h4>{tittle}</h4>
      <p>{usage}</p>
      {/* Se podría agregar aquí un placeholder para indicar donde iría la imagen */}
      <div className="placeholder-image">
        <p>Visualización de la interfaz</p>
      </div>
    </div>
  );
};

HowToUse.propTypes = {
  tittle: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired
};

export default HowToUse;