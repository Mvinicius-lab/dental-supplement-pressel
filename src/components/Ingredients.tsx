import { Card } from "@/components/ui/card";

const ingredients = [
  {
    name: "Vitamin D3",
    benefit: "Supports calcium absorption and bone strength",
  },
  {
    name: "Calcium",
    benefit: "Essential mineral for teeth and bone health",
  },
  {
    name: "Vitamin K2",
    benefit: "Helps direct calcium to bones and teeth",
  },
  {
    name: "Zinc",
    benefit: "Supports immune system and oral health",
  },
];

const Ingredients = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Premium Natural Ingredients
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Each ingredient is carefully selected and scientifically proven to support optimal dental health
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-primary">
                {ingredient.name}
              </h3>
              <p className="text-gray-600">{ingredient.benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;