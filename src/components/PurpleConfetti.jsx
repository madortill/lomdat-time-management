import React, { useMemo } from "react";
import "../css/PurpleConfetti.css";

function PurpleConfetti({ count = 70 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 3,
        size: 6 + Math.random() * 10,
        rotation: Math.floor(Math.random() * 360),
        drift: -30 + Math.random() * 60,
      })),
    [count]
  );

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti"
          style={{
            left: `${p.left}vw`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${Math.max(4, p.size * 0.6)}px`,
            transform: `rotate(${p.rotation}deg)`,
            ["--drift"]: `${p.drift}vw`,
          }}
        />
      ))}
    </div>
  );
}

export default PurpleConfetti;
