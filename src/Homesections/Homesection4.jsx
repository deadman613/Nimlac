// app/components/CoreModules.tsx
"use client";
import { Shield, Mail, Zap, Check } from "lucide-react";

export default function CoreModules() {
  return (
    <>
      {/* ALL CUSTOM CSS — replaces non-working Tailwind gradients + animations */}
      <style jsx global>{`
        @keyframes subtleGlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Gradient backgrounds */
        .bg-gradient-diagonal {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }
        .bg-teal-card {
          background: linear-gradient(to bottom right, rgba(20, 184, 166, 0.15), rgba(0, 0, 0, 0.6));
        }
        .bg-purple-card {
          background: linear-gradient(to bottom right, rgba(168, 85, 247, 0.15), rgba(0, 0, 0, 0.6));
        }
        .bg-orange-card {
          background: linear-gradient(to bottom right, rgba(251, 146, 60, 0.15), rgba(0, 0, 0, 0.6));
        }

        /* Hover overlays */
        .hover-overlay-teal {
          background: linear-gradient(to bottom right, rgba(20, 184, 166, 0.1), transparent);
        }
        .hover-overlay-purple {
          background: linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), transparent);
        }
        .hover-overlay-orange {
          background: linear-gradient(to bottom right, rgba(251, 146, 60, 0.1), transparent);
        }

        /* Icon glow rings */
        .icon-glow-teal {
          background: linear-gradient(to right, #14b8a6, #06b6d4);
        }
        .icon-glow-purple {
          background: linear-gradient(to right, #a855f7, #ec4899);
        }
        .icon-glow-orange {
          background: linear-gradient(to right, #fb923c, #ef4444);
        }

        /* Animations */
        .icon-rotate-cw { animation: rotateClockwise 20s linear infinite; }
        .icon-rotate-ccw { animation: rotateCounterClockwise 18s linear infinite; }
        .icon-pulse { animation: pulseScale 4s ease-in-out infinite; }
        .bg-glow-pulse { animation: subtleGlow 8s ease-in-out infinite; }

        /* Card hover */
        .module-card {
          transition: all 0.4s ease;
          will-change: transform;
        }
        .module-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-diagonal flex items-center justify-center p-6 overflow-hidden relative">
        
        {/* Animated Background Glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] bg-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] bg-glow-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Core Modules <span className="text-teal-400">Metadata Erasure</span>
            </h1>
            <p className="text-teal-300 text-lg md:text-xl font-light max-w-4xl mx-auto">
              Some of the core modules that fuel GhostWareOS Metadata Erasure Self-Hosted Relays.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* GhostRelay */}
            <div className="module-card relative group">
              <div className="bg-teal-card backdrop-blur-xl border border-teal-800/50 rounded-3xl p-10 shadow-2xl overflow-hidden h-full">
                <div className="absolute inset-0 hover-overlay-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 rounded-full icon-glow-teal blur-xl opacity-60 animate-pulse"></div>
                  <div className="w-full h-full p-6 text-teal-400 relative z-10 icon-rotate-cw">
                    <Shield className="w-full h-full" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center">GhostRelay</h3>
                <p className="text-teal-200 text-center mb-8 leading-relaxed">
                  Route Every Message Through Encrypted, Stateless Nodes.
                </p>

                <ul className="space-y-4">
                  {[
                    "Your data never touches the same route twice.",
                    "No logs, no traces, not even on our side.",
                    "Communicate like you're nowhere at all.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-teal-100">
                      <Check className="w-5 h-5 text-teal-400 mt-1 shrink-0" strokeWidth={3} />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* GhostMask */}
            <div className="module-card relative group">
              <div className="bg-purple-card backdrop-blur-xl border border-purple-800/50 rounded-3xl p-10 shadow-2xl overflow-hidden h-full">
                <div className="absolute inset-0 hover-overlay-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 rounded-full icon-glow-purple blur-xl opacity-60 animate-pulse"></div>
                  <div className="w-full h-full p-6 text-purple-400 relative z-10 icon-rotate-ccw">
                    <Mail className="w-full h-full" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center">GhostMask</h3>
                <p className="text-purple-200 text-center mb-8 leading-relaxed">
                  Auto-Generate Aliases That Forward And Reply Without Exposing Your Real IDs
                </p>

                <ul className="space-y-4">
                  {[
                    "Disguise every inbox.",
                    "Build a wall between who you are and who they think you are.",
                    "Reply safely knowing your real identity is invisible.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-purple-100">
                      <Check className="w-5 h-5 text-purple-400 mt-1 shrink-0" strokeWidth={3} />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* GhostScrub */}
            <div className="module-card relative group">
              <div className="bg-orange-card backdrop-blur-xl border border-orange-800/50 rounded-3xl p-10 shadow-2xl overflow-hidden h-full">
                <div className="absolute inset-0 hover-overlay-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 rounded-full icon-glow-orange blur-xl opacity-70 animate-pulse"></div>
                  <div className="w-full h-full p-6 text-orange-400 relative z-10 icon-pulse">
                    <Zap className="w-full h-full" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center">GhostScrub</h3>
                <p className="text-orange-200 text-center mb-8 leading-relaxed">
                  Remove Traces, Revoke Approvals, And Wipe Metadata Before It's Weaponized.
                </p>

                <ul className="space-y-4">
                  {[
                    "Scan wallets for hidden token approvals.",
                    "Kill risky approvals with a single revoke.",
                    "Watch your on-chain footprint vanish.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-orange-100">
                      <Check className="w-5 h-5 text-orange-400 mt-1 shrink-0" strokeWidth={3} />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}