import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { BG, INK, HEADING_INK, DISPLAY, SCRIPT2, SANS, DISPLAY_H1, TEXT_MD, TEXT_2XL, TEXT_SM, TEXT_BASE, TEXT_2XS } from "../theme";

const CHANNELS = [
  { icon: Mail, label: "Email", value: "hello@bling.co.in" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000" },
  { icon: Instagram, label: "Instagram", value: "@blingglitter" },
];

const fieldStyle = {
  width: "100%", border: "1.5px solid rgba(23,23,23,.14)", borderRadius: 14, padding: "13px 16px",
  fontFamily: SANS, fontSize: TEXT_MD, color: INK, background: "#fff", outline: "none", boxSizing: "border-box" as const,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "72px 24px 100px" }}>
        <div style={{ fontFamily: SCRIPT2, fontSize: TEXT_2XL, color: INK, opacity: .55, marginBottom: 6 }}>— get in touch —</div>
        <h1 style={{ fontFamily: SANS, fontWeight: 700, fontSize: DISPLAY_H1, color: HEADING_INK, margin: "0 0 44px", letterSpacing: "-0.5px" }}>
          Contact Us
        </h1>

        <div className="shopLayout" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ display: "block", fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6, marginBottom: 7 }}>Name</label>
              <input required type="text" style={fieldStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6, marginBottom: 7 }}>Email</label>
              <input required type="email" style={fieldStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: SANS, fontSize: TEXT_SM, color: INK, opacity: .6, marginBottom: 7 }}>Message</label>
              <textarea required rows={5} style={{ ...fieldStyle, resize: "vertical" as const }} />
            </div>
            <button type="submit" className="pbtn" style={{ background: INK, color: BG, border: "none", borderRadius: 100, padding: "16px 32px", fontFamily: DISPLAY, fontSize: TEXT_BASE, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer" }}>
              {sent ? "Message Sent ✦" : "Send Message"}
            </button>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CHANNELS.map(c => (
              <div key={c.label} style={{ border: "1.5px solid rgba(23,23,23,.12)", borderRadius: 18, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14, background: "#fff" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: BG, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <c.icon size={16} color={INK} />
                </div>
                <div>
                  <div style={{ fontFamily: DISPLAY, fontSize: TEXT_2XS, letterSpacing: "1px", textTransform: "uppercase", color: INK, opacity: .5, marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: TEXT_MD, color: INK }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
