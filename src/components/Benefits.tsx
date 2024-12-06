import { Sparkles, Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Sparkles,
    title: "Stronger Teeth",
    description: "Reinforces enamel and supports natural remineralization",
  },
  {
    icon: Heart,
    title: "Healthier Gums",
    description: "Promotes gum health and reduces sensitivity",
  },
  {
    icon: Shield,
    title: "Natural Protection",
    description: "Creates a protective barrier against harmful bacteria",
  },
  {
    icon: Sparkles,
    title: "Fresh Breath",
    description: "Long-lasting fresh breath with natural ingredients",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Supplement?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;