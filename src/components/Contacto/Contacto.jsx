import "./Contacto.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section reveal fade-in">
      <h2>Contacto</h2>

      <form className="contacto-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea rows="5" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
