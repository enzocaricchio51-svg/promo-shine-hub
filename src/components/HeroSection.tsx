import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-promotional-products.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, estoy interesado/a en cotizar sus productos publicitarios.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transformamos tu Marca con{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text">
              Artículos Publicitarios
            </span>{" "}
            de Alto Impacto
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Soluciones creativas en acrílico, madera y merchandising diseñadas para destacar tu empresa en cada detalle
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-48"
            >
              Ver Productos
              <ArrowRight size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="min-w-48 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageCircle size={20} />
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;