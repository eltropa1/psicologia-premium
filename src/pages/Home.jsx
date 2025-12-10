import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import SobreMi from "../components/SobreMi/SobreMi";
import Servicios from "../components/Servicios/Servicios";
import Testimonios from "../components/Testimonios/Testimonios";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";
import BlogPreview from "../components/BlogPreview/BlogPreview";

import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
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
