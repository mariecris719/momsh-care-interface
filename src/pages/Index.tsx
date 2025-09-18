import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoCarousel from "@/components/PromoCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromoCarousel />
        <FeaturesSection />
        <FeaturedProductsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Index;
