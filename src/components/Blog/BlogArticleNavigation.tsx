import { Link } from "react-router-dom";

/**
 * Navegación contextual dentro del artículo del blog.
 * Permite volver al listado completo de artículos
 * sin necesidad de hacer scroll hasta el final.
 */
export default function BlogArticleNavigation() {
  return (
    <nav className="blog-article-nav">
      <Link to="/blog" className="blog-article-nav__link">
        ← Ver todos los artículos
      </Link>
    </nav>
  );
}
