"use client";
import { useState, useEffect } from "react";

export default function HeroWithDashboard() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "3.5rem", // navbar safe space
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(180deg, rgba(2,10,20,0.92), rgba(3, 20, 30, 0.66)), url('/NIMLACC.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#e5e7eb",
      }}
    >
     <div
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    padding: isMobile ? "2.5rem 1.5rem" : "4.5rem 2rem",
    textAlign: "center",
  }}
>
  {/* Heading */}
  <h1
    style={{
      fontSize: isMobile ? "2.3rem" : "4.2rem",
      fontWeight: "800",
      lineHeight: "1.12",
      marginBottom: "1.6rem",
      color: "#e5e7eb",
    }}
  >
    Master{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Machine Learning
    </span>{" "}
    & AI
    <br />
    <span
      style={{
        fontSize: isMobile ? "1.6rem" : "2.8rem",
        fontWeight: "600",
        color: "#c7d2fe",
      }}
    >
      at India’s Premier Tech Institute
    </span>
  </h1>

  {/* Subheading */}
  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto 2.8rem",
      fontSize: isMobile ? "1rem" : "1.25rem",
      color: "#cbd5f5",
      lineHeight: "1.75",
    }}
  >
    Learn real-world Machine Learning, Generative AI & Cloud deployment
    through industry-grade projects — not theory.
  </p>

  {/* Feature Pills */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.9rem",
      marginBottom: "3.2rem",
    }}
  >
  {[
  {
    text: "Real ML Models (NLP, CV, GenAI)",
    bg: "rgba(34, 211, 238, 0.12)",
    border: "rgba(34, 211, 238, 0.45)",
    color: "#67e8f9",
  },
  {
    text: "Production-ready MLOps",
    bg: "rgba(167, 139, 250, 0.12)",
    border: "rgba(167, 139, 250, 0.45)",
    color: "#c4b5fd",
  },
  {
    text: "Cloud Deployment",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.45)",
    color: "#bae6fd",
  },
  {
    text: "Hiring-aligned Curriculum",
    bg: "rgba(34, 197, 94, 0.12)",
    border: "rgba(34, 197, 94, 0.45)",
    color: "#86efac",
  },
].map((item, i) => (
  <div
    key={i}
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
      </div>
    ))}
  </div>

  {/* CTA */}
  <div
    style={{
      display: "flex",
      gap: "1.4rem",
      justifyContent: "center",
      flexDirection: isMobile ? "column" : "row",
    }}
  >
    <button
      style={{
        padding: "1rem 2.6rem",
        borderRadius: "999px",
        background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
        border: "none",
        color: "#020617",
        fontWeight: "600",
        fontSize: "1.05rem",
        cursor: "pointer",
      }}
    >
      Talk to an AI Career Expert
    </button>

    <button
      style={{
        padding: "1rem 2.6rem",
        borderRadius: "999px",
        background: "transparent",
        border: "1px solid #334155",
        color: "#e5e7eb",
        fontWeight: "500",
        fontSize: "1.05rem",
        cursor: "pointer",
      }}
    >
      Explore ML Programs
    </button>
  </div>

  {/* Trust line */}
  <p
    style={{
      marginTop: "2.4rem",
      fontSize: "0.9rem",
      color: "#94a3b8",
    }}
  >
    🎓 50% Scholarship for First 100 Students • Placement-Focused AI Training
  </p>
</div>


    </section>
  );
}
