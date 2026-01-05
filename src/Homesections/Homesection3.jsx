// app/components/ComparisonSection.tsx
"use client";
import { 
  Check, 
  X, 
  Code2, 
  Database, 
  Cloud, 
  Briefcase, 
  Users, 
  GraduationCap 
} from "lucide-react";

export default function ComparisonSection() {
  const items = [
    {
      title: "Enterprise-Grade Projects",
      subtitle: "Production ML systems with real business impact",
      negative: "Toy projects with synthetic data",
      icon: Code2,
    },
    {
      title: "Real Industry Datasets",
      subtitle: "Enterprise datasets with millions of records",
      negative: "Public Kaggle datasets only",
      icon: Database,
    },
    {
      title: "Cloud Deployments (AWS/Azure)",
      subtitle: "Production ML pipelines on enterprise cloud",
      negative: "Local Jupyter notebooks only",
      icon: Cloud,
    },
    {
      title: "Professional Portfolio Building",
      subtitle: "Deployable projects ready for employer review",
      negative: "Basic notebooks, no showcase",
      icon: Briefcase,
    },
    {
      title: "Industry-Aligned Curriculum",
      subtitle: "Co-created with Fortune 500 tech partners",
      negative: "Academic or outdated content",
      icon: Users,
    },
    {
      title: "End-to-End Career Tracks",
      subtitle: "Complete ML engineer career pathways",
      negative: "Isolated classes, no progression",
      icon: GraduationCap,
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes glowPulseCyan {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 255, 255, 0.6); }
          50% { box-shadow: 0 0 30px rgba(6, 255, 255, 0.9); }
        }
        @keyframes glowPulseRed {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.6); }
          50% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.9); }
        }

        .mainbg {
          background: #000;
        }
      `}</style>

      <section className="mainbg relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-16">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-8xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl  text-white mb-4">
              How Does <span className="text-cyan-400">NIMLACC</span> Compare?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Real Industry-Ready Training Starts Where Generic Courses End.
            </p>
          </div>

          {/* Single Frame Comparison Card */}
          <div className="relative">
            {/* Grid Layout - 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side - NIMLACC (Cyan) */}
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="text-center mb-10">
                  {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-900/50 rounded-2xl border-2 border-cyan-400 glow-pulse-cyan mb-6">
                    <Check className="w-10 h-10 text-cyan-400" strokeWidth={4} />
                  </div> */}
                  <h3 className="text-3xl text-left md:text-4xl  text-cyan-300">NIMLACC</h3>
                </div>

                <div className="space-y-8">
                  {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-6 group">
                        <div className="w-14 h-14 shrink-0 bg-cyan-900/30 rounded-xl border border-cyan-600/50 flex items-center justify-center glow-pulse-cyan transition-all group-hover:scale-110">
                          <Icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-cyan-300 text-base leading-relaxed">{item.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Traditional (Red) */}
              <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-b from-transparent ">
                <div className="text-center mb-10">
                  {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900/50 rounded-2xl border-2 border-red-600 glow-pulse-red mb-6">
                    <X className="w-10 h-10 text-red-500" strokeWidth={4} />
                  </div> */}
                  <h3 className="text-3xl text-right md:text-4xl text-red-500">Traditional Courses</h3>
                </div>

                <div className="space-y-8">
                  {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex flex-row-reverse items-start gap-6 group">
                        <div className="w-14 h-14 shrink-0 bg-red-900/30 rounded-xl border border-red-700/50 flex items-center justify-center glow-pulse-red transition-all group-hover:scale-110">
                          <Icon className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="text-right">
                          <h4 className="text-xl font-semibold text-gray-400 mb-1 line-through">{item.title}</h4>
                          <p className="text-red-400 text-base leading-relaxed">{item.negative}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <p className="text-center mt-16 text-xl md:text-2xl font-light text-gray-300">
            Others teach theory. <span className="text-cyan-400 font-bold">We build careers.</span>
          </p>
        </div>
      </section>
    </>
  );
}