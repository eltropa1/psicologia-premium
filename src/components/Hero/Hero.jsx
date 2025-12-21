// ===============================================================
// HERO PRINCIPAL
// - Mantiene todas tus clases y estructura original
// - Solo cambia el contenido textual
// - Usa scroll suave hacia "contacto"
// ===============================================================

import "./Hero.css";
import { scrollToSection } from "../../helpers/scrollToSection";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-card">
        
        {/* Nombre profesional actualizado */}
        <h1>Caridad Fresneda</h1>

        {/* Título profesional debajo del nombre */}
        <p className="hero-title2">Psicóloga Sanitaria</p>

        {/* Frase principal (tono humano + profesional) */}
        <p>
          Te acompaño a construir bienestar emocional desde el respeto y la autenticidad.
        </p>

        {/* Botón con scroll suave hacia el formulario de contacto */}
        <button
          className="btn-principal"
          onClick={() => scrollToSection("contacto")}
        >
          Contacta conmigo
        </button>

      </div>
    </section>
  );
}
