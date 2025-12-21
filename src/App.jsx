// ============================================================================
// APP.JSX – Configuración global de la aplicación
// ============================================================================
// Contiene:
//  - Rutas públicas (Home, Blog, Artículos…)
//  - Rutas legales (Aviso Legal, Privacidad, Cookies)
//  - Panel de administración protegido
//  - Revelación progresiva (scroll reveal)
//  - Gestión del hash (#sección)
//  - Banner de Cookies (Google Analytics habilitado solo si se acepta)
// ============================================================================

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scrollToSection } from "./helpers/scrollToSection";

/* ============================
   Páginas públicas
============================ */
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

/* ============================
   Páginas legales
============================ */
import AvisoLegal from "./pages/legal/AvisoLegal";
import PoliticaPrivacidad from "./pages/legal/PoliticaPrivacidad";
import PoliticaCookies from "./pages/legal/PoliticaCookies";

/* ============================
   Admin
============================ */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNewPost from "./pages/admin/AdminNewPost";
import AdminEditPost from "./pages/admin/AdminEditPost";
import ProtectedRoute from "./pages/admin/ProtectedRoute";

/* ============================
   Banner de Cookies (global)
============================ */
import CookieBanner from "./components/Cookies/CookieBanner";

export default function App() {
  const location = useLocation();

  // ==========================================================
  // 1) ANIMACIÓN REVEAL EN TODAS LAS SECCIONES
  // ==========================================================
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    revealElements(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  // ==========================================================
  // 2) NAVEGACIÓN A SECCIONES (#hash)
  // ==========================================================
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 80);
    }
  }, [location]);

  // ==========================================================
  // 3) RETURN PRINCIPAL
  //    Importante:
  //    - CookieBanner se muestra EN TODA LA WEB (fuera de <Routes>)
  //    - Las rutas funcionan exactamente igual
  // ==========================================================
  return (
    <>
      {/* ======================================================
          BANNER DE COOKIES (OBLIGATORIO)
          - Se muestra en toda la web
          - Google Analytics solo se activa si se aceptan cookies
        ====================================================== */}
      <CookieBanner />

      {/* ======================================================
          RUTAS PRINCIPALES DEL SITIO
        ====================================================== */}
      <Routes>

        {/* ============================
            PÚBLICAS
        ============================= */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* ============================
            LEGALES
        ============================= */}
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />

        {/* ============================
            ADMIN – LOGIN
        ============================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ============================
            ADMIN – PROTEGIDO
        ============================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
              <p style={{ padding: "40px" }}>Cargando panel de administración...</p>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/new"
          element={
            <ProtectedRoute>
              <AdminNewPost />
              <p style={{ padding: "40px" }}>
                Pantalla de creación de artículos (pronto disponible)
              </p>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute>
              <AdminEditPost />
              <p style={{ padding: "40px" }}>
                Pantalla de edición de artículos (pronto disponible)
              </p>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

