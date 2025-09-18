import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Truck, Shield, Percent } from "lucide-react";
import { useState } from "react";

const PromoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promobanners = [
    {
      id: 1,
      title: "Up to 50% Off",
      subtitle: "Prenatal Vitamins",
      description: "Essential nutrients for mom & baby",
      buttonText: "Shop Now",
      bgGradient: "from-soft-rose to-peach",
      image: "🤱"
    },
    {
      id: 2,
      title: "Buy 1 Take 1",
      subtitle: "Baby Care Sets",
      description: "Complete newborn essentials",
      buttonText: "Claim Deal",
      bgGradient: "from-peach to-soft-rose",
      image: "👶"
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "Orders Over $50",
      description: "Nationwide delivery guaranteed",
      buttonText: "Shop Free",
      bgGradient: "from-soft-rose via-peach to-soft-rose",
      image: "🚚"
    },
    {
      id: 4,
      title: "0% Interest",
      subtitle: "Payment Plans",
      description: "Split your purchase into 4 payments",
      buttonText: "Learn More",
      bgGradient: "from-peach to-soft-rose",
      image: "💳"
    }
  ];

  const trustBadges = [
    { icon: Truck, text: "Free Shipping" },
    { icon: Shield, text: "Secure Payment" },
    { icon: Percent, text: "Best Deals" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promobanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promobanners.length) % promobanners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6">
        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-8 mb-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2 text-foreground/70">
              <badge.icon className="h-4 w-4 text-soft-rose" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Desktop View - Multiple banners */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {promobanners.map((banner, index) => (
              <Card key={banner.id} className={`relative overflow-hidden bg-gradient-to-br ${banner.bgGradient} border-0 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                <div className="p-6 text-center text-white relative z-10">
                  <div className="text-4xl mb-3">{banner.image}</div>
                  <h3 className="text-lg font-bold mb-1">{banner.title}</h3>
                  <p className="text-sm font-semibold mb-1">{banner.subtitle}</p>
                  <p className="text-xs opacity-90 mb-4">{banner.description}</p>
                  <Button 
                    size="sm" 
                    className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-medium"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black/10"></div>
              </Card>
            ))}
          </div>

          {/* Mobile View - Single banner with navigation */}
          <div className="md:hidden relative">
            <Card className={`relative overflow-hidden bg-gradient-to-br ${promobanners[currentSlide].bgGradient} border-0 animate-fade-in`}>
              <div className="p-8 text-center text-white relative z-10">
                <div className="text-6xl mb-4">{promobanners[currentSlide].image}</div>
                <h3 className="text-2xl font-bold mb-2">{promobanners[currentSlide].title}</h3>
                <p className="text-lg font-semibold mb-2">{promobanners[currentSlide].subtitle}</p>
                <p className="text-sm opacity-90 mb-6">{promobanners[currentSlide].description}</p>
                <Button 
                  size="lg" 
                  className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-medium"
                >
                  {promobanners[currentSlide].buttonText}
                </Button>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {promobanners.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-soft-rose' : 'bg-foreground/30'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-soft-rose/10 to-peach/10 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground/80">Flash Sale</p>
              <p className="text-xs text-foreground/60">Ends in 2 hours</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-peach/10 to-soft-rose/10 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground/80">New Arrivals</p>
              <p className="text-xs text-foreground/60">Latest products</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-soft-rose/10 to-peach/10 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground/80">Member Perks</p>
              <p className="text-xs text-foreground/60">Exclusive deals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;