import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    content: "I've noticed a significant improvement in my gum health since starting this supplement. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Verified Customer",
    content: "My dentist noticed the difference in my last check-up. This is now a permanent part of my daily routine.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Verified Customer",
    content: "Finally found a natural solution that actually works. My teeth feel stronger and cleaner.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;