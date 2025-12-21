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
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        .bg-glow-pulse { animation: subtleGlow 8s ease-in-out infinite; }

        .testimonial-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-diagonal flex items-center justify-center p-6 overflow-hidden relative">
        {/* Animated Background Glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] bg-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] bg-glow-pulse" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Student <span className="text-cyan-400">Success Stories</span>
            </h1>
            <p className="text-cyan-300 text-lg md:text-xl font-light max-w-4xl mx-auto">
              Real graduates. Real careers. Real transformations.
            </p>
          </div>

          {/* Narrower Carousel - Better width control */}
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-3 sm:px-6">
                    <div className="testimonial-card bg-black/40 backdrop-blur-xl border border-cyan-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl h-full">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Quote Text - More responsive sizing */}
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 text-center leading-relaxed mb-6 md:mb-8">
                        "{t.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="text-center">
                        <h4 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2">{t.name}</h4>
                        <p className="text-sm sm:text-base text-gray-400 mb-1">{t.batch}</p>
                        <p className="text-cyan-400 text-sm sm:text-base md:text-lg font-medium">{t.journey}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
            <button
              onClick={prev}
              className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md rounded-full items-center justify-center border border-cyan-700/50 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            </button>
            <button
              onClick={next}
              className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md rounded-full items-center justify-center border border-cyan-700/50 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-cyan-400 w-8"
                      : "bg-cyan-800/50 hover:bg-cyan-600"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-xl md:text-2xl text-cyan-300 font-light max-w-4xl mx-auto">
              Ready to be our next success story?{" "}
              <span className="text-white font-bold">Talk to a Career Expert</span> and start your transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}