// ============================================================================
// SERVICIOS PAGE
// Página independiente para SEO y navegación directa
// ============================================================================

import Header from "../components/Header/Header";
import Servicios from "../components/Servicios/Servicios";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

export default function ServiciosPage() {
  return (
    <>
    <Helmet>
        <title>Servicios de Psicología | Caridad Fresneda</title>
        <meta
          name="description"
          content="Terapia psicológica para ansiedad, depresión, кризис y relaciones. Consulta presencial y online en Madrid."
        />
      </Helmet>
      <Header />
      <Servicios />
      <Footer />
    </>
  );
}