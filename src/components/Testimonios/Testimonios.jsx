import "./Testimonios.css";

export default function Testimonios() {
  return (
    <section id="testimonios" className="testimonios-section reveal fade-in">
      <h2>Testimonios</h2>

      <div className="testimonios-grid">
        <div className="testimonio-card delay-1">
          “Gracias a su apoyo, aprendí a gestionar mi ansiedad y recuperar mi vida.”
        </div>

        <div className="testimonio-card delay-2">
          “Una profesional cálida, cercana y profundamente comprometida.”
        </div>

        <div className="testimonio-card delay-3">
          “Me ayudó a encontrar claridad en un momento muy difícil.”
        </div>
      </div>
    </section>
  );
}
