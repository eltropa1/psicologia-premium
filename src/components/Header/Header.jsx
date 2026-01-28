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
      <img
        src="/LogoCaridad.png"
        alt="Caridad Fresneda Pastrana Psicóloga"
        className="logo-header"
        onClick={() => scrollToSection("top")}
      />

      {/* NAV ESCRITORIO */}
      <nav className="nav-desktop">
        {isHome ? (
          <>
            <a onClick={() => handleNav("sobre-mi")}>Sobre mí</a>
            <a onClick={() => handleNav("servicios")}>Servicios</a>
            <a onClick={() => handleNav("como-trabajo")}>Cómo trabajo</a>
            <a onClick={() => handleNav("tarifas")}>Tarifas</a>
            <a onClick={() => handleNav("blog")}>Blog</a>
            <a onClick={() => handleNav("contacto")}>Contacto</a>
          </>
        ) : (
          <Link to="/">Inicio</Link>
        )}
      </nav>

      {/* HAMBURGUESA */}
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        ☰
      </div>

      {/* NAV MÓVIL */}
      {mobileMenu && (
        <nav className="nav-mobile">
          {/* 🔹 Inicio SIEMPRE visible en menú móvil */}
          <Link
            to="/"
            onClick={() => {
              window.location.hash = ""; // limpia cualquier ancla previa
              setMobileMenu(false);
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 50); // pequeño delay para asegurar que React cargó el home
            }}
          >
            Inicio
          </Link>

          {isHome ? (
            <>
              <a onClick={() => {handleNav("sobre-mi"); setMobileMenu(false);
                }}
              > Sobre mí
              </a>

              <a onClick={() => {handleNav("servicios");
                  setMobileMenu(false);
                }}
              >
                Servicios
              </a>
                <a onClick={() => { handleNav("como-trabajo"); setMobileMenu(false); }}>
  Cómo trabajo
</a>



              <a
                onClick={() => {
                  handleNav("tarifas");
                  setMobileMenu(false);
                }}
              >
                
                Tarifas
              </a>

              <a
                onClick={() => {
                  handleNav("blog");
                  setMobileMenu(false);
                }}
              >
                Blog
              </a>
              <a
                onClick={() => {
                  handleNav("contacto");
                  setMobileMenu(false);
                }}
              >
                Contacto
              </a>
            </>
          ) : null}
        </nav>
      )}
    </header>
  );
}
