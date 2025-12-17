/**
 * =====================================================================
 *  ADMIN DASHBOARD (VERSIÓN CON ENCABEZADO Y BOTÓN SUPERIOR)
 *  - Pantalla principal del panel de administración.
 *  - Muestra:
 *      ✔ Encabezado con bienvenida y botón de cerrar sesión.
 *      ✔ Listado de artículos en tabla.
 *      ✔ Botón para crear un nuevo artículo.
 * =====================================================================
 */

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  /**
   * ===========================================================
   *  CARGAR SESIÓN PARA OBTENER EMAIL DE LA PSICÓLOGA
   * ===========================================================
   */
  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getUser();
      if (data?.user?.email) {
        setUserEmail(data.user.email);
      }
    }
    getSession();
  }, []);

  /**
   * ===========================================================
   *  CARGAR ARTÍCULOS
   * ===========================================================
   */
  const loadArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error al cargar artículos:", error);
    } else {
      setArticles(data);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  /**
   * ===========================================================
   *  BORRAR ARTÍCULO
   * ===========================================================
   */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres borrar este artículo?"
    );
    if (!confirmDelete) return;

    const { error } = await supabase.from("articles").delete().eq("id", id);

    if (error) {
      console.error("Error al borrar artículo:", error);
      alert("No se pudo borrar el artículo.");
      return;
    }

    loadArticles(); // Recargar tabla
  };

  /**
   * ===========================================================
   *  CERRAR SESIÓN DEL ADMINISTRADOR
   * ===========================================================
   */
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      {/** =======================================================
       *  ENCABEZADO SUPERIOR con:
       *    ✔ Mensaje de bienvenida
       *    ✔ Botón "Cerrar sesión"
       * ======================================================= */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f4e8ec",
          padding: "18px 24px",
          borderRadius: "12px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#c49aa8",
            fontSize: "1.4rem",
          }}
        >
          Bienvenida, {userEmail}
        </h2>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 16px",
            background: "#ccc",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Cerrar sesión
        </button>
      </div>

      {/** BOTÓN PARA CREAR NUEVO ARTÍCULO */}
      <Link
        to="/admin/new"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 16px",
          background: "#c49aa8",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        + Crear nuevo artículo
      </Link>

      {/** =======================================================
       *  TABLA DE ARTÍCULOS
       * ======================================================= */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#f4e8ec" }}>
            <th style={{ padding: "12px" }}>Título</th>
            <th style={{ padding: "12px" }}>Fecha</th>
            <th style={{ padding: "12px" }}>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {articles.map((art) => (
            <tr key={art.id}>
              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                {art.title}
              </td>

              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                {new Date(art.created_at).toLocaleDateString()}
              </td>

              <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                <Link
                  to={`/admin/edit/${art.id}`}
                  style={{
                    marginRight: "15px",
                    color: "#c49aa8",
                    fontWeight: "bold",
                  }}
                >
                  Editar
                </Link>

                <button
                  onClick={() => handleDelete(art.id)}
                  style={{
                    background: "transparent",
                    color: "red",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
