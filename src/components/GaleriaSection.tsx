import team from "@/assets/team-group.png";
import pair from "@/assets/skaters-pair.png";
import kids from "@/assets/kids-class.png";
import badge from "@/assets/royal-badge.png";

const items = [
  { src: team, label: "Generación campeona 2025", span: "md:col-span-2 md:row-span-2" },
  { src: pair, label: "Coreografía profesional", span: "md:col-span-1" },
  { src: kids, label: "Pequeños grandes patinadores", span: "md:col-span-1" },
  { src: badge, label: "Royal Spirit", span: "md:col-span-2" },
];

const GaleriaSection = () => {
  return (
    <section id="galeria" className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cta font-semibold uppercase tracking-widest text-sm">Galería viva</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Momentos que <span className="text-gradient-royal">inspiran</span>
          </h2>
          <p className="text-muted-foreground text-lg">Cada giro, cada salto, cada sonrisa. Así se vive Royal Penguin.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${it.span} hover:shadow-royal transition-all duration-500`}
              style={{ animation: `slide-up 0.7s ${i * 0.1}s both` }}
            >
              <img src={it.src} alt={it.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-5 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="font-display text-xl font-bold">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
