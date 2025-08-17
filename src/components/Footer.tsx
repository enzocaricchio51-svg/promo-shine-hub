import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="Logo Empresa" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="ml-2 text-xl font-bold">PromoShine</span>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Transformamos tu marca con artículos publicitarios de alto impacto en acrílico, madera y merchandising corporativo.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegación</h3>
            <div className="space-y-2">
              <a href="/" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Inicio
              </a>
              <a href="/nosotros" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Nosotros
              </a>
              <a href="/productos" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Productos
              </a>
              <a href="/contacto" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary-foreground/90" />
                <div className="text-sm text-primary-foreground/90">
                  <p>Av. Principal 123</p>
                  <p>Ciudad, País 12345</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-foreground/90" />
                <span className="text-sm text-primary-foreground/90">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-foreground/90" />
                <span className="text-sm text-primary-foreground/90">contacto@promoshine.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-primary-foreground/90" />
                <div className="text-sm text-primary-foreground/90">
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-center text-sm text-primary-foreground/90">
            Copyright © {new Date().getFullYear()} PromoShine. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;