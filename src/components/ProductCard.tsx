import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews,
  isNew,
  isOnSale 
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-white hover:shadow-soft transition-all duration-300 border-soft-rose/20">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-calm-blue text-white">
            NEW
          </Badge>
        )}
        {isOnSale && (
          <Badge className="absolute top-2 left-2 bg-soft-rose text-white">
            SALE
          </Badge>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-deep-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-2">
        <h3 className="font-medium text-deep-burgundy text-sm line-clamp-2 leading-tight">
          {name}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-soft-rose text-soft-rose' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-bold text-deep-burgundy">₱{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₱{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;