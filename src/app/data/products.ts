import { PINK, YELLOW, LAV, BLUSH } from "../theme";

/* ─── PRODUCT TYPE ───────────────────────────────────────────────────────── */
export type Product = {
  slug: string;
  name: string;
  price: string;
  originalPrice?: string;
  inStock?: boolean;
  bg: string;
  lid: string;
  image?: string;
  desc: string;
  badge: string;
  colorTag?: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  longDesc: string;
  ingredients: string[];
  usage: string[];
  gallery: string[];
  tags: string[];
};

/* ─── SHARED PRODUCT-PAGE CONTENT ────────────────────────────────────────── */
export const JAR_SIZE = "5g Jar";

export const SAFETY_INFO =
  "Every Bling shade is FSSAI approved and manufactured in a food-safe facility. " +
  "Ingredients are non-toxic and safe for consumption in normal culinary quantities. " +
  "As with any fine powder, avoid inhaling directly and keep out of reach of children under 3. " +
  "If using on skin or lips, we recommend a small patch test first.";

export const PRODUCT_FAQS: { q: string; a: string }[] = [
  { q: "Is this edible?", a: "Yes — every Bling shade is 100% food grade and safe to eat, drink, and bake with." },
  { q: "Will it dissolve in liquids?", a: "It disperses beautifully in drinks with a quick stir and won't clump, though a faint shimmer may settle at the bottom over time." },
  { q: "How much should I use?", a: "A little goes a long way — start with a pinch (about ⅛ tsp) and build up from there." },
  { q: "Is it vegan and gluten-free?", a: "Yes, every jar is vegan, gluten-free, and nut-free." },
  { q: "How long does one jar last?", a: "With normal use, one 5g jar covers roughly 15–20 servings." },
];

/* ─── GALLERY IMAGES (shared pool, reused per product) ───────────────────── */
const IMG_COCKTAIL   = "https://images.unsplash.com/photo-1512103865222-dcf9531c9961?w=520&h=600&fit=crop&auto=format";
const IMG_CUPCAKES   = "https://images.unsplash.com/photo-1723476338868-4488ddc9124a?w=520&h=420&fit=crop&auto=format";
const IMG_CAKE       = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=520&h=540&fit=crop&auto=format";
const IMG_MACARONS   = "https://images.unsplash.com/photo-1558024920-b41e1887dc32?w=520&h=420&fit=crop&auto=format";
const IMG_DRINKS     = "https://images.unsplash.com/photo-1700909591029-0cbd7c5d23be?w=520&h=560&fit=crop&auto=format";
const IMG_MACARONDROP= "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=520&h=380&fit=crop&auto=format";

/* ─── PRODUCTS ───────────────────────────────────────────────────────────── */
export const PRODUCTS: Product[] = [
  {
    slug: "rose-gold-shimmer",
    name: "Rose Gold Luxe",
    price: "₹399",
    originalPrice: "₹459",
    bg: "#efd3d6", lid: "#b76e79",
    desc: "Cakes & buttercream",
    badge: "Best Seller",
    colorTag: "Rose Gold",
    rating: 4.9, reviewCount: 482,
    tagline: "Our signature blush-gold dust, calibrated for icing and champagne alike.",
    longDesc: "Rose Gold Luxe is the jar that started it all — a warm, blush-toned shimmer with a fine gold undertone that catches light from every angle. Dust it over buttercream, fold it into fondant, or drop a pinch into a glass of prosecco for an instant celebration.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77491)"],
    usage: ["Dust dry with a soft brush over cakes, cookies, and chocolate.", "Stir a pinch into any drink — it disperses without clumping.", "Mix with a drop of vodka or lemon extract to paint fine details."],
    gallery: [IMG_CAKE, IMG_CUPCAKES, IMG_MACARONS],
    tags: ["Jar", "On Cakes", "Macro Shine"],
  },
  {
    slug: "aurora-gold",
    name: "Gold Reserve",
    price: "₹399",
    bg: "#f1e4c3", lid: "#c9a961",
    desc: "Cocktails & drinks",
    badge: "New In",
    colorTag: "Gold",
    rating: 4.8, reviewCount: 311,
    tagline: "A warm champagne gold, milled fine enough to float in sparkling wine.",
    longDesc: "Gold Reserve is our finest-milled dust, built to swirl and settle beautifully in anything carbonated. A signature finish for New Year's Eve, weddings, and any night that deserves a little extra glow.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77492)"],
    usage: ["Add a pinch directly to champagne, cocktails, or sparkling water.", "Dust over whipped cream or foam for a golden finish.", "Blend into royal icing for a subtle all-over shimmer."],
    gallery: [IMG_COCKTAIL, IMG_DRINKS, IMG_CAKE],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "violet-dreams",
    name: "Purple Reign",
    price: "₹399",
    bg: "#dcd1ee", lid: "#7a5fa6",
    image: "/images/purple-glitter.png",
    desc: "Chocolates & truffles",
    badge: "",
    colorTag: "Purple",
    rating: 4.9, reviewCount: 204,
    tagline: "A dusky lavender shimmer made for chocolate work and dark backdrops.",
    longDesc: "Purple Reign reads richest against dark chocolate and cocoa-dusted surfaces. Pastry chefs reach for this one when they want a jewel-toned finish that photographs like velvet.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Manganese Violet (CI 77742)"],
    usage: ["Brush dry over tempered chocolate and truffles.", "Mix with cocoa butter for an airbrush-style finish.", "Dust over dark frosting for high-contrast sparkle."],
    gallery: [IMG_MACARONS, IMG_MACARONDROP, IMG_CUPCAKES],
    tags: ["Jar", "On Chocolate", "Macro Shine"],
  },
  {
    slug: "pink-pop",
    name: "Pink Shimmer",
    price: "₹379",
    bg: "#f8d3df", lid: "#e8608a",
    desc: "Cupcakes & frosting",
    badge: "",
    colorTag: "Pink",
    rating: 4.7, reviewCount: 218,
    tagline: "A bold, punchy pink that pops against any pastel canvas.",
    longDesc: "Pink Shimmer is the boldest shade in the collection — a saturated fuchsia-pink shimmer built to stand out on frosting, drinks, and everything in between. Not for the faint of heart.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77491, 77492)"],
    usage: ["Dust over piped frosting for maximum contrast.", "Stir into pink lemonade or a berry cocktail.", "Blend into fondant for an all-over bold finish."],
    gallery: [IMG_CUPCAKES, IMG_CAKE, IMG_MACARONS],
    tags: ["Jar", "On Frosting", "Macro Shine"],
  },
  {
    slug: "girl-pink-spark",
    name: "Girl Pink Sparkle",
    price: "₹379",
    bg: "#fce4ee", lid: "#f4a6c1",
    desc: "Macarons & pastries",
    badge: "",
    colorTag: "Girl Pink",
    rating: 4.8, reviewCount: 176,
    tagline: "A soft, dreamy baby pink with a delicate spark of shimmer.",
    longDesc: "Girl Pink Sparkle is our gentlest pink — a pale, powdery shimmer made for pastel shells, soft frosting, and anything that calls for a whisper of sparkle rather than a shout.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77491)"],
    usage: ["Dust lightly over macaron shells before they set.", "Blend into soft buttercream for a pastel glow.", "Brush onto fondant flowers and sugar work."],
    gallery: [IMG_MACARONS, IMG_MACARONDROP, IMG_CUPCAKES],
    tags: ["Jar", "On Macarons", "Macro Shine"],
  },
  {
    slug: "dark-red-dazzle",
    name: "Dark Red Velvet",
    price: "₹399",
    bg: "#e3b4b9", lid: "#8c1f2b",
    desc: "Chocolates & desserts",
    badge: "",
    colorTag: "Dark Red",
    rating: 4.7, reviewCount: 142,
    tagline: "A deep, wine-toned red that dazzles against dark chocolate.",
    longDesc: "Dark Red Velvet brings a rich, dramatic red shimmer to the collection — designed to catch light against dark chocolate, red velvet, and moody dessert tables.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77491)"],
    usage: ["Brush dry over tempered chocolate and truffles.", "Dust over red velvet cake or dark frosting.", "Mix with cocoa butter for an airbrush-style finish."],
    gallery: [IMG_MACARONS, IMG_CAKE, IMG_CUPCAKES],
    tags: ["Jar", "On Chocolate", "Macro Shine"],
  },
  {
    slug: "yellow-zing",
    name: "Yellow Sunburst",
    price: "₹349",
    originalPrice: "₹419",
    bg: "#fbebb5", lid: "#f2c230",
    desc: "Cocktails & citrus drinks",
    badge: "",
    colorTag: "Yellow",
    rating: 4.6, reviewCount: 133,
    tagline: "A bright, citrusy yellow with real zing.",
    longDesc: "Yellow Sunburst is our brightest, sunniest shade — a true yellow shimmer (not gold) built for citrus cocktails, lemon desserts, and anything that wants to feel like sunshine.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77492)"],
    usage: ["Add a pinch directly to citrus cocktails or lemonade.", "Dust over lemon tarts and yellow buttercream.", "Blend into royal icing for a sunny all-over shimmer."],
    gallery: [IMG_COCKTAIL, IMG_DRINKS, IMG_CUPCAKES],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "blue-buzz",
    name: "Blue Lagoon",
    price: "₹399",
    bg: "#cfe0ee", lid: "#4c7ea8",
    desc: "Cocktails & sparkling water",
    badge: "New In",
    colorTag: "Blue",
    rating: 4.8, reviewCount: 97,
    tagline: "A cool, electric blue that buzzes in sparkling drinks.",
    longDesc: "Blue Lagoon swirls beautifully through sparkling water and blue cocktails alike — a crisp, cool-toned shimmer that reads as effortlessly striking in glass.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Ferric Ferrocyanide (CI 77510)"],
    usage: ["Add a pinch to sparkling water or blue cocktails.", "Dust over whipped cream or blue-themed desserts.", "Mix with a drop of vodka to paint fine details."],
    gallery: [IMG_COCKTAIL, IMG_DRINKS, IMG_MACARONDROP],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "fruit-green-twist",
    name: "Fruit Green Fizz",
    price: "₹349",
    bg: "#dceec2", lid: "#7cb342",
    desc: "Mocktails & fruit desserts",
    badge: "",
    colorTag: "Fruit Green",
    rating: 4.6, reviewCount: 88,
    tagline: "A fresh, zesty green with a citrus-fruit twist.",
    longDesc: "Fruit Green Fizz is bright, fresh, and full of life — built for mocktails, kiwi desserts, and anything that wants a pop of zesty green shimmer.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Chromium Oxide Greens (CI 77288)"],
    usage: ["Add a pinch to mocktails or sparkling limeade.", "Dust over kiwi or matcha desserts.", "Fold into batter for flecks of shimmer throughout."],
    gallery: [IMG_DRINKS, IMG_COCKTAIL, IMG_CUPCAKES],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "teal-splash",
    name: "Teal Mystique",
    price: "₹399",
    bg: "#c3e2de", lid: "#2f7a73",
    desc: "Beverages & foam",
    badge: "",
    colorTag: "Teal",
    rating: 4.9, reviewCount: 121,
    tagline: "An elegant, oceanic teal that splashes through clear drinks.",
    longDesc: "Teal Mystique drifts slowly through clear spirits and settles beautifully on foam — an elegant, oceanic shimmer for anyone who wants their drinks to look as good as they taste.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Chromium Oxide Greens (CI 77288)"],
    usage: ["Sprinkle over milk foam or whipped cream.", "Add to clear spirits or sparkling water and watch it drift.", "Dust rims of glasses for a soft shimmer edge."],
    gallery: [IMG_DRINKS, IMG_MACARONDROP, IMG_COCKTAIL],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "dark-green-gleam",
    name: "Dark Green Forest",
    price: "₹399",
    bg: "#c4d3c4", lid: "#2e4b2f",
    desc: "Chocolates & moody desserts",
    badge: "",
    colorTag: "Dark Green",
    rating: 4.7, reviewCount: 76,
    tagline: "An earthy, deep green that gleams against dark backdrops.",
    longDesc: "Dark Green Forest is quietly dramatic — a deep forest-toned shimmer that reads richest against dark chocolate, cocoa, and moody dessert styling.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Chromium Oxide Greens (CI 77288)"],
    usage: ["Brush dry over tempered chocolate and truffles.", "Mix with cocoa butter for an airbrush-style finish.", "Dust over dark frosting for high-contrast sparkle."],
    gallery: [IMG_MACARONS, IMG_MACARONDROP, IMG_CAKE],
    tags: ["Jar", "On Chocolate", "Macro Shine"],
  },
  {
    slug: "diamond-white-shine",
    name: "Diamond White Frost",
    price: "₹429",
    bg: "#fbfaf6", lid: "#edebe3",
    desc: "Champagne & everything",
    badge: "Fan Fave",
    colorTag: "Diamond White",
    rating: 4.9, reviewCount: 264,
    tagline: "Pure sparkle, zero colour — all shine.",
    longDesc: "Diamond White Frost is our purest shimmer — colourless, luminous, and endlessly versatile. Add it to anything without changing the colour, just the shine.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)"],
    usage: ["Add a pinch directly to champagne or sparkling wine.", "Dust over any cake, cookie, or chocolate.", "Mix with a drop of vodka to paint fine details."],
    gallery: [IMG_COCKTAIL, IMG_CAKE, IMG_DRINKS],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "baby-blue-dream",
    name: "Baby Blue Dream",
    price: "₹379",
    originalPrice: "₹439",
    bg: "#e4f1fa", lid: "#a9cde8",
    desc: "Celebrations & drinks",
    badge: "",
    colorTag: "Baby Blue",
    rating: 4.8, reviewCount: 154,
    tagline: "A soft, sweet baby blue made for celebrations.",
    longDesc: "Baby Blue Dream is soft, sweet, and gender-reveal ready — a pale blue shimmer that works just as well in a champagne toast as it does on a celebration cake.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Ferric Ferrocyanide (CI 77510)"],
    usage: ["Add a pinch to champagne or sparkling water.", "Dust over celebration cakes and cookies.", "Blend into buttercream for a soft all-over glow."],
    gallery: [IMG_CAKE, IMG_CUPCAKES, IMG_COCKTAIL],
    tags: ["Jar", "In Drinks", "Macro Shine"],
  },
  {
    slug: "black-spark",
    name: "Black Diamond",
    price: "₹399",
    inStock: false,
    bg: "#c9c9c9", lid: "#1a1a1a",
    desc: "Bold, edgy desserts",
    badge: "",
    colorTag: "Black",
    rating: 4.9, reviewCount: 302,
    tagline: "Bold, edgy, and unapologetically luxe.",
    longDesc: "Black Diamond is our boldest, most dramatic shade — a true black shimmer with a fine metallic sparkle. Currently our most in-demand jar and temporarily sold out; restocking soon.",
    ingredients: ["Mica", "Potassium Aluminum Silicate", "Titanium Dioxide (CI 77891)", "Iron Oxide (CI 77499)"],
    usage: ["Dust dry over dark chocolate and moody frosting.", "Mix with cocoa butter for an airbrush-style finish.", "Brush onto fondant for high-contrast sparkle."],
    gallery: [IMG_CAKE, IMG_MACARONS, IMG_CUPCAKES],
    tags: ["Jar", "On Chocolate", "Macro Shine"],
  },
];

/* ─── FEATURES ───────────────────────────────────────────────────────────── */
export const FEATURES = [
  { icon:"✦", title:"100% Edible",     bg:PINK,   desc:"Every ingredient is certified food-safe. Sprinkle, sip, savour — zero worry."              },
  { icon:"✔", title:"Food Grade",      bg:LAV,    desc:"Meets international safety standards — FDA to EU approved. Total baking confidence."        },
  { icon:"🥂", title:"Safe for Drinks", bg:YELLOW, desc:"Dissolves beautifully in champagne, cocktails, and sparkling water."                       },
  { icon:"🎂", title:"Made for Bakers", bg:BLUSH,  desc:"Designed by pastry chefs for every skill level. Professional results, effortlessly."       },
];

/* ─── GALLERY (homepage inspiration grid) ────────────────────────────────── */
export const GALLERY = [
  { url:IMG_COCKTAIL,    label:"Shimmer Cocktails", h:360 },
  { url:IMG_CUPCAKES,    label:"Glitter Cupcakes",  h:280 },
  { url:IMG_CAKE,        label:"Birthday Cakes",    h:340 },
  { url:IMG_MACARONS,    label:"Pastel Macarons",   h:300 },
  { url:IMG_DRINKS,      label:"Festive Drinks",    h:360 },
  { url:IMG_MACARONDROP, label:"Macaron Drop",      h:280 },
];

/* ─── HOW IT WORKS ───────────────────────────────────────────────────────── */
export const STEPS = [
  { n:"01", icon:"✨", label:"Choose",   bg:PINK,   desc:"Pick your shade from our sparkling collection — each more magical than the last."                 },
  { n:"02", icon:"🧁", label:"Sprinkle", bg:LAV,    desc:"Dust onto cakes, drizzle into drinks, brush across chocolates. Beautifully effortless."            },
  { n:"03", icon:"⭐", label:"Shine",    bg:BLUSH,  desc:"Watch your creation transform. Tag us @Bling and inspire the world."                               },
];

/* ─── REVIEWS ────────────────────────────────────────────────────────────── */
export const REVIEWS = [
  { name:"Sophia M.", handle:"@sophiabakes",  avatar:"SM", bg:BLUSH,  rating:5, text:"I used Rose Gold Luxe on my wedding cake and everyone stopped to photograph it. The shimmer is jaw-dropping.",             product:"rose-gold-shimmer" },
  { name:"Jamie L.",  handle:"@jamie.stirs",   avatar:"JL", bg:LAV,    rating:5, text:"Dropped Gold Reserve into New Year champagne and the whole table lost their minds. Bling is pure magic in a bottle.", product:"aurora-gold" },
  { name:"Priya K.",  handle:"@priyapastry",   avatar:"PK", bg:YELLOW, rating:5, text:"As a pastry chef I am extremely picky. Bling is the only edible glitter I trust for client orders. Perfection.",   product:"violet-dreams" },
];

/* ─── INSTAGRAM ──────────────────────────────────────────────────────────── */
export const INSTA = [
  { url:"/images/image1.jpg", type:"image", rot:-3   },
  { url:"/images/image2.jpg", type:"image", rot:2.5  },
  { url:"/images/image3.mp4", type:"video", rot:-1.5 },
  { url:"/images/image4.jpg", type:"image", rot:4    },
  { url:"/images/image5.jpg", type:"image", rot:-2.5 },
  { url:"/images/image6.mp4", type:"video", rot:3    },
];
