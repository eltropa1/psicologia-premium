// ==========================================================================
// HOME ORIGINAL RESTAURADO
// - Hero: solo escritorio
// - MobileHeader: nombre y título en móvil
// - HeroMobile: foto + frase cursiva + botón (solo móvil)
// ==========================================================================

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import SobreMi from "../components/SobreMi/SobreMi";
import Servicios from "../components/Servicios/Servicios";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import Tarifas from "../components/Tarifas/Tarifas";
// Foto provisional (se sustituye en el futuro por la foto real)
import fotoCaridad from "../assets/img/caridad-temp.webp";
import ComoTrabajo from "../components/ComoTrabajo/ComoTrabajo";

import { useLocation } from "react-router-dom";
import { React, useEffect } from "react";

export default function Home() {
  const { hash } = useLocation();

  // Permite navegar con #anclas (scroll suave)
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }, 300);
      }
    }
  }, [hash]);

  return (
    <>
      {/* TOP */}
      <div id="top"></div>

      {/* HEADER ESCRITORIO + MENU */}
      <Header />

      {/* HERO - SOLO ESCRITORIO (móvil lo oculta Hero.css) */}
      <Hero />

      {/* NOMBRE GRANDE PARA MÓVIL */}
      <MobileHeader />

      {/* ===============================
          BLOQUE FOTO PARA VERSIÓN MÓVIL
          (restaurado exactamente como antes)
         =============================== */}
      <div className="hero-mobile reveal fade-in delay-1">
        <img
          src={fotoCaridad}
          alt="Caridad Fresneda Psicóloga"
          className="hero-mobile-foto"
        />
        <p className="hero-mobile-frase hero-mobile-quote">
          “Tu historia te ha traído hasta aquí. Hoy empezamos a escribir el
          siguiente capítulo. <a href="tel:655669001">¿Caminamos juntos?</a>”
        </p>
      </div>

      {/* SECCIONES PRINCIPALES */}
      <SobreMi />
      <Servicios />
      <ComoTrabajo />
      <Tarifas />
    

      {/* BLOG */}
      <BlogPreview />

      {/* CONTACTO */}
      <Contacto />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
