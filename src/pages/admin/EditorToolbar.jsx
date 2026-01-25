/**
 * ============================================================
 *  EDITOR TOOLBAR (TIPTAP)
 *  - Barra de herramientas básica para el editor
 *  - Pensada para redacción de artículos (no diseño)
 * ============================================================
 */

export default function EditorToolbar({ editor }) {
  if (!editor) return null;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "10px",
        padding: "8px",
        background: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* PÁRRAFO */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        P
      </button>

      {/* TÍTULOS */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>

      {/* NEGRITA */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <strong>B</strong>
      </button>

      {/* CURSIVA */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <em>I</em>
      </button>

      {/* LISTAS */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • Lista
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. Lista
      </button>

      {/* ENLACE */}
      <button
        type="button"
        onClick={() => {
          const url = window.prompt("Introduce la URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        🔗 Enlace
      </button>
    </div>
  );
}
