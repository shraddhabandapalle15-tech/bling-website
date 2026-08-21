import { Link } from "react-router";
import { X, Minus, Plus } from "lucide-react";
import { BG, INK, YELLOW, DISPLAY, SANS } from "../theme";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { Jar } from "./Jar";

export function CartDrawer() {
  const { items, isOpen, close, subtotal, removeItem, setQty, count } = useCart();

  return (
    <>
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, background: "rgba(23,23,23,.35)", zIndex: 200,
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity .3s ease",
        }}
      />
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px,100vw)", background: BG, zIndex: 201,
          display: "flex", flexDirection: "column", boxShadow: "-8px 0 40px rgba(0,0,0,.18)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)", transition: "transform .38s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 24px 18px", borderBottom: "1px solid rgba(23,23,23,.1)" }}>
          <div style={{ fontFamily: DISPLAY, fontSize: 18, color: INK, textTransform: "uppercase", letterSpacing: "-.2px" }}>Your Cart ({count})</div>
          <button onClick={close} aria-label="Close cart" style={{ background: "none", border: "none", cursor: "pointer", color: INK, padding: 4, display: "flex" }}>
            <X size={22} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "8px 24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "70px 12px", fontFamily: SANS, fontSize: 14.5, color: INK, opacity: .6 }}>
              Your cart is empty.
              <div style={{ marginTop: 18 }}>
                <Link to="/shop" onClick={close} style={{ fontFamily: DISPLAY, fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: INK, textDecoration: "underline" }}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            items.map(i => {
              const p = PRODUCTS.find(pr => pr.slug === i.slug);
              if (!p) return null;
              return (
                <div key={i.slug} style={{ display: "flex", gap: 14, padding: "18px 0", borderBottom: "1px solid rgba(23,23,23,.08)" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 14, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                    <Jar bg={p.bg} lid={p.lid} size={38} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <div style={{ fontFamily: DISPLAY, fontSize: 14, color: INK }}>{p.name}</div>
                      <button onClick={() => removeItem(i.slug)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: SANS, fontSize: 12, color: INK, opacity: .45, textDecoration: "underline", padding: 0, flexShrink: 0 }}>
                        Remove
                      </button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", border: "1.5px solid rgba(23,23,23,.14)", borderRadius: 100, padding: 2 }}>
                        <button onClick={() => setQty(i.slug, i.qty - 1)} aria-label="Decrease quantity" style={{ width: 26, height: 26, border: "none", background: "transparent", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: INK }}>
                          <Minus size={12} />
                        </button>
                        <span style={{ width: 22, textAlign: "center", fontFamily: SANS, fontSize: 13 }}>{i.qty}</span>
                        <button onClick={() => setQty(i.slug, i.qty + 1)} aria-label="Increase quantity" style={{ width: 26, height: 26, border: "none", background: "transparent", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: INK }}>
                          <Plus size={12} />
                        </button>
                      </div>
                      <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 700, color: INK }}>₹{(priceNum(p.price) * i.qty).toFixed(0)}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div style={{ padding: "20px 24px 28px", borderTop: "1px solid rgba(23,23,23,.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontFamily: SANS, fontSize: 15, fontWeight: 700, color: INK }}>
              <span>Subtotal</span><span>₹{subtotal.toFixed(0)}</span>
            </div>
            <div style={{ fontFamily: SANS, fontSize: 12.5, color: INK, opacity: .5, marginBottom: 18 }}>Shipping and taxes calculated at checkout.</div>
            <Link to="/checkout" onClick={close} className="pbtn" style={{ display: "block", textAlign: "center", background: YELLOW, color: INK, borderRadius: 100, padding: "16px 32px", fontFamily: DISPLAY, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}>
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

function priceNum(price: string) {
  return parseFloat(price.replace("₹", ""));
}
