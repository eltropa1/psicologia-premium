import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Nombre de la marca (solo escritorio) */}
      <h3 className="header-title">Psicología Premium</h3>

      {/* Menú escritorio */}
      <nav className="nav-desktop">
        <Link to="/">Inicio</Link>
        <Link to="/#sobre-mi">Sobre mí</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Botón hamburguesa (solo móvil) */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="nav-mobile">
          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#testimonios" onClick={closeMenu}>
            Testimonios
          </a>
          <Link to="/blog" onClick={closeMenu}></Link>
         
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
