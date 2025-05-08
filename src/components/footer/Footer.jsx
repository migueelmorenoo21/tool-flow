import React from 'react';
import './css/footer.css'; // Asegúrate de tener un archivo CSS para los estilos del footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Sobre Nosotros */}
        <div className="footer-column">
          <h3>Nombre 1</h3>
          <p>Breve descripción sobre tu aplicación o empresa. Puedes expandir este texto según sea necesario para proporcionar información relevante.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-column">
          <h3>Nombre 2</h3>
          <ul className="footer-links">
            <li>
              <a href="#">
                Inicio
              </a>
            </li>
            <li>
              <a href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                Perfil
              </a>
            </li>
            <li>
              <a href="#">
                Configuración
              </a>
            </li>
            <li>
              <a href="#">
                Ayuda
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div className="footer-column">
          <h3>Nombre 3</h3>
          <ul className="footer-links">
            <li>
              <a href="#">
                Servicio 1
              </a>
            </li>
            <li>
              <a href="#">
                Servicio 2
              </a>
            </li>
            <li>
              <a href="#">
                Servicio 3
              </a>
            </li>
            <li>
              <a href="#">
                Servicio 4
              </a>
            </li>
            <li>
              <a href="#">
                Servicio 5
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-column">
          <h3>Nombre 4</h3>
          <div className="contact-info">
            <p>
              Dirección, Ciudad, País
            </p>
            <p>
              email@ejemplo.com
            </p>
            <p>
              +123 456 7890
            </p>
          </div>
          <div className="subscription-form">
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nombre de tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;