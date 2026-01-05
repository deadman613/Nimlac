"use client";
import { useState, useEffect } from "react";

import NewscrollVelocity from "../app/bits/newscrollVelocity";
import LetterGlitch from "../app/LetterGlitch";

export default function HeroWithDashboard() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;

  return (
    <>
      {/* Load the custom Organix font */}
      <style jsx global>{`
        @font-face {
          font-family: 'Organix';
          src: url('/fonts/Organix.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <section
        style={{
          position: "relative",
          minHeight: "auto",
          paddingTop: isMobile ? "5rem" : "0rem",
          paddingBottom: "0rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#000",
          overflow: "hidden",
          color: "#e5e7eb",
          boxShadow: "inset 0 -120px 120px -60px rgba(6, 182, 212, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.45,
            pointerEvents: "none",
          }}
        >
          <LetterGlitch
            glitchSpeed={30}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            charWidth={14}
            charHeight={22}
            fontSize={16}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.18) 10%, rgba(0,0,0,0.92) 70%, rgba(0,0,0,0.98) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "radial-gradient(900px 520px at 50% 35%, rgba(6,182,212,0.12) 0%, rgba(0,0,0,0.0) 55%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 70%, rgba(0,0,0,0.90) 100%)",
          }}
        />

        <div
          style={{
            maxWidth: "1300px",
            width: "100%",
            margin: "0 auto",
            padding: isSmall
              ? "2rem 1rem 0"
              : isMobile
              ? "2.5rem 1.5rem 0"
              : "9.5rem 2rem 0",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Heading - Now using Organix font */}
          <h1
            style={{
        
              fontSize: isSmall ? "1.75rem" : isMobile ? "2.3rem" : "4.2rem",
              lineHeight: "1.2",
              marginBottom: isMobile ? "1rem" : "1.6rem",
              
              color: "#e5e7eb",
            }}
          >
            Master{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Machine Learning
            </span>{" "}
            &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Cloud Computing
            </span>
            <br />
            <span
              style={{  
              
                fontSize: isSmall ? "1.1rem" : isMobile ? "1.4rem" : "2.8rem",
              
                color: "#b3e4fdff",
                display: "block",
                marginTop: isMobile ? "0.5rem" : "0.25rem",
                
              }}
            >
              at India's Premier Tech Institute
            </span>
          </h1>

          {/* Rest of the component remains 100% unchanged */}
          <p
            style={{
              maxWidth: isMobile ? "100%" : "700px",
              margin: "0 auto 0.8rem",
              fontSize: isSmall ? "0.9rem" : isMobile ? "1rem" : "1.25rem",
              color: "#cbd5f5",
              lineHeight: "1.6",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            Learn real-world Machine Learning, Generative AI & Cloud deployment
            through industry-grade projects — not theory.
          </p>

          <div style={{ 
            width: "100%", 
            margin: "0.5rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <button style={{
              padding: isSmall ? "0.5rem 1.2rem" : "0.6rem 1.5rem",
              borderRadius: "999px",
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            >
              <span style={{
                fontWeight: "500", 
                fontSize: isSmall ? "0.85rem" : "0.95rem",
                color: "#cbd5e1"
              }}>
                Mode:
              </span>
              <span style={{
                fontSize: isSmall ? "0.85rem" : "0.95rem",
                
              }}>
                Online
              </span>
              <span style={{
                fontSize: isSmall ? "0.85rem" : "0.95rem",
                color: "#64748b"
              }}>
                /
              </span>
              <span style={{
                fontSize: isSmall ? "0.85rem" : "0.95rem",
               
              }}>
                Offline
              </span>
            </button>
          </div>

          <p
            style={{
              marginTop: isMobile ? "1.5rem" : "2.4rem",
              fontSize: isSmall ? "0.75rem" : "0.9rem",
              marginBottom: "0.8rem",
              color: "#94a3b8",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
             50% Scholarship for First 100 Students • Placement-Focused AI Training
          </p>

          <div
            style={{
              display: "flex",
              gap: isMobile ? "0.8rem" : "1.4rem",
              marginBottom: isMobile ? "1.25rem" : "1.75rem",
              marginTop: isMobile ? "1.5rem" : "2rem",
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
              padding: isMobile ? "0 1rem" : "0",
            }}
          >
            <button
              style={{
                position: "relative",
                padding: isSmall 
                  ? "0.9rem 1.5rem" 
                  : isMobile 
                  ? "1rem 2rem" 
                  : "1.2rem 2.5rem",
                borderRadius: "999px",
                background: "transparent",
                border: "1.5px solid rgba(255, 255, 255, 0.16)",
                color: "#fff",
                fontWeight: "700",
                fontSize: isSmall ? "0.95rem" : isMobile ? "1rem" : "1.1rem",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                transition: "all 0.3s ease",
                overflow: "visible",
                width: isMobile ? "100%" : "auto",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(18px)",
                backgroundClip: "padding-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(6, 182, 212, 0.18)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.26)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
              }}
            >
              <span style={{ display: "block" }}>
                Unlock Your Learning Advantage
              </span>
            </button>

            <button
              style={{
                padding: isSmall 
                  ? "0.9rem 1.5rem" 
                  : isMobile 
                  ? "1rem 2rem" 
                  : "1rem 2.6rem",
                borderRadius: "999px",
                background: "transparent",
                border: "1.5px solid rgba(255, 255, 255, 0.14)",
                color: "#e5e7eb",
                fontSize: isSmall ? "0.95rem" : isMobile ? "1rem" : "1.05rem",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(18px)",
                backgroundClip: "padding-box",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.32)",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.09)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(167, 139, 250, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.32)";
              }}
            >
              Explore ML Programs
            </button>
          </div>

          <div
            style={{
              width: "90vw",
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
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
                  bg: "rgba(38, 197, 94, 0.12)",
                  border: "rgba(34, 197, 94, 0.45)",
                  color: "#86efac",
                },
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
                  bg: "rgba(38, 197, 94, 0.12)",
                  border: "rgba(34, 197, 94, 0.45)",
                  color: "#86efac",
                },
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
                  bg: "rgba(38, 197, 94, 0.12)",
                  border: "rgba(34, 197, 94, 0.45)",
                  color: "#86efac",
                },
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
                  bg: "rgba(38, 197, 94, 0.12)",
                  border: "rgba(34, 197, 94, 0.45)",
                  color: "#86efac",
                },
              ]}
              speed={2.6}
              renderItem={(item) => (
                <button
                  className="px-5 py-2 rounded-full border backdrop-blur-md whitespace-nowrap"
                  style={{
                    background: item.bg,
                    borderColor: item.border,
                    color: item.color,
                    fontSize: isSmall ? "0.75rem" : "0.875rem",
                    padding: isSmall ? "0.4rem 1rem" : "0.5rem 1.25rem",
                  }}
                >
                  <span className="font-medium">{item.text}</span>
                </button>
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
}