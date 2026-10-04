import { useEffect } from "react";

/**
 * Scrollytelling engine:
 * - Adds `.is-visible` to every `.reveal` element as it enters the viewport.
 * - Drives the fixed #scroll-progress bar.
 * - Feeds cursor position into .stat-card glow via --mx/--my.
 */
export function useScrolly() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMove = (ev: MouseEvent) => {
      const card = (ev.target as HTMLElement).closest?.(".stat-card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
}
