"use client";
import { useState, useEffect } from "react";
import Homesection1_1 from "./Homesection1_1";
import ScrollVelocity from "../../src/app/bits/ScrollVelocity";
import NewscrollVelocity from "../../src/app/bits/newscrollVelocity";

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
  minHeight: "100vh",     // ⭐ REQUIRED
  paddingTop: "1.5rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#001e2b",
  backgroundImage:
    "linear-gradient(180deg, rgba(2,10,20,0.92), rgba(3, 20, 30, 0.66)), url('/NIMLACC.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#e5e7eb",
  boxShadow: "inset 0 -100px 100px -50px rgba(6, 182, 212, 0.4)",
  
  boxShadow: "inset 0 -120px 120px -60px rgba(6, 182, 212, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3)",
}}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: isMobile ? "2.5rem 1.5rem" : "9.5rem 2rem",
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
          &  Cloud Computing
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

      

        <p
          style={{
            marginTop: "2.4rem",
            fontSize: "0.9rem",
            marginBottom: "0.8rem",
            color: "#94a3b8",
          }}
        >
          🎓 50% Scholarship for First 100 Students • Placement-Focused AI Training
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: "1.4rem",
            marginBottom: "3.6rem",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <button
            style={{
              position: "relative",
              padding: "1.2rem 2.5rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22d3eea9, #a78bfab1)",
              border: "none",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)",
              transition: "all 0.3s ease",
              overflow: "visible",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(34, 211, 238, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(34, 211, 238, 0.3)";
            }}
          >


            <span style={{ display: "block", marginBottom: "0.3rem" }}>
              Unlock Your Learning Advantage
            </span>
            <span
              style={{
                display: "block",
                fontSize: "0.9rem",
                fontWeight: "500",
                opacity: "0.95",
              }}
            >

            </span>
          </button>

          <button
            style={{
              padding: "1rem 2.6rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22d3eeb7, #a78bfaa9)",
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


        {/* carousel */}
        <NewscrollVelocity
        
          texts={[
            {
              text: "Real ML Models (NLP, CV, GenAI)",
              bg: "rgba(11, 54, 60, 0.12)",
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
            {
              text:'Offline',
              bg:"rgba(232, 21, 21, 0.22)",
              border:"rgba(253, 9, 9, 1)",
              color:"rgba(255, 255, 255, 1)"


            },
             {
              text:'online',
              bg:"rgba(47, 229, 19, 0.24)",
              border:"rgba(58, 253, 9, 1)",
              color:"rgba(255, 255, 255, 1)"


            }
          ]}
          speed={2.6}
          renderItem={(item) => (
            <button
              className="px-5 py-2 rounded-full border backdrop-blur-md whitespace-nowrap"
              style={{
                background: item.bg,
                borderColor: item.border,
                color: item.color,
              }}
            >
              <span className="text-sm font-medium">{item.text}</span>
            </button>
          )}
        />
      </div>


    </section>
  );
}
