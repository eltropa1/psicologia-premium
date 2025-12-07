import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import SobreMi from "../components/SobreMi/SobreMi";
import useReveal from "../hooks/useReveal";


export default function Home() {
    useReveal();
    
  return (
    <>
      <Header />
      <Hero />
      <MobileHeader />
      <SobreMi />

      <div style={{ padding: "100px 20px" }}>
        <h2>Contenido provisional</h2>
        <p>Seguimos construyendo la Home módulo a módulo.</p>
      </div>
    </>
  );
}
