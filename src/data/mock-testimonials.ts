// DEVELOPMENT MOCK DATA — placeholder reviews, not real customers.
export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  purchasedCategory: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Divya R.",
    city: "Salem",
    rating: 5,
    text: "The jhumkas look far more expensive than the price. Packed neatly and the colours matched the photos.",
    purchasedCategory: "Jewellery",
  },
  {
    id: "t2",
    name: "Keerthi S.",
    city: "Erode",
    rating: 4,
    text: "Bought lipsticks and a brush set for my sister. Good quality for the price and easy to order over WhatsApp.",
    purchasedCategory: "Cosmetics",
  },
  {
    id: "t3",
    name: "Muthu Selvi",
    city: "Konganapuram",
    rating: 5,
    text: "I buy in bulk for my shop. Wide variety and new stock arrives often, which my customers love.",
    purchasedCategory: "Wholesale",
  },
  {
    id: "t4",
    name: "Anitha P.",
    city: "Coimbatore",
    rating: 5,
    text: "The gift hamper was beautifully put together. Perfect for a birthday without spending too much.",
    purchasedCategory: "Gifts",
  },
];
