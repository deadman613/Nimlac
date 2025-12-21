'use client';
import { useEffect, useRef } from "react";

export default function ScrollVelocity({
  texts = [],
  speed = 0.7,
  className = "",
  gap = "4rem",
}) {
  const trackRef = useRef(null);
  const x = useRef(0);

  useEffect(() => {
    let raf;

    const loop = () => {
      x.current += speed;

      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 2;
        if (x.current >= width) x.current = 0;

        trackRef.current.style.transform = `translate3d(-${x.current}px,0,0)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap }}
      >
        {[...texts, ...texts].map((text, i) => (
          <span
            key={i}
            className={`text-5xl md:text-7xl font-bold whitespace-nowrap
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
              drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]
              ${className}`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
