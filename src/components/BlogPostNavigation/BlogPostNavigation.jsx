import { Link } from "react-router-dom";

/**
 * Botón de navegación fija para volver al listado del blog.
 * Disponible en cualquier punto del artículo sin interferir en la lectura.
 */
export default function BlogPostNavigation() {
  return (
    <Link
      to="/blog"
      className="blog-post-nav"
      aria-label="Volver al listado de artículos"
    >
      ← Artículos
    </Link>
  );
}
