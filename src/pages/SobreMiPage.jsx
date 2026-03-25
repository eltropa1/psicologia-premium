// ============================================================================
// SOBRE MI PAGE
// ============================================================================

import Header from "../components/Header/Header";
import SobreMi from "../components/SobreMi/SobreMi";
import Footer from "../components/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function SobreMiPage() {
  return (
    <>
      <Helmet>
        <title>Sobre mí | Caridad Fresneda Psicóloga</title>
        <meta
          name="description"
          content="Conoce a Caridad Fresneda, psicóloga en Madrid. Enfoque cercano, profesional y personalizado."
        />
      </Helmet>
      <Header />
      <SobreMi />
      <Footer />
    </>
  );
}
