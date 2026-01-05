"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Before NIMLACC I had zero coding experience, but after the Diploma program I'm now confidently working as a Machine Learning intern at a top startup. The project-based learning and one-on-one mentoring completely transformed my skills and outlook.",
      name: "Aisha Kapoor",
      batch: "2024 Graduate",
      journey: "Career Switcher → ML Engineer Intern",
    },
    {
      quote:
        "I was a final-year engineering student unsure of my path. NIMLACC's Advanced ML & Cloud course gave me direction – I built a full ML project portfolio and today I'm placed as a Data Analyst at a leading firm. This program gave me hands-on experience nobody else offered.",
      name: "Raj Patel",
      batch: "Batch of 2023",
      journey: "CS Grad → Data Analyst",
    },
    {
      quote:
        "As a marketing professional, switching to tech felt impossible. NIMLACC's entry-level Machine Learning course was perfect. I learned from scratch, built real projects, and now I'm interviewing for data roles. I can't recommend it enough.",
      name: "Sneha Verma",
      batch: "Batch of 2024",
      journey: "Non-Tech → ML Enthusiast",
    },
    {
      quote:
        "The hands-on cloud deployment projects and live mentoring sessions made all the difference. Within months of completing the course, I landed a role as a Junior ML Engineer at a growing fintech company.",
      name: "Arjun Mehta",
      batch: "2024 Graduate",
      journey: "Fresher → Junior ML Engineer",
    },
    {
      quote:
        "NIMLACC didn't just teach theory — they made me build production-ready models. My portfolio impressed recruiters, and I'm now working as a Data Scientist at a unicorn startup.",
      name: "Priya Singh",
      batch: "Batch of 2024",
      journey: "Analyst → Data Scientist",
    },
    {
      quote:
        "The career guidance and mock interviews prepared me perfectly. From confusion to clarity — I transitioned into an MLOps role thanks to the practical focus of the program.",
      name: "Vikram Rao",
      batch: "2023 Graduate",
      journey: "DevOps → MLOps Engineer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes subtleGlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }

        .bg-gradient-diagonal {
          background: #000;
        }

        .bg-glow-pulse { animation: subtleGlow 8s ease-in-out infinite; }

        .testimonial-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }

        .card-stack {
          perspective: 1000px;
        }

        .card-stack .card {
          position: absolute;
          width: 100%;
          max-width: 600px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-stack .card.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .card-stack .card.visible {
          z-index: 10;
        }

        .card-stack .card.behind {
          z-index: 5;
          transform: translateX(-20px) translateY(10px) scale(0.95);
          opacity: 0.8;
        }

        .card-stack .card.far-behind {
          z-index: 1;
          transform: translateX(-40px) translateY(20px) scale(0.9);
          opacity: 0.6;
        }

        .card-content {
          background: rgba(17, 23, 26, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(56, 189, 248, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .card-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, rgba(56, 189, 248, 0.3), rgba(168, 85, 247, 0.3));
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .quote-icon {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: rgba(56, 189, 248, 0.6);
          font-size: 1.5rem;
          line-height: 1;
          opacity: 0.8;
        }

        .author-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(56, 189, 248, 0.1);
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #60a5fa);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: white;
          font-size: 0.75rem;
        }

        .author-name {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: #ffffff;
          font-size: 0.875rem;
        }

        .author-title {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: rgba(156, 163, 175, 0.8);
          margin-top: 0.125rem;
        }

        .batch-tag {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: rgba(56, 189, 248, 0.8);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .journey-tag {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: rgba(168, 85, 247, 0.8);
          background: rgba(168, 85, 247, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.75rem;
        }

        .nav-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .nav-button {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: rgba(17, 23, 26, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.4);
          transform: scale(1.1);
        }

        .dot-indicator {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
          justify-content: center;
          align-items: center;
        }

        .dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: rgba(156, 163, 175, 0.3);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: rgba(56, 189, 248, 0.8);
          width: 1rem;
          height: 0.5rem;
          border-radius: 4px;
        }

        /* Code theme styling */
        .code-font {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.05em;
        }

        .text-code {
          color: #ffffff;
          font-family: 'Courier New', monospace;
        }

        .text-code-muted {
          color: rgba(156, 163, 175, 0.8);
          font-family: 'Courier New', monospace;
        }

        .text-code-highlight {
          color: rgba(56, 189, 248, 0.8);
          font-family: 'Courier New', monospace;
        }

        .text-code-accent {
          color: rgba(168, 85, 247, 0.8);
          font-family: 'Courier New', monospace;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card-content {
            padding: 1rem;
            border-radius: 12px;
          }

          .quote-icon {
            top: 0.75rem;
            left: 0.75rem;
            font-size: 1.25rem;
          }

          .author-name {
            font-size: 0.75rem;
          }

          .author-title {
            font-size: 0.65rem;
          }

          .avatar {
            width: 1.75rem;
            height: 1.75rem;
            font-size: 0.65rem;
          }

          .batch-tag,
          .journey-tag {
            font-size: 0.65rem;
            padding: 0.15rem 0.3rem;
          }

          .nav-button {
            width: 1.75rem;
            height: 1.75rem;
          }

          .dot {
            width: 0.4rem;
            height: 0.4rem;
          }

          .dot.active {
            width: 0.8rem;
            height: 0.4rem;
          }

          .card-stack .card.behind {
            transform: translateX(-15px) translateY(8px) scale(0.97);
          }

          .card-stack .card.far-behind {
            transform: translateX(-30px) translateY(15px) scale(0.93);
          }
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 0.75rem;
            border-radius: 10px;
          }

          .quote-icon {
            top: 0.5rem;
            left: 0.5rem;
            font-size: 1rem;
          }

          .author-name {
            font-size: 0.7rem;
          }

          .author-title {
            font-size: 0.6rem;
          }

          .avatar {
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.6rem;
          }

          .nav-button {
            width: 1.5rem;
            height: 1.5rem;
          }

          .dot {
            width: 0.35rem;
            height: 0.35rem;
          }

          .dot.active {
            width: 0.7rem;
            height: 0.35rem;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-diagonal flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
        {/* Animated Background Glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] bg-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] bg-glow-pulse" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight code-font">
              Student <span className="text-cyan-400">Success Stories</span>
            </h1>
            <p className="text-cyan-300 text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto code-font">
              Real graduates. Real careers. Real transformations.
            </p>
          </div>

          {/* Card Stack Layout */}
          <div className="relative max-w-2xl mx-auto card-stack">
            {/* Card Container */}
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px]">
              {testimonials.map((testimonial, index) => {
                // Determine card position based on current index
                let className = "card ";
                
                if (index === currentIndex) {
                  className += "visible";
                } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                  className += "behind";
                } else if (index === (currentIndex - 2 + testimonials.length) % testimonials.length) {
                  className += "far-behind";
                } else {
                  className += "hidden";
                }

                return (
                  <div key={index} className={className}>
                    <div className="card-content">
                      <div className="quote-icon">“</div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed mt-6 mb-6 code-font">
                        {testimonial.quote}
                      </p>
                      
                      <div className="author-section">
                        <div className="author-info">
                          <div className="avatar">
                            {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </div>
                          <div>
                            <div className="author-name">{testimonial.name}</div>
                            <div className="author-title">{testimonial.journey}</div>
                          </div>
                        </div>
                        <div className="batch-tag">{testimonial.batch}</div>
                      </div>
                      
                      <div className="card-footer">
                        <div className="journey-tag">{testimonial.journey}</div>
                        <div className="nav-buttons">
                          <button onClick={prev} className="nav-button">
                            <ChevronLeft className="w-3 h-3 text-cyan-400" />
                          </button>
                          <button onClick={next} className="nav-button">
                            <ChevronRight className="w-3 h-3 text-cyan-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Centered Dots Indicator */}
            <div className="dot-indicator">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-20">
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-light max-w-4xl mx-auto code-font">
              Ready to be our next success story?{" "}
              <span className="text-white font-bold">Talk to a Career Expert</span> and start your transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}