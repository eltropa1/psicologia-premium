// ===================================================================
// SECCIÓN SOBRE MÍ (versión original + foto añadida a la derecha)
// ===================================================================

import "./SobreMi.css";
import useReveal from "../../hooks/useReveal";
import { useState } from "react";
import fotoCaridad from "../../assets/img/caridad-temp.webp"; // ← añadimos la foto aquí

export default function SobreMi() {
  useReveal();
  const [openFormacion, setOpenFormacion] = useState(false);

  return (
    <section id="sobre-mi" className="sobre-mi reveal fade-in">

      {/* FOTO A LA DERECHA (solo escritorio) */}
      <img
        src={fotoCaridad}
        alt="Caridad Fresneda"
        className="foto-psicologa"
      />

      {/* TEXTO A LA IZQUIERDA */}
      <div className="sobre-mi-texto">

        <h2>Sobre mí</h2>

        <p>
          Hola, soy <strong>Caridad Fresneda</strong>. Un día estuve justo donde quizás te encuentras tú ahora,
          y esa experiencia me motivó a dedicarme a la psicología.
        </p>

        <p>
          Soy licenciada en Psicología por la Universidad Pontificia de Comillas.
          A lo largo de mi carrera he mantenido una formación continua para ofrecer el mejor acompañamiento.
        </p>

        <p>
          Mi enfoque es integrador y humanista, lo que me permite adaptar las técnicas y herramientas a tus
          necesidades específicas.
        </p>

        <p>
          Mi objetivo es acompañarte en tu proceso, ayudarte a encontrar tus propios recursos, conocerte mejor
          y aceptarte para que puedas vivir una vida más plena y feliz.
        </p>

        <blockquote className="sobre-mi-cita">
          “La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar.”
          <span>— Carl Rogers</span>
        </blockquote>

        {/* Acordeón de formación (se mantiene igual) */}
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
                <li>Psicóloga Sanitaria Habilitada por la Consejería de Madrid.</li>
                <li>Experto en Psicoterapia Integradora EMDR (2024).</li>
                <li>Experto en Terapias Contextuales (2023).</li>
                <li>Trastornos del Apego (2022).</li>
                <li>Terapia de Pareja Integrativa (2021).</li>
                <li>Intervención Clínica en Adicciones (2020).</li>
                <li>Intervención Psicológica Domiciliaria (2018).</li>
                <li>Especialización en Duelo (2017).</li>
                <li>Máster en Psicología Clínica (2012).</li>
                <li>Licenciada en Psicología (2005–2010).</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
