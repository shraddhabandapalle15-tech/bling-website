/* ─── RECIPE TYPE ────────────────────────────────────────────────────────── */
export type Recipe = {
  slug: string;
  name: string;
  category: "Cocktails" | "Mocktails" | "Lemonade" | "Tea";
  time: number;
  difficulty: "Easy" | "Medium";
  productSlug: string;
  tagline: string;
  ingredients: string[];
  steps: string[];
};

export const RECIPE_CATEGORIES = ["All", "Cocktails", "Mocktails", "Lemonade", "Tea"] as const;

/* ─── RECIPES ────────────────────────────────────────────────────────────── */
export const RECIPES: Recipe[] = [
  {
    slug: "rose-gold-espresso-martini",
    name: "Rose Gold Espresso Martini",
    category: "Cocktails",
    time: 8,
    difficulty: "Medium",
    productSlug: "rose-gold-shimmer",
    tagline: "A blush-gold twist on the classic — frothy, bold, and made for the after-party.",
    ingredients: ["50ml vodka", "25ml coffee liqueur", "25ml fresh espresso", "10ml sugar syrup", "A pinch of Bling Rose Gold Luxe"],
    steps: [
      "Chill a martini glass in the freezer.",
      "Add vodka, coffee liqueur, espresso, and sugar syrup to a shaker with ice.",
      "Shake hard for 15 seconds until frothy.",
      "Strain into the chilled glass.",
      "Dust the foam with Rose Gold Luxe and serve immediately.",
    ],
  },
  {
    slug: "blue-lagoon-mocktail",
    name: "Blue Lagoon Mocktail",
    category: "Mocktails",
    time: 5,
    difficulty: "Easy",
    productSlug: "blue-buzz",
    tagline: "Electric blue, endlessly refreshing, and shimmering all the way down.",
    ingredients: ["120ml lemonade", "60ml blue curaçao syrup (non-alcoholic)", "Soda water, to top", "A pinch of Bling Blue Lagoon", "Lemon wheel, to garnish"],
    steps: [
      "Fill a tall glass with ice.",
      "Pour in lemonade and blue curaçao syrup.",
      "Top with soda water and stir gently.",
      "Sprinkle Blue Lagoon over the surface and watch it swirl.",
      "Garnish with a lemon wheel.",
    ],
  },
  {
    slug: "shimmer-lemonade",
    name: "Shimmer Lemonade",
    category: "Lemonade",
    time: 4,
    difficulty: "Easy",
    productSlug: "yellow-zing",
    tagline: "Sunshine in a glass — bright, citrusy, and dusted with real zing.",
    ingredients: ["250ml fresh lemonade", "Ice cubes", "A pinch of Bling Yellow Sunburst", "Mint sprig, to garnish"],
    steps: [
      "Fill a glass with ice.",
      "Pour over fresh lemonade.",
      "Stir in a pinch of Yellow Sunburst until it swirls through.",
      "Garnish with mint and serve.",
    ],
  },
  {
    slug: "emerald-iced-tea",
    name: "Emerald Iced Tea",
    category: "Tea",
    time: 10,
    difficulty: "Easy",
    productSlug: "dark-green-gleam",
    tagline: "A deep, jewel-toned iced tea for slow afternoons.",
    ingredients: ["2 green tea bags", "300ml hot water", "1 tbsp honey", "Ice cubes", "A pinch of Bling Dark Green Forest"],
    steps: [
      "Steep tea bags in hot water for 5 minutes, then remove.",
      "Stir in honey while the tea is still warm.",
      "Let cool, then pour over a glass of ice.",
      "Finish with a pinch of Dark Green Forest and stir gently.",
    ],
  },
  {
    slug: "purple-rain-cocktail",
    name: "Purple Rain Cocktail",
    category: "Cocktails",
    time: 7,
    difficulty: "Medium",
    productSlug: "violet-dreams",
    tagline: "A layered, jewel-toned cocktail that pours like a sunset in reverse.",
    ingredients: ["45ml vodka", "15ml blue curaçao", "15ml grenadine", "60ml pineapple juice", "A pinch of Bling Purple Reign"],
    steps: [
      "Fill a shaker with ice and add vodka, blue curaçao, and pineapple juice.",
      "Shake well and strain into a glass filled with ice.",
      "Slowly pour grenadine down the side so it settles at the base.",
      "Dust the top with Purple Reign before serving.",
    ],
  },
  {
    slug: "diamond-fizz-mocktail",
    name: "Diamond Fizz Mocktail",
    category: "Mocktails",
    time: 5,
    difficulty: "Easy",
    productSlug: "diamond-white-shine",
    tagline: "Pure sparkle, zero fuss — the mocktail equivalent of a great outfit.",
    ingredients: ["150ml sparkling white grape juice", "Ice cubes", "A pinch of Bling Diamond White Frost", "Edible flower, to garnish (optional)"],
    steps: [
      "Fill a champagne flute with ice-cold sparkling grape juice.",
      "Add a pinch of Diamond White Frost and watch it float and swirl.",
      "Garnish with an edible flower, if using.",
      "Serve immediately while fizzing.",
    ],
  },
];
