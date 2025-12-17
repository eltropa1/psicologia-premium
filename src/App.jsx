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
   ADMIN
   - Login
   - Dashboard (próximamente)
   - Crear / Editar artículos (próximamente)
============================ */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNewPost from "./pages/admin/AdminNewPost";
import AdminEditPost from "./pages/admin/AdminEditPost";

import ProtectedRoute from "./pages/admin/ProtectedRoute";

// IMPORTANTE:
// Crearemos AdminDashboard.jsx, AdminNewPost.jsx y AdminEditPost.jsx
// muy pronto, pero de momento dejamos preparadas las rutas.

export default function App() {
  const location = useLocation();

  /* ==========================================================
     1) REVEAL ANIMATION (para la OnePage y otras secciones)
     - Este código no interfiere con el panel admin.
  ========================================================== */
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
    revealElements();

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  /* ==========================================================
     2) HASH SCROLL — navegación a secciones en el Home
  ========================================================== */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 80);
    }
  }, [location]);

  return (
    <Routes>
      {/* ===========================================
          RUTAS PÚBLICAS
      ============================================ */}
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* ===========================================
          LOGIN DEL ADMIN (sin protección)
      ============================================ */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ===========================================
          RUTAS ADMIN PROTEGIDAS
          - Requieren sesión iniciada
          - ProtectedRoute evita accesos no autorizados
      ============================================ */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />  {/* Creamos AdminDashboard.jsx en el siguiente paso */}
            <p style={{ padding: "40px" }}>
              Cargando panel de administración...
            </p>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/new"
        element={
          <ProtectedRoute>
            <AdminNewPost /> {/* Creamos AdminNewPost.jsx */}
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
            <AdminEditPost /> {/* Creamos AdminEditPost.jsx */}
            <p style={{ padding: "40px" }}>
              Pantalla de edición de artículos (pronto disponible)
            </p>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
