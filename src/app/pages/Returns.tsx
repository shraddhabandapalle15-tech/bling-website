import { Heart, Camera, FileText, PackageX } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, DISPLAY_H3, TEXT_MD, TEXT_2XL, TEXT_XL, TEXT_2XS } from "../theme";
import { useFadeUp } from "../hooks/useFadeUp";

const CHECKLIST = [
  {
    icon: FileText,
    title: "Your order number",
    body: "So we can quickly look up your order.",
  },
  {
    icon: Camera,
    title: "Clear photos/videos",
    body: "Of the package and product, showing the damage or issue.",
  },
  {
    icon: PackageX,
    title: "A brief description",
    body: "Tell us what went wrong so we can sort it out fast.",
  },
];

function ChecklistCard({ item, delay }: { item: typeof CHECKLIST[0]; delay: number }) {
  const fu = useFadeUp(delay);
  return (
    <div ref={fu.ref} style={{ ...fu.s, background: "#fff", borderRadius: 20, padding: "26px 24px", display: "flex", gap: 16, alignItems: "flex-start", boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
      <div style={{ width: 42, height: 42, borderRadius: "50%", background: BG, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <item.icon size={18} color={INK} />
      </div>
      <div>
        <div style={{ fontFamily: DISPLAY, fontSize: TEXT_2XS, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 6 }}>{item.title}</div>
        <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.7, color: INK, opacity: .75 }}>{item.body}</p>
      </div>
    </div>
  );
}

export default function Returns() {
  const intro = useFadeUp(0);
  const helpFu = useFadeUp(80);
  const resolutionFu = useFadeUp(200);
  const noteFu = useFadeUp(240);

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "72px 24px 96px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— we've got you —</div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H3, color: HEADING_INK, margin: "0 0 24px", letterSpacing: "-1px", textTransform: "uppercase" }}>
          Returns &amp; Exchanges
        </h1>

        <div ref={intro.ref} style={{ ...intro.s, marginBottom: 40 }}>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75, maxWidth: 640 }}>
            Because our products are edible food products, we currently do not accept returns or exchanges once an order has been delivered, unless the product arrives damaged, incorrect, or defective.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <Heart size={20} color={INK} />
          <h2 style={{ margin: 0, fontFamily: DISPLAY, fontSize: TEXT_XL, color: HEADING_INK, textTransform: "uppercase", letterSpacing: "-0.3px" }}>Received a damaged or incorrect product?</h2>
        </div>

        <div ref={helpFu.ref} style={{ ...helpFu.s, background: "#fff", borderRadius: 20, padding: "26px 24px", boxShadow: "0 4px 20px rgba(0,0,0,.05)", marginBottom: 28 }}>
          <p style={{ margin: "0 0 8px", fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75 }}>
            We're here to help.
          </p>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75 }}>
            Please contact us within 48 hours of delivery at{" "}
            <a href="mailto:hello@bling.co.in" style={{ color: INK, fontWeight: 700, textDecoration: "underline" }}>hello@bling.co.in</a>{" "}
            and include:
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
          {CHECKLIST.map((item, i) => (
            <ChecklistCard key={item.title} item={item} delay={i * 60} />
          ))}
        </div>

        <div ref={resolutionFu.ref} style={{ ...resolutionFu.s, background: "#fff", borderRadius: 20, padding: "26px 24px", boxShadow: "0 4px 20px rgba(0,0,0,.05)", marginBottom: 16 }}>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75 }}>
            Once we review the issue, we'll work with you on the best possible resolution, which may include a replacement or refund, depending on the situation.
          </p>
        </div>

        <div ref={noteFu.ref} style={{ ...noteFu.s, background: "rgba(23,23,23,.05)", borderRadius: 16, padding: "18px 22px" }}>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.75, color: INK, opacity: .65 }}>
            Please do not throw away the product or packaging until your issue has been resolved, as we may need photos or other details to investigate the claim.
          </p>
        </div>
      </div>
    </section>
  );
}
