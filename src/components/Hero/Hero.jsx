// ======================================================================
// HERO ORIGINAL + FOTO EN ESCRITORIO
// - Móvil: Hero oculto (como antes)
// - Escritorio: Tarjeta + Foto profesional a la derecha
// ======================================================================

import "./Hero.css";
import { scrollToSection } from "../../helpers/scrollToSection";
import fotoCaridad from "../../assets/img/caridad-temp.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Contenedor completo del hero en escritorio */}
      <div className="hero-desktop">

        {/* TARJETA ORIGINAL */}
        <div className="hero-card">
          <h1>Caridad Fresneda</h1>
          <p className="hero-title2">Psicóloga Sanitaria</p>

          <p>
            Te acompaño a construir bienestar emocional desde el respeto y la autenticidad.
          </p>

          <button
            className="btn-principal"
            onClick={() => scrollToSection("contacto")}
          >
            Contacta conmigo
          </button>
        </div>

        {/* FOTO ESCRITORIO */}
        <div className="hero-desktop-foto">
          <img src={fotoCaridad} alt="Caridad Fresneda Psicóloga" />
        </div>
      </div>

    </section>
  );
}
