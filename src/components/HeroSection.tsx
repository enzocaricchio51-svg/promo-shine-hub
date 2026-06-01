import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import penguin from "@/assets/penguin-mascot.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola Royal Penguin! Quiero reservar una clase de patinaje.");
    window.open(`https://wa.me/51999999999?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-royal animate-shimmer"
      style={{ backgroundImage: "linear-gradient(135deg, hsl(329 80% 37%), hsl(320 53% 26%), hsl(343 71% 36%))", backgroundSize: "200% 200%" }}
    >
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-cta/30 blur-3xl" />

      {/* Floating skating rink lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="rink" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rink)" />
      </svg>

      <div className="container relative z-10 mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-primary-foreground space-y-7 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm font-medium">
            <Sparkles size={16} className="animate-heart-pulse" />
            Academia de patinaje #1 en Lima
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Patina como un{" "}
            <span className="block bg-gradient-to-r from-white via-pink-100 to-pink-200 bg-clip-text text-transparent">
              verdadero Royal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
            En <strong>Royal Penguin</strong> transformamos a niños, jóvenes y adultos en patinadores con técnica,
            confianza y un estilo único. Clases en pista profesional, equipo capacitado y mucha pasión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="hero" size="lg" className="min-w-52" onClick={() => document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })}>
              Ver planes
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppClick}
              className="min-w-52 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <MessageCircle size={20} />
              Reserva por WhatsApp
            </Button>
          </div>

          <div className="flex gap-8 pt-6 border-t border-white/20">
            {[
              { n: "10+", l: "Años de experiencia" },
              { n: "500+", l: "Patinadores formados" },
              { n: "15", l: "Coaches certificados" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold">{s.n}</div>
                <div className="text-xs md:text-sm text-white/75 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Penguin showcase */}
        <div className="relative h-[460px] md:h-[560px] flex items-center justify-center">
          {/* Glowing ring */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-pink-300/40 via-white/10 to-transparent blur-2xl" />
          <div className="absolute inset-16 rounded-full border-2 border-dashed border-white/30 animate-[spin_30s_linear_infinite]" />

          {/* Orbiting hearts */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
              style={{ animation: `orbit ${10 + i * 3}s linear infinite`, animationDelay: `${-i * 2}s` }}
            >
              <span className="inline-block animate-heart-pulse">{i % 2 === 0 ? "❤️" : "✨"}</span>
            </div>
          ))}

          {/* Penguin */}
          <img
            src={penguin}
            alt="Mascota Royal Penguin patinando"
            className="relative z-10 h-[420px] md:h-[520px] object-contain animate-penguin-float drop-shadow-2xl"
          />

          {/* Floating chips */}
          <div className="absolute top-8 left-0 bg-white text-primary font-semibold rounded-2xl px-4 py-3 shadow-royal animate-slide-up" style={{ animationDelay: "0.4s" }}>
            🛼 Clases para todas las edades
          </div>
          <div className="absolute bottom-12 right-0 bg-white text-primary font-semibold rounded-2xl px-4 py-3 shadow-royal animate-slide-up" style={{ animationDelay: "0.7s" }}>
            🏆 Pista profesional
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 text-xs tracking-widest">
        SCROLL ↓
      </div>
    </section>
  );
};

export default HeroSection;
