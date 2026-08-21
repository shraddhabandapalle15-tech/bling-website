import { useMemo, useState } from "react";
import { BG, INK, HEADING_INK, YELLOW, DISPLAY, SCRIPT2, SANS } from "../theme";
import { RECIPES, RECIPE_CATEGORIES } from "../data/recipes";
import { RecipeCard } from "../components/RecipeCard";

export default function Recipes() {
  const [active, setActive] = useState<typeof RECIPE_CATEGORIES[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? RECIPES : RECIPES.filter(r => r.category === active)),
    [active]
  );

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 8px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: 22, color: INK, opacity: .55, marginBottom: 6 }}>— recipe library —</div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(34px,5vw,64px)", color: HEADING_INK, margin: "0 0 12px", letterSpacing: "-1px", textTransform: "uppercase" }}>Drinks Worth Posting</h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK, opacity: .6, margin: "0 0 28px", maxWidth: 520 }}>
          Every recipe pairs perfectly with a Bling shade. Pick your vibe and get sprinkling.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {RECIPE_CATEGORIES.map(c => {
            const on = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="pbtn"
                style={{
                  fontFamily: SANS, fontSize: 13.5, borderRadius: 100, padding: "9px 18px", cursor: "pointer",
                  border: `1.5px solid ${on ? "transparent" : "rgba(23,23,23,.16)"}`,
                  background: on ? YELLOW : "transparent", color: INK, transition: "all .2s",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 100px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 24px", fontFamily: SANS, color: INK, opacity: .55 }}>
            No recipes in this category yet — check back soon.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 24 }}>
            {filtered.map((r, i) => <RecipeCard key={r.slug} r={r} delay={Math.min(i, 8) * 60} />)}
          </div>
        )}
      </div>
    </section>
  );
}
