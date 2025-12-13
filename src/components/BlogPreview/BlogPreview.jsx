import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import "./BlogPreview.css";

export default function BlogPreview() {
  const [articles, setArticles] = useState([]);

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
      <Link to="/blog" className="blog-title-link">
        <h2>Blog</h2>
      </Link>

      <div className="blog-grid">
        {articles.map((art, i) => (
          <div key={art.id} className={`post reveal delay-${i + 1}`}>
            <img src={art.image_url} alt={art.title} />

            <div className="post-content">
              <h3>{art.title}</h3>
              <p>{art.description}</p>

              console.log("Supabase value:", supabase);


              <Link to={`/blog/${art.slug}`} className="leer-mas">
                Leer más →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="ver-mas-container">
        <Link to="/blog" className="btn-principal">
          Ver todos los artículos →
        </Link>
      </div>
    </section>
  );
}
