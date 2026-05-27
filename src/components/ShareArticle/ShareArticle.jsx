import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ShareArticle.css";

const COPY_FEEDBACK_MS = 2200;

export default function ShareArticle({ title }) {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const articleUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${location.pathname}${location.search}`;
  }, [location.pathname, location.search]);

  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  useEffect(() => {
    if (!copied) return undefined;

    const timer = window.setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const shareText = useMemo(() => {
    return title ? `${title} - ${articleUrl}` : articleUrl;
  }, [articleUrl, title]);

  const shareLinks = useMemo(() => {
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedText = encodeURIComponent(shareText);

    return {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
  }, [articleUrl, shareText]);

  const handleNativeShare = async () => {
    if (!navigator.share || !articleUrl) return;

    try {
      await navigator.share({
        title,
        text: title,
        url: articleUrl,
      });
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("No se pudo compartir el artículo:", error);
      }
    }
  };

  const handleCopy = async () => {
    if (!articleUrl || !navigator.clipboard?.writeText) return;

    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
    } catch (error) {
      console.error("No se pudo copiar el enlace:", error);
    }
  };

  if (!articleUrl) return null;

  return (
    <aside className="share-article" aria-labelledby="share-article-title">
      <p id="share-article-title" className="share-article__title">
        Compartir
      </p>

      <div className="share-article__actions">
        {canNativeShare && (
          <button
            type="button"
            className="share-article__button share-article__button--native"
            onClick={handleNativeShare}
            aria-label={`Compartir "${title}"`}
          >
            Compartir
          </button>
        )}

        <a
          className="share-article__button"
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir "${title}" por WhatsApp`}
        >
          WhatsApp
        </a>

        <a
          className="share-article__button"
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir "${title}" en Facebook`}
        >
          Facebook
        </a>

        <a
          className="share-article__button"
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir "${title}" en LinkedIn`}
        >
          LinkedIn
        </a>

        <button
          type="button"
          className="share-article__button"
          onClick={handleCopy}
          aria-label={`Copiar enlace de "${title}"`}
        >
          {copied ? "Copiado ✓" : "Copiar enlace"}
        </button>
      </div>
    </aside>
  );
}
