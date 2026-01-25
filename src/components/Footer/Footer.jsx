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

      <div className="footer-legal">
  <a href="/aviso-legal">Aviso Legal</a>
  <a href="/politica-privacidad">Política de Privacidad</a>
  <a href="/politica-cookies">Política de Cookies</a>
</div>


      <p>© {new Date().getFullYear()} Caridad Fresneda — Psicóloga Sanitaria</p>
      <p>Teléfono: 655 669 001 · Correo: caridadfresneda@cop.es</p>
    </footer>
  );
}
