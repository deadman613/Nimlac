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
      big: "INR 12 LPA",
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
    { logo: "R", name: "Razorpay", field: "Fintech" },
    { logo: "F", name: "Freshworks", field: "SaaS" },
    { logo: "S", name: "Swiggy", field: "Consumer Tech" },
    { logo: "M", name: "Meesho", field: "E-Commerce" },
    { logo: "C", name: "CRED", field: "Fintech" },
    { logo: "P", name: "PhonePe", field: "Payments" },
    { logo: "Z", name: "Zomato", field: "Food Tech" },
    { logo: "F", name: "Flipkart", field: "E-Commerce" },
  ];

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

        .stat-card {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(34, 211, 238, 0.3);
          transition: all 0.4s ease;
        }
        .stat-card:hover {
          border-color: #67e8f9;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(6, 255, 255, 0.2);
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
          box-shadow: 0 10px 30px rgba(6, 255, 255, 0.15);
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

      <div className="min-h-screen bg-gradient-diagonal flex items-center justify-center p-6 overflow-hidden relative">
        {/* Animated Background Glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[140px] bg-glow-pulse" style={{ animationDelay: "6s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-base md:text-lg uppercase tracking-wider mb-4">Placements & Companies</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              See Where Our Students Are <span className="text-cyan-400">Working</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
              Companies now hire by proving skills, not just listing them on a resume.<br className="hidden md:block" />
              NIMLACC’s placement assistance focuses on making you truly job-ready.
            </p>
          </div>

          {/* Stats Grid - Balanced font sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card rounded-3xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">{stat.big}</div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-3">{stat.label}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Companies Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Alumni Placements</h3>
                <p className="text-gray-300 text-base md:text-lg">Where our learners now build their careers</p>
              </div>
              <div className="mt-4 sm:mt-0 bg-cyan-900/30 text-cyan-400 text-sm md:text-base px-5 py-3 rounded-full border border-cyan-800/50">
                Verified offers | 2024-25
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {companies.map((comp, i) => (
                <div key={i} className="company-badge rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {comp.logo}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">{comp.name}</h4>
                  <p className="text-cyan-400 text-sm md:text-base">{comp.field}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Statement & CTA */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-cyan-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Our goal is your success. We provide the support to bridge classroom learning and the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="cta-primary px-10 py-5 rounded-full text-lg md:text-xl font-bold">
                Book My Free Counseling Call
              </button>
              <button className="px-10 py-5 rounded-full text-lg md:text-xl font-medium text-cyan-400 border border-cyan-700/50 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all">
                See Our Latest Placements
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}