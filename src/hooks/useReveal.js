import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // deja de observar una vez animado
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);
}
