import type { CSSProperties } from "react";
import { Link } from "react-router";
import { BG, INK, PINK, LAV, YELLOW, PEACH, BLUSH, DISPLAY, SCRIPT, SANS } from "../theme";

export function Footer() {
  return (
    <footer style={{ background:BG, padding:"80px 24px 48px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        {/* big quote */}
        <div style={{ textAlign:"center", marginBottom:88 }}>
          <div style={{ display:"flex", justifyContent:"center", gap:28, marginBottom:16 }}>
            {([[PEACH,"-8deg"],[LAV,"5deg"],[YELLOW,"-3deg"]] as [string,string][]).map(([c,r],i)=>(
              <span key={i} style={{ fontFamily:"initial", fontSize:20, color:c, WebkitTextStroke:`1px ${INK}44`, transform:`rotate(${r})`, display:"inline-block" } as CSSProperties}>✦</span>
            ))}
          </div>
          
        </div>
        {/* columns */}
        <div className="footCols" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:64, paddingBottom:64, borderBottom:`1px solid rgba(23,23,23,.12)` }}>
          <div>
            <Link to="/" style={{ fontFamily:SCRIPT, fontSize:28, marginBottom:16, color:INK, textDecoration:"none", display:"inline-block" }}>Bling ✦</Link>
            <p style={{ fontFamily:SANS, fontSize:15, opacity:.6, lineHeight:1.75, margin:"16px 0 24px", maxWidth:260 }}>
              Premium edible glitter for every celebration, creation, and cocktail hour.
            </p>
            <div style={{ display:"flex", borderRadius:100, overflow:"hidden", border:"1.5px solid rgba(23,23,23,.15)", maxWidth:300 }}>
              <input placeholder="Your email address" style={{ flex:1, border:"none", background:"transparent", padding:"12px 18px", fontFamily:SANS, fontSize:14, color:INK, outline:"none" }} />
              <button className="pbtn" style={{ background:YELLOW, color:INK, border:"none", padding:"12px 20px", fontFamily:DISPLAY, fontSize:12, letterSpacing:"1px", textTransform:"uppercase", borderRadius:100 }}>Join →</button>
            </div>
          </div>
          {[
            { title:"Shop",  links:["All Shades","Rose Gold Luxe","Gold Reserve","Purple Reign","Gift Sets"] },
            { title:"About", links:["Our Story","Ingredients","Certifications","Wholesale"] },
            { title:"Help",  links:["FAQ","Shipping","Returns","Contact Us"] },
          ].map(col=>(
            <div key={col.title}>
              <div style={{ fontFamily:DISPLAY, fontSize:12, letterSpacing:"1.5px", textTransform:"uppercase", opacity:.42, marginBottom:18 }}>{col.title}</div>
              {col.links.map(l=>(
                <Link key={l} to={l==="All Shades" ? "/shop" : "/"} className="flink" style={{ display:"block", fontFamily:SANS, fontSize:15, color:INK, textDecoration:"none", opacity:.6, marginBottom:11 }}>{l}</Link>
              ))}
            </div>
          ))}
        </div>
        {/* bottom bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ fontFamily:SANS, fontSize:13, opacity:.42 }}>© 2024 Bling Edible Glitter. All rights reserved.</div>
          <div style={{ display:"flex", gap:7 }}>
            {[PINK,LAV,YELLOW,PEACH,BLUSH].map((c,i)=>(
              <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
            ))}
          </div>
          <div style={{ display:"flex", gap:24 }}>
            {["Privacy","Terms","Cookies"].map(l=>(
              <a key={l} href="#" style={{ fontFamily:SANS, fontSize:13, color:INK, textDecoration:"none", opacity:.42 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
