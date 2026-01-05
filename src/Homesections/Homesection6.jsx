// app/components/PlacementSection.tsx
"use client";

export default function PlacementSection() {
  const stats = [
    {
      big: "95%",
      label: "Placement Success Rate",
      desc: "Alumni securing interviews within 90 days of graduation",
    },
    {
      big: "150+",
      label: "Hiring Partners",
      desc: "Startups, unicorns & enterprises actively recruiting our talent",
    },
    {
      big: "12+ LPA",
      label: "Average Package",
      desc: "Highest packages reaching 28 LPA for top performers",
    },
    {
      big: "45 Days",
      label: "Portfolio to Interview",
      desc: "Average time from final project review to first interview invite",
    },
  ];

  const companies = [
    { slug: "razorpay", name: "Razorpay", field: "Fintech" },
    { slug: "freshworks", name: "Freshworks", field: "SaaS" },
    { slug: "swiggy", name: "Swiggy", field: "Consumer Tech" },
    { slug: "meesho", name: "Meesho", field: "E-Commerce" },
    { slug: "cred", name: "CRED", field: "Fintech" },
    { slug: "phonepe", name: "PhonePe", field: "Payments" },
    { slug: "zomato", name: "Zomato", field: "Food Tech" },
    { slug: "flipkart", name: "Flipkart", field: "E-Commerce" },
  ];

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

        .big-card {
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(34, 211, 238, 0.2);
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(34, 211, 238, 0.25);
        }

        .company-badge {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(103, 232, 249, 0.2);
          transition: all 0.3s ease;
        }
        .company-badge:hover {
          border-color: #67e8f9;
          transform: scale(1.05);
        }

        .cta-primary {
          background: linear-gradient(90deg, #67e8f9, #22d3ee);
          color: black;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(103, 232, 249, 0.4);
        }
      `}</style>

      <section className="bg-gradient-diagonal relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-[100px] sm:blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-80 sm:h-80 bg-purple-600/20 rounded-full blur-[90px] sm:blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
        </div>

        {/* Main big card */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="big-card rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Top header */}
            <p className="text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mb-3">Placements & Companies</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-white mb-4 leading-tight">
              See Where Our Students Are <span className="text-cyan-400">Working</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mb-8 sm:mb-10 leading-relaxed">
              We focus on placement, not just completion. Career coaches, portfolio sprints,
              and employer showcases help you convert offers faster.
            </p>

            {/* Responsive two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-card rounded-3xl p-5 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.big}</div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">{stat.label}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right: Companies */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 sm:mb-6 gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Alumni Placements</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Where our learners now build</p>
                  </div>
                  <div className="bg-cyan-900/40 text-cyan-400 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full border border-cyan-800/50">
                    Verified offers | 2024-25
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companies.map((comp, i) => (
                    <div key={i} className="company-badge rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white flex-shrink-0">
                        <img
                          src={`https://cdn.simpleicons.org/${comp.slug}/ffffff`}
                          alt={`${comp.name} logo`}
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm sm:text-base">{comp.name}</h4>
                        <p className="text-cyan-400 text-xs sm:text-sm">{comp.field}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10">
              <button className="cta-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold">
                Book My Free Counseling Call
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium text-cyan-400 border border-cyan-700/50 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all">
                See Our Latest Placements
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}