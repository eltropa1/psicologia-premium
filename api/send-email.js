// /api/send-email.js
// =============================================================
// FUNCIÓN SERVERLESS PARA ENVIAR DOS EMAILS:
// 1) CORREO A LA PSICÓLOGA (MAIL_TO)
// 2) CORREO AUTOMÁTICO DE RESPUESTA AL USUARIO (AUTO-REPLY)
// =============================================================

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, phone, message, honeypot } = req.body;

  // Honeypot anti-bots
  if (honeypot) {
    return res.status(200).json({ message: "OK (honeypot capturado)" });
  }

  // Configuración Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // ================================================
  // CORREO A LA PSICÓLOGA
  // ================================================
  const mailToPsychologist = {
    from: `Formulario Web <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <h2>Nuevo mensaje desde la web</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  // ================================================
  // AUTO-REPLY AL USUARIO
  // ================================================
  const autoReply = {
    from: `Caridad Fresneda · Psicóloga Sanitaria <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Gracias por tu mensaje ✨",
    html: `
      <h2>Gracias por contactar conmigo, <span style="white-space:pre-line;">${name}</span>.</h2>

      <p>He recibido tu mensaje correctamente y te responderé lo antes posible.</p>
      <p style="margin-top:10px">💬 <strong>Tu mensaje:</strong></p>
      <blockquote style="background:#f7f0ea;padding:10px;border-left:4px solid #c49aa8;">
        ${message}
      </blockquote>
      <p style="margin-top:20px;">Un saludo,<br><strong>Caridad Fresneda</strong><br>Psicóloga Colegiada</p>
    `,
  };

  try {
    // 1) Enviar correo a la psicóloga
    await transporter.sendMail(mailToPsychologist);

    // 2) Enviar auto-reply al usuario
    await transporter.sendMail(autoReply);

    return res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ message: "Error enviando correo" });
  }
}
