import { useState, useEffect } from "react";
import "./Contacto.css";

export default function Contacto() {
  // Estados para manejar datos y mensajes del usuario
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // invisible anti-bots
  });

  const [status, setStatus] = useState(null); // éxito o error

  // Actualizar cada campo
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar formulario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("ok");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Ocultamos el mensaje de éxito después de 4 segundos
  useEffect(() => {
    if (status === "ok") {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contacto" className="contacto-section reveal fade-in">
      <h2>Contacto</h2>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono (opcional)"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Honeypot invisible (anti-bots) */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <button type="submit">Enviar</button>

        {/* Mensaje de estado */}
        {/* Mensaje de estado elegante */}
        {status === "ok" && (
          <div className="contacto-alert contacto-alert-success">
            <span className="icon">✔</span>
            <p>Mensaje enviado correctamente. Gracias por escribir.</p>
          </div>
        )}

        {status === "error" && (
          <div className="contacto-alert contacto-alert-error">
            <span className="icon">✖</span>
            <p>
              Hubo un error al enviar tu mensaje. Por favor, inténtalo más
              tarde.
            </p>
          </div>
        )}

        {status === "enviando" && (
          <div className="contacto-alert contacto-alert-sending">
            <span className="icon">⏳</span>
            <p>Enviando…</p>
          </div>
        )}
      </form>
    </section>
  );
}
