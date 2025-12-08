import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

export default function App() {

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
    revealElements(); // ejecuta al montar (importante)

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
}
