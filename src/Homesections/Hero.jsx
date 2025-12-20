"use client";
import { useState, useEffect } from "react";

export default function HeroWithDashboard() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const font = new FontFace(
      'Poppins',
      'url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)',
      { weight: '700', style: 'normal' }
    );
    
    font.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
      setFontLoaded(true);
    }).catch((error) => {
      console.error('Font loading failed:', error);
      setFontLoaded(true);
    });
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}> 
      
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        bottom: 0, 
        left: 0, 
        zIndex: -10, 
        minHeight: '100%',
        backgroundImage: 'url(/finalbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}> 
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          bottom: 0, 
          left: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.4)' 
        }}></div>
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 20, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center', 
        padding: '0 1.5rem',
        marginBottom: '2.5rem',
        marginTop: '2.5rem'
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '1.875rem' : '4.5rem', 
          fontWeight: '700', 
          letterSpacing: '-0.025em', 
          color: 'white', 
          marginBottom: '1.5rem',
          paddingTop:"4.5rem",
          lineHeight: '1.2',
          background:'linear-gradient(to left , #06b6d4 , #ffffffff )',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: fontLoaded ? "'Poppins', sans-serif" : 'sans-serif'
        }}>
          Empower Your Future at
          <br />
          <span style={{
            backgroundImage: 'linear-gradient(to right, #06b6d4, #d7f4f5e7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
          }}>
            India's Premier ML & Cloud Institute
          </span>
        </h1>

        <p style={{ 
          maxWidth: '48rem', 
          fontSize: isMobile ? '1.125rem' : '1.25rem', 
          color: 'rgba(165, 243, 252, 0.8)', 
          lineHeight: '1.75', 
          marginBottom: '2.5rem', 
          fontWeight: '300' 
        }}>
          Build real-world AI & Cloud skills through industry-aligned projects and mentorship, so you land the jobs top companies are hiring today.
        </p>

        <div style={{ 
          maxWidth: '48rem', 
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.75rem',
            color: 'rgba(165, 243, 252, 0.9)',
            fontSize: isMobile ? '0.95rem' : '1.05rem'
          }}>
            <span style={{ color: '#06b6d4', fontSize: '1.25rem', flexShrink: 0 }}>✓</span>
            <span><strong style={{ color: 'white' }}>Industry-Validated Learning:</strong> Hands-on projects with enterprise-grade ML models and cloud architectures.</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.75rem',
            color: 'rgba(165, 243, 252, 0.9)',
            fontSize: isMobile ? '0.95rem' : '1.05rem'
          }}>
            <span style={{ color: '#06b6d4', fontSize: '1.25rem', flexShrink: 0 }}>✓</span>
            <span><strong style={{ color: 'white' }}>Hiring-Aligned Curriculum:</strong> Built around the exact skills employers seek in AI, ML and Cloud roles.</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.75rem',
            color: 'rgba(165, 243, 252, 0.9)',
            fontSize: isMobile ? '0.95rem' : '1.05rem'
          }}>
            <span style={{ color: '#06b6d4', fontSize: '1.25rem', flexShrink: 0 }}>✓</span>
            <span><strong style={{ color: 'white' }}>Future-Focused:</strong> Training for the cutting-edge tools and trends shaping India's tech landscape.</span>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: '1.5rem', 
          marginBottom: '3rem' 
        }}>
          <button style={{
            padding: '1.25rem 2.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(34, 211, 238, 0.4)',
            color: 'white',
            fontWeight: '500',
            fontSize: '1.125rem',
            boxShadow: '0 25px 50px -12px rgba(8, 145, 178, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.3)';
            e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.2)';
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
          }}>
            Talk to a Career Expert
            <svg
              style={{ width: '1.5rem', height: '1.5rem', transform: 'rotate(-45deg)' }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button style={{
            padding: '1.25rem 2.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'rgba(165, 243, 252, 1)',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.5)';
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Explore Programs
          </button>
        </div>

        <p style={{ 
          color: 'rgba(103, 232, 249, 0.6)', 
          fontSize: '0.875rem', 
          letterSpacing: '0.05em' 
        }}>
          🎓 50% Scholarship for First 100 Students | 100% Placement Guarantee
        </p>
      </div>
    </div>
  );
}