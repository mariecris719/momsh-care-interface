import { Truck, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "All orders over ₱50. We deliver nationwide with only minimal delivery costs.",
  },
  {
    icon: Shield,
    title: "Trusted Brands",
    description: "We only sell well-trusted and quality-safe brands.",
  },
  {
    icon: Heart,
    title: "Mom-Approved",
    description: "All products are reviewed and approved by our moms.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-soft-rose to-peach rounded-full flex items-center justify-center shadow-soft">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-burgundy">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;