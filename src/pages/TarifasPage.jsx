import Header from "../components/Header/Header";
import Tarifas from "../components/Tarifas/Tarifas";
import Footer from "../components/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function TarifasPage() {
  return (
    <>
      <Helmet>
        <title>Tarifas | Caridad Fresneda Psicóloga</title>
        <meta
          name="description"
          content="Consulta precios de terapia psicológica presencial y online. Primera sesión informativa."
        />
      </Helmet>
      <Header />
      <Tarifas />
      <Footer />
    </>
  );
}
