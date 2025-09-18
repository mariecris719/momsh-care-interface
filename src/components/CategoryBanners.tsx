import { Card } from "@/components/ui/card";
import electronicsCategory from "@/assets/electronics-category.jpg";
import fashionCategory from "@/assets/fashion-category.jpg";
import homeLivingCategory from "@/assets/home-living-category.jpg";
import babyEssentialsCategory from "@/assets/baby-essentials-category.jpg";

const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Tech for modern parents",
      image: electronicsCategory,
      itemCount: "250+ items"
    },
    {
      id: 2,
      name: "Fashion",
      description: "Maternity & baby wear",
      image: fashionCategory,
      itemCount: "500+ items"
    },
    {
      id: 3,
      name: "Home & Living",
      description: "Nursery essentials",
      image: homeLivingCategory,
      itemCount: "180+ items"
    },
    {
      id: 4,
      name: "Baby Essentials",
      description: "Everything for your baby",
      image: babyEssentialsCategory,
      itemCount: "400+ items"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Discover everything you need for your family</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="relative overflow-hidden bg-gradient-category border-0 hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-40 flex flex-col justify-end text-white">
                <h3 className="text-lg font-bold mb-1 drop-shadow-lg">{category.name}</h3>
                <p className="text-sm opacity-90 mb-2 drop-shadow">{category.description}</p>
                <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full w-fit">
                  {category.itemCount}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-soft-rose/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        {/* Additional Category Cards for smaller items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="p-4 bg-background border border-border hover:shadow-soft transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-promo-1 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍼</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Feeding</h4>
                <p className="text-sm text-muted-foreground">Bottles, bibs & more</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-background border border-border hover:shadow-soft transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-promo-2 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🧸</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Toys</h4>
                <p className="text-sm text-muted-foreground">Safe & educational</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-background border border-border hover:shadow-soft transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-promo-3 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🛁</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Bath & Care</h4>
                <p className="text-sm text-muted-foreground">Gentle products</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;