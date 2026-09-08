import { Link } from "react-router";
import { Heart } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, YELLOW, DISPLAY_H1, TEXT_SM, TEXT_2XL, TEXT_BASE, TEXT_MD } from "../theme";
import { PRODUCTS } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { ProductCard } from "../components/ProductCard";

export default function Wishlist() {
  const { items } = useWishlist();
  const wishedProducts = items
    .map(slug => PRODUCTS.find(p => p.slug === slug))
    .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 8px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— saved for later —</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H1, color: HEADING_INK, margin: 0, letterSpacing: "-1px", textTransform: "uppercase" }}>My Wishlist</h1>
          {wishedProducts.length > 0 && (
            <div style={{ fontFamily: SANS, fontSize: TEXT_BASE, color: INK, opacity: .5 }}>{wishedProducts.length} saved {wishedProducts.length === 1 ? "shade" : "shades"}</div>
          )}
        </div>
      </div>

      {wishedProducts.length === 0 ? (
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 140px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
            <Heart size={34} color={INK} style={{ opacity: .3 }} />
          </div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: TEXT_2XL, color: HEADING_INK, textTransform: "uppercase", letterSpacing: "-.3px", margin: "0 0 10px" }}>Your Wishlist is Empty</h2>
          <p style={{ fontFamily: SANS, fontSize: TEXT_MD, color: INK, opacity: .6, margin: "0 0 32px" }}>Save your favourite glitters for later.</p>
          <Link to="/shop" className="pbtn" style={{ display: "inline-block", background: YELLOW, color: INK, border: "none", borderRadius: 100, padding: "18px 44px", fontFamily: DISPLAY, fontSize: TEXT_SM, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}>
            Browse Shop
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 100px" }}>
          <div className="prodGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {wishedProducts.map((p, i) => <ProductCard key={p.slug} p={p} delay={i * 60} />)}
          </div>
        </div>
      )}
    </section>
  );
}
