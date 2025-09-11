import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-soft-rose/20 backdrop-blur supports-[backdrop-filter]:bg-soft-rose/20 border-b border-soft-rose/20">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-soft-rose" />
          <span className="text-lg font-bold text-deep-burgundy tracking-wide">
            BETTER MOMSH
          </span>
        </div>

        {/* Navigation - Hidden on mobile for cleaner look */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#products" className="text-deep-burgundy/70 hover:text-deep-burgundy transition-colors font-medium">
            Products
          </a>
          <a href="#about" className="text-deep-burgundy/70 hover:text-deep-burgundy transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-deep-burgundy/70 hover:text-deep-burgundy transition-colors font-medium">
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-deep-burgundy hover:text-soft-rose font-medium"
            asChild
          >
            <Link to="/login">Log In</Link>
          </Button>
          <Button variant="hero" size="sm" className="font-medium" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;