import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      title: "Artículos en Acrílico",
      description: "Placas, trofeos y señalización de alta calidad",
      image: "/placeholder.svg",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Detalles en Madera",
      description: "Productos personalizados con grabado láser",
      image: "/placeholder.svg",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Merchandising Corporativo",
      description: "Artículos promocionales para tu empresa",
      image: "/placeholder.svg",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="productos-preview" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explora Nuestras Soluciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la variedad de productos publicitarios que tenemos para hacer brillar tu marca
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-cta transition-colors"
                >
                  Ver más
                  <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;