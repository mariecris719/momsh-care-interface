import { Truck, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
    color: "text-calm-blue",
    bgColor: "bg-calm-blue/10"
  },
  {
    icon: Shield,
    title: "Trusted Brands",
    description: "Carefully selected quality products",
    color: "text-fresh-green",
    bgColor: "bg-fresh-green/10"
  },
  {
    icon: Heart,
    title: "Mom-Approved Products",
    description: "Tested and recommended by real moms",
    color: "text-secondary",
    bgColor: "bg-secondary/20"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-soft-rose/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Shipping */}
          <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto bg-soft-rose/30 rounded-full flex items-center justify-center">
              <Truck className="h-6 w-6 text-soft-rose" />
            </div>
            <h3 className="text-lg font-bold text-deep-burgundy">Free Shipping</h3>
            <p className="text-sm text-soft-rose">
              Free shipping on all orders over $50
            </p>
          </div>

          {/* Trusted Brands */}
          <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto bg-soft-rose/30 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-soft-rose" />
            </div>
            <h3 className="text-lg font-bold text-deep-burgundy">Trusted Brands</h3>
            <p className="text-sm text-soft-rose">
              Carefully selected quality products
            </p>
          </div>

          {/* Mom-Approved Products */}
          <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto bg-soft-rose/30 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-soft-rose" />
            </div>
            <h3 className="text-lg font-bold text-deep-burgundy">Mom-Approved Products</h3>
            <p className="text-sm text-soft-rose">
              Tested and recommended by real moms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;