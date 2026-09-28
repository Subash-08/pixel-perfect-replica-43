import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { StoreProvider } from "@/lib/store";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Hero } from "@/components/home/Hero";
import { CategoryDiscovery } from "@/components/home/CategoryDiscovery";
import { TrendingSection } from "@/components/home/TrendingSection";
import { BudgetSection } from "@/components/home/BudgetSection";
import { PromoBanner } from "@/components/common/PromoBanner";
import { BestSellers } from "@/components/home/BestSellers";
import { MoodSection } from "@/components/home/MoodSection";
import { WholesaleSection } from "@/components/home/WholesaleSection";
import { NewArrivals } from "@/components/home/NewArrivals";
import { SplitFeature } from "@/components/home/SplitFeature";
import { TrustStrip } from "@/components/home/TrustStrip";
import { InstagramSection } from "@/components/home/InstagramSection";
import { WhatsAppCta } from "@/components/home/WhatsAppCta";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import promo from "@/assets/promo-everyday-glam.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVAL — Beauty & Bounty | Cosmetics, Jewellery & Gifts" },
      {
        name: "description",
        content:
          "Shop trending cosmetics, fashion jewellery and thoughtful gifts at AVAL, Konganapuram. Wholesale & retail available — new arrivals every week.",
      },
      { property: "og:title", content: "AVAL — Beauty & Bounty" },
      {
        property: "og:description",
        content:
          "Trending cosmetics, statement jewellery and thoughtful gifts — handpicked for every style and every celebration. Wholesale & retail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <StoreProvider>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <CategoryDiscovery />
        <TrendingSection />
        <BudgetSection />
        <PromoBanner
          eyebrow="The Everyday Glam Edit"
          title="Small details. Big difference."
          copy="Refresh your everyday look with accessories and beauty essentials starting at ₹99."
          cta="Shop the Edit"
          image={promo}
        />
        <BestSellers />
        <MoodSection />
        <WholesaleSection />
        <NewArrivals />
        <SplitFeature />
        <TrustStrip />
        <InstagramSection />
        <WhatsAppCta />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="bottom-center" richColors />
    </StoreProvider>
  );
}
