import { useState } from "react";
import { Link } from "react-router";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, DISPLAY_H1, TEXT_3XL, TEXT_BASE, TEXT_SM, TEXT_2XL, TEXT_MD } from "../theme";
import { COLLECTIONS, type Collection } from "../data/collections";
import { useFadeUp } from "../hooks/useFadeUp";

function CollectionCard({ c, delay }: { c: Collection; delay: number }) {
  const fu = useFadeUp(delay);
  const [hov, setHov] = useState(false);
  return (
    <div ref={fu.ref} style={fu.s}>
      <Link to={`/collections/${c.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div
          style={{
            position: "relative", borderRadius: 32, minHeight: 320, padding: "28px 32px", overflow: "hidden",
            background: `radial-gradient(circle at 25% 22%, rgba(255,255,255,.45), transparent 55%), linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})`,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            transform: hov ? "translateY(-8px)" : "translateY(0)",
            boxShadow: hov ? "0 24px 56px rgba(0,0,0,.16)" : "0 4px 18px rgba(0,0,0,.08)",
            transition: "all .38s cubic-bezier(.34,1.56,.64,1)", cursor: "pointer",
          }}
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        >
          <h3 style={{ fontFamily: DISPLAY, fontSize: TEXT_3XL, color: HEADING_INK, margin: "0 0 8px", letterSpacing: "-.5px" }}>{c.name}</h3>
          <p style={{ fontFamily: SANS, fontSize: TEXT_BASE, color: INK, opacity: .68, lineHeight: 1.6, margin: "0 0 18px", maxWidth: 320 }}>{c.subtitle}</p>
          <span style={{ fontFamily: DISPLAY, fontSize: TEXT_SM, letterSpacing: ".5px", textTransform: "uppercase", color: INK, display: "inline-flex", alignItems: "center", gap: 6 }}>
            Shop the Edit <span style={{ transition: "transform .3s cubic-bezier(.34,1.56,.64,1)", display: "inline-block", transform: hov ? "translateX(4px)" : "translateX(0)" }}>→</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function Collections() {
  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 8px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— curated —</div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H1, color: HEADING_INK, margin: "0 0 12px", letterSpacing: "-1px", textTransform: "uppercase" }}>Collections</h1>
        <p style={{ fontFamily: SANS, fontSize: TEXT_MD, color: INK, opacity: .6, margin: 0 }}>Shade edits curated for the moments that matter most.</p>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 100px" }}>
        <div className="collGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {COLLECTIONS.map((c, i) => <CollectionCard key={c.slug} c={c} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
