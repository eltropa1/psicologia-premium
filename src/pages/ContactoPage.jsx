import Header from "../components/Header/Header";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | Caridad Fresneda Psicóloga</title>
        <meta
          name="description"
          content="Contacta con Caridad Fresneda. Psicóloga en Madrid. Reserva tu cita presencial u online."
        />
      </Helmet>
      <Header />
      <Contacto />
      <Footer />
    </>
  );
}
