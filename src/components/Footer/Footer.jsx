// =============================================================
// FOOTER PROFESIONAL
// =============================================================

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Caridad Fresneda — Psicóloga Sanitaria
      </p>
      <p>Teléfono: 655 669 001 · Correo: ggeotec@gmail.com</p>
    </footer>
  );
}
