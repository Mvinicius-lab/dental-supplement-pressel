import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Journey to Better Dental Health Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their dental health naturally
        </p>
        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
          Order Now
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2">
          <Shield className="h-5 w-5" />
          <span>60-Day Money-Back Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;