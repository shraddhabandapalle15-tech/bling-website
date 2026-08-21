import { Link, useParams } from "react-router";
import { BG, INK, HEADING_INK, DISPLAY, SANS } from "../theme";
import { COLLECTIONS } from "../data/collections";
import { PRODUCTS } from "../data/products";
import { ShopProductCard } from "../components/ShopProductCard";

export default function CollectionDetail() {
  const { slug } = useParams();
  const collection = COLLECTIONS.find(c => c.slug === slug) ?? COLLECTIONS[0];
  const products = collection.productSlugs
    .map(s => PRODUCTS.find(p => p.slug === s))
    .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: SANS, fontSize: 13, color: INK, opacity: .5, marginBottom: 18 }}>
          <Link to="/collections" style={{ color: INK, textDecoration: "none" }}>Collections</Link>
          <span>/</span>
          <span style={{ opacity: .85 }}>{collection.name}</span>
        </div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(34px,5vw,64px)", color: HEADING_INK, margin: "0 0 12px", letterSpacing: "-1px", textTransform: "uppercase" }}>{collection.name}</h1>
        <p style={{ fontFamily: SANS, fontSize: 16, color: INK, opacity: .6, margin: 0, maxWidth: 520 }}>{collection.subtitle}</p>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 100px" }}>
        <div className="shopCardGrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
          {products.map((p, i) => <ShopProductCard key={p.slug} p={p} delay={Math.min(i, 8) * 60} />)}
        </div>
      </div>
    </section>
  );
}
