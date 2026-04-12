"use client";

import { useEffect } from "react";

/**
 * Isolated Client Component — no visible output.
 * Uses IntersectionObserver to add "visible" CSS class to any element
 * whose className includes revealUp, revealLeft, or revealRight.
 * Keeps parent pages as pure Server Components (zero FOUC).
 */
export default function ServitAnimations() {
  useEffect(() => {
    /* Incluye revealUp/Left/Right + elementos con animación propia:
       serviceCard, relatedCard, trustImgWrap, trustCard, aboutLeft, aboutCard,
       maintenanceBiau, maintenanceImg */
    const selector = [
      "[class*='revealUp']",
      "[class*='revealLeft']",
      "[class*='revealRight']",
      "[class*='serviceCard']",
      "[class*='relatedCard']",
      "[class*='trustImgWrap']",
      "[class*='trustCard']",
      "[class*='aboutLeft']",
      "[class*='aboutCard']",
      "[class*='maintenanceBiau']",
      "[class*='maintenanceImg']",
      "[class*='processCard']",
    ].join(",");
    const elements = document.querySelectorAll(selector);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
