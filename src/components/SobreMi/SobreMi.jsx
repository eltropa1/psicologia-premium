// ===================================================================
// SECCIÓN SOBRE MÍ (versión original + foto añadida a la derecha)
// ===================================================================

import "./SobreMi.css";
import useReveal from "../../hooks/useReveal";
import { useState, useEffect } from "react";
import fotoCaridad from "../../assets/img/caridad-temp.webp"; // ← añadimos la foto aquí

export default function SobreMi() {
  useReveal();
  const [openFormacion, setOpenFormacion] = useState(false);
  
  // Fuerza la activación del reveal cuando se abre el acordeón
useEffect(() => {
  if (openFormacion) {
    // Dispara manualmente el reveal al montarse el contenido
    window.dispatchEvent(new Event("scroll"));
  }
}, [openFormacion]);


  return (
    <section id="sobre-mi" className="sobre-mi reveal fade-in">
      {/* FOTO A LA DERECHA (solo escritorio) */}
      <div className="sobre-mi-foto reveal delay-2">
        <img
          src={fotoCaridad}
          alt="Caridad Fresneda"
          className="foto-psicologa"
        />
        
      </div>

      {/* TEXTO A LA IZQUIERDA */}
      <div className="sobre-mi-texto">
        <h2>Sobre mí</h2>

        <p>
          Hola, soy <strong>Caridad Fresneda</strong>. Un día estuve justo donde
          quizás te encuentras tú ahora, y esa experiencia me motivó a dedicarme
          a la psicología.
        </p>

        <p>
          Soy licenciada en Psicología por la Universidad Pontificia de
          Comillas. A lo largo de mi carrera he mantenido una formación continua
          para ofrecer el mejor acompañamiento.
        </p>

        <p>
          Mi enfoque es integrador y humanista, lo que me permite adaptar las
          técnicas y herramientas a tus necesidades específicas.
        </p>

        <p>
          Mi objetivo es acompañarte en tu proceso, ayudarte a encontrar tus
          propios recursos, conocerte mejor y aceptarte para que puedas vivir
          una vida más plena y feliz.
        </p>

        <blockquote className="sobre-mi-cita">
          “La curiosa paradoja es que cuando me acepto tal como soy, entonces
          puedo cambiar.”
          <span>— Carl Rogers</span>
        </blockquote>
        <p>
  <strong>
    <em>¿Empezamos a descubrir quién eres cuando te permites ser tú mismo?</em>
  </strong>
</p>


        {/* Acordeón de formación (se mantiene igual) */}
        <div className="formacion-container">
          <button
            className="formacion-toggle"
            onClick={() => setOpenFormacion(!openFormacion)}
          >
            Formación Académica y Especializaciones {openFormacion ? "▲" : "▼"}
          </button>
          


          {openFormacion && (
            <div className="formacion-timeline reveal delay-2">
              
              <div className="formacion-item">
                <span className="formacion-year">Actual</span>
                <p>
                  Psicóloga Sanitaria Habilitada · Consejería de Sanidad de
                  Madrid
                </p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2024</span>
                <p>
                  Experto en Psicoterapia Integradora: Trauma, Apego y EMDR ·
                  UDIMA – NB Psicólogos
                </p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2023</span>
                <p>
                  Experto en Terapias Contextuales y de Tercera Generación ·
                  AEFDP
                </p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2022</span>
                <p>
                  Trastornos del Apego a lo largo del ciclo vital · Aula
                  Psimática
                </p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2021</span>
                <p>Terapia de Pareja Integrativa · AEPSIS</p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2020</span>
                <p>Intervención Clínica en Adicciones · COP Madrid</p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2018</span>
                <p>Intervención Psicológica Domiciliaria · COP Madrid</p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2017</span>
                <p>Especialización en Duelo · COP Madrid</p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2012</span>
                <p>
                  Máster en Psicología de Práctica Clínica Cognitivo-Conductual
                  · AEPCC
                </p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2010</span>
                <p>Máster en Grafología · C.E.S. Sócrates</p>
              </div>

              <div className="formacion-item">
                <span className="formacion-year">2005–2010</span>
                <p>
                  Licenciada en Psicología · Universidad Pontificia de Comillas
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
