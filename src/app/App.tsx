import { Routes, Route } from "react-router";
import { INK, BG, SANS } from "./theme";
import { CartProvider } from "./context/CartContext";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import ProductDetail from "./pages/ProductDetail";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

/* ─── ANIMATIONS ─────────────────────────────────────────────────────────── */
const CSS = `
  @keyframes floatA { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-18px) rotate(4deg);} }
  @keyframes floatB { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-11px) rotate(-5deg);} }
  @keyframes floatC { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-23px) rotate(7deg);} }
  @keyframes twinkle { 0%,100%{opacity:1;transform:scale(1) rotate(0deg);} 33%{opacity:.15;transform:scale(.4) rotate(60deg);} 66%{opacity:.8;transform:scale(1.3) rotate(130deg);} }
  @keyframes blobDrift {
    0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;transform:translate(0,0) scale(1);}
    25%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:translate(10px,-16px) scale(1.04);}
    50%{border-radius:50% 60% 30% 60%/30% 60% 70% 40%;transform:translate(-6px,10px) scale(.97);}
    75%{border-radius:60% 40% 60% 30%/40% 30% 60% 50%;transform:translate(12px,6px) scale(1.02);}
  }
  @keyframes orbit { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.036);} }

  .fa  { animation: floatA 4s ease-in-out infinite; }
  .fb  { animation: floatB 3.3s ease-in-out infinite; }
  .fc  { animation: floatC 5.5s ease-in-out infinite; }
  .tw  { animation: twinkle 2.4s ease-in-out infinite; }
  .tw2 { animation: twinkle 1.8s ease-in-out infinite .6s; }
  .tw3 { animation: twinkle 3.1s ease-in-out infinite 1.2s; }
  .blobAnim { animation: blobDrift 10s ease-in-out infinite; }
  .orbitAnim { animation: orbit 28s linear infinite; }
  .pulseAnim { animation: pulse 3s ease-in-out infinite; }

  .pbtn { transition: all .26s cubic-bezier(.34,1.56,.64,1); cursor:pointer; }
  .pbtn:hover { transform: scale(1.07); }
  .pbtn:active { transform: scale(.97); }
  .obtn { transition: all .26s cubic-bezier(.34,1.56,.64,1); cursor:pointer; }
  .obtn:hover { transform: scale(1.07); background: rgba(246,199,223,.18) !important; }
  .nlink { transition: opacity .2s; }
  .nlink:hover { opacity: 1 !important; }
  .flink { transition: opacity .2s; }
  .flink:hover { opacity: 1 !important; }
  .swatchDot { transition: transform .2s cubic-bezier(.34,1.56,.64,1); }
  .swatchDot:hover { transform: scale(1.14); }
  .accHead { transition: opacity .2s; }
  .accHead:hover { opacity: .7; }

  * { scrollbar-width:none; }
  *::-webkit-scrollbar { display:none; }
  html { scroll-behavior:smooth; }

  @media(max-width:900px){
    .heroGrid    { grid-template-columns:1fr !important; text-align:center; }
    .heroJar     { display:none !important; }
    .dlinks      { display:none !important; }
    .dshop       { display:none !important; }
    .mbtn        { display:flex !important; }
    .prodGrid    { grid-template-columns:repeat(2,1fr) !important; }
    .featGrid    { grid-template-columns:1fr 1fr !important; }
    .gallGrid    { grid-template-columns:1fr 1fr !important; }
    .stepGrid    { grid-template-columns:1fr !important; }
    .revGrid     { grid-template-columns:1fr !important; }
    .footCols    { grid-template-columns:1fr 1fr !important; }
    .iWrap       { gap:10px !important; }
    .iCard       { width:130px !important; height:130px !important; }
    .pdpGrid     { grid-template-columns:1fr !important; text-align:center; }
    .pdpGallery  { grid-template-columns:1fr 1fr !important; }
    .pdpReviews  { grid-template-columns:1fr !important; }
    .pdpRelated  { grid-template-columns:1fr 1fr !important; }
    .shopLayout  { grid-template-columns:1fr !important; }
    .shopSidebar { position:static !important; }
    .collGrid    { grid-template-columns:1fr 1fr !important; }
  }
  @media(max-width:540px){
    .prodGrid   { grid-template-columns:1fr !important; }
    .featGrid   { grid-template-columns:1fr !important; }
    .gallGrid   { grid-template-columns:1fr !important; }
    .footCols   { grid-template-columns:1fr !important; }
    .iCard      { width:100px !important; height:100px !important; }
    .pdpGallery { grid-template-columns:1fr !important; }
    .pdpRelated { grid-template-columns:1fr !important; }
    .collGrid   { grid-template-columns:1fr !important; }
  }
`;

/* ─── APP ────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <CartProvider>
        <div style={{ fontFamily: SANS, color: INK, background: BG }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<CollectionDetail />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
        <CartDrawer />
      </CartProvider>
    </>
  );
}
