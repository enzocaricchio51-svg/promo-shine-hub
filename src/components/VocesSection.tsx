import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Valeria Quispe",
    role: "Mamá de patinadora",
    text: "Mi hija pasó de no atreverse a patinar a hacer piruetas en 3 meses. Los coaches son increíbles y muy pacientes.",
    avatar: "👧",
  },
  {
    name: "Sofía & Marco",
    role: "Cumpleaños temático",
    text: "Royal Penguin organizó el cumpleaños número 15 de mi hija. Todo fue mágico: la pista, la música, las luces. Inolvidable.",
    avatar: "🎉",
  },
  {
    name: "Familia Torres",
    role: "Clases familiares",
    text: "Toda la familia patina cada sábado. Es nuestro momento favorito de la semana. El pingüino mascota se robó nuestros corazones.",
    avatar: "👨‍👩‍👧‍👦",
  },
];

const VocesSection = () => {
  return (
    <section id="voces" className="relative py-24 bg-gradient-royal text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-white/80 font-semibold uppercase tracking-widest text-sm">Testimonios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">Voces de la familia Royal</h2>
          <p className="text-white/85 text-lg">Historias reales de quienes ya patinaron con nosotros y se enamoraron del hielo y las ruedas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={t.name} className="border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all hover:-translate-y-2 duration-500" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-8 space-y-5">
                <Quote className="text-white/40" size={40} />
                <p className="leading-relaxed text-white/95">"{t.text}"</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">{t.avatar}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-white/70">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VocesSection;
