import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Patín Inicial",
    price: "S/ 120",
    tag: "Empieza tu aventura",
    icon: Sparkles,
    popular: false,
    features: ["4 clases al mes", "Equipo de protección incluido", "Coach personalizado", "Evaluación inicial"],
  },
  {
    name: "Royal Pro",
    price: "S/ 220",
    tag: "El más elegido",
    icon: Crown,
    popular: true,
    features: ["8 clases al mes", "Acceso a pista profesional", "Coach + asistente", "Sesión de fotos mensual", "Acceso al show anual"],
  },
  {
    name: "Elite Skater",
    price: "S/ 380",
    tag: "Competición y shows",
    icon: Star,
    popular: false,
    features: ["12 clases al mes", "Entrenador certificado", "Preparación para competencia", "Vestuario de show incluido", "Coreografía personalizada"],
  },
];

const PlanesSection = () => {
  return (
    <section id="planes" className="relative py-24 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cta font-semibold uppercase tracking-widest text-sm">Nuestros Planes</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Elige tu camino en el <span className="text-gradient-royal">patinaje</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Planes diseñados para que vivas el patinaje desde tu primer giro hasta tu primera medalla.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((p, i) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.name}
                className={`relative overflow-hidden border-2 transition-all duration-500 hover:-translate-y-3 ${
                  p.popular ? "border-primary shadow-royal scale-105 bg-gradient-to-b from-white to-secondary" : "border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-royal text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                    Más popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.popular ? "bg-gradient-royal text-white" : "bg-primary/10 text-primary"}`}>
                    <Icon size={26} />
                  </div>
                  <div>
                    <div className="text-xs text-cta font-semibold uppercase tracking-wider mb-1">{p.tag}</div>
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-primary">{p.price}</span>
                    <span className="text-muted-foreground text-sm">/mes</span>
                  </div>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={p.popular ? "cta" : "outline"} className="w-full" size="lg">
                    Lo quiero
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanesSection;
