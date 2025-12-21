// ====================================================================
// SECCIÓN SERVICIOS
// - Mantiene tu estructura original de tarjetas
// - Añade textos reales de Caridad Fresneda
// ====================================================================

import "./Servicios.css";
import useReveal from "../../hooks/useReveal";

export default function Servicios() {
  useReveal();

  return (
    <section id="servicios" className="servicios reveal fade-in">

      <h2>Servicios</h2>

      <div className="servicios-grid">

        {/* TARJETAS REALES */}
        <div className="servicio-card">
          <h3>Terapia individual</h3>
          <p>
            Un espacio seguro para trabajar tus emociones, tus experiencias y tu bienestar personal.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Ansiedad</h3>
          <p>
            Si vives en un estado de alerta constante o el miedo te impide avanzar,
            te acompaño a recuperar la calma.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Depresión</h3>
          <p>
            Cuando la tristeza o la apatía te acompañan día a día,
            no tienes por qué transitarlo a solas.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Crisis vitales</h3>
          <p>
            Pérdidas, rupturas o cambios que desestabilizan pueden procesarse
            desde un acompañamiento cálido y humano.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Dificultades relacionales</h3>
          <p>
            Si repites patrones o te cuesta poner límites, trabajaremos tu autoestima
            y tus relaciones.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Terapia de pareja</h3>
          <p>
            Espacio para mejorar la comunicación, recuperar la intimidad
            y comprender vuestras necesidades.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Terapia online o presencial</h3>
          <p>
            Un entorno seguro en consulta o por videollamada si necesitas flexibilidad.
          </p>
        </div>

      </div>
    </section>
  );
}
