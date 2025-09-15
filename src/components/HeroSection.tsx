import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pregnant-mom-hero.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-soft-rose/20 to-peach/10 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-left lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-burgundy leading-tight tracking-tight">
                The Best for Your
                <br />
                <span className="text-soft-rose">Little One</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 max-w-lg leading-relaxed">
                Curated premium baby essentials that modern moms trust and love.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="hero" 
                size="xl"
                className="font-medium rounded-full"
              >
                Shop Now
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="font-medium rounded-full"
                asChild
              >
                <Link to="/signup">Join Community</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
              <img 
                src={heroImage} 
                alt="Happy mom with baby - Better Momsh" 
                className="w-full max-w-sm lg:max-w-md object-contain"
              />
            </div>
            
            {/* Decorative botanical elements */}
            <div className="absolute top-10 right-0 w-8 h-8 bg-fresh-green/40 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-12 w-6 h-6 bg-calm-blue/40 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-16 left-8 w-7 h-7 bg-peach/40 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;