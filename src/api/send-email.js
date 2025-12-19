// /api/send-email.js
// ================================================
// FUNCIÓN SERVERLESS PARA ENVIAR EMAILS DESDE VERCEL
// UTILIZA NODEMAILER Y UNA APP PASSWORD DE GMAIL
// ================================================

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Aceptamos solo POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, phone, message, honeypot } = req.body;

  // Anti-spam honeypot: si el campo oculto tiene algo → es un bot
  if (honeypot) {
    return res.status(200).json({ message: "OK (honeypot capturado)" });
  }

  // Transporter Nodemailer usando Gmail + App Password
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Contenido del correo que llegará a ti (o tu clienta)
  const mailOptions = {
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

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ message: "Error enviando correo" });
  }
}
