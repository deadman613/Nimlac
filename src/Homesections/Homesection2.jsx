// app/components/WhatYouGainSection.tsx
"use client";
import { 
  Briefcase, 
  Shield, 
  Trophy, 
  Rocket, 
  GraduationCap, 
  Users 
} from 'lucide-react';

export default function WhatYouGainSection() {
  const gains = [
    {
      icon: Briefcase,
      title: "Job-Ready Skills",
      desc: "Master practical ML & Cloud techniques through hands-on labs: data preprocessing, model training, AWS/Azure deployment, and more.",
    },
    {
      icon: Shield,
      title: "Industry Confidence",
      desc: "Gain real-world experience to solve complex problems and walk into interviews with proven readiness.",
    },
    {
      icon: Trophy,
      title: "Portfolio of Real Projects",
      desc: "Build & deploy production-grade projects (image recognition, recommendation systems, cloud services) on GitHub and live platforms.",
    },
    {
      icon: Rocket,
      title: "Career Clarity & Role Readiness",
      desc: "Deep understanding of high-demand roles: Data Scientist, ML Engineer, Cloud Architect, and exactly what skills each requires.",
    },
    {
      icon: GraduationCap,
      title: "Interview & Deployment Prep",
      desc: "Mock interviews, resume reviews, project presentation guidance — everything to make you stand out to employers.",
    },
    {
      icon: Users,
      title: "Career Expert Guidance",
      desc: "Direct access to mentors and career advisors who help bridge you to cutting-edge tech opportunities.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes gridMove { 0% { background-position: 0 0; } 100% { background-position: 60px 60px; } }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes fade-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }

        .secmain { background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%); }
        .gradient-text { background: linear-gradient(to right, #67e8f9, #3b82f6, #a855f7); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        .gradient-diagonal { background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), transparent 50%, rgba(147, 51, 234, 0.2)); }
        .neon-glow { box-shadow: 0 0 30px rgba(34, 211, 238, 0.4); }
        .card-hover:hover .scanline { animation: scanline 2s linear infinite; }
        .scanline::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #22d3ee, transparent); animation: scanline 2s linear infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-grid { animation: gridMove 30s linear infinite; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1100 { animation-delay: 1100ms; }
        .animation-delay-1300 { animation-delay: 1300ms; }
      `}</style>

      <section className="secmain relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 opacity-30 animate-grid">
          <div className="absolute inset-0 gradient-diagonal" />
          <div className="absolute inset-0" style={{ background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold gradient-text leading-tight animate-fade-up">
            What You Will Gain
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cyan-300 font-light tracking-wider animate-fade-up animation-delay-300">
            Concrete outcomes that make employers choose you.
          </p>

          {/* Fixed alignment cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gains.map((gain, i) => {
              const Icon = gain.icon;
              const delays = ["animation-delay-500", "animation-delay-700", "animation-delay-900", "animation-delay-1100", "animation-delay-1300", "animation-delay-1500"];

              return (
                <div key={i} className={`group relative card-hover opacity-0 animate-fade-up ${delays[i]} h-full`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-1000" />

                  <div className="relative h-full bg-black/60 backdrop-blur-xl border border-cyan-800/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 group-hover:border-cyan-400 group-hover:-translate-y-5 group-hover:neon-glow animate-float">
                    {/* Icon - fixed size & perfect center */}
                    <div className="w-20 h-20 mb-6 bg-black/80 rounded-2xl border border-cyan-700/60 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400">
                      <Icon className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-cyan-200 mb-4 px-2">
                      {gain.title}
                    </h3>

                    {/* Description - same line height, perfect alignment */}
                    <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">
                      {gain.desc}
                    </p>

                    {/* Scanline */}
                    <div className="scanline pointer-events-none absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 animate-fade-up animation-delay-700">
            <p className="text-lg md:text-xl text-cyan-300 font-light max-w-4xl mx-auto leading-relaxed">
              Take the next step: <span className="text-white font-semibold">Talk to a Career Expert</span> about how NIMLACC can launch your cutting-edge tech career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}