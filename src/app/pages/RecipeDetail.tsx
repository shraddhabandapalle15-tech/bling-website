import { Link, useParams } from "react-router";
import { Clock, Gauge } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SANS } from "../theme";
import { RECIPES } from "../data/recipes";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function RecipeDetail() {
  const { slug } = useParams();
  const recipe = RECIPES.find(r => r.slug === slug) ?? RECIPES[0];
  const product = PRODUCTS.find(p => p.slug === recipe.productSlug);

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: SANS, fontSize: 13, color: INK, opacity: .5, flexWrap: "wrap" }}>
          <Link to="/recipes" style={{ color: INK, textDecoration: "none" }}>Recipes</Link>
          <span>/</span>
          <span style={{ opacity: .85 }}>{recipe.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 0" }}>
        <div style={{
          position: "relative", height: 340, borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center",
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,.5), transparent 55%), linear-gradient(135deg, ${product?.bg ?? "#E8E29A"}, ${product?.lid ?? "#c8bc60"})`,
        }}>
          <span style={{ background: "#fff", color: INK, borderRadius: 100, padding: "8px 18px", fontFamily: DISPLAY, fontSize: 12, letterSpacing: ".5px", textTransform: "uppercase" }}>
            {recipe.category}
          </span>
        </div>

        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(30px,4vw,48px)", color: HEADING_INK, margin: "28px 0 12px", letterSpacing: "-.5px" }}>{recipe.name}</h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK, opacity: .65, lineHeight: 1.7, margin: "0 0 16px", maxWidth: 560 }}>{recipe.tagline}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: SANS, fontSize: 14, color: INK, opacity: .6, marginBottom: 48 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Clock size={15} /> {recipe.time} min</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Gauge size={15} /> {recipe.difficulty}</span>
        </div>

        <div className="stepGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 22, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.3px" }}>Ingredients</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: SANS, fontSize: 15, color: INK, opacity: .78, lineHeight: 1.6, marginBottom: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: product?.bg ?? INK, marginTop: 8, flexShrink: 0 }} />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 22, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.3px" }}>Steps</h2>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", counterReset: "step" }}>
              {recipe.steps.map((step, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18 }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: "50%", background: product?.bg ?? INK, color: INK, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: DISPLAY, fontSize: 12,
                  }}>{i + 1}</span>
                  <span style={{ fontFamily: SANS, fontSize: 15, color: INK, opacity: .78, lineHeight: 1.6, paddingTop: 3 }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {product && (
          <div style={{ paddingBottom: 96 }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 22, color: HEADING_INK, margin: "0 0 20px", letterSpacing: "-.3px" }}>Recommended Glitter</h2>
            <div style={{ maxWidth: 260 }}>
              <ProductCard p={product} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
