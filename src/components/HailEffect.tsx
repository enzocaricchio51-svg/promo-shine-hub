import { useMemo } from "react";

/** Falling hail/snowflakes overlay — purely decorative, pointer-events disabled */
const HailEffect = ({ count = 60 }: { count?: number }) => {
  const drops = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 4 + Math.random() * 8;
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 9;
        const delay = -Math.random() * 15;
        const drift = (Math.random() - 0.5) * 120;
        const opacity = 0.35 + Math.random() * 0.55;
        return { i, size, left, duration, delay, drift, opacity };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {drops.map((d) => (
        <span
          key={d.i}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            boxShadow: "0 0 8px rgba(255,255,255,0.7), 0 0 14px hsl(var(--primary) / 0.25)",
            animation: `hail-fall ${d.duration}s linear ${d.delay}s infinite`,
            // @ts-expect-error css var
            "--drift": `${d.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default HailEffect;
