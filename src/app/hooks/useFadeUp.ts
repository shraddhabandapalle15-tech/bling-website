import { useEffect, useRef, useState, type CSSProperties } from "react";

export function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const s: CSSProperties = {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(38px)",
    transition: `opacity .75s ease ${delay}ms, transform .75s ease ${delay}ms`,
  };
  return { ref, s };
}
