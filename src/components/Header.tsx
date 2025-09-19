import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart, Bell, HelpCircle, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Top Bar */}
      <div className="bg-soft-rose text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          {/* Left Side Links */}
          <div className="flex items-center space-x-6">
            <a href="#seller" className="hover:text-white/80 transition-colors">
              Seller Centre
            </a>
            <a href="#start-selling" className="hover:text-white/80 transition-colors">
              Start Selling
            </a>
            <a href="#download" className="hover:text-white/80 transition-colors">
              Download
            </a>
            <div className="flex items-center space-x-2">
              <span>Follow us on</span>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side Links */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 hover:text-white/80 transition-colors cursor-pointer">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white/80 transition-colors cursor-pointer">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white/80 transition-colors cursor-pointer">
              <Globe className="h-4 w-4" />
              <span>English</span>
              <ChevronDown className="h-3 w-3" />
            </div>
            <Link to="/signup" className="hover:text-white/80 transition-colors font-medium">
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-white/80 transition-colors font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-soft-rose text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Heart className="h-8 w-8 text-white" />
              <span className="text-xl font-bold tracking-wide">
                BetterMomsh
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Sign up and get 100% off on your first order"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white border-0 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button className="bg-white hover:bg-white/90 text-soft-rose px-6 py-3 rounded-r-sm rounded-l-none">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shopping Cart */}
            <div className="flex-shrink-0">
              <Button variant="ghost" size="lg" className="text-white hover:text-white/80 hover:bg-white/10 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-white text-soft-rose text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  1
                </span>
              </Button>
            </div>
          </div>
          
          {/* Trending Searches */}
          <div className="mt-3 flex items-center space-x-4 text-sm">
            <span className="text-white/80">Popular:</span>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Prenatal Vitamins</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Baby Clothes</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Maternity Wear</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Nursing Bras</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Baby Bottles</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;