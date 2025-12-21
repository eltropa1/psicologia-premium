// =============================================================
// FOOTER PROFESIONAL
// =============================================================

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src="/Logo-1.png"
        alt="Caridad Fresneda Pastrana Psicóloga"
        className="footer-logo"
      />

      <p>© {new Date().getFullYear()} Caridad Fresneda — Psicóloga Sanitaria</p>
      <p>Teléfono: 620 086 826 · Correo: caridadfresneda@cop.es</p>
    </footer>
  );
}
