import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Truck, Shield, Percent, Star, Clock, Gift } from "lucide-react";
import { useState } from "react";
import babyCarePromo from "@/assets/baby-care-promo.jpg";
import prenatalVitaminsPromo from "@/assets/prenatal-vitamins-promo.jpg";
import maternityFashionPromo from "@/assets/maternity-fashion-promo.jpg";
import newbornEssentialsPromo from "@/assets/newborn-essentials-promo.jpg";

const PromoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promobanners = [
    {
      id: 1,
      title: "Up to 55% OFF",
      subtitle: "Baby Care Essentials",
      description: "Premium bottles, diapers & more",
      buttonText: "Shop Now",
      bgGradient: "bg-gradient-promo-1",
      image: babyCarePromo,
      badge: "₱300 OFF Voucher",
      trustIcon: Gift,
      isFlashSale: true
    },
    {
      id: 2,
      title: "Buy 1 Take 1",
      subtitle: "Prenatal Vitamins",
      description: "Essential nutrients for mom & baby",
      buttonText: "Claim Deal",
      bgGradient: "bg-gradient-promo-2",
      image: prenatalVitaminsPromo,
      badge: "Mall",
      trustIcon: Star,
      originalPrice: "₱1,299",
      salePrice: "₱649"
    },
    {
      id: 3,
      title: "Exclusive Deals",
      subtitle: "Maternity Fashion",
      description: "Comfort meets style for expecting moms",
      buttonText: "Shop Free",
      bgGradient: "bg-gradient-promo-3",
      image: maternityFashionPromo,
      badge: "Free Shipping",
      trustIcon: Truck,
      isLimitedTime: true
    },
    {
      id: 4,
      title: "0% Interest",
      subtitle: "Newborn Bundle",
      description: "Complete starter kit for your little one",
      buttonText: "Learn More",
      bgGradient: "bg-gradient-promo-4",
      image: newbornEssentialsPromo,
      badge: "3 Months Plan",
      trustIcon: Clock,
      originalPrice: "₱2,999",
      salePrice: "₱999/mo"
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
              <Card key={banner.id} className={`relative overflow-hidden ${banner.bgGradient} border-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                {/* Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <banner.trustIcon className="h-3 w-3" />
                    {banner.badge}
                  </span>
                </div>
                
                {/* Flash Sale Timer */}
                {banner.isFlashSale && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      Flash Sale!
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="absolute right-2 top-2 w-20 h-20 opacity-80 group-hover:opacity-100 transition-opacity z-10">
                  <img src={banner.image} alt={banner.subtitle} className="w-full h-full object-cover rounded-lg" />
                </div>

                <div className="p-4 text-white relative z-10">
                  <div className="mb-3">
                    <h3 className="text-xl font-black mb-1 drop-shadow-lg">{banner.title}</h3>
                    <p className="text-sm font-bold mb-1 drop-shadow">{banner.subtitle}</p>
                    <p className="text-xs opacity-90 drop-shadow">{banner.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  {banner.originalPrice && (
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-xs line-through opacity-70">{banner.originalPrice}</span>
                      <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded">{banner.salePrice}</span>
                    </div>
                  )}

                  <Button 
                    size="sm" 
                    className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </Card>
            ))}
          </div>

          {/* Mobile View - Single banner with navigation */}
          <div className="md:hidden relative">
            <Card className={`relative overflow-hidden ${promobanners[currentSlide].bgGradient} border-0 animate-fade-in group`}>
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                  {(() => {
                    const IconComponent = promobanners[currentSlide].trustIcon;
                    return <IconComponent className="h-3 w-3" />;
                  })()}
                  {promobanners[currentSlide].badge}
                </span>
              </div>
              
              {/* Flash Sale Timer */}
              {promobanners[currentSlide].isFlashSale && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-2 rounded-full animate-pulse">
                    Flash Sale!
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="absolute right-4 top-16 w-24 h-24 opacity-80 z-10">
                <img src={promobanners[currentSlide].image} alt={promobanners[currentSlide].subtitle} className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>

              <div className="p-8 text-white relative z-10">
                <div className="mb-4">
                  <h3 className="text-3xl font-black mb-2 drop-shadow-lg">{promobanners[currentSlide].title}</h3>
                  <p className="text-lg font-bold mb-2 drop-shadow">{promobanners[currentSlide].subtitle}</p>
                  <p className="text-sm opacity-90 drop-shadow">{promobanners[currentSlide].description}</p>
                </div>
                
                {/* Pricing */}
                {promobanners[currentSlide].originalPrice && (
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-sm line-through opacity-70">{promobanners[currentSlide].originalPrice}</span>
                    <span className="text-lg font-bold bg-white/20 px-3 py-2 rounded">{promobanners[currentSlide].salePrice}</span>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  {promobanners[currentSlide].buttonText}
                </Button>
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
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