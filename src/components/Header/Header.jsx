import { useState } from "react";
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
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#blog">Blog</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* Botón hamburguesa (solo móvil) */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="nav-mobile">
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#testimonios" onClick={closeMenu}>Testimonios</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
      )}
    </header>
  );
}
