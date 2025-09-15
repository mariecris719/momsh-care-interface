import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: "1",
    name: "Organic Cotton Baby Onesie",
    price: 19.99,
    image: "/api/placeholder/300/300",
    rating: 5,
    reviews: 24,
    isNew: false,
    isOnSale: false
  },
  {
    id: "2", 
    name: "Eco-Friendly Disposable Diapers",
    price: 42.99,
    originalPrice: 48.54,
    image: "/api/placeholder/300/300",
    rating: 4,
    reviews: 18,
    isNew: false,
    isOnSale: true
  },
  {
    id: "3",
    name: "Baby Sleep Sack",
    price: 34.99,
    image: "/api/placeholder/300/300", 
    rating: 5,
    reviews: 31,
    isNew: true,
    isOnSale: false
  },
  {
    id: "4",
    name: "Natural Baby Wipes",
    price: 12.99,
    image: "/api/placeholder/300/300",
    rating: 4,
    reviews: 45,
    isNew: false,
    isOnSale: false
  },
  {
    id: "5",
    name: "Glass Baby Bottles Set",
    price: 39.99,
    image: "/api/placeholder/300/300",
    rating: 5,
    reviews: 27,
    isNew: true,
    isOnSale: false
  },
  {
    id: "6",
    name: "Adjustable High Chair",
    price: 159.99,
    originalPrice: 179.99,
    image: "/api/placeholder/300/300",
    rating: 4,
    reviews: 13,
    isNew: false,
    isOnSale: true
  }
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-burgundy mb-4">
            Featured Products
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Handpicked essentials for you and your little one
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;