import { siteContent } from "../data/siteContent.js";
import { renderPage } from "./renderers.js";

const root = document.querySelector("#app");

if (root) {
  root.innerHTML = renderPage(siteContent);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const parallaxRoot = document.querySelector("[data-parallax-root]");

if (parallaxRoot && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const parallaxItems = Array.from(parallaxRoot.querySelectorAll("[data-depth]"));
  let rafId = 0;

  const updateParallax = (clientX, clientY) => {
    const bounds = parallaxRoot.getBoundingClientRect();
    const px = (clientX - bounds.left) / bounds.width - 0.5;
    const py = (clientY - bounds.top) / bounds.height - 0.5;

    parallaxItems.forEach((item) => {
      const depth = Number(item.getAttribute("data-depth") || 0);
      const moveX = px * depth * 90;
      const moveY = py * depth * 70;
      item.style.translate = `${moveX}px ${moveY}px`;
    });
  };

  parallaxRoot.addEventListener("pointermove", (event) => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => updateParallax(event.clientX, event.clientY));
  });

  parallaxRoot.addEventListener("pointerleave", () => {
    parallaxItems.forEach((item) => {
      item.style.translate = "0 0";
    });
  });
}
