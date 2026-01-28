// ====================================================================
// SECCIÓN SERVICIOS
// - Mantiene estructura original
// - Textos literales de Caridad Fresneda (sin cambios)
// ====================================================================

import "./Servicios.css";
import useReveal from "../../hooks/useReveal";

export default function Servicios() {
  useReveal();

  return (
    <section id="servicios" className="servicios reveal fade-in">

      <h2>Servicios</h2>

      <p>
        "Si te identificas con alguna de estas situaciones, reserva una cita aquí y hablemos".
      </p>

      <h3>Terapia individual: Adolescentes y adultos</h3>

      <div className="servicios-grid">

        

        <div className="servicio-card">
          <h3>Ansiedad</h3>
          <p>
            Si vives en un estado de alerta constante, te exiges una perfección inalcanzable
            o el miedo te impide avanzar, es momento de volver a la calma.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Depresión:</h3>
          <p>
            Si la apatía y la tristeza se han vuelto tus compañeras diarias, o si sientes
            que tras una crisis no logras recuperar la ilusión ni el valor propio, no tienes
            por qué transitarlo a solas.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Crisis:</h3>
          <p>
            Ya sea por una pérdida, un divorcio o un cambio de vida al que no logras adaptarte,
            te ayudo a procesar ese malestar que a veces no tiene nombre.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Dificultades relacionales</h3>
          <p>
            Si repites patrones destructivos, te cuesta poner límites o sientes que tu voz
            se pierde frente a los demás, podemos trabajar en fortalecer tu autoestima y
            tus vínculos.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Terapia de pareja</h3>
          <p>
            Cuando la comunicación se quiebra, la intimidad desaparece o una crisis (como
            una infidelidad) parece insuperable, existe un espacio para el reencuentro y
            el entendimiento.
          </p>
        </div>

        <div className="servicio-card">
          <h3>Terapia online o presencial</h3>
          <p>
            "Mi consulta está diseñada para ser un refugio de calma; un espacio acogedor y
            confortable donde podrás sentirte en confianza y con total seguridad. Si por
            cualquier motivo te resulta difícil desplazarte, no te preocupes: podemos
            realizar nuestras sesiones a través de videollamada (Google Meet), manteniendo
            la misma cercanía y profesionalidad desde la comodidad de tu hogar."
          </p>
        </div>

      </div>
    </section>
  );
}
