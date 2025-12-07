import "./Servicios.css";

export default function Servicios() {
  return (
    <section id="servicios" className="servicios reveal fade-in">
      <h2>Servicios</h2>

      <div className="servicios-grid">
        <div className="servicio-card delay-1">
          <h3>Terapia individual</h3>
          <p>
            Sesiones personalizadas para el manejo emocional, ansiedad y
            crecimiento personal.
          </p>
        </div>

        <div className="servicio-card delay-2">
          <h3>Terapia de pareja</h3>
          <p>
            Recupera la armonía y comunicación con tu pareja en un entorno
            profesional.
          </p>
        </div>

        <div className="servicio-card delay-3">
          <h3>Terapia online</h3>
          <p>
            Acompañamiento terapéutico desde cualquier lugar del mundo.
          </p>
        </div>
      </div>
    </section>
  );
}
