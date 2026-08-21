import { useMemo, useState, type CSSProperties } from "react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS } from "../theme";
import { PRODUCTS } from "../data/products";
import { ShopProductCard } from "../components/ShopProductCard";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const OFFICIAL_SHADES = PRODUCTS.filter(p => p.colorTag);
const COLORS = [
  "Pink", "Girl Pink", "Dark Red", "Gold", "Yellow", "Purple", "Blue",
  "Fruit Green", "Teal", "Dark Green", "Diamond White", "Baby Blue", "Black", "Rose Gold",
];
type PriceFilter = "all" | "under" | "above";
type Sort = "newest" | "popular" | "best";
const PRICE_SPLIT = 400;

function priceNum(p: string) { return parseInt(p.replace("₹", ""), 10); }

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function Shop() {
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<Sort>("newest");

  const toggleColor = (c: string) => {
    setSelectedColors(prev => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list = OFFICIAL_SHADES
      .filter(p => selectedColors.size === 0 || selectedColors.has(p.colorTag!))
      .filter(p => priceFilter === "all" || (priceFilter === "under" ? priceNum(p.price) < PRICE_SPLIT : priceNum(p.price) >= PRICE_SPLIT))
      .filter(p => !inStockOnly || p.inStock !== false);
    if (sort === "popular") list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    if (sort === "best") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedColors, priceFilter, inStockOnly, sort]);

  const pillBase: CSSProperties = {
    fontFamily: SANS, fontSize: 13, borderRadius: 100, padding: "8px 16px", cursor: "pointer",
    border: "1.5px solid rgba(23,23,23,.16)", background: "transparent", color: INK, transition: "all .2s",
  };

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 8px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: 22, color: INK, opacity: .55, marginBottom: 6 }}>— shop —</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(34px,5vw,64px)", color: HEADING_INK, margin: 0, letterSpacing: "-1px", textTransform: "uppercase" }}>All Glitter Shades</h1>
          <div style={{ fontFamily: SANS, fontSize: 14, color: INK, opacity: .5 }}>{filtered.length} of {OFFICIAL_SHADES.length} shades</div>
        </div>
      </div>

      <div className="shopLayout" style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px 100px", display: "grid", gridTemplateColumns: "260px 1fr", gap: 40, alignItems: "start" }}>
        {/* filter sidebar */}
        <aside className="shopSidebar" style={{ position: "sticky", top: 96, background: "#fff", borderRadius: 24, padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
          <div style={{ fontFamily: DISPLAY, fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 14 }}>Color</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
            {COLORS.map(c => {
              const active = selectedColors.has(c);
              return (
                <button key={c} onClick={() => toggleColor(c)}
                  style={{ ...pillBase, background: active ? INK : "transparent", color: active ? BG : INK, borderColor: active ? INK : "rgba(23,23,23,.16)" }}>
                  {c}
                </button>
              );
            })}
          </div>

          <div style={{ fontFamily: DISPLAY, fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 14 }}>Price</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26, fontFamily: SANS, fontSize: 14, color: INK }}>
            {([["all", "All Prices"], ["under", `Under ₹${PRICE_SPLIT}`], ["above", `₹${PRICE_SPLIT} & Above`]] as [PriceFilter, string][]).map(([val, label]) => (
              <label key={val} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <input type="radio" name="price" checked={priceFilter === val} onChange={() => setPriceFilter(val)} style={{ accentColor: INK }} />
                {label}
              </label>
            ))}
          </div>

          <div style={{ fontFamily: DISPLAY, fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 14 }}>Availability</div>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: SANS, fontSize: 14, color: INK }}>
            <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} style={{ accentColor: INK }} />
            In Stock Only
          </label>
        </aside>

        {/* grid */}
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <select value={sort} onChange={e => setSort(e.target.value as Sort)}
              style={{ fontFamily: SANS, fontSize: 13, color: INK, background: "#fff", border: "1.5px solid rgba(23,23,23,.16)", borderRadius: 100, padding: "9px 18px", cursor: "pointer" }}>
              <option value="newest">Sort: Newest</option>
              <option value="popular">Sort: Popular</option>
              <option value="best">Sort: Best Selling</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px", fontFamily: SANS, color: INK, opacity: .55 }}>
              No shades match those filters — try clearing a few.
            </div>
          ) : (
            <div className="shopCardGrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
              {filtered.map((p, i) => <ShopProductCard key={p.slug} p={p} delay={Math.min(i, 8) * 60} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
