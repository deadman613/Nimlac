// app/components/FinalCTASection.tsx
"use client";

export default function FinalCTASection() {
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

        .cta-card {
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(34, 211, 238, 0.3);
          transition: all 0.5s ease;
        }

        .cta-card:hover {
          border-color: #67e8f9;
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(103, 232, 249, 0.25);
        }

        .btn-primary {
          background: linear-gradient(90deg, #67e8f9, #22d3ee);
          color: black;
          font-weight: bold;
          transition: all 0.4s ease;
        }

        .btn-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(103, 232, 249, 0.5);
        }

        .btn-secondary {
          border: 1px solid rgba(103, 232, 249, 0.5);
          color: #67e8f9;
          transition: all 0.4s ease;
        }

        .btn-secondary:hover {
          border-color: #67e8f9;
          background: rgba(103, 232, 249, 0.1);
          color: white;
          transform: translateY(-5px);
        }
      `}</style>

      <section className="bg-gradient-diagonal relative py-20 lg:py-28 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "6s" }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Main CTA Card */}
          <div className="cta-card rounded-3xl p-10 lg:p-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Your Future in AI & Cloud Starts <span className="text-cyan-400">Here</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              NIMLACC is not just another training center – it’s India’s most serious, industry-aligned ML & Cloud ecosystem. 
              With demand for AI and ML talent projected to hit 1 million professionals by 2026 and cloud roles set to grow into the millions, 
              <span className="text-cyan-300 font-semibold"> the time to act is now</span>.
            </p>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don’t miss India’s tech boom – invest in your skills and future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary px-10 py-5 rounded-full text-xl font-bold">
                Talk to a Career Expert
              </button>
              <button className="btn-secondary px-10 py-5 rounded-full text-xl font-medium">
                Explore Programs
              </button>
            </div>

            <p className="text-base md:text-lg text-gray-400 mt-10">
              Admission is limited to ensure quality mentorship — <span className="text-cyan-300 font-semibold">secure your spot in the next batch today</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}