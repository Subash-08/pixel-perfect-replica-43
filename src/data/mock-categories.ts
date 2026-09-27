// DEVELOPMENT MOCK DATA
import cosmetics from "@/assets/cat-cosmetics.jpg";
import jewellery from "@/assets/cat-jewellery.jpg";
import gifts from "@/assets/cat-gifts.jpg";
import hair from "@/assets/cat-hair.jpg";
import giftsets from "@/assets/cat-giftsets.jpg";
import brushes from "@/assets/p-brushes.jpg";

export interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
  size: "large" | "small";
}

export const categories: Category[] = [
  {
    id: "c1",
    name: "Cosmetics",
    description: "Lips, eyes, face & everyday essentials",
    productCount: 320,
    image: cosmetics,
    size: "large",
  },
  {
    id: "c2",
    name: "Jewellery",
    description: "Earrings, chains, bangles & more",
    productCount: 410,
    image: jewellery,
    size: "large",
  },
  { id: "c3", name: "Gifts", description: "Hampers & thoughtful picks", productCount: 180, image: gifts, size: "small" },
  { id: "c4", name: "Hair Accessories", description: "Claws, pins & scrunchies", productCount: 140, image: hair, size: "small" },
  { id: "c5", name: "Beauty Essentials", description: "Tools & daily must-haves", productCount: 95, image: brushes, size: "small" },
  { id: "c6", name: "Gift Sets", description: "Ready-to-gift curations", productCount: 60, image: giftsets, size: "small" },
];

export const megaMenu: Record<string, string[]> = {
  Cosmetics: ["Face", "Eyes", "Lips", "Nails", "Skin Care", "Hair Accessories", "Perfumes", "Beauty Tools"],
  Jewellery: ["Earrings", "Necklaces", "Chains", "Bangles", "Bracelets", "Rings", "Anklets", "Hair Accessories"],
  Gifts: [
    "Birthday Gifts",
    "Couple Gifts",
    "Kids Gifts",
    "Return Gifts",
    "Home Decor",
    "Gift Sets",
    "Under ₹299",
    "Under ₹499",
    "Under ₹999",
  ],
};

export const moods = [
  { id: "m1", name: "Everyday Beauty", copy: "Soft, simple, wearable", image: cosmetics },
  { id: "m2", name: "Party Ready", copy: "Bold lips & statement shine", image: jewellery },
  { id: "m3", name: "Wedding & Festive", copy: "Traditional sparkle", image: giftsets },
  { id: "m4", name: "Birthday Gifts", copy: "Make the day special", image: gifts },
  { id: "m5", name: "Cute Finds", copy: "Little things under ₹199", image: hair },
  { id: "m6", name: "Gifts for Her", copy: "Always the right choice", image: brushes },
];
