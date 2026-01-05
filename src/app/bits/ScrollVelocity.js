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

    const positiveMod = (value, modulus) => {
      if (!Number.isFinite(modulus) || modulus <= 0) return 0;
      return ((value % modulus) + modulus) % modulus;
    };

    const loop = () => {
      if (trackRef.current) {
        const style = window.getComputedStyle(trackRef.current);
        const gapPxRaw = style.columnGap && style.columnGap !== "normal" ? style.columnGap : style.gap;
        const gapPx = Number.parseFloat(gapPxRaw) || 0;

        const halfTrack = trackRef.current.scrollWidth / 2;
        const wrapWidth = halfTrack + gapPx / 2;
        x.current = positiveMod(x.current + speed, wrapWidth);

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
        {[...texts, ...texts].map((item, i) => {
          const isString = typeof item === "string";

          return (
            <span
              key={i}
              className={
                isString
                  ? `text-5xl md:text-7xl font-bold whitespace-nowrap
                      text-transparent bg-clip-text
                      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                      drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]
                      ${className}`
                  : `inline-flex items-center justify-center whitespace-nowrap ${className}`
              }
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
