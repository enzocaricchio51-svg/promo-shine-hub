import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, estoy interesado/a en cotizar sus productos publicitarios.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/placeholder.svg" 
            alt="Logo Empresa" 
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-primary">PromoShine</span>
        </div>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
            Inicio
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
            Nosotros
          </a>
          <a href="#productos" className="text-foreground hover:text-primary transition-colors font-medium">
            Productos
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
            Contacto
          </a>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="cta" 
          size="lg"
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2"
        >
          <MessageCircle size={18} />
          Cotiza Ahora
        </Button>
      </div>
    </header>
  );
};

export default Header;