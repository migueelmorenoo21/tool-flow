import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente HowToUse para mostrar instrucciones de uso
 * @param {string} tittle - Título de las instrucciones (nota: hay un error de ortografía, debería ser "title")
 * @param {string} usage - Texto de instrucciones de uso
 */
const HowToUse = ({ tittle, usage }) => {
  return (
    <div className="how-to-use-card">
      <h4>{tittle}</h4>
      <p>{usage}</p>
    </div>
  );
};

HowToUse.propTypes = {
  tittle: PropTypes.string.isRequired, // Mantener el nombre original aunque tenga error
  usage: PropTypes.string.isRequired
};

export default HowToUse;