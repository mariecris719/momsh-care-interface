import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoCarousel from "@/components/PromoCarousel";
import CategoryBanners from "@/components/CategoryBanners";
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
        <CategoryBanners />
        <FeaturesSection />
        <FeaturedProductsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Index;
