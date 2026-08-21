import { useState, type FormEvent, type CSSProperties } from "react";
import { Link } from "react-router";
import { BG, INK, HEADING_INK, YELLOW, DISPLAY, SCRIPT2, SANS } from "../theme";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { Jar } from "../components/Jar";

const PAYMENT_METHODS = ["UPI", "Cards", "Net Banking", "Wallets"] as const;
const FREE_SHIPPING_MIN = 999;

function priceNum(price: string) {
  return parseFloat(price.replace("₹", ""));
}

const fieldStyle: CSSProperties = {
  width: "100%", border: "1.5px solid rgba(23,23,23,.14)", borderRadius: 14, padding: "13px 16px",
  fontFamily: SANS, fontSize: 15, color: INK, background: "#fff", outline: "none", boxSizing: "border-box",
};

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [payment, setPayment] = useState<typeof PAYMENT_METHODS[number]>("UPI");
  const [placed, setPlaced] = useState(false);

  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_MIN ? 0 : 49;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <section style={{ background: BG, paddingTop: 72, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "24px", textAlign: "center" }}>
          <div style={{ fontFamily: SCRIPT2, fontSize: 22, color: INK, opacity: .55, marginBottom: 6 }}>— all set —</div>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(30px,4.5vw,48px)", color: HEADING_INK, margin: "0 0 16px", letterSpacing: "-1px", textTransform: "uppercase" }}>
            Order Placed ✦
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 16, color: INK, opacity: .65, lineHeight: 1.8, margin: "0 0 32px" }}>
            Thank you! A confirmation has been sent to your email. Your sparkle is on its way.
          </p>
          <Link to="/shop" className="pbtn" style={{ display: "inline-block", background: YELLOW, color: INK, borderRadius: 100, padding: "16px 36px", fontFamily: DISPLAY, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}>
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section style={{ background: BG, paddingTop: 72, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px", textAlign: "center" }}>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", color: HEADING_INK, margin: "0 0 16px", letterSpacing: "-1px", textTransform: "uppercase" }}>
            Your Cart Is Empty
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 15, color: INK, opacity: .6, margin: "0 0 28px" }}>Add a few shades before checking out.</p>
          <Link to="/shop" className="pbtn" style={{ display: "inline-block", background: YELLOW, color: INK, borderRadius: 100, padding: "16px 36px", fontFamily: DISPLAY, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}>
            Shop Glitter
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: BG, paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 100px" }}>
        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(32px,4.5vw,52px)", color: HEADING_INK, margin: "0 0 40px", letterSpacing: "-1px", textTransform: "uppercase" }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="shopLayout" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 19, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.2px" }}>Customer Details</h2>
            <div className="featGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>Full Name</label>
                <input required type="text" style={fieldStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>Email</label>
                <input required type="email" style={fieldStyle} />
              </div>
            </div>
            <div style={{ maxWidth: 340, marginBottom: 40 }}>
              <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>Phone</label>
              <input required type="tel" style={fieldStyle} />
            </div>

            <h2 style={{ fontFamily: DISPLAY, fontSize: 19, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.2px" }}>Shipping Address</h2>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>Address</label>
              <input required type="text" style={fieldStyle} />
            </div>
            <div className="featGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>City</label>
                <input required type="text" style={fieldStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>State</label>
                <input required type="text" style={fieldStyle} />
              </div>
            </div>
            <div style={{ maxWidth: 220, marginBottom: 40 }}>
              <label style={{ display: "block", fontFamily: SANS, fontSize: 13, color: INK, opacity: .6, marginBottom: 7 }}>Pincode</label>
              <input required type="text" style={fieldStyle} />
            </div>

            <h2 style={{ fontFamily: DISPLAY, fontSize: 19, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.2px" }}>Payment</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
              {PAYMENT_METHODS.map(m => {
                const on = payment === m;
                return (
                  <button key={m} type="button" onClick={() => setPayment(m)}
                    style={{
                      fontFamily: SANS, fontSize: 14, borderRadius: 14, padding: "13px 20px", cursor: "pointer",
                      border: `1.5px solid ${on ? INK : "rgba(23,23,23,.16)"}`, background: on ? "rgba(232,226,154,.35)" : "#fff", color: INK,
                    }}>
                    {m}
                  </button>
                );
              })}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 12.5, color: INK, opacity: .5, margin: 0 }}>Payments are securely processed via Razorpay.</p>
          </div>

          <div style={{ background: "#fff", borderRadius: 24, padding: 28, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 18, color: HEADING_INK, margin: "0 0 18px", letterSpacing: "-.2px" }}>Order Summary</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 18 }}>
              {items.map(i => {
                const p = PRODUCTS.find(pr => pr.slug === i.slug);
                if (!p) return null;
                return (
                  <div key={i.slug} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                      <Jar bg={p.bg} lid={p.lid} size={28} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: DISPLAY, fontSize: 13.5, color: INK }}>{p.name}</div>
                      <div style={{ fontFamily: SANS, fontSize: 12.5, color: INK, opacity: .5 }}>Qty {i.qty}</div>
                    </div>
                    <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 700, color: INK }}>₹{(priceNum(p.price) * i.qty).toFixed(0)}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ borderTop: "1px solid rgba(23,23,23,.1)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: SANS, fontSize: 14, color: INK, opacity: .68 }}>
                <span>Subtotal</span><span>₹{subtotal.toFixed(0)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: SANS, fontSize: 14, color: INK, opacity: .68 }}>
                <span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(0)}`}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: SANS, fontSize: 14, color: INK, opacity: .68 }}>
                <span>GST (5%)</span><span>₹{tax.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: DISPLAY, fontSize: 18, color: INK, marginBottom: 20 }}>
              <span>Total</span><span>₹{total.toFixed(2)}</span>
            </div>

            <button type="submit" className="pbtn" style={{ width: "100%", background: INK, color: BG, border: "none", borderRadius: 100, padding: "17px 24px", fontFamily: DISPLAY, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer" }}>
              Pay ₹{total.toFixed(2)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
