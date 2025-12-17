/**
 * ================================================================
 *  ADMIN LOGIN
 *  - Pantalla de inicio de sesión para la psicóloga.
 *  - Usa email + contraseña mediante Supabase Auth.
 *  - Si el login es correcto → redirige al dashboard.
 * ================================================================
 */

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado de errores y carga
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * ---------------------------------------------------------------
   *  FUNCIÓN: handleLogin
   *  - Intenta iniciar sesión con Supabase.
   *  - Si falla → muestra error.
   *  - Si tiene éxito → redirige al dashboard del admin.
   * ---------------------------------------------------------------
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Credenciales incorrectas o usuario no registrado.");
      setLoading(false);
      return;
    }

    // Login correcto → enviar al dashboard
    navigate("/admin");
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#c49aa8" }}>
        Panel de Administración
      </h2>

      <form onSubmit={handleLogin}>
        {/* EMAIL */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* ERROR */}
        {errorMsg && (
          <p style={{ color: "red", marginBottom: "10px" }}>{errorMsg}</p>
        )}

        {/* BOTÓN */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#c49aa8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
