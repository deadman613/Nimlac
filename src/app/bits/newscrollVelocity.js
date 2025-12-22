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

    const loop = () => {
      x.current += speed;

      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 2;
        if (x.current >= width) x.current = 0;

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
