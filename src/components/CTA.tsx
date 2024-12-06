import { Button } from "@/components/ui/button";
import { Shield, AlertCircle } from "lucide-react";

const CTA = () => {
  const handleVSLClick = () => {
    window.location.href = "https://gumaktiv.com/text.php";
  };

  return (
    <section className="py-24 bg-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <AlertCircle className="h-12 w-12 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">
          Don't Wait Until It's Too Late
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Every minute you delay could be putting your oral health at greater risk. Watch this crucial video to discover what big dental companies don't want you to know.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-red-500 hover:bg-gray-100 text-xl px-8 py-6"
          onClick={handleVSLClick}
        >
          Watch The Video Now
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2">
          <Shield className="h-5 w-5" />
          <span>Important Health Information Inside</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;