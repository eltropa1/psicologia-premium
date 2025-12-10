import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scrollToSection } from "./helpers/scrollToSection";

import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

export default function App() {
  const location = useLocation();

  /* ============================
     1) REVEAL ANIMATION
  ============================ */
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    revealElements(); // Ejecutar al montar

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  /* ============================
     2) HASH SCROLL (ONE PAGE)
  ============================ */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 80);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}
