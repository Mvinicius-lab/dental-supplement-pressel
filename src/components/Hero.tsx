import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-accent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Revolutionary Dental Health Support
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8 max-w-2xl mx-auto">
            Advanced formula combining natural ingredients to promote stronger teeth, healthier gums, and fresher breath - backed by science.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield className="h-5 w-5 text-secondary" />
            <span>100% Money Back Guarantee for 60 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;