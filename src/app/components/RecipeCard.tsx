import { useState } from "react";
import { Link } from "react-router";
import { Clock, Gauge } from "lucide-react";
import { INK, HEADING_INK, DISPLAY, SANS, TEXT_2XS, TEXT_XL, TEXT_SM } from "../theme";
import { PRODUCTS } from "../data/products";
import type { Recipe } from "../data/recipes";
import { useFadeUp } from "../hooks/useFadeUp";

export function RecipeCard({ r, delay = 0 }: { r: Recipe; delay?: number }) {
  const fu = useFadeUp(delay);
  const [hov, setHov] = useState(false);
  const product = PRODUCTS.find(p => p.slug === r.productSlug);
  const colorFrom = product?.bg ?? "#E8E29A";
  const colorTo = product?.lid ?? "#c8bc60";

  return (
    <div ref={fu.ref} style={fu.s}>
      <Link to={`/recipes/${r.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div
          style={{
            borderRadius: 28, overflow: "hidden", background: "#fff", cursor: "pointer",
            transform: hov ? "translateY(-8px)" : "translateY(0)",
            boxShadow: hov ? "0 24px 56px rgba(0,0,0,.16)" : "0 4px 18px rgba(0,0,0,.08)",
            transition: "all .38s cubic-bezier(.34,1.56,.64,1)",
          }}
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        >
          <div style={{
            position: "relative", height: 200, display: "flex", alignItems: "center", justifyContent: "center",
            background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,.5), transparent 55%), linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
          }}>
            <span style={{ background: "#fff", color: INK, borderRadius: 100, padding: "7px 16px", fontFamily: DISPLAY, fontSize: TEXT_2XS, letterSpacing: ".5px", textTransform: "uppercase" }}>
              {r.category}
            </span>
          </div>
          <div style={{ padding: "20px 22px 24px" }}>
            <h3 style={{ fontFamily: DISPLAY, fontSize: TEXT_XL, color: HEADING_INK, margin: "0 0 10px", letterSpacing: "-.2px" }}>{r.name}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><Clock size={13} /> {r.time} min</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><Gauge size={13} /> {r.difficulty}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
