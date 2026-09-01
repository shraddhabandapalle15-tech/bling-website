import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { INK, BG, YELLOW, DISPLAY, SANS, TEXT_4XL, TEXT_LG, TEXT_SM, TEXT_2XS, TEXT_MD } from "../theme";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "Recipes", to: "/recipes" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { count, open: openCart } = useCart();
  useEffect(() => {
    const h = () => setScroll(window.scrollY > 28);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background: scroll ? "rgba(247,232,232,.94)" : "transparent", backdropFilter: scroll ? "blur(24px)" : "none", borderBottom: scroll ? "1px solid rgba(23,23,23,.07)" : "none", transition:"all .35s ease", padding:"0 24px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:72 }}>
        <Link to="/" style={{ fontFamily:"Caveat, cursive", fontSize:TEXT_4XL, fontWeight:700, color:"rgb(37, 37, 37)", userSelect:"none", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, transform:"rotate(-2deg)" }}>
          Bling <span style={{ fontFamily:"initial", fontSize:TEXT_LG }}>✦</span>
        </Link>
        <nav className="dlinks" style={{ display:"flex", gap:22 }}>
          {NAV_LINKS.map(l => (
            <Link key={l.label} to={l.to} className="nlink" style={{ fontFamily:SANS, fontWeight:600, fontSize:TEXT_SM, letterSpacing:"1px", textTransform:"uppercase", color:INK, textDecoration:"none", opacity:.9, whiteSpace:"nowrap" }}>{l.label}</Link>
          ))}
        </nav>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <button onClick={openCart} aria-label="Open cart" style={{ position:"relative", background:"none", border:"none", cursor:"pointer", color:INK, padding:6, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <ShoppingCart size={22} />
            {count > 0 && (
              <span style={{ position:"absolute", top:-2, right:-2, background:INK, color:BG, borderRadius:"50%", minWidth:17, height:17, fontSize:TEXT_2XS, fontFamily:DISPLAY, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 3px" }}>
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="mbtn" style={{ display:"none", background:"none", border:"none", cursor:"pointer", color:INK, padding:4 }}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {open && (
        <div style={{ position:"absolute", top:72, left:0, right:0, background:"rgba(247,232,232,.98)", backdropFilter:"blur(24px)", padding:"24px 28px 32px", borderBottom:"1px solid rgba(23,23,23,.08)" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} style={{ display:"block", padding:"14px 0", fontFamily:SANS, fontWeight:600, fontSize:TEXT_MD, letterSpacing:"1px", textTransform:"uppercase", color:INK, textDecoration:"none", opacity:.9, borderBottom:"1px solid rgba(23,23,23,.08)" }}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
