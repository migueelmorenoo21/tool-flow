import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Button reutilizable
 * @param {string} text - Texto del botón
 * @param {string} className - Clases CSS adicionales
 * @param {string} type - Tipo de botón (button, submit, reset)
 * @param {function} onClick - Función a ejecutar al hacer clic
 */
const Button = ({ text, className = '', type = 'button', onClick }) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

export default Button;