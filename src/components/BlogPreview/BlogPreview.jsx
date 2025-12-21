// ============================================================================
// BLOG PREVIEW – Tarjetas en la Home (últimos 3 artículos)
// - Mantiene el diseño exacto actual
// - Añade funcionalidad: toda la tarjeta es clicable
// - Imágenes NO se deforman (solución al problema anterior)
// - Animación reveal permanece intacta
// ============================================================================

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import "./BlogPreview.css";

export default function BlogPreview() {
  const [articles, setArticles] = useState([]);

  // ============================================================
  // Cargar los 3 artículos más recientes
  // ============================================================
  useEffect(() => {
    const loadArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) setArticles(data);
    };

    loadArticles();
  }, []);

  return (
    <section id="blog" className="blog-section">
      
      {/* Título del blog enlazado a la página completa */}
      <Link to="/blog" className="blog-title-link">
        <h2>Blog</h2>
      </Link>

      <div className="blog-grid">
        
        {articles.map((art, i) => (
          
          /* ============================================================
             TARJETA COMPLETA CLICABLE (con estilo block para no deformar)
             ============================================================ */
          <Link
            key={art.id}
            to={`/blog/${art.slug}`}
            className={`post reveal delay-${i + 1} post-link-wrapper`}
          >
            {/* Imagen del artículo */}
            <img
              src={art.image_url}
              alt={art.title}
              className="post-img"
            />

            {/* Contenido de la tarjeta */}
            <div className="post-content">
              <h3>{art.title}</h3>
              <p>{art.description}</p>
              <span className="leer-mas">Leer más →</span>
            </div>

          </Link>
        ))}

      </div>

      {/* Botón para ver todos los artículos */}
      <div className="ver-mas-container">
        <Link to="/blog" className="btn-principal">
          Ver todos los artículos →
        </Link>
      </div>

    </section>
  );
}
