// ======================================================================
// HERO ORIGINAL + FOTO EN ESCRITORIO
// - Móvil: Hero oculto (como antes)
// - Escritorio: Tarjeta + Foto profesional a la derecha
// ======================================================================

import "./Hero.css";
import fotoCaridad from "../../assets/img/caridad-temp.webp";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Contenedor completo del hero en escritorio */}
      <div className="hero-desktop">
        {/* TARJETA ORIGINAL */}
        <div className="hero-card">
          <h1>Caridad Fresneda</h1>
          <p className="hero-title2">Psicóloga Sanitaria</p>
          <p className="hero-quote">
            “Tu historia te ha traído hasta aquí. Hoy empezamos a escribir el
            siguiente capítulo. <a href="tel:655669001">¿Caminamos juntos?</a>”
          </p>
        </div>

        {/* FOTO ESCRITORIO */}
        <div className="hero-desktop-foto">
          <img src={fotoCaridad} alt="Caridad Fresneda Psicóloga" />
        </div>
      </div>
    </section>
  );
}
