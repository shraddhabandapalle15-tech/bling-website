import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS } from "../theme";
import { useFadeUp } from "../hooks/useFadeUp";

const FAQS = [
  {
    q: "Is Bling glitter safe to eat?",
    a: "Yes. Every shade is 100% food grade, FSSAI approved, and made with edible ingredients like mica, gum arabic, and food-safe colourants. It's completely safe to consume.",
  },
  {
    q: "Does it change the taste of my drink?",
    a: "No — Bling is completely tasteless and odourless. It only adds shimmer, never flavour.",
  },
  {
    q: "How much should I use per drink?",
    a: "A small pinch (about 1/8 tsp) is enough for a standard 250-350ml drink. You can always add more for extra sparkle.",
  },
  {
    q: "Can I use it in hot drinks like coffee or tea?",
    a: "Yes, but we recommend adding it once the drink is below 80°C for the best shimmer effect.",
  },
  {
    q: "Where do you ship?",
    a: "We ship pan-India via Shiprocket, with tracking provided on every order. Most orders arrive within 3-7 business days.",
  },
  {
    q: "Is Bling vegan?",
    a: "Yes, all our glitter shades are 100% vegan and gluten-free.",
  },
];

function FAQItem({ item, open, onToggle, delay, last }: { item: typeof FAQS[0]; open: boolean; onToggle: () => void; delay: number; last: boolean }) {
  const fu = useFadeUp(delay);
  return (
    <div ref={fu.ref} style={{ ...fu.s, borderBottom: last ? "none" : "1px solid rgba(23,23,23,.1)" }}>
      <button onClick={onToggle} className="accHead" aria-expanded={open}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "22px 4px", background: "none", border: "none", fontFamily: SANS, fontWeight: 600, fontSize: 16, color: INK, cursor: "pointer", textAlign: "left" }}>
        {item.q}
        <ChevronDown size={18} style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .3s" }} />
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ margin: "0 4px 24px", fontFamily: SANS, fontSize: 15, lineHeight: 1.75, color: INK, opacity: .68, maxWidth: 640 }}>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "72px 24px 96px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: 22, color: INK, opacity: .55, marginBottom: 6 }}>— good to know —</div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(34px,5vw,56px)", color: HEADING_INK, margin: "0 0 40px", letterSpacing: "-1px", textTransform: "uppercase" }}>
          Frequently Asked Questions
        </h1>

        <div style={{ background: "#fff", borderRadius: 24, padding: "8px 28px", boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} item={item} open={open === i} onToggle={() => setOpen(o => o === i ? null : i)} delay={i * 60} last={i === FAQS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
