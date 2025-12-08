import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";
import "./BlogPost.css";

export default function BlogPost() {
  const { id } = useParams();
  const articulo = articles.find(a => a.id === id);

  if (!articulo) {
    return <h2 style={{ padding: "40px" }}>Artículo no encontrado</h2>;
  }

  return (
    <div className="post-page reveal fade-in">
      
      <img 
        className="post-page-img reveal delay-1"
        src={articulo.imagen}
        alt={articulo.titulo}
      />

      <h1 className="reveal delay-2">{articulo.titulo}</h1>

      <div className="post-page-content">
        {articulo.contenido.split("\n").map((p, i) => (
          <p key={i} className={`reveal delay-${i + 3}`}>
            {p.trim()}
          </p>
        ))}
      </div>

      <Link to="/blog" className="volver reveal delay-8">
        ← Volver al Blog
      </Link>
    </div>
  );
}
