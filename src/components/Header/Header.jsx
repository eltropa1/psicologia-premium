import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../../helpers/scrollToSection";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Función OnePage universal
  const handleNav = (e, sectionId) => {
    e.preventDefault();

    closeMenu(); // cerrar menú móvil

    // Si estamos en HOME → scroll directo
    const isHome = location.pathname === "/";

    if (isHome) {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToSection(sectionId);
      }
      return;
    }

    // Si NO estamos en HOME → ir a Home con hash
    window.location.href = `/#${sectionId}`;
  };

  return (
    <header className="header">
      {/* Marca versión escritorio */}
      <h3 className="header-title">Psicología Premium</h3>

      {/* Menú escritorio */}
      <nav className="nav-desktop">
        <a href="/" onClick={(e) => handleNav(e, "top")}>
          Inicio
        </a>

        <a href="/#sobre-mi" onClick={(e) => handleNav(e, "sobre-mi")}>
          Sobre mí
        </a>

        <a href="/#servicios" onClick={(e) => handleNav(e, "servicios")}>
          Servicios
        </a>

        <a href="/#blog" onClick={(e) => handleNav(e, "blog")}>
          Blog
        </a>

        <Link to="/#contacto" onClick={(e) => handleNav(e, "contacto")}>
          Contacto
        </Link>
      </nav>

      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="nav-mobile">
          <a href="/#top" onClick={(e) => handleNav(e, "top")}>
            Inicio
          </a>

          <a href="/#sobre-mi" onClick={(e) => handleNav(e, "sobre-mi")}>
            Sobre mí
          </a>

          <a href="/#servicios" onClick={(e) => handleNav(e, "servicios")}>
            Servicios
          </a>

          <a href="/#testimonios" onClick={(e) => handleNav(e, "testimonios")}>
            Testimonios
          </a>

          <a href="/#blog" onClick={(e) => handleNav(e, "blog")}>
            Blog
          </a>

          <a href="/#contacto" onClick={(e) => handleNav(e, "contacto")}>
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
