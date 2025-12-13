import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

// ⬅️ IMPORTA EL HOOK
import useReveal from "../hooks/useReveal";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⬅️ ACTIVA REVEAL CUANDO EL POST SE CARGUE
  useReveal([post]);

  useEffect(() => {
    async function loadPost() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) console.error("Error al cargar post:", error);

      setPost(data);
      setLoading(false);
    }

    loadPost();
  }, [slug]);

  if (loading) return <p style={{ padding: "40px" }}>Cargando artículo...</p>;
  if (!post) return <p style={{ padding: "40px" }}>Artículo no encontrado.</p>;

  return (
    <section className="blog-post-section" style={{ padding: "80px 40px" }}>
      
      <h1
        className="reveal"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        {post.title}
      </h1>

      <img
        src={post.image_url}
        alt={post.title}
        className="reveal delay-1"
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "20px auto",
          display: "block",
          borderRadius: "12px"
        }}
      />

      <article
        className="reveal delay-2"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          fontSize: "1.2rem",
          lineHeight: "1.7"
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link
  to="/blog"
  className="volver reveal delay-3"
  style={{
    display: "block",
    textAlign: "center",
    marginTop: "40px",
  }}
>
  ← Ver todos los artículos
</Link>

      
    </section>
  );
}
