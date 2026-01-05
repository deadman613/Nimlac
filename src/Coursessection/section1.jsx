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

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { opacity: 1; box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-10px, 10px); }
          75% { transform: translate(-15px, -5px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .float { animation: float 6s ease-in-out infinite; }
        .float-reverse { animation: floatReverse 5s ease-in-out infinite; }
        .drift { animation: drift 8s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }

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

      <section className="bg-gradient-diagonal mx-auto relative min-h-screen flex items-center overflow-hidden py-20 pt-32 md:pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "6s" }}></div>
        </div>

        {/* Floating ML/Cloud Tech Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Neural Network Icon */}
          <div className="absolute top-32 md:top-20 left-[5%] md:left-[15%] float opacity-20 scale-75 md:scale-100">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="20" r="8" fill="#06b6d4" className="pulse-glow"/>
              <circle cx="20" cy="50" r="8" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '0.5s' }}/>
              <circle cx="80" cy="50" r="8" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '1s' }}/>
              <circle cx="35" cy="80" r="8" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '1.5s' }}/>
              <circle cx="65" cy="80" r="8" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '2s' }}/>
              <line x1="50" y1="20" x2="20" y2="50" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="50" y1="20" x2="80" y2="50" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="20" y1="50" x2="35" y2="80" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="20" y1="50" x2="65" y2="80" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="80" y1="50" x2="35" y2="80" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="80" y1="50" x2="65" y2="80" stroke="#06b6d4" strokeWidth="2"/>
            </svg>
          </div>

          {/* Cloud Computing Icon */}
          <div className="absolute top-[40%] right-[5%] md:right-[12%] float-reverse opacity-20 scale-75 md:scale-100">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
              <path d="M75 45c0-13.8-11.2-25-25-25-10.4 0-19.3 6.3-23.2 15.3C18.4 35.9 12 42.8 12 51c0 8.8 7.2 16 16 16h47c6.6 0 12-5.4 12-12 0-6.4-5-11.6-11.3-12z" 
                    fill="#a855f7" opacity="0.3"/>
              <circle cx="35" cy="45" r="3" fill="#a855f7"/>
              <circle cx="50" cy="50" r="3" fill="#a855f7" className="pulse-glow"/>
              <circle cx="65" cy="45" r="3" fill="#a855f7"/>
            </svg>
          </div>

          {/* TensorFlow-like Icon */}
          <div className="absolute top-[65%] left-[3%] md:left-[8%] drift opacity-15 scale-75 md:scale-100">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <path d="M50 10L90 30L90 70L50 90L10 70L10 30Z" stroke="#f59e0b" strokeWidth="3" fill="none"/>
              <circle cx="50" cy="50" r="15" fill="#f59e0b" opacity="0.5"/>
              <circle cx="50" cy="50" r="8" fill="#f59e0b" className="pulse-glow"/>
            </svg>
          </div>

          {/* Data Pipeline - Hidden on small screens */}
          <div className="hidden md:block absolute bottom-[20%] right-[25%] float opacity-15">
            <svg width="80" height="50" viewBox="0 0 120 60" fill="none">
              <rect x="5" y="20" width="20" height="20" rx="4" fill="#06b6d4" opacity="0.6"/>
              <rect x="50" y="20" width="20" height="20" rx="4" fill="#06b6d4" opacity="0.6"/>
              <rect x="95" y="20" width="20" height="20" rx="4" fill="#06b6d4" opacity="0.6"/>
              <path d="M25 30 L50 30 M70 30 L95 30" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M35 30 L40 25 L40 35 Z M80 30 L85 25 L85 35 Z" fill="#06b6d4"/>
            </svg>
          </div>

          {/* GPU/Compute Icon - Hidden on small screens */}
          <div className="hidden lg:block absolute top-[30%] left-[25%] spin-slow opacity-10">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <rect x="20" y="20" width="60" height="60" rx="8" stroke="#10b981" strokeWidth="3" fill="none"/>
              <rect x="30" y="30" width="15" height="15" fill="#10b981" opacity="0.6"/>
              <rect x="55" y="30" width="15" height="15" fill="#10b981" opacity="0.6"/>
              <rect x="30" y="55" width="15" height="15" fill="#10b981" opacity="0.6"/>
              <rect x="55" y="55" width="15" height="15" fill="#10b981" opacity="0.6"/>
            </svg>
          </div>

          {/* ML Model Icon - Hidden on small screens */}
          <div className="hidden lg:block absolute bottom-[35%] left-[35%] float-reverse opacity-15">
            <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="35" stroke="#ec4899" strokeWidth="3" fill="none" opacity="0.4"/>
              <circle cx="50" cy="50" r="25" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.6"/>
              <circle cx="50" cy="50" r="15" fill="#ec4899" className="pulse-glow"/>
              <circle cx="50" cy="15" r="5" fill="#ec4899"/>
              <circle cx="50" cy="85" r="5" fill="#ec4899"/>
              <circle cx="15" cy="50" r="5" fill="#ec4899"/>
              <circle cx="85" cy="50" r="5" fill="#ec4899"/>
            </svg>
          </div>

          {/* Data Nodes */}
          <div className="absolute top-[55%] right-[2%] md:right-[5%] drift opacity-20 scale-75 md:scale-100" style={{ animationDelay: '2s' }}>
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="30" r="12" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="30" cy="70" r="12" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="70" cy="70" r="12" fill="#8b5cf6" opacity="0.6"/>
              <line x1="50" y1="30" x2="30" y2="70" stroke="#8b5cf6" strokeWidth="2"/>
              <line x1="50" y1="30" x2="70" y2="70" stroke="#8b5cf6" strokeWidth="2"/>
            </svg>
          </div>

          {/* Kubernetes-style Hexagon - Hidden on small screens */}
          <div className="hidden md:block absolute bottom-[45%] right-[18%] float opacity-12">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
                    stroke="#3b82f6" strokeWidth="3" fill="none"/>
              <circle cx="50" cy="50" r="15" stroke="#3b82f6" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="50" r="5" fill="#3b82f6" className="pulse-glow"/>
            </svg>
          </div>

          {/* Binary Data Stream - Hidden on small screens */}
          <div className="hidden md:block absolute top-[15%] right-[30%] opacity-10">
            <div className="text-cyan-400 font-mono text-xs space-y-1 float" style={{ animationDelay: '1s' }}>
              <div>01001010</div>
              <div>11010110</div>
              <div>00110101</div>
            </div>
          </div>
        </div>

        {/* Max width 1300px container */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="text-left w-full md:max-w-xl mb-8 md:mb-0 flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in">
              Achieve your career goals with <span className="text-cyan-400 animate-pulse">Nimlacc</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Subscribe to build job-ready skills from world-class institutions.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 md:mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              ₹2,099/month, cancel anytime
            </p>

            <button className="hero-btn w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Start 7-day Free Trial
            </button>

            <p className="text-red-700 text-sm sm:text-base md:text-lg mt-4 md:mt-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Best courses at affordable prices
            </p>
          </div>

          {/* Right Image - Redesigned with glassmorphism & blur effects */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto md:mx-0 flex-shrink-0">
            {/* Glowing backdrop layers */}
            <div className="absolute -inset-6 sm:-inset-8 bg-cyan-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -inset-3 sm:-inset-4 bg-purple-500/15 rounded-full blur-2xl opacity-50"></div>
            
            {/* Main card with glassmorphism */}
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 border border-white/20 shadow-2xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-600/30 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Image container with subtle blur edges */}
              <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden max-h-[380px] sm:max-h-[450px]">
                <img
                  src="/nimlacpic/shagun.png"
                  alt="NIMLACC Mentor"
                  className="w-full h-full object-cover object-top relative z-10"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                />
                
                {/* Frosted glass overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 backdrop-blur-md bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                </div>
              </div>

              {/* Info card - floating glass panel */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 backdrop-blur-2xl bg-black/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-cyan-400/30 shadow-xl">
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-2xl mb-1">
                    Miss Shagun
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-cyan-300 drop-shadow-lg">
                    AI and ML Expert
                  </p>
                </div>
                
                {/* Decorative glow line */}
                <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
            </div>

            {/* Floating tech nodes around image - Enhanced & Responsive */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-14 sm:w-20 h-14 sm:h-20 backdrop-blur-sm bg-cyan-400/10 rounded-full border border-cyan-400/40 flex items-center justify-center pulse-glow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" className="sm:w-10 sm:h-10">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 backdrop-blur-sm bg-purple-500/10 rounded-full border border-purple-400/40 flex items-center justify-center float-reverse">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" className="sm:w-11 sm:h-11">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
                <path d="M4 4l4 4m8 0l4-4M4 20l4-4m8 8l4-4"/>
              </svg>
            </div>

            <div className="hidden sm:block absolute top-1/4 -right-6 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 backdrop-blur-sm bg-emerald-500/10 rounded-full border border-emerald-400/40 flex items-center justify-center drift">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" className="sm:w-8 sm:h-8">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>

            {/* Circuit pattern overlay - Enhanced & Responsive */}
            <div className="hidden sm:block absolute top-6 sm:top-8 right-3 sm:right-4 opacity-25 float">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="sm:w-[100px] sm:h-[100px]">
                <circle cx="15" cy="15" r="4" fill="#06b6d4" className="pulse-glow"/>
                <circle cx="45" cy="25" r="4" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '0.5s' }}/>
                <circle cx="75" cy="15" r="4" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '1s' }}/>
                <circle cx="85" cy="45" r="4" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '1.5s' }}/>
                <circle cx="65" cy="65" r="4" fill="#06b6d4" className="pulse-glow" style={{ animationDelay: '2s' }}/>
                <path d="M15 15h30m0 0v40M45 25h30M85 45v20M65 65h-20" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Additional ML-themed decorations - Responsive */}
            <div className="hidden sm:block absolute bottom-16 sm:bottom-20 -left-6 sm:-left-8 w-14 sm:w-18 h-14 sm:h-18 backdrop-blur-sm bg-blue-500/10 rounded-lg border border-blue-400/40 flex items-center justify-center float" style={{ animationDelay: '1.5s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="sm:w-9 sm:h-9">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}