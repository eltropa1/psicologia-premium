/**
 * ==========================================================================
 *  ADMIN NEW POST
 *  - Pantalla para crear un nuevo artículo del blog.
 *  - La psicóloga puede:
 *        ✓ Escribir título
 *        ✓ Añadir descripción
 *        ✓ Añadir contenido en textarea
 *        ✓ Subir una imagen destacada (Supabase Storage)
 *  - El slug se genera automáticamente a partir del título.
 *  - Al guardar → redirige al Dashboard del admin.
 * ==========================================================================
 */

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

/**
 * Editor WYSIWYG compatible con React 19
 */
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import EditorToolbar from "./EditorToolbar"



export default function AdminNewPost() {
  const navigate = useNavigate();

  // Campos del formulario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null); // archivo subido
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  /**
 * ============================================================
 *  EDITOR DE TEXTO ENRIQUECIDO (TIPTAP)
 *  - Guarda HTML limpio en `content`
 *  - Permite títulos, listas, negrita, etc.
 * ============================================================
 */

const editor = useEditor({
  extensions: [
    StarterKit,
    LinkExtension.configure({
      openOnClick: false,
    }),
  ],
  content,
  onUpdate: ({ editor }) => {
    setContent(editor.getHTML());
  },
});


  /**
   * ============================================================
   *  GENERAR SLUG AUTOMÁTICO A PARTIR DEL TÍTULO
   * ============================================================
   */
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[áàäâ]/g, "a")
      .replace(/[éèëê]/g, "e")
      .replace(/[íìïî]/g, "i")
      .replace(/[óòöô]/g, "o")
      .replace(/[úùüû]/g, "u")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  /**
   * ============================================================
   *  FUNCIÓN PARA SUBIR UNA IMAGEN A SUPABASE STORAGE
   * ============================================================
   */
  const uploadImage = async () => {
    if (!imageFile) return null;

    // Crear nombre único
    const fileName = `post-${Date.now()}-${imageFile.name}`;

    const { data, error } = await supabase.storage
      .from("blog-images") // Asegúrate de tener creado este bucket
      .upload(fileName, imageFile);

    if (error) {
      console.error("Error al subir imagen:", error);
      setErrorMsg("No se pudo subir la imagen.");
      return null;
    }

    // Obtener URL pública
    const { data: publicURL } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    return publicURL.publicUrl;
  };

  /**
   * ============================================================
   *  FUNCIÓN PARA GUARDAR NUEVO ARTÍCULO
   * ============================================================
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Slug automático
    const slug = generateSlug(title);

    // Subir imagen al bucket
    let image_url = null;
    if (imageFile) {
      image_url = await uploadImage();
      if (!image_url) {
        setLoading(false);
        return;
      }
    }

    // Insertar artículo en Supabase
    const { error } = await supabase.from("articles").insert({
      title,
      description,
      content,
      slug,
      image_url,
    });

    if (error) {
      console.error("Error al guardar artículo:", error);
      setErrorMsg("Hubo un error al guardar el artículo.");
      setLoading(false);
      return;
    }

    // Redirigir al dashboard
    navigate("/admin");
  };

  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* TÍTULO DE LA SECCIÓN */}
      <h2 style={{ marginBottom: "20px", color: "#c49aa8" }}>
        Crear nuevo artículo
      </h2>

      <form onSubmit={handleSubmit}>
        {/* =======================
            CAMPO: TÍTÍTULO
        ======================== */}
        <label style={{ fontWeight: "bold" }}>Título</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* =======================
            CAMPO: DESCRIPCIÓN
        ======================== */}
        <label style={{ fontWeight: "bold" }}>Descripción</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        {/* =======================
            CAMPO: CONTENIDO
        ======================== */}
        <label style={{ fontWeight: "bold" }}>Contenido (HTML)</label>
       
       

<label style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
  Contenido del artículo
</label>

  {/* añade toolbar*/}
<EditorToolbar editor={editor} />
<div
  style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "20px",
    background: "white",
  }}
>
  <EditorContent editor={editor} />
</div>

       

      

        {/* =======================
            CAMPO: IMAGEN DESTACADA
        ======================== */}
        <label style={{ fontWeight: "bold" }}>Imagen destacada</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          style={{ marginBottom: "20px" }}
        />

        {/* ERRORES */}
        {errorMsg && (
          <p style={{ color: "red", marginBottom: "10px" }}>{errorMsg}</p>
        )}

        {/* BOTÓN GUARDAR */}
        <button
          type="submit"
          disabled={loading}
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
          {loading ? "Guardando..." : "Guardar artículo"}
        </button>
      </form>
    </section>
  );
}
