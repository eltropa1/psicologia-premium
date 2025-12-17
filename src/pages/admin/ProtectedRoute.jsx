/**
 * ================================================================
 *  PROTECTED ROUTE
 *  - Protege todas las rutas del panel de administración.
 *  - Solo permite el acceso si existe una sesión activa en Supabase.
 *  - En caso contrario, redirige al login del admin.
 * ================================================================
 */

import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  /**
   * Estado para almacenar la sesión del usuario.
   * null → todavía no sabemos si está logueado.
   * false → no está logueado.
   * true → está logueado.
   */
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Si existe "session", el usuario está autenticado
      setIsAuthenticated(session ? true : false);
    }

    checkSession();

    /**
     * Listener para detectar cambios de sesión en tiempo real.
     * Ejemplo:
     * - login → acceso permitido
     * - logout → expulsar del panel
     */
    supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(session ? true : false);
    });
  }, []);

  // Mientras comprobamos la sesión, mostramos un loader suave.
  if (isAuthenticated === null) {
    return <p style={{ padding: "40px" }}>Cargando...</p>;
  }

  // Si NO está autenticado → redirigir al login del admin
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Si está autenticado → renderizar contenido protegido
  return children;
}
