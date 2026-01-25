/**
 * ==========================================================================
 *  ADMIN EDIT POST
 *  - Pantalla para editar un artículo existente.
 *  - La psicóloga puede modificar:
 *        ✓ Título
 *        ✓ Descripción
 *        ✓ Contenido
 *        ✓ Imagen destacada (opcional)
 *
 *  - El slug NO es editable para evitar romper URLs existentes.
 *  - Después de guardar, regresa al Dashboard.
 * ==========================================================================
 */

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./EditorToolbar";
import LinkExtension from "@tiptap/extension-link";

export default function AdminEditPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Estados del formulario
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  /**
   * Evita reinyectar el contenido en cada render
   */
  const [contentLoaded, setContentLoaded] = useState(false);

  /**
   * ============================================================
   *  EDITOR WYSIWYG (TIPTAP)
   *  - Se inicializa siempre (TipTap lo requiere)
   *  - El contenido se carga cuando `post` esté disponible
   * ============================================================
   */
  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({
        openOnClick: false,
      }),
    ],
    content: "", // vacío al inicio
    onUpdate: ({ editor }) => {
      // Evitar actualizar estado si aún no hay post
      if (!post) return;
      setPost({ ...post, content: editor.getHTML() });
    },
  });

  /**
   * ============================================================
   *  Inyectar contenido SOLO una vez cuando se carga el post
   * ============================================================
   */
  useEffect(() => {
    if (editor && post?.content && !contentLoaded) {
      editor.commands.setContent(post.content);
      setContentLoaded(true);
    }
  }, [editor, post, contentLoaded]);

  /**
   * ============================================================
   *  CARGAR ARTÍCULO DESDE SUPABASE POR ID
   * ============================================================
   */
  useEffect(() => {
    async function loadPost() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error al cargar artículo:", error);
      } else {
        setPost(data);

        // Cuando el post llega, inyectar el HTML en el editor
        if (editor && data?.content) {
          editor.commands.setContent(data.content);
        }
      }

      setLoading(false);
    }

    loadPost();
  }, [id]);

  /**
   * ============================================================
   *  SUBIR NUEVA IMAGEN A SUPABASE STORAGE (OPCIONAL)
   * ============================================================
   */
  const uploadNewImage = async () => {
    if (!newImageFile) return null;

    const fileName = `post-${Date.now()}-${newImageFile.name}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, newImageFile);

    if (error) {
      console.error("Error al subir imagen:", error);
      setErrorMsg("No se pudo subir la nueva imagen.");
      return null;
    }

    const { data: publicURL } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    return publicURL.publicUrl;
  };

  /**
   * ============================================================
   *  GUARDAR CAMBIOS DEL ARTÍCULO
   * ============================================================
   */
  const handleSave = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    let updatedImageURL = post.image_url;

    // Si hay una nueva imagen → subirla
    if (newImageFile) {
      const url = await uploadNewImage();
      if (url) updatedImageURL = url;
    }

    // Actualizar datos del artículo
    const { error } = await supabase
      .from("articles")
      .update({
        title: post.title,
        description: post.description,
        content: post.content,
        image_url: updatedImageURL,
      })
      .eq("id", id);

    if (error) {
      console.error("Error al guardar cambios:", error);
      setErrorMsg("Hubo un error al guardar los cambios.");
      return;
    }

    // Volver al dashboard
    navigate("/admin");
  };

  /**
   * CARGANDO O ARTÍCULO NO ENCONTRADO
   */
  if (loading) return <p style={{ padding: "40px" }}>Cargando artículo...</p>;
  if (!post) return <p style={{ padding: "40px" }}>Artículo no encontrado.</p>;

  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#c49aa8" }}>
        Editar artículo
      </h2>

      <form onSubmit={handleSave}>
        {/* ===============================
            CAMPO: TÍTULO
        ================================ */}
        <label style={{ fontWeight: "bold" }}>Título</label>
        <input
          type="text"
          required
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* ===============================
            CAMPO: DESCRIPCIÓN
        ================================ */}
        <label style={{ fontWeight: "bold" }}>Descripción</label>
        <input
          type="text"
          required
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* ===============================
            CAMPO: CONTENIDO
        ================================ */}

        <label
          style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}
        >
          Contenido del artículo
        </label>

        <EditorToolbar editor={editor} />

        {editor && (
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px 14px",
              marginBottom: "20px",
              background: "white",
              lineHeight: "1.6",
            }}
          >
            <EditorContent
              editor={editor}
              style={{
                outline: "none",
              }}
            />
          </div>
        )}

        {/* ===============================
            SLUG (NO EDITABLE)
        ================================ */}
        <label style={{ fontWeight: "bold" }}>Slug (no editable)</label>
        <input
          type="text"
          value={post.slug}
          disabled
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #eee",
            background: "#f7f7f7",
            color: "#888",
          }}
        />

        {/* ===============================
            IMAGEN ACTUAL
        ================================ */}
        {post.image_url && (
          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontWeight: "bold" }}>Imagen actual:</p>
            <img
              src={post.image_url}
              alt="Imagen destacada"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        )}

        {/* ===============================
            SUBIR NUEVA IMAGEN
        ================================ */}
        <label style={{ fontWeight: "bold" }}>
          Cambiar imagen destacada (opcional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImageFile(e.target.files[0])}
          style={{ marginBottom: "20px" }}
        />

        {/* ERRORES */}
        {errorMsg && (
          <p style={{ color: "red", marginBottom: "10px" }}>{errorMsg}</p>
        )}

        {/* BOTÓN GUARDAR */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#c49aa8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Guardar cambios
        </button>
      </form>
    </section>
  );
}
