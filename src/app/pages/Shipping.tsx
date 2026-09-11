import { Truck, Package, Clock, MapPin } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, DISPLAY_H3, TEXT_MD, TEXT_2XL, TEXT_XL, TEXT_2XS } from "../theme";
import { useFadeUp } from "../hooks/useFadeUp";

const DETAILS = [
  {
    icon: MapPin,
    title: "Where we ship",
    body: "We currently ship across India.",
  },
  {
    icon: Clock,
    title: "Processing time",
    body: "Orders are usually packed and dispatched within 1–3 business days.",
  },
  {
    icon: Truck,
    title: "Delivery time",
    body: "Once dispatched, orders generally arrive within 3–7 business days, depending on your location and the courier service.",
  },
];

function DetailCard({ item, delay }: { item: typeof DETAILS[0]; delay: number }) {
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

export default function Shipping() {
  const intro = useFadeUp(0);
  const noteFu = useFadeUp(120);
  const updatesFu = useFadeUp(160);

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "72px 24px 96px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— sparkle, safely delivered —</div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: DISPLAY_H3, color: HEADING_INK, margin: "0 0 24px", letterSpacing: "-1px", textTransform: "uppercase" }}>
          Shipping
        </h1>

        <div ref={intro.ref} style={{ ...intro.s, marginBottom: 40 }}>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75, maxWidth: 640 }}>
            At Bling, we're a growing Indian brand, and every order matters to us. We carefully pack each order so your edible glitter reaches you safely and ready to sparkle. ✨
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <Truck size={20} color={INK} />
          <h2 style={{ margin: 0, fontFamily: DISPLAY, fontSize: TEXT_XL, color: HEADING_INK, textTransform: "uppercase", letterSpacing: "-0.3px" }}>Shipping</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
          {DETAILS.map((item, i) => (
            <DetailCard key={item.title} item={item} delay={i * 60} />
          ))}
        </div>

        <div ref={noteFu.ref} style={{ ...noteFu.s, background: "rgba(23,23,23,.05)", borderRadius: 16, padding: "18px 22px", marginBottom: 48 }}>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.75, color: INK, opacity: .65 }}>
            Please note that delivery timelines are estimates and may vary due to weekends, holidays, weather, courier delays, or circumstances beyond our control.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <Package size={20} color={INK} />
          <h2 style={{ margin: 0, fontFamily: DISPLAY, fontSize: TEXT_XL, color: HEADING_INK, textTransform: "uppercase", letterSpacing: "-0.3px" }}>Shipping Updates</h2>
        </div>

        <div ref={updatesFu.ref} style={{ ...updatesFu.s, background: "#fff", borderRadius: 20, padding: "26px 24px", boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
          <p style={{ margin: "0 0 14px", fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75 }}>
            Once your order has been shipped, you'll receive a tracking link/details so you can follow your package.
          </p>
          <p style={{ margin: 0, fontFamily: SANS, fontSize: TEXT_MD, lineHeight: 1.8, color: INK, opacity: .75 }}>
            If you haven't received your order within the expected timeframe, please reach out to us at{" "}
            <a href="mailto:hello@bling.co.in" style={{ color: INK, fontWeight: 700, textDecoration: "underline" }}>hello@bling.co.in</a>{" "}
            with your order number and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
