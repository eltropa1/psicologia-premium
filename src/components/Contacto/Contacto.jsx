// =============================================================================
// SECCIÓN CONTACTO
// - Mantiene tu lógica EXACTA
// - Solo ajustamos el texto para mayor coherencia profesional
// =============================================================================

import { useState, useEffect } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        setForm({ name: "", email: "", phone: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "ok") {
      const timeout = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <section id="contacto" className="contacto-section reveal fade-in">

      <h2>Contacto</h2>

      <p className="contacto-intro">
        Estaré encantada de escucharte y acompañarte en tu proceso.
      </p>

      <form className="contacto-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          autoCapitalize="words"
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
          placeholder="Escribe tu mensaje aquí"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Honeypot oculto para anti-spam */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <button type="submit">Enviar</button>

        {/* MENSAJES DE ESTADO */}
        {status === "ok" && (
          <div className="contacto-alert contacto-alert-success">
            <span className="icon">✔</span>
            <p>Mensaje enviado correctamente. Gracias por contactar conmigo.</p>
          </div>
        )}

        {status === "error" && (
          <div className="contacto-alert contacto-alert-error">
            <span className="icon">✖</span>
            <p>Hubo un error al enviar el mensaje. Inténtalo más tarde.</p>
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
