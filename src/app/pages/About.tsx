import { BG, PEACH, LAV, PINK, YELLOW, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, DISPLAY_H1, DISPLAY_H3, TEXT_XL, TEXT_BASE, TEXT_2XL, TEXT_MD } from "../theme";
import { Wave } from "../components/Wave";
import { useFadeUp } from "../hooks/useFadeUp";

const VALUES = [
  {
    title: "Mission",
    text: "To make every drink — from a morning lemonade to a wedding toast — feel like an occasion worth remembering.",
    colorFrom: PINK, colorTo: "#d498be",
  },
  {
    title: "Vision",
    text: "A world where premium, food-safe sparkle is accessible to every home bartender, cafe, and celebration.",
    colorFrom: LAV, colorTo: "#9e94d8",
  },
  {
    title: "Food Safety",
    text: "Every batch is FSSAI approved, lab-tested, and made with ingredients that meet global food-grade standards.",
    colorFrom: YELLOW, colorTo: "#c8bc60",
  },
];

function ValueCard({ v, delay }: { v: typeof VALUES[0]; delay: number }) {
  const fu = useFadeUp(delay);
  return (
    <div ref={fu.ref} style={fu.s}>
      <div style={{
        borderRadius: 28, minHeight: 180, padding: "28px 28px 24px",
        background: `radial-gradient(circle at 25% 22%, rgba(255,255,255,.45), transparent 55%), linear-gradient(135deg, ${v.colorFrom}, ${v.colorTo})`,
        boxShadow: "0 4px 18px rgba(0,0,0,.06)",
      }}>
        <h3 style={{ fontFamily: DISPLAY, fontSize: TEXT_XL, color: HEADING_INK, margin: "0 0 12px", letterSpacing: "-.3px" }}>{v.title}</h3>
        <p style={{ fontFamily: SANS, fontSize: TEXT_BASE, color: INK, opacity: .72, lineHeight: 1.7, margin: 0 }}>{v.text}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section style={{ background: BG, paddingTop: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px 8px", textAlign: "center" }}>
          <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— our story —</div>
          <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H1, color: HEADING_INK, margin: "0 0 20px", letterSpacing: "-1px", textTransform: "uppercase" }}>
            Sparkle, Made Responsibly.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: TEXT_MD, color: INK, opacity: .62, lineHeight: 1.8, margin: "0 auto", maxWidth: 640 }}>
            Bling started with a simple question: why should something this magical be an afterthought? We set out to build a
            glitter that disappears on the tongue but never in the photo — food grade, FSSAI approved, and crafted in India
            for the way people actually drink, celebrate, and create.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 100px" }}>
          <div className="featGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} delay={i * 90} />)}
          </div>
        </div>
        <Wave from={BG} to={PEACH} />
      </section>

      <section style={{ background: PEACH, padding: "88px 24px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .5, marginBottom: 6 }}>— made in india —</div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H3, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.5px", textTransform: "uppercase", lineHeight: 1.15 }}>
            Crafted Close to Home, Shipped Across the Country
          </h2>
          <p style={{ fontFamily: SANS, fontSize: TEXT_MD, color: INK, opacity: .68, lineHeight: 1.8, margin: 0 }}>
            Every jar of Bling is produced in India under strict food-safety protocols, then shipped pan-India so the sparkle
            reaches you — wherever you are.
          </p>
        </div>
        <div style={{ paddingBottom: 88 }} />
        <Wave from={PEACH} to={BG} />
      </section>
    </>
  );
}
