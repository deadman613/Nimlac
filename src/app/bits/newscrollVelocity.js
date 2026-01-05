'use client';
import { useEffect, useRef } from "react";

export default function ScrollVelocity({
  texts = [],
  speed = 0.7,
  gap = "2rem",
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

        trackRef.current.style.transform =
          `translate3d(-${x.current}px,0,0)`;
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
        {[...texts, ...texts].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3.2rem",
            }}
          >
            <span
              style={{
                padding: "0.65rem 1.1rem",
                borderRadius: "999px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                fontSize: "0.9rem",
                color: item.color,
                fontWeight: "500",
                whiteSpace: "nowrap",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
