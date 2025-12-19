import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import SobreMi from "../components/SobreMi/SobreMi";
import Servicios from "../components/Servicios/Servicios";
import Testimonios from "../components/Testimonios/Testimonios";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";
import BlogPreview from "../components/BlogPreview/BlogPreview";

import { Link, useLocation } from "react-router-dom";
import {React, useEffect} from "react";


export default function Home() {
  const { hash } = useLocation();
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
      {/* El inico de la pagina*/}
      <div id="top"></div>

      {/* Header para escritorio */}
      <Header />

      {/* Hero para escritorio */}
      <Hero />

      {/* Bloque superior con el nombre para móviles */}
      <MobileHeader />

      {/* Secciones principales */}
      <SobreMi />
      <Servicios />
      <Testimonios />

      {/* ================================
          SECCIÓN BLOG (versión Home)
          ================================ */}
     <BlogPreview /> 

      {/* Sección Contacto */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </>
  );
}
