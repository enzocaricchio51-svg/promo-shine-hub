import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/royal-logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola Royal Penguin! Quiero más información sobre las clases de patinaje.");
    window.open(`https://wa.me/51999999999?text=${message}`, "_blank");
  };

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Clases" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Royal Penguin"
            className="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-md group-hover:rotate-12 transition-transform"
          />
          <div className="leading-none">
            <div className="font-display text-xl font-bold text-gradient-royal">Royal Penguin</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Skating Academy</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="cta" size="lg" onClick={handleWhatsAppClick} className="hidden sm:flex animate-glow-pulse">
            <MessageCircle size={18} />
            Reserva ahora
          </Button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary/10 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <Button variant="cta" onClick={handleWhatsAppClick} className="mt-2">
              <MessageCircle size={18} /> Reserva ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
