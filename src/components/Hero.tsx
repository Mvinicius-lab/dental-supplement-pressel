import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";

const Hero = () => {
  const handleVSLClick = () => {
    window.location.href = "https://gumaktiv.com/text.php";
  };

  return (
    <div className="relative bg-accent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeIn">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="text-red-500 h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Warning: Your Gums Might Be In Danger
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8 max-w-2xl mx-auto">
            98% of Americans are at risk of serious gum problems without even knowing it. This hidden threat could be affecting your oral health right now.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-xl px-8 py-6"
              onClick={handleVSLClick}
            >
              Watch This Important Video Now
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield className="h-5 w-5 text-secondary" />
            <span>Free Educational Video - Limited Time Only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;