import "./SobreMi.css";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">

      <div className="sobre-mi-img-container">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
          alt="Psicóloga"
          className="foto-psicologa"
        />
      </div>

      <div className="sobre-mi-texto">
        <h2>Sobre mí</h2>
        <p>
          Soy una profesional dedicada al bienestar emocional, con una visión centrada
          en la empatía, la escucha activa y el crecimiento personal. Mi consulta ofrece
          un espacio seguro donde explorar tus emociones y construir nuevas herramientas.
        </p>
      </div>

    </section>
  );
}
