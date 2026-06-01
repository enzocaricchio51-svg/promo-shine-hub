import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Music2 } from "lucide-react";
import logo from "@/assets/royal-logo.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Royal Penguin" className="h-12 w-12 rounded-full bg-white p-1" />
              <div>
                <div className="font-display text-xl font-bold">Royal Penguin</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">Skating Academy</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              La academia de patinaje donde la pasión, la técnica y la diversión se unen para crear verdaderos campeones.
            </p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, Music2].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Navegación</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {["Inicio", "Nosotros", "Clases", "Galería", "Contacto"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Horarios</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><strong className="text-white">Lun - Vie:</strong> 10:00 - 21:00</li>
              <li><strong className="text-white">Sábado:</strong> 9:00 - 22:00</li>
              <li><strong className="text-white">Domingo:</strong> 10:00 - 20:00</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contáctanos</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5" /> Av. del Patinaje 123, Lima</li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5" /> +51 999 999 999</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5" /> hola@royalpenguin.pe</li>
              <li className="flex gap-2"><Clock size={16} className="mt-0.5" /> Atención 7 días</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Royal Penguin Skating Academy. Patinando con estilo desde Lima 🐧
        </div>
      </div>
    </footer>
  );
};

export default Footer;
