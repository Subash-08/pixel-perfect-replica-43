// DEVELOPMENT MOCK DATA — not real inventory. Replace with CMS/API data later.
import lipstick from "@/assets/p-lipstick.jpg";
import hoops from "@/assets/p-hoops.jpg";
import necklace from "@/assets/p-necklace.jpg";
import brushes from "@/assets/p-brushes.jpg";
import cosmetics from "@/assets/cat-cosmetics.jpg";
import jewellery from "@/assets/cat-jewellery.jpg";
import hair from "@/assets/cat-hair.jpg";
import giftsets from "@/assets/cat-giftsets.jpg";
import gifts from "@/assets/cat-gifts.jpg";

export type ProductBadge = "NEW" | "BESTSELLER" | "TRENDING" | "JUST IN" | "LIMITED STOCK";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  secondaryImage?: string;
  sellingPrice: number;
  mrp: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
  isNew?: boolean;
  variants?: string[];
}

const discount = (mrp: number, price: number) => Math.round(((mrp - price) / mrp) * 100);

const make = (p: Omit<Product, "discountPercentage">): Product => ({
  ...p,
  discountPercentage: discount(p.mrp, p.sellingPrice),
});

export const products: Product[] = [
  make({
    id: "p1",
    slug: "swiss-beauty-lipstick",
    name: "Swiss Beauty Matte Lipstick",
    category: "Cosmetics",
    brand: "Swiss Beauty",
    image: lipstick,
    secondaryImage: cosmetics,
    sellingPrice: 249,
    mrp: 349,
    rating: 4.4,
    reviewCount: 218,
    badge: "BESTSELLER",
    variants: ["Rose Nude", "Brick Red", "Mauve"],
  }),
  make({
    id: "p2",
    slug: "matte-liquid-lip-colour",
    name: "Matte Liquid Lip Colour",
    category: "Cosmetics",
    brand: "Glam Studio",
    image: cosmetics,
    secondaryImage: lipstick,
    sellingPrice: 199,
    mrp: 299,
    rating: 4.2,
    reviewCount: 143,
    badge: "TRENDING",
    variants: ["Coral", "Wine", "Blush"],
  }),
  make({
    id: "p3",
    slug: "korean-style-hoop-earrings",
    name: "Korean Style Gold Hoop Earrings",
    category: "Jewellery",
    brand: "AVAL Studio",
    image: hoops,
    secondaryImage: jewellery,
    sellingPrice: 149,
    mrp: 249,
    rating: 4.6,
    reviewCount: 312,
    badge: "NEW",
    isNew: true,
    variants: ["Small", "Medium", "Large"],
  }),
  make({
    id: "p4",
    slug: "american-diamond-necklace-set",
    name: "American Diamond Necklace Set",
    category: "Jewellery",
    brand: "AVAL Signature",
    image: necklace,
    secondaryImage: jewellery,
    sellingPrice: 799,
    mrp: 1299,
    rating: 4.7,
    reviewCount: 96,
    badge: "BESTSELLER",
  }),
  make({
    id: "p5",
    slug: "pearl-hair-claw-set",
    name: "Pearl Hair Claw & Pin Set",
    category: "Hair Accessories",
    brand: "AVAL Studio",
    image: hair,
    secondaryImage: giftsets,
    sellingPrice: 129,
    mrp: 199,
    rating: 4.3,
    reviewCount: 187,
    badge: "TRENDING",
  }),
  make({
    id: "p6",
    slug: "rose-gift-hamper",
    name: "Rose Gift Hamper Box",
    category: "Gifts",
    brand: "AVAL Gifting",
    image: giftsets,
    secondaryImage: gifts,
    sellingPrice: 599,
    mrp: 899,
    rating: 4.5,
    reviewCount: 74,
    badge: "NEW",
    isNew: true,
  }),
  make({
    id: "p7",
    slug: "premium-makeup-brush-set",
    name: "Premium Makeup Brush Set",
    category: "Beauty Tools",
    brand: "Glam Studio",
    image: brushes,
    secondaryImage: cosmetics,
    sellingPrice: 449,
    mrp: 699,
    rating: 4.6,
    reviewCount: 231,
    badge: "BESTSELLER",
  }),
  make({
    id: "p8",
    slug: "oxidised-jhumka-earrings",
    name: "Oxidised Silver Jhumka Earrings",
    category: "Jewellery",
    brand: "AVAL Studio",
    image: jewellery,
    secondaryImage: hoops,
    sellingPrice: 299,
    mrp: 499,
    rating: 4.4,
    reviewCount: 158,
  }),
  make({
    id: "p9",
    slug: "everyday-kajal-eyeliner-duo",
    name: "Everyday Kajal & Eyeliner Duo",
    category: "Cosmetics",
    brand: "Swiss Beauty",
    image: cosmetics,
    secondaryImage: brushes,
    sellingPrice: 179,
    mrp: 279,
    rating: 4.1,
    reviewCount: 122,
    badge: "JUST IN",
    isNew: true,
  }),
  make({
    id: "p10",
    slug: "layered-chain-necklace",
    name: "Layered Daily Wear Chain",
    category: "Jewellery",
    brand: "AVAL Studio",
    image: jewellery,
    secondaryImage: necklace,
    sellingPrice: 229,
    mrp: 399,
    rating: 4.5,
    reviewCount: 88,
    badge: "JUST IN",
    isNew: true,
  }),
  make({
    id: "p11",
    slug: "birthday-surprise-gift-box",
    name: "Birthday Surprise Gift Box",
    category: "Gifts",
    brand: "AVAL Gifting",
    image: gifts,
    secondaryImage: giftsets,
    sellingPrice: 499,
    mrp: 799,
    rating: 4.6,
    reviewCount: 64,
    badge: "LIMITED STOCK",
  }),
  make({
    id: "p12",
    slug: "satin-scrunchie-trio",
    name: "Satin Scrunchie Trio",
    category: "Hair Accessories",
    brand: "AVAL Studio",
    image: hair,
    secondaryImage: giftsets,
    sellingPrice: 99,
    mrp: 179,
    rating: 4.2,
    reviewCount: 201,
    badge: "JUST IN",
    isNew: true,
  }),
];

export const trendingProducts = products.slice(0, 8);
export const bestSellers = [products[3]!, products[6]!, products[0]!, products[7]!, products[5]!, products[9]!];
export const newArrivals = [products[8]!, products[9]!, products[11]!, products[2]!, products[10]!, products[5]!, products[4]!];

export const searchSuggestions = [
  "Matte lipstick",
  "Hoop earrings",
  "Necklace set",
  "Hair claw clips",
  "Birthday gift box",
  "Makeup brush set",
];

export const recentSearches = ["Jhumka earrings", "Lip gloss", "Return gifts"];

export const categorySuggestions = ["Cosmetics", "Jewellery", "Gifts", "Hair Accessories"];
