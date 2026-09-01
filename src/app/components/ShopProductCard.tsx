import { useState } from "react";
import { Link } from "react-router";
import { BG, INK, YELLOW, DISPLAY, SANS, TEXT_2XS, TEXT_MD, TEXT_SM, TEXT_LG, TEXT_XS } from "../theme";
import { type Product } from "../data/products";
import { useFadeUp } from "../hooks/useFadeUp";
import { useCart } from "../context/CartContext";
import { Jar } from "./Jar";

export function ShopProductCard({ p, delay }: { p: Product; delay: number }) {
  const fu = useFadeUp(delay);
  const [hov, setHov] = useState(false);
  const { addItem } = useCart();
  const soldOut = p.inStock === false;
  const badgeLabel = soldOut ? "Sold Out" : p.originalPrice ? "Sale" : p.badge;
  const badgeStyle = soldOut
    ? { background: INK, color: BG }
    : p.originalPrice
    ? { background: INK, color: BG }
    : { background: BG, color: INK };

  return (
    <div ref={fu.ref} style={fu.s}>
      <Link to={`/product/${p.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div
          style={{
            background: "#fff", borderRadius: 28, overflow: "hidden", height: "100%",
            transform: hov ? "translateY(-8px)" : "translateY(0)",
            boxShadow: hov ? "0 24px 56px rgba(0,0,0,.12)" : "0 4px 18px rgba(0,0,0,.06)",
            transition: "all .38s cubic-bezier(.34,1.56,.64,1)", cursor: "pointer",
          }}
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        >
          <div style={{ position: "relative", background: p.bg, padding: "34px 0 26px", display: "flex", justifyContent: "center" }}>
            {badgeLabel && (
              <div style={{ position: "absolute", top: 14, left: 14, ...badgeStyle, borderRadius: 100, padding: "5px 13px", fontSize: TEXT_2XS, letterSpacing: ".5px", textTransform: "uppercase", fontFamily: DISPLAY }}>
                {badgeLabel}
              </div>
            )}
            <div style={{ transform: hov ? "scale(1.08) translateY(-4px)" : "scale(1)", transition: "transform .42s cubic-bezier(.34,1.56,.64,1)" }}>
              {p.image
                ? <img src={p.image} alt={p.name} style={{ width:"100%", maxWidth:140, aspectRatio:"1/1", objectFit:"cover", borderRadius:"50%", boxShadow:"0 8px 24px rgba(0,0,0,.16)" }} />
                : <Jar bg={p.bg} lid={p.lid} size={100} />}
            </div>
          </div>
          <div style={{ padding: "18px 20px 22px" }}>
            <div style={{ fontFamily: DISPLAY, fontSize: TEXT_MD, color: INK, marginBottom: 6, letterSpacing: ".2px" }}>{p.name}</div>
            <div style={{ fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6, marginBottom: 14, lineHeight: 1.5, minHeight: 38 }}>{p.tagline}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
              <span style={{ fontFamily: DISPLAY, fontSize: TEXT_LG, color: INK }}>{p.price}</span>
              {p.originalPrice && <span style={{ fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .4, textDecoration: "line-through" }}>{p.originalPrice}</span>}
            </div>
            <button
              disabled={soldOut}
              onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(p.slug); }}
              className={soldOut ? "" : "pbtn"}
              style={{
                width: "100%", border: "none", textAlign: "center", borderRadius: 100, padding: "12px 18px", fontFamily: DISPLAY, fontSize: TEXT_XS,
                letterSpacing: ".5px", textTransform: "uppercase", cursor: soldOut ? "default" : "pointer",
                background: soldOut ? "rgba(23,23,23,.08)" : YELLOW,
                color: soldOut ? "rgba(23,23,23,.4)" : INK,
              }}
            >
              {soldOut ? "Sold Out" : "Add to Cart"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
