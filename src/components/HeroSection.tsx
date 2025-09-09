import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pregnant-mom-hero.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-soft min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-primary leading-tight">
                CURATED PRODUCTS
                <br />
                <span className="text-primary">FOR MODERN MOMS</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Discover baby essentials that make parenting easier and more joyful.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="text-base">
                Log In
              </Button>
              <Button variant="hero-outline" size="xl" className="text-base">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 scale-110"></div>
              <img
                src={heroImage}
                alt="Happy pregnant mom surrounded by botanical elements"
                className="relative z-10 w-full max-w-md lg:max-w-lg rounded-3xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;