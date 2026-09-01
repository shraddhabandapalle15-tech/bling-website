import { useState } from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { INK, BG, DISPLAY, SANS, TEXT_2XS, TEXT_SM, TEXT_MD, TEXT_XL, TEXT_XS } from "../theme";
import { PRODUCTS } from "../data/products";
import { useFadeUp } from "../hooks/useFadeUp";
import { useCart } from "../context/CartContext";
import { Jar } from "./Jar";

export function ProductCard({ p, delay = 0 }: { p: typeof PRODUCTS[0]; delay?: number }) {
  const fu = useFadeUp(delay);
  const [hov, setHov] = useState(false);
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();
  return (
    <div ref={fu.ref} style={fu.s}>
      <Link to={`/product/${p.slug}`} style={{ textDecoration:"none", color:"inherit", display:"block" }}>
        <div
          style={{ background:p.bg, borderRadius:28, padding:"32px 24px 24px", position:"relative", overflow:"hidden", cursor:"pointer",
            transform: hov ? "translateY(-12px) rotate(1deg)" : "translateY(0) rotate(0deg)",
            boxShadow: hov ? "0 28px 64px rgba(0,0,0,0.14)" : "0 4px 18px rgba(0,0,0,0.06)",
            transition:"all .38s cubic-bezier(.34,1.56,.64,1)" }}
          onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
          {p.badge && <div style={{ position:"absolute", top:16, right:16, background:BG, color:INK, borderRadius:100, padding:"5px 13px", fontSize:TEXT_2XS, letterSpacing:".5px", textTransform:"uppercase", fontFamily:DISPLAY }}>{p.badge}</div>}
          <button onClick={e=>{e.preventDefault();e.stopPropagation();setLiked(!liked);}} style={{ position:"absolute", top:16, left:16, background:BG, border:"none", borderRadius:"50%", width:34, height:34, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", opacity:hov?1:0, transition:"opacity .2s", boxShadow:"0 2px 8px rgba(0,0,0,.1)" }}>
            <Heart size={15} color={INK} fill={liked?INK:"none"} />
          </button>
          <div style={{ position:"relative", width:"100%", aspectRatio:"4/3", borderRadius:16, overflow:"hidden", background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
            <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", transform:hov?"scale(1.08) translateY(-6px)":"scale(1)", transition:"transform .42s cubic-bezier(.34,1.56,.64,1)" }}>
              {p.image
                ? <img src={p.image} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                : <Jar bg={p.bg} lid={p.lid} size={108} />}
            </div>
          </div>
          {hov && [{x:18,y:28},{x:82,y:12},{x:156,y:36},{x:38,y:96},{x:136,y:78}].map((pos,i)=>(
            <div key={i} className="tw" style={{ position:"absolute", left:pos.x, top:pos.y, fontSize:TEXT_SM, color:INK, opacity:.5, pointerEvents:"none", animationDelay:`${i*.18}s` }}>✦</div>
          ))}
          <div style={{ fontFamily:DISPLAY, fontSize:TEXT_MD, color:INK, marginBottom:4, letterSpacing:".2px" }}>{p.name}</div>
          <div style={{ fontFamily:SANS, fontSize:TEXT_SM, color:INK, opacity:.58, marginBottom:14 }}>{p.desc}</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontFamily:SANS, fontSize:TEXT_XL, fontWeight:700, color:INK }}>{p.price}</span>
            <button onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(p.slug); }} className="pbtn" style={{ background:BG, color:INK, border:"none", borderRadius:100, padding:"8px 18px", fontSize:TEXT_XS, letterSpacing:".5px", textTransform:"uppercase", fontFamily:DISPLAY, cursor:"pointer" }}>Add +</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
