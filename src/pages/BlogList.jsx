import articles from "../data/articles";
import { Link } from "react-router-dom";
import "../components/Blog/Blog.css"; // aprovechamos el mismo estilo del grid

export default function BlogList() {
  return (
    <section className="blog-section" style={{ paddingTop: "120px" }}>
      <h2>Blog</h2>

      <div className="blog-grid">
        {articles.map((art, i) => (
          <div key={art.id} className={`post reveal delay-${i + 1}`}>
            <img src={art.imagen} alt={art.titulo} />

            <div className="post-content">
              <h3>{art.titulo}</h3>
              <p>{art.descripcion}</p>

              <Link to={`/blog/${art.id}`} className="leer-mas">
                Leer más →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
