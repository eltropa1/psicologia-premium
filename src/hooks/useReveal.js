import { useEffect } from "react";

export default function useReveal(deps = []) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => {
      // evita observar dos veces
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, deps);
}
