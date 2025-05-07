import React from 'react';
import Button from '../common/Button';

/**
 * Componente Hero para la sección principal de la página de inicio
 * Muestra un título, subtítulo, formulario de registro y términos y condiciones
 */
const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-tittle">
        Captura, organiza y divide tus tareas. Cumplir con tus objetivos nunca fue tan sencillo
      </h1>
      
      <h4 className="subtitle-hero">
        Descansa del desorden, usa Tareas Flow para organizar tu vida
      </h4>
      
      <div className="hero-cta">
        <input 
          type="email" 
          placeholder="Escribe tu correo" 
          className="input" 
          aria-label="Email para registro"
        />
        <Button 
          text="Comenzar, es gratis!" 
          className="cta-hero" 
          type="submit" 
        />
      </div>
      
      <div className="hero-terms">
        <input type="checkbox" id="terms" aria-label="Aceptar términos" /> 
        <label htmlFor="terms" className="terms">
          Acepto los términos y condiciones
        </label>
      </div>
    </div>
  );
};

export default Hero;