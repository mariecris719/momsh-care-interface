import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pregnant-mom-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-soft-rose/20 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-left lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-burgundy leading-tight tracking-tight">
              CURATED PRODUCTS
              <br />
              FOR MODERN MOMS
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
              Discover baby essentials that make parenting easier and more joyful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="font-medium px-8 py-3 rounded-full"
                asChild
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="font-medium px-8 py-3 rounded-full"
                asChild
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Pregnant mom illustration - Better Momsh" 
                className="w-full max-w-sm lg:max-w-md object-contain"
              />
            </div>
            
            {/* Decorative botanical elements */}
            <div className="absolute top-10 right-0 w-6 h-6 bg-fresh-green/40 rounded-full"></div>
            <div className="absolute top-20 right-12 w-4 h-4 bg-calm-blue/40 rounded-full"></div>
            <div className="absolute bottom-16 left-8 w-5 h-5 bg-peach/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;