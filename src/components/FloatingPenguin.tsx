import { useEffect, useState } from "react";
import penguin from "@/assets/penguin-mascot.png";

/**
 * Small penguin that "jumps" around the page as the user scrolls,
 * appearing in different corners and pointing to nearby CTAs.
 */
type Position = { top: string; left?: string; right?: string; label: string; href: string };

const POSITIONS: Position[] = [
  { top: "28%", right: "4%", label: "¡Reserva tu clase!", href: "#planes" },
  { top: "52%", left: "4%", label: "¡Mira nuestras historias!", href: "#voces" },
  { top: "72%", right: "5%", label: "¡Ven a entrenar!", href: "#galeria" },
  { top: "88%", left: "5%", label: "¡Pregúntanos!", href: "#contacto" },
];

const FloatingPenguin = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      const ratio = h > 0 ? y / h : 0;
      setVisible(y > 500);
      // pick index based on scroll ratio
      let idx = 0;
      if (ratio > 0.2) idx = 1;
      if (ratio > 0.45) idx = 2;
      if (ratio > 0.7) idx = 3;
      setActive((prev) => {
        if (prev !== idx) setKey((k) => k + 1);
        return idx;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pos = POSITIONS[active];

  return (
    <a
      href={pos.href}
      aria-label={pos.label}
      className={`fixed z-40 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ top: pos.top, left: pos.left, right: pos.right }}
    >
      <div key={key} className="animate-penguin-jump flex flex-col items-center group">
        <div className="mb-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-royal animate-glow-pulse whitespace-nowrap">
          {pos.label}
        </div>
        <img
          src={penguin}
          alt="Mascota Royal Penguin"
          className="h-28 w-28 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform"
        />
      </div>
    </a>
  );
};

export default FloatingPenguin;
