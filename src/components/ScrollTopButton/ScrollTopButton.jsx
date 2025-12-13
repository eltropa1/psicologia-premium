/**
 * ======================================================
 *   BOTÓN FLOTANTE "VOLVER ARRIBA"
 *   - Aparece cuando el usuario hace scroll hacia abajo
 *   - Se oculta cuando está arriba del todo
 *   - Usa animación reveal (coherente con tu sitio)
 *   - Totalmente integrado con la estética del proyecto
 * ======================================================
 */

import { useEffect, useState } from "react";
import "./ScrollTopButton.css";

export default function ScrollTopButton() {

  // ------------------------------------------------------
  // Estado para saber si debe mostrarse o no el botón.
  // Cuando el usuario baja más de X píxeles → aparece.
  // ------------------------------------------------------
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /**
     * Función que maneja el scroll de la ventana.
     * Muestra el botón si se baja más de 300px.
     */
    const toggleVisibility = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Evento de scroll
    window.addEventListener("scroll", toggleVisibility);

    // Limpieza del evento (buena práctica)
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /**
   * Función para volver arriba con scroll suave.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // ------------------------------------------------------
  // Renderizado del botón SOLO cuando visible === true
  // ------------------------------------------------------
  return (
    <>
      {visible && (
        <button
          className="scroll-top-button"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </>
  );
}
