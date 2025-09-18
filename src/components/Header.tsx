import { Button } from "@/components/ui/button";
import { Heart, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Promotional Banner */}
      <div className="bg-soft-rose text-white text-center py-2 px-4">
        <p className="text-sm font-medium">Free shipping on all orders over $50</p>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-soft-rose" />
            <span className="text-lg font-bold text-deep-burgundy tracking-wide">
              BetterMomsh
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              Home
            </Link>
            <a href="#shop" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              Shop
            </a>
            <a href="#categories" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Search className="h-5 w-5 text-foreground/70" />
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Heart className="h-5 w-5 text-foreground/70" />
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 relative">
              <ShoppingCart className="h-5 w-5 text-foreground/70" />
              <span className="absolute -top-1 -right-1 bg-soft-rose text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                1
              </span>
            </Button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground font-medium" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="default" size="sm" className="bg-soft-rose hover:bg-soft-rose/90 text-white font-medium" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;