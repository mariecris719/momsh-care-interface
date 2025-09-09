import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import pregnantMomHero from "@/assets/pregnant-mom-hero.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-rose/30 to-soft-rose/10">
      {/* Header */}
      <div className="p-4">
        <Link to="/" className="text-sm text-deep-burgundy/60 hover:text-deep-burgundy">
          ← Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-deep-burgundy tracking-wide">
              BETTER MOMSH
            </h1>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Login Form */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h2 className="text-3xl font-bold text-deep-burgundy mb-8">
                    Log In
                  </h2>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-deep-burgundy/80">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        className="h-12 text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-deep-burgundy/80">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        className="h-12 text-base"
                      />
                    </div>

                    <div className="text-right">
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-deep-burgundy/60 hover:text-deep-burgundy transition-colors"
                      >
                        Forgot Password
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full h-12 text-base font-medium"
                    >
                      Log In
                    </Button>
                  </form>

                  <div className="mt-8 text-center">
                    <span className="text-deep-burgundy/60">
                      Don't have an account?{" "}
                      <Link 
                        to="/signup" 
                        className="text-deep-burgundy font-medium hover:underline"
                      >
                        Sign Up
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="bg-gradient-to-br from-soft-rose/20 to-peach/10 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <img
                    src={pregnantMomHero}
                    alt="Pregnant woman illustration"
                    className="max-w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-peach/30 rounded-full"></div>
                <div className="absolute top-24 right-16 w-3 h-3 bg-soft-rose/40 rounded-full"></div>
                <div className="absolute bottom-20 left-16 w-5 h-5 bg-calm-blue/20 rounded-full"></div>
                <div className="absolute bottom-32 right-10 w-2 h-2 bg-fresh-green/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;