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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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