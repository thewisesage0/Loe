import { useMemo } from "react";

const COLORS = [
  "oklch(0.78 0.2 350)",
  "oklch(0.82 0.16 50)",
  "oklch(0.92 0.18 100)",
  "oklch(0.85 0.15 160)",
  "oklch(0.82 0.14 230)",
  "oklch(0.78 0.15 300)",
];

type StarShape = "4" | "5" | "burst" | "sparkle";

function Star({ color, shape, size }: { color: string; shape: StarShape; size: number }) {
  if (shape === "4") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
      </svg>
    );
  }
  if (shape === "5") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <path d="M12 1.5l3.09 6.95 7.41.77-5.5 5.1 1.55 7.43L12 17.9l-6.55 3.85L7 14.32 1.5 9.22l7.41-.77z" />
      </svg>
    );
  }
  if (shape === "burst") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <circle cx="12" cy="12" r="2.5" />
        <rect x="11" y="0" width="2" height="6" rx="1" />
        <rect x="11" y="18" width="2" height="6" rx="1" />
        <rect x="0" y="11" width="6" height="2" rx="1" />
        <rect x="18" y="11" width="6" height="2" rx="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" opacity="0.9" />
    </svg>
  );
}

export default function StarryBackground({ count = 60 }: { count?: number }) {
  const stars = useMemo(() => {
    const shapes: StarShape[] = ["4", "5", "burst", "sparkle"];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 12 + Math.random() * 28,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
    }));
  }, [count]);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="animate-twinkle"
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            filter: `drop-shadow(0 0 6px ${s.color})`,
          }}
        >
          <Star color={s.color} shape={s.shape} size={s.size} />
        </div>
      ))}
    </div>
  );
}
