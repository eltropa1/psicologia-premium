import { useState, useEffect } from "react";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "yes");
    setVisible(false);

    // Activa Google Analytics solo si acepta
    loadAnalytics();
  };

  const loadAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Este sitio utiliza cookies de análisis (Google Analytics) para mejorar tu experiencia.
        Puedes obtener más información en nuestra{" "}
        <a href="/politica-cookies">Política de Cookies</a>.
      </p>

      <button onClick={acceptCookies}>Aceptar</button>
    </div>
  );
}
