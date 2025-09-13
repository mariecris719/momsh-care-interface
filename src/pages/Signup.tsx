import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import pregnantMomHero from "@/assets/pregnant-mom-hero.png";

const Signup = () => {
  const [accountType, setAccountType] = useState("individual");
  const [gender, setGender] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/login");
  };

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
            <div className="grid lg:grid-cols-2 min-h-[700px]">
              {/* Registration Form */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h2 className="text-3xl font-bold text-deep-burgundy mb-8">
                    {accountType === "business" ? "Registration for Business" : "Registration"}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-deep-burgundy/80 text-sm">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          className="h-10 text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-deep-burgundy/80 text-sm">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          className="h-10 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-deep-burgundy/80 text-sm">Gender</Label>
                      <RadioGroup
                        value={gender}
                        onValueChange={setGender}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="text-sm">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="text-sm">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-deep-burgundy/80 text-sm">
                        Date of Birth
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="h-10 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-deep-burgundy/80 text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        className="h-10 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNo" className="text-deep-burgundy/80 text-sm">
                        Contact No.
                      </Label>
                      <Input
                        id="contactNo"
                        type="tel"
                        placeholder="Enter Contact Number"
                        className="h-10 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-deep-burgundy/80 text-sm">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        className="h-10 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-deep-burgundy/80 text-sm">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="h-10 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-deep-burgundy/80 text-sm">Account</Label>
                      <RadioGroup
                        value={accountType}
                        onValueChange={setAccountType}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business" className="text-sm">Business</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="text-sm">Individual</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Business-specific fields */}
                    {accountType === "business" && (
                      <div className="space-y-6 pt-4 border-t border-soft-rose/20">
                        <div className="space-y-2">
                          <Label htmlFor="businessName" className="text-deep-burgundy/80 text-sm">
                            Business Name
                          </Label>
                          <Input
                            id="businessName"
                            type="text"
                            placeholder="Business Name"
                            className="h-10 text-sm"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="businessAddress" className="text-deep-burgundy/80 text-sm">
                            Business Address
                          </Label>
                          <Input
                            id="businessAddress"
                            type="text"
                            placeholder="Business Address"
                            className="h-10 text-sm"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="taxId" className="text-deep-burgundy/80 text-sm">
                            Tax Identification Number (TIN)*
                          </Label>
                          <Input
                            id="taxId"
                            type="text"
                            placeholder="Enter TIN"
                            className="h-10 text-sm"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Label className="text-deep-burgundy/80 text-sm">Business Type</Label>
                            <RadioGroup
                              defaultValue="individual"
                              className="space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="individual" id="businessIndividual" />
                                <Label htmlFor="businessIndividual" className="text-sm">Individual</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sole-proprietor" id="soleProprietor" />
                                <Label htmlFor="soleProprietor" className="text-sm">Sole Proprietor</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="corporation" id="corporation" />
                                <Label htmlFor="corporation" className="text-sm">Corporation</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="businessCategory" className="text-deep-burgundy/80 text-sm">
                              Business Category
                            </Label>
                            <select
                              id="businessCategory"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Choose Category</option>
                              <option value="healthcare">Healthcare</option>
                              <option value="retail">Retail</option>
                              <option value="services">Services</option>
                              <option value="technology">Technology</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-deep-burgundy/80 text-sm">
                            Business License Registration Form
                          </Label>
                          <div className="border-2 border-dashed border-soft-rose/30 rounded-lg p-4 text-center hover:border-soft-rose/50 transition-colors">
                            <input
                              id="businessLicense"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                            />
                            <label
                              htmlFor="businessLicense"
                              className="cursor-pointer flex flex-col items-center space-y-2"
                            >
                              <div className="w-12 h-12 bg-soft-rose/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-soft-rose" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                </svg>
                              </div>
                              <span className="text-sm text-soft-rose font-medium">
                                Click File here
                              </span>
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="businessTerms"
                            className="mt-1 h-4 w-4 text-soft-rose border-gray-300 rounded focus:ring-soft-rose"
                            required
                          />
                          <Label htmlFor="businessTerms" className="text-sm text-deep-burgundy/70 leading-5">
                            By signing up, you agree to Bettermomsh's{" "}
                            <span className="text-soft-rose hover:underline cursor-pointer">
                              Terms of Service
                            </span>{" "}
                            &{" "}
                            <span className="text-soft-rose hover:underline cursor-pointer">
                              Policy
                            </span>
                          </Label>
                        </div>
                      </div>
                    )}

                    {/* Individual-specific fields */}
                    {accountType === "individual" && (
                      <div className="space-y-6 pt-4 border-t border-soft-rose/20">
                        <div className="space-y-2">
                          <Label htmlFor="shopName" className="text-deep-burgundy/80 text-sm">
                            Shop Name <span className="text-deep-burgundy/40">(optional)</span>
                          </Label>
                          <Input
                            id="shopName"
                            type="text"
                            placeholder="Enter Name"
                            className="h-10 text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-deep-burgundy/80 text-sm">
                            Attach Valid ID Here:
                          </Label>
                          <div className="border-2 border-dashed border-soft-rose/30 rounded-lg p-8 text-center hover:border-soft-rose/50 transition-colors">
                            <input
                              id="validId"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                            />
                            <label
                              htmlFor="validId"
                              className="cursor-pointer flex flex-col items-center space-y-3"
                            >
                              <div className="w-12 h-12 bg-soft-rose/20 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-soft-rose" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                </svg>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-deep-burgundy/60 mb-1">
                                  Upload your file here
                                </p>
                                <p className="text-xs text-deep-burgundy/40">
                                  Drag & Drop files
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 h-4 w-4 text-soft-rose border-gray-300 rounded focus:ring-soft-rose"
                            required
                          />
                          <Label htmlFor="terms" className="text-sm text-deep-burgundy/70 leading-5">
                            By signing up, you agree to Bettermomsh's{" "}
                            <span className="text-soft-rose hover:underline cursor-pointer">
                              Terms of Service
                            </span>{" "}
                            &{" "}
                            <span className="text-soft-rose hover:underline cursor-pointer">
                              Policy
                            </span>
                          </Label>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full h-10 text-sm font-medium"
                    >
                      Next
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <span className="text-deep-burgundy/60 text-sm">
                      Already have an account?{" "}
                      <Link 
                        to="/login" 
                        className="text-deep-burgundy font-medium hover:underline"
                      >
                        Log In
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

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md bg-white border-0 shadow-xl">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-soft-rose to-peach rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-bold text-deep-burgundy">
              SUCCESSFULLY REGISTERED!
            </DialogTitle>
            <p className="text-deep-burgundy/60 text-sm">
              Please verify by typing verification on your email link.
            </p>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={handleSuccessClose}
              variant="hero" 
              size="lg" 
              className="px-12"
            >
              Proceed
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signup;