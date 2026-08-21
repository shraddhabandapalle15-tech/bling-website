import { ZING_YELLOW, PINK, GIRL_PINK, LAV, DARK_GREEN } from "../theme";

export type Collection = {
  slug: string;
  name: string;
  subtitle: string;
  colorFrom: string;
  colorTo: string;
  productSlugs: string[];
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "bestsellers",
    name: "Bestsellers",
    subtitle: "The shades everyone keeps coming back for.",
    colorFrom: ZING_YELLOW,
    colorTo: "#d9b431",
    productSlugs: ["pink-pop", "aurora-gold", "diamond-white-shine", "rose-gold-shimmer"],
  },
  {
    slug: "metallics",
    name: "Metallics",
    subtitle: "Warm, luxe shimmer for cocktails and celebrations.",
    colorFrom: PINK,
    colorTo: "#d498be",
    productSlugs: ["aurora-gold", "diamond-white-shine", "black-spark", "rose-gold-shimmer"],
  },
  {
    slug: "pastel-dreams",
    name: "Pastel Dreams",
    subtitle: "Soft, dreamy tones for baby showers and bridal brunches.",
    colorFrom: GIRL_PINK,
    colorTo: "#e2a0c2",
    productSlugs: ["pink-pop", "girl-pink-spark", "baby-blue-dream"],
  },
  {
    slug: "party-brights",
    name: "Party Brights",
    subtitle: "Bold, saturated shades built for the dance floor.",
    colorFrom: LAV,
    colorTo: "#9e94d8",
    productSlugs: ["yellow-zing", "violet-dreams", "blue-buzz", "fruit-green-twist", "teal-splash"],
  },
  {
    slug: "moody-deep",
    name: "Moody & Deep",
    subtitle: "Rich, dramatic tones for evening menus and winter events.",
    colorFrom: DARK_GREEN,
    colorTo: "#3e6650",
    productSlugs: ["dark-red-dazzle", "dark-green-gleam", "black-spark"],
  },
];
