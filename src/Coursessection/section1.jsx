// app/components/CourseHeroSection.jsx
"use client";

export default function CourseHeroSection() {
  return (
    <>
      <style jsx global>{`
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        .bg-gradient-diagonal {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        .bg-glow-pulse { animation: subtleGlow 8s ease-in-out infinite; }

        .hero-btn {
          background: linear-gradient(90deg,  #21d2ed);
          color: black;
          font-weight: bold;
          transition: all 0.4s ease;
        }

        .hero-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.98);
        }

        .big-text-overlay {
          font-size: 8rem;
          font-weight: 900;
          letter-spacing: -0.4rem;
          opacity: 0.1;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 1280px) {
          .big-text-overlay {
            font-size: 8rem;
          }
        }

        @media (max-width: 1024px) {
          .big-text-overlay {
            font-size: 6.5rem;
          }
        }

        @media (max-width: 768px) {
          .big-text-overlay {
            font-size: 5rem;
          }
        }
      `}</style>

      <section className="bg-gradient-diagonal mx-auto relative min-h-screen flex items-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "6s" }}></div>
        </div>


        {/* Max width 1300px container */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Large NIMLACC overlay text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white big-text-overlay whitespace-nowrap">
          NIMLACC
        </div>
          {/* Left Content - Reduced text sizes */}
          <div className="text-left max-w-2xl mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Achieve your career goals with <span className="text-cyan-400">Nimlacc</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Subscribe to build job-ready skills from world-class institutions.
            </p>

            <p className="text-xl md:text-2xl font-bold text-white mb-10">
              ₹2,099/month, cancel anytime
            </p>

            <button className="hero-btn px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg">
              Start 7-day Free Trial
            </button>

            <p className="text-red-700 text-base md:text-lg mt-6">
              Best courses at affordable prices
            </p>
          </div>

          {/* Right Image */}
        <div className="relative w-[300px] max-w-md mx-auto">
  <img
    src="/nimlacpic/shagun.png"
    alt="NIMLACC Mentor"
    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
  />

  {/* Dark overlay at the bottom */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl pt-12 pb-6">
    <div className="text-center text-white px-4">
      <h3 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
        Miss Shagun
      </h3>
      <p className="text-lg md:text-xl font-medium mt-1 text-cyan-300 drop-shadow-md">
        AI and ML Expert
      </p>
    </div>
  </div>

  {/* Optional subtle tech decoration in top-left */}
  <div className="absolute top-4 left-4 opacity-30">
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="3" fill="#06b6d4"/>
      <circle cx="30" cy="20" r="3" fill="#06b6d4"/>
      <circle cx="50" cy="10" r="3" fill="#06b6d4"/>
      <circle cx="70" cy="25" r="3" fill="#06b6d4"/>
      <circle cx="90" cy="15" r="3" fill="#06b6d4"/>
      <path d="M10 10 L30 20 M30 20 L50 10 M50 10 L70 25 M70 25 L90 15" stroke="#06b6d4" strokeWidth="1.5"/>
    </svg>
  </div>
</div>
        </div>
      </section>
    </>
  );
}