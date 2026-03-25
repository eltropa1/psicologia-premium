// =====================================================================
// HEADER PRINCIPAL
// - Mantiene tu lógica compleja de navegación
// - NO se toca CSS ni estructura
// - Solo se actualiza el nombre visible
// =====================================================================

import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../../helpers/scrollToSection";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleNav = (id) => {
    if (isHome) {
      scrollToSection(id);
    }
  };

  return (
    <header className="header">
      {/* Añadir logo  */}
      <Link to="/">
  <img
    src="/LogoCaridad.png"
    alt="Caridad Fresneda Pastrana Psicóloga"
    className="logo-header"
    loading="eager"
    decoding="async"
  />
</Link>

      {/* NAV ESCRITORIO */}
      <nav className="nav-desktop">
        <>
          <Link to="/">Inicio</Link>
          <Link to="/sobre-mi">Sobre mí</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/tarifas">Tarifas</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/blog">Blog</Link>
        </>
      </nav>

      {/* HAMBURGUESA */}
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        ☰
      </div>

      {/* NAV MÓVIL */}
      {mobileMenu && (
        <nav className="nav-mobile">
          {/* 🔹 Inicio SIEMPRE visible en menú móvil */}
          

         <>
  <Link to="/" onClick={() => setMobileMenu(false)}>Inicio</Link>
  <Link to="/sobre-mi" onClick={() => setMobileMenu(false)}>Sobre mí</Link>
  <Link to="/servicios" onClick={() => setMobileMenu(false)}>Servicios</Link>
  <Link to="/tarifas" onClick={() => setMobileMenu(false)}>Tarifas</Link>
  <Link to="/contacto" onClick={() => setMobileMenu(false)}>Contacto</Link>
  <Link to="/blog" onClick={() => setMobileMenu(false)}>Blog</Link>
</>
        </nav>
      )}
    </header>
  );
}
