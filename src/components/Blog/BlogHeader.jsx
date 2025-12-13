import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import "./BlogHeader.css";

export default function BlogHeader() {
  useReveal();

  return (
    <header className="blog-header reveal">
      <nav className="blog-nav">
        <Link to="/" className="blog-nav-item">
          ← Inicio
        </Link>

        <Link to="/#sobre-mi" className="blog-nav-item">
          Sobre mí
        </Link>

        <Link to="/#servicios" className="blog-nav-item">
          Servicios
        </Link>

        <Link to="/#contacto" className="blog-nav-item">
          Contacto
        </Link>
      </nav>
    </header>
  );
}
