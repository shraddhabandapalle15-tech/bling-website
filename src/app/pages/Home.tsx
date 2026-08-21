import { useState, useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router";
import { BG, PEACH, PINK, LAV, YELLOW, CORAL, INK, HEADING_INK, DISPLAY, SCRIPT, SCRIPT2, SANS } from "../theme";
import { PRODUCTS, FEATURES, STEPS, REVIEWS, INSTA } from "../data/products";
import { useFadeUp } from "../hooks/useFadeUp";
import { Jar } from "../components/Jar";
import { Wave } from "../components/Wave";
import { ProductCard } from "../components/ProductCard";

/* ─── HERO JAR SCENE ─────────────────────────────────────────────────────── */
function HeroJar() {
  const sparkles = [
    { cl:"fa",  t:22,  l:10,  fs:28, c:CORAL,  d:"0s"   },
    { cl:"fb",  t:88,  l:314, fs:20, c:LAV,    d:".4s"  },
    { cl:"fc",  t:16,  l:264, fs:22, c:YELLOW, d:"1s"   },
    { cl:"fa",  t:368, l:8,   fs:16, c:PINK,   d:"1.4s" },
    { cl:"fb",  t:418, l:316, fs:24, c:YELLOW, d:".8s"  },
    { cl:"fc",  t:162, l:22,  fs:12, c:CORAL,  d:"2s"   },
    { cl:"tw",  t:294, l:320, fs:18, c:LAV,    d:"0s"   },
    { cl:"tw2", t:226, l:6,   fs:11, c:CORAL,  d:"0s"   },
    { cl:"tw3", t:460, l:278, fs:9,  c:LAV,    d:"0s"   },
  ];
  const particles = [
    { x:148, y:52,  c:PINK,   s:10 },
    { x:292, y:128, c:YELLOW, s:8  },
    { x:56,  y:200, c:LAV,    s:13 },
    { x:316, y:288, c:CORAL,  s:7  },
    { x:22,  y:388, c:PEACH,  s:9  },
    { x:302, y:408, c:PINK,   s:6  },
    { x:198, y:466, c:YELLOW, s:8  },
  ];
  return (
    <div style={{ position:"relative", width:360, height:520, flexShrink:0 }}>
      <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at center,${PINK}55 0%,transparent 68%)`, transform:"scale(1.55)", pointerEvents:"none" }} />
      <div className="orbitAnim" style={{ position:"absolute", top:64, left:44, width:272, height:272, border:`1.5px dashed ${PINK}80`, borderRadius:"50%", pointerEvents:"none" }} />
      {sparkles.map((s, i) => (
        <div key={i} className={s.cl} style={{ position:"absolute", top:s.t, left:s.l, fontSize:s.fs, color:s.c, animationDelay:s.d, pointerEvents:"none", userSelect:"none" }}>✦</div>
      ))}
      {particles.map((p, i) => (
        <div key={i} className={["fa","fb","fc"][i % 3]} style={{ position:"absolute", left:p.x, top:p.y, width:p.s, height:p.s, borderRadius:"50%", background:p.c, boxShadow:`0 0 ${p.s * 2}px ${p.c}`, animationDelay:`${i * .35}s`, pointerEvents:"none" }} />
      ))}
      <div className="fa" style={{ position:"absolute", top:46, left:"50%", transform:"translateX(-50%)" }}>
        <Jar bg={PINK} lid="#C478A8" size={260} />
      </div>
    </div>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ minHeight:"100vh", background:BG, position:"relative", overflow:"hidden", display:"flex", alignItems:"center", paddingTop:72 }}>
      <div className="blobAnim" style={{ position:"absolute", top:-100, right:-120, width:520, height:520, background:PINK, opacity:.28, borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents:"none" }} />
      <div className="blobAnim" style={{ position:"absolute", bottom:-140, left:-100, width:440, height:440, background:LAV, opacity:.20, borderRadius:"40% 60% 70% 30%/40% 50% 60% 50%", animationDelay:"3.5s", pointerEvents:"none" }} />
      <div className="blobAnim" style={{ position:"absolute", top:160, left:"30%", width:340, height:340, background:YELLOW, opacity:.15, borderRadius:"50% 50% 30% 70%/60% 40% 60% 40%", animationDelay:"6s", pointerEvents:"none" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"80px 24px 140px", width:"100%", position:"relative", zIndex:1 }}>
        <div className="heroGrid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
          {/* text */}
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:PINK, borderRadius:100, padding:"9px 20px", marginBottom:32, fontFamily:SANS, fontWeight:600, fontSize:12.5, letterSpacing:"1px", textTransform:"uppercase", color:INK, opacity:.9 }}>
              ✦ Premium Edible Glitter — Est. 2020 ✦
            </div>
            <h1 style={{ fontFamily:DISPLAY, fontSize:"clamp(44px,6.2vw,84px)", lineHeight:1.04, color:HEADING_INK, margin:"0 0 8px", letterSpacing:"-1.5px", textTransform:"uppercase" }}>
              Make Every Sip{" "}
              <span style={{ color:PINK, WebkitTextStroke:`2px ${INK}` } as CSSProperties}>Sparkle</span>
              <br />
            </h1>
            <div style={{ fontFamily:SCRIPT2, fontSize:30, color:INK, marginBottom:28 }}>
              
            </div>
            <p style={{ fontFamily:SANS, fontSize:18, lineHeight:1.8, color:INK, opacity:.68, maxWidth:480, marginBottom:48 }}>
              Premium food-grade edible glitter for cakes, cocktails, desserts, chocolates, and beverages. Certified safe. Trusted by 12,000+ bakers and mixologists worldwide.
            </p>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:52 }}>
              <Link to="/shop" className="pbtn pulseAnim" style={{ display:"inline-block", background:YELLOW, color:INK, border:"none", borderRadius:100, padding:"18px 44px", fontFamily:DISPLAY, fontSize:14, letterSpacing:"1px", textTransform:"uppercase", textDecoration:"none" }}>
                Shop Glitter ✦
              </Link>
              <a href="#collection" className="obtn" style={{ display:"inline-block", background:"transparent", color:INK, border:`2px solid ${INK}`, borderRadius:100, padding:"18px 40px", fontFamily:DISPLAY, fontSize:14, letterSpacing:"1px", textTransform:"uppercase", textDecoration:"none" }}>
                Explore Shades
              </a>
            </div>
            {/* social proof */}
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ display:"flex" }}>
                {([[PINK,"SM"],[LAV,"JL"],[YELLOW,"PK"],[CORAL,"+9k"]] as const).map(([c,l],i) => (
                  <div key={i} style={{ width:38, height:38, borderRadius:"50%", background:c, border:`2.5px solid ${BG}`, marginLeft:i ? -11 : 0, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:DISPLAY, fontSize:10, color:INK }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ display:"flex", gap:2 }}>{Array.from({length:5}).map((_,i)=><span key={i} style={{color:CORAL,fontSize:15}}>★</span>)}</div>
                <div style={{ fontFamily:DISPLAY, fontSize:13, opacity:.52, marginTop:2 }}>Loved by 12,000+ creators</div>
              </div>
            </div>
          </div>
          {/* jar */}
          <div className="heroJar" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
            <HeroJar />
          </div>
        </div>
      </div>
      {/* bottom wave */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:80 }}>
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill={LAV} />
        </svg>
      </div>
    </section>
  );
}

/* ─── COLLECTION ─────────────────────────────────────────────────────────── */
function Collection() {
  const h = useFadeUp();
  return (
    <section id="collection" style={{ background:LAV, padding:"100px 24px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div ref={h.ref} style={{ ...h.s, textAlign:"center", marginBottom:64 }}>
          <div style={{ fontFamily:SCRIPT2, fontSize:28, color:INK, marginBottom:10 }}>— our shades —</div>
          <h2 style={{ fontFamily:DISPLAY, fontSize:"clamp(34px,4.6vw,64px)", color:HEADING_INK, margin:0, letterSpacing:"-1px", textTransform:"uppercase" }}>The Glitter Collection</h2>
        </div>
        <div className="prodGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {PRODUCTS.slice(0,6).map((p,i)=><ProductCard key={i} p={p} delay={i*75} />)}
        </div>
        <div style={{ textAlign:"center", marginTop:56, paddingBottom:88 }}>
          <Link to="/shop" className="pbtn" style={{ display:"inline-block", background:PEACH, color:INK, border:"none", borderRadius:100, padding:"18px 48px", fontFamily:DISPLAY, fontSize:14, letterSpacing:"1px", textTransform:"uppercase", textDecoration:"none" }}>View All Shades →</Link>
        </div>
      </div>
      <Wave from={LAV} to={PEACH} flip />
    </section>
  );
}

/* ─── WHY BLING ──────────────────────────────────────────────────────────── */
function WhyBling() {
  const h = useFadeUp();
  return (
    <section style={{ background:PEACH, padding:"100px 24px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div ref={h.ref} style={{ ...h.s, textAlign:"center", marginBottom:72 }}>
          <div style={{ fontFamily:SCRIPT2, fontSize:28, color:INK, marginBottom:10 } as CSSProperties}>why we&apos;re different</div>
          <h2 style={{ fontFamily:DISPLAY, fontSize:"clamp(34px,4.6vw,64px)", color:HEADING_INK, margin:0, letterSpacing:"-1px", textTransform:"uppercase" }}>Why Bling?</h2>
        </div>
        <div className="featGrid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
          {FEATURES.map((f,i)=><FeatureCard key={i} f={f} delay={i*100} />)}
        </div>
        <div style={{ paddingBottom:88 }} />
      </div>
      <Wave from={PEACH} to={YELLOW} />
    </section>
  );
}

function FeatureCard({ f, delay }: { f:typeof FEATURES[0]; delay:number }) {
  const fu = useFadeUp(delay);
  const [hov, setHov] = useState(false);
  return (
    <div ref={fu.ref} style={fu.s}>
      <div style={{ background:f.bg, borderRadius:32, padding:"48px 32px", height:"100%",
        transform:hov?"translateY(-10px)":"translateY(0)",
        boxShadow:hov?"0 24px 56px rgba(0,0,0,.10)":"0 4px 16px rgba(0,0,0,.05)",
        transition:"all .38s cubic-bezier(.34,1.56,.64,1)" }}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
        <div style={{ fontSize:44, marginBottom:20 }}>{f.icon}</div>
        <h3 style={{ fontFamily:DISPLAY, fontSize:19, color:HEADING_INK, margin:"0 0 12px", letterSpacing:"0px", textTransform:"uppercase" }}>{f.title}</h3>
        <p style={{ fontFamily:SANS, fontSize:15, lineHeight:1.75, color:INK, opacity:.68, margin:0 }}>{f.desc}</p>
      </div>
    </div>
  );
}

/* ─── HOW IT WORKS ───────────────────────────────────────────────────────── */
function HowItWorks() {
  const h = useFadeUp();
  return (
    <section style={{ background:YELLOW, padding:"100px 24px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div ref={h.ref} style={{ ...h.s, textAlign:"center", marginBottom:72 }}>
          <div style={{ fontFamily:SCRIPT2, fontSize:28, color:INK, marginBottom:10 } as CSSProperties}>simple as 1, 2, 3</div>
          <h2 style={{ fontFamily:DISPLAY, fontSize:"clamp(34px,4.6vw,64px)", color:HEADING_INK, margin:0, letterSpacing:"-1px", textTransform:"uppercase" }}>How It Works</h2>
        </div>
        <div className="stepGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {STEPS.map((s,i)=><StepCard key={i} s={s} delay={i*140} />)}
        </div>
        <div style={{ paddingBottom:88 }} />
      </div>
      <Wave from={YELLOW} to={PINK} />
    </section>
  );
}

function StepCard({ s, delay }: { s:typeof STEPS[0]; delay:number }) {
  const fu = useFadeUp(delay);
  return (
    <div ref={fu.ref} style={fu.s}>
      <div style={{ background:s.bg, borderRadius:32, padding:"52px 40px", position:"relative", overflow:"hidden" }}>
        <div style={{ fontFamily:DISPLAY, fontSize:88, color:INK, opacity:.08, position:"absolute", top:-8, right:16, lineHeight:1, userSelect:"none" }}>{s.n}</div>
        <div style={{ fontSize:50, marginBottom:20 }}>{s.icon}</div>
        <h3 style={{ fontFamily:DISPLAY, fontSize:26, color:HEADING_INK, margin:"0 0 14px", letterSpacing:"0px", textTransform:"uppercase" }}>{s.label}</h3>
        <p style={{ fontFamily:SANS, fontSize:15, lineHeight:1.75, color:INK, opacity:.68, margin:0 }}>{s.desc}</p>
      </div>
    </div>
  );
}

/* ─── REVIEWS ────────────────────────────────────────────────────────────── */
function Reviews() {
  const h = useFadeUp();
  return (
    <section style={{ background:PINK, padding:"100px 24px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div ref={h.ref} style={{ ...h.s, textAlign:"center", marginBottom:72 }}>
          <div style={{ fontFamily:SCRIPT2, fontSize:28, color:INK, marginBottom:10 } as CSSProperties}>from our community</div>
          <h2 style={{ fontFamily:DISPLAY, fontSize:"clamp(34px,4.6vw,64px)", color:HEADING_INK, margin:0, letterSpacing:"-1px", textTransform:"uppercase" }}>Pure Sparkle Joy</h2>
        </div>
        <div className="revGrid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {REVIEWS.map((r,i)=><ReviewCard key={i} r={r} delay={i*120} />)}
        </div>
        <div style={{ paddingBottom:88 }} />
      </div>
      <Wave from={PINK} to={CORAL} flip />
    </section>
  );
}

function ReviewCard({ r, delay }: { r:typeof REVIEWS[0]; delay:number }) {
  const fu = useFadeUp(delay);
  return (
    <div ref={fu.ref} style={fu.s}>
      <div style={{ background:r.bg, borderRadius:32, padding:"48px 40px", position:"relative" }}>
        <div style={{ fontFamily:SCRIPT, fontSize:80, color:INK, opacity:.12, position:"absolute", top:4, left:24, lineHeight:1, userSelect:"none" }}>"</div>
        <div style={{ display:"flex", gap:4, marginBottom:20 }}>
          {Array.from({length:r.rating}).map((_,i)=><span key={i} style={{color:INK,fontSize:20}}>★</span>)}
        </div>
        <p style={{ fontFamily:SANS, fontSize:16, lineHeight:1.8, color:INK, margin:"0 0 28px", fontStyle:"italic", opacity:.85 }}>
          "{r.text}"
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:46, height:46, borderRadius:"50%", background:BG, color:INK, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:DISPLAY, fontSize:13 }}>{r.avatar}</div>
          <div>
            <div style={{ fontFamily:DISPLAY, fontSize:14, color:INK }}>{r.name}</div>
            <div style={{ fontFamily:SANS, fontSize:13, color:INK, opacity:.5 }}>{r.handle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── INSTAGRAM ──────────────────────────────────────────────────────────── */
function InstaCard({ item, idx }: { item:typeof INSTA[0]; idx:number }) {
  const [hov, setHov] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <div className="iCard" style={{ width:178, height:178, borderRadius:22, overflow:"hidden", flexShrink:0, position:"relative", cursor:"pointer",
      transform: hov ? `rotate(${item.rot}deg) scale(1.09)` : `rotate(${item.rot}deg) scale(1)`,
      boxShadow: hov ? "0 16px 48px rgba(0,0,0,.20)" : "0 6px 24px rgba(0,0,0,.14)",
      transition:"all .38s cubic-bezier(.34,1.56,.64,1)", zIndex:hov?10:1 }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      {item.type === "video" ? (
        <video ref={videoRef} src={item.url} autoPlay muted loop playsInline preload="auto" disablePictureInPicture disableRemotePlayback controls={false} style={{ width:"100%", height:"100%", objectFit:"cover", transform:hov?"scale(1.07)":"scale(1)", transition:"transform .45s ease" }} />
      ) : (
        <img src={item.url} alt={`Bling creation ${idx+1}`} style={{ width:"100%", height:"100%", objectFit:"cover", transform:hov?"scale(1.07)":"scale(1)", transition:"transform .45s ease" }} />
      )}
    </div>
  );
}

function Instagram() {
  const h = useFadeUp();
  return (
    <section style={{ background:CORAL, padding:"100px 24px 0" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div ref={h.ref} style={{ ...h.s, textAlign:"center", marginBottom:64 }}>
          <div style={{ fontFamily:SCRIPT2, fontSize:32, color:BG, marginBottom:10 }}>@bling ✦</div>
          <h2 style={{ fontFamily:DISPLAY, fontSize:"clamp(34px,4.6vw,64px)", color:HEADING_INK, margin:"0 0 20px", letterSpacing:"-1px", textTransform:"uppercase" }}>Tag Your Creations</h2>
          <p style={{ fontFamily:SANS, fontSize:17, color:INK, opacity:.7, maxWidth:460, margin:"0 auto 40px", lineHeight:1.75 }}>
            Join thousands sharing their sparkling creations. Every jar tells a story — what will yours be?
          </p>
          <button className="pbtn" style={{ background:YELLOW, color:INK, border:"none", borderRadius:100, padding:"18px 48px", fontFamily:DISPLAY, fontSize:14, letterSpacing:"1px", textTransform:"uppercase" }}>Follow @Bling ✦</button>
        </div>
        <div className="iWrap" style={{ display:"flex", flexWrap:"wrap", gap:16, justifyContent:"center", alignItems:"center" }}>
          {INSTA.map((item,i)=><InstaCard key={i} item={item} idx={i} />)}
        </div>
        <div style={{ paddingBottom:88 }} />
      </div>
      <Wave from={CORAL} to={BG} />
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <WhyBling />
      <HowItWorks />
      <Reviews />
      <Instagram />
    </>
  );
}
