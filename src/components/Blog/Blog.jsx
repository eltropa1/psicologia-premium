import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="blog-section reveal fade-in">
      <h2>Blog</h2>

      <div className="blog-grid">

        <div className="post delay-1">
          <img
            src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85?auto=format&fit=crop&w=800&q=80"
            alt="Artículo sobre ansiedad"
          />
          <div className="post-content">
            <h3>Cómo manejar la ansiedad día a día</h3>
            <p>Consejos prácticos para mejorar tu bienestar emocional.</p>
          </div>
        </div>

        <div className="post delay-2">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
          />
          <div className="post-content">
            <h3>La importancia de la salud mental</h3>
            <p>Reflexiones sobre bienestar, equilibrio y autocuidado.</p>
          </div>
        </div>

        <div className="post delay-3">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
            alt="Artículo sobre relaciones"
          />
          <div className="post-content">
            <h3>Relaciones sanas</h3>
            <p>Claves para construir vínculos más sólidos y conscientes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
