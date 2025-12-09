import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./BlogPost.css";

export default function BlogPost() {
  const { id: slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error) setArticle(data);
    };

    loadArticle();
  }, [slug]);

  if (!article) return <p style={{ padding: "40px" }}>Cargando...</p>;

  return (
    <div className="post-page reveal fade-in">
      <img className="post-page-img" src={article.image_url} alt={article.title} />

      <h1 className="reveal delay-2">{article.title}</h1>

      <div className="post-page-content">
        {article.content.split("\n").map((p, i) => (
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
