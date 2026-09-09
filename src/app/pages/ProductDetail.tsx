import { useState, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { BG, YELLOW, INK, HEADING_INK, DISPLAY, SANS, SCRIPT2, DISPLAY_H2, DISPLAY_H3, TEXT_MD, TEXT_BASE, TEXT_SM, TEXT_XL, TEXT_XS, TEXT_4XL, TEXT_3XL } from "../theme";
import { PRODUCTS, FEATURES, JAR_SIZE, SAFETY_INFO, PRODUCT_FAQS } from "../data/products";
import { useCart } from "../context/CartContext";
import { Jar } from "../components/Jar";
import { ProductCard } from "../components/ProductCard";

/* ─── ACCORDION ROW ──────────────────────────────────────────────────────── */
function AccordionItem({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(23,23,23,.12)" }}>
      <button onClick={onToggle} className="accHead" aria-expanded={open}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 2px", background: "none", border: "none", fontFamily: DISPLAY, fontSize: TEXT_MD, fontWeight: 800, color: INK, cursor: "pointer", textAlign: "left" }}>
        {title}
        <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .3s", flexShrink: 0 }} />
      </button>
      <div style={{ maxHeight: open ? 420 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <div style={{ paddingBottom: 22, fontFamily: SANS, fontSize: TEXT_BASE, lineHeight: 1.85, color: INK, opacity: .68 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug) ?? PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState<"description" | "ingredients" | "usage" | "safety" | "faq" | null>("description");
  const { addItem } = useCart();
  const soldOut = product.inStock === false;

  const unitPrice = parseInt(product.price.replace("₹", ""), 10);
  const mrpPrice = product.originalPrice ? parseInt(product.originalPrice.replace("₹", ""), 10) : null;
  const discountPct = mrpPrice ? Math.round(((mrpPrice - unitPrice) / mrpPrice) * 100) : null;
  const related = PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section style={{ background: BG, paddingTop: 72, position: "relative", overflow: "hidden" }}>
        {/* breadcrumb */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px 0", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .5, flexWrap: "wrap" }}>
            <Link to="/" style={{ color: INK, textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link to="/shop" style={{ color: INK, textDecoration: "none" }}>Shop</Link>
            <span>/</span>
            <span style={{ opacity: .85 }}>{product.name}</span>
          </div>
        </div>

        {/* hero */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 88px", position: "relative", zIndex: 1 }}>
          <div className="pdpGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* visual */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", minHeight: 440 }}>
              {!product.image && (
                <div className="blobAnim" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 420, height: 420, background: product.bg, opacity: .38, borderRadius: "55% 45% 35% 65%/55% 35% 65% 45%", pointerEvents: "none" }} />
              )}
              {[{ t: 20, l: 30 }, { t: 60, l: 340 }, { t: 380, l: 20 }, { t: 340, l: 350 }].map((s, i) => (
                <div key={i} className={["fa", "fb", "fc", "fa"][i]} style={{ position: "absolute", top: s.t, left: s.l, fontSize: TEXT_XL, color: INK, pointerEvents: "none" }}>✦</div>
              ))}
              <div className="fa" style={{ position: "relative", width: "100%", maxWidth: 320, display: "flex", justifyContent: "center" }}>
                {product.image
                  ? (
                    <div style={{ width: "100%", maxWidth: 320, aspectRatio: "4 / 3", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.18)" }}>
                      <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "center" }} />
                    </div>
                  )
                  : <Jar bg={product.bg} lid={product.lid} size={260} />}
              </div>
            </div>
            {/* info */}
            <div>
              <div style={{ fontFamily: DISPLAY, fontSize: TEXT_XS, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: INK, opacity: .42, marginBottom: 14 }}>{product.desc}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {product.tags.map(t => (
                  <span key={t} style={{ fontFamily: SANS, fontSize: TEXT_XS, color: INK, opacity: .65, border: "1.5px solid rgba(23,23,23,.16)", borderRadius: 100, padding: "5px 13px" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H2, color: HEADING_INK, margin: "0 0 14px", letterSpacing: "-.5px", textTransform: "uppercase" }}>{product.name}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: INK, fontSize: TEXT_MD }}>{i < Math.round(product.rating) ? "★" : "☆"}</span>)}
                </div>
                <span style={{ fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .55 }}>{product.rating} · {product.reviewCount} reviews</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: TEXT_4XL, fontWeight: 900, color: INK }}>{product.price}</div>
                {product.originalPrice && <div style={{ fontFamily: SANS, fontSize: TEXT_MD, color: INK, opacity: .4, textDecoration: "line-through" }}>{product.originalPrice}</div>}
                {discountPct !== null && <div style={{ fontFamily: SANS, fontSize: TEXT_SM, fontWeight: 700, color: INK, opacity: .55 }}>{discountPct}% off</div>}
              </div>
              <div style={{ fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .5, marginBottom: 20 }}>{JAR_SIZE} · inclusive of all taxes</div>
              <p style={{ fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .7, maxWidth: 440, marginBottom: 32 }}>{product.tagline}</p>

              {/* shade selector */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: TEXT_XS, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 12 }}>
                  Shade — <span style={{ opacity: 1 }}>{product.name}</span>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {PRODUCTS.map(sw => (
                    <Link key={sw.slug} to={`/product/${sw.slug}`} aria-label={`View ${sw.name}`} className="swatchDot"
                      style={{
                        width: 36, height: 36, borderRadius: "50%", background: sw.bg, display: "block",
                        border: sw.slug === product.slug ? `2.5px solid ${INK}` : "2.5px solid transparent",
                        boxShadow: sw.slug === product.slug ? `0 0 0 3px ${BG}, 0 0 0 4.5px ${INK}` : "0 2px 6px rgba(0,0,0,.14)",
                      }} />
                  ))}
                </div>
              </div>

              {/* qty + add to bag */}
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", border: `2px solid rgba(23,23,23,.14)`, borderRadius: 100, padding: 4 }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity" style={{ width: 36, height: 36, border: "none", background: "transparent", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: INK }}><Minus size={15} /></button>
                  <span style={{ width: 30, textAlign: "center", fontFamily: DISPLAY, fontSize: TEXT_MD }}>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} aria-label="Increase quantity" style={{ width: 36, height: 36, border: "none", background: "transparent", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: INK }}><Plus size={15} /></button>
                </div>
                <button
                  disabled={soldOut}
                  onClick={() => addItem(product.slug, qty)}
                  className={soldOut ? "" : "pbtn pulseAnim"}
                  style={{
                    background: soldOut ? "rgba(23,23,23,.08)" : YELLOW, color: soldOut ? "rgba(23,23,23,.4)" : INK, border: "none",
                    borderRadius: 100, padding: "18px 40px", fontFamily: DISPLAY, fontSize: TEXT_BASE, letterSpacing: "1px", textTransform: "uppercase",
                    cursor: soldOut ? "default" : "pointer",
                  }}
                >
                  {soldOut ? "Sold Out" : `Add to Bag — ₹${unitPrice * qty}`}
                </button>
              </div>

              {/* trust row */}
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 8 }}>
                {FEATURES.slice(0, 3).map(f => (
                  <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6 }}>
                    <span>{f.icon}</span>{f.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* accordion */}
          <div style={{ maxWidth: 660, marginTop: 56 }}>
            <AccordionItem title="Description" open={openAcc === "description"} onToggle={() => setOpenAcc(o => o === "description" ? null : "description")}>
              {product.longDesc}
            </AccordionItem>
            <AccordionItem title="Ingredients" open={openAcc === "ingredients"} onToggle={() => setOpenAcc(o => o === "ingredients" ? null : "ingredients")}>
              {product.ingredients.join(" · ")}
            </AccordionItem>
            <AccordionItem title="Usage" open={openAcc === "usage"} onToggle={() => setOpenAcc(o => o === "usage" ? null : "usage")}>
              <ol style={{ margin: 0, paddingLeft: 18 }}>
                {product.usage.map((step, i) => <li key={i} style={{ marginBottom: 6 }}>{step}</li>)}
              </ol>
            </AccordionItem>
            <AccordionItem title="Safety" open={openAcc === "safety"} onToggle={() => setOpenAcc(o => o === "safety" ? null : "safety")}>
              {SAFETY_INFO}
            </AccordionItem>
            <AccordionItem title="FAQ" open={openAcc === "faq"} onToggle={() => setOpenAcc(o => o === "faq" ? null : "faq")}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {PRODUCT_FAQS.map(f => (
                  <div key={f.q}>
                    <div style={{ fontFamily: SANS, fontWeight: 700, color: INK, opacity: .85, marginBottom: 3 }}>{f.q}</div>
                    <div>{f.a}</div>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* related */}
      <section style={{ background: BG, padding: "88px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_3XL, color: INK, opacity: .5, marginBottom: 6 }}>— keep exploring —</div>
            <h2 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H3, color: HEADING_INK, margin: 0, letterSpacing: "-.5px", textTransform: "uppercase" }}>Complete the Collection</h2>
          </div>
          <div className="pdpRelated" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {related.map((p, i) => <ProductCard key={p.slug} p={p} delay={i * 80} />)}
          </div>
        </div>
      </section>
    </>
  );
}
