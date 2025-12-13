import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "../components/Blog/Blog.css";
import BlogHeader from "../components/Blog/BlogHeader";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";


// ⬅️ IMPORTANTE: importa el hook
import useReveal from "../hooks/useReveal";

export default function BlogList() {
  const [articles, setArticles] = useState([]);

  // ⬅️ LLAMADA CLAVE: se reactivará cuando articles cambie
  useReveal([articles]);

  useEffect(() => {
    const loadArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setArticles(data);
    };

    loadArticles();
  }, []);

  return (
    <>
    <BlogHeader />
    <ScrollTopButton />
    
    <section className="blog-section" style={{ paddingTop: "120px" }}>
      <h2 className="reveal">Blog</h2>

      <div className="blog-grid">
        {articles.map((art, i) => (
          <div key={art.id} className={`post reveal delay-${i + 1}`}>
            <img src={art.image_url} alt={art.title} />

            <div className="post-content">
              <h3>{art.title}</h3>
              <p>{art.description}</p>

              <Link to={`/blog/${art.slug}`} className="leer-mas">
                Leer más →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    </>
  );
}
