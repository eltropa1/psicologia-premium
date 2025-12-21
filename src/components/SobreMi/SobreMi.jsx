// ===================================================================
// SECCIÓN SOBRE MÍ
// - Usa exactamente tus clases actuales (sobre-mi, sobre-mi-texto…)
// - Integra contenido real de Caridad Fresneda
// - Añade acordeón para Formación Académica sin romper el diseño
// ===================================================================

import "./SobreMi.css";
import useReveal from "../../hooks/useReveal";
import { useState } from "react";

export default function SobreMi() {
  useReveal(); // activa reveal para animación de entrada

  const [openFormacion, setOpenFormacion] = useState(false);

  return (
    <section id="sobre-mi" className="sobre-mi reveal fade-in">

      <h2>Sobre mí</h2>

      <div className="sobre-mi-texto">

        {/* Párrafos reales */}
        <p>
          Hola, soy <strong>Caridad Fresneda</strong>. Un día estuve justo donde quizás te encuentras tú ahora,
          y esa experiencia me motivó a dedicarme a la psicología.
        </p>

        <p>
          Soy licenciada en Psicología por la Universidad Pontificia de Comillas. 
          A lo largo de mi carrera he mantenido una formación continua para ofrecer el mejor acompañamiento. 
          Mi enfoque es integrador y humanista, lo que me permite adaptar las técnicas y herramientas a tus
          necesidades específicas.
        </p>

        <p>
          Mi objetivo es acompañarte en tu proceso, ayudarte a encontrar tus propios recursos, conocerte mejor
          y aceptarte para que puedas vivir una vida más plena y feliz.
        </p>

        <p>
          Te ofrezco un espacio de respeto absoluto, aceptación incondicional, libre de juicios, con amabilidad, 
          cercanía y comprensión… siempre a tu propio ritmo.
        </p>

        {/* Cita elegante */}
        <blockquote className="sobre-mi-cita">
          “La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar.”
          <span>— Carl Rogers</span>
        </blockquote>

        {/* ==============================
            ACORDEÓN FORMACIÓN ACADÉMICA
            ============================== */}
        <div className="formacion-container">
          <button
            className="formacion-toggle"
            onClick={() => setOpenFormacion(!openFormacion)}
          >
            Formación Académica y Especializaciones {openFormacion ? "▲" : "▼"}
          </button>

          {openFormacion && (
            <div className="formacion-lista">
              <ul>
                <li>Psicóloga Sanitaria Habilitada por la Consejería de Sanidad de Madrid.</li>
                <li>Experto en Psicoterapia Integradora: Trauma, Apego y EMDR (2024).</li>
                <li>Experto en Terapias Contextuales y de Tercera Generación (2023).</li>
                <li>Trastornos del Apego a lo largo del ciclo vital (2022).</li>
                <li>Terapia de Pareja Integrativa (2021).</li>
                <li>Experto en Intervención Clínica en Adicciones (2020).</li>
                <li>Intervención Psicológica Domiciliaria (2018).</li>
                <li>Especialización en Duelo (2017).</li>
                <li>Máster en Psicología Clínica Cognitivo-Conductual (2012).</li>
                <li>Licenciada en Psicología, Universidad Pontificia de Comillas (2005–2010).</li>
                <li>Máster en Grafología (2010).</li>
              </ul>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
