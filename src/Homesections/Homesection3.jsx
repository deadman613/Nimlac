// app/components/ComparisonSection.tsx
"use client";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    "AI Task Prioritization",
    "Alias Replay System",
    "Wallet Trace Cleaner",
    "Metadata Erasure",
    "Self-Hosted Relays",
  ];

  return (
    <>
      {/* Sirf zaruri animations + cracked pillar — blue lines completely removed */}
      <style jsx global>{`
        @keyframes floatPlatform {
          0%, 100% { transform: translate3d(0, 0, 0) rotateX(15deg); }
          50% { transform: translate3d(0, -10px, 0) rotateX(15deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.6); }
        }
        @keyframes redGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.3); }
          50% { box-shadow: 0 0 25px rgba(255, 0, 0, 0.8), 0 0 50px rgba(255, 0, 0, 0.6); }
        }

        .float-platform { animation: floatPlatform 10s ease-in-out infinite; }
        .glow-pulse-blue { animation: glowPulse 3s ease-in-out infinite; }
        .glow-pulse-red { animation: redGlow 2s ease-in-out infinite; }



        // main bg
        .mainbg
      {
       background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        
      }

        /* Red cracked pillar — exactly same as your screenshot */
        .red-cracked-pillar {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 50%;
          background: rgba(150, 0, 0, 0.1);
          border-left: 1px solid rgba(255, 0, 0, 0.4);
          z-index: 10;
        }
        .red-cracked-pillar::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%);
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 50 10 A 10 10 0 0 1 50 30 Z M 30 40 L 70 60 L 30 80 Z" fill="black" stroke="black"/></svg>');
          mask-repeat: no-repeat;
          mask-size: 100% 100%;
          opacity: 0.8;
          filter: blur(2px);
        }
        @media (max-width: 640px) {
          .red-cracked-pillar {
            width: 100%; left: 0; top: 50%; bottom: 0; height: 50%;
            border-left: none; border-top: 1px solid rgba(255,0,0,0.4);
          }
        }
      `}</style>

      <section className=" mainbg relative min-h-screen  overflow-hidden flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%)" }} />
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div> */}

        <div className="relative z-20 max-w-5xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight px-4">
            How Does <span className="text-cyan-400">GhostWareOS</span> Compare?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 sm:mb-16 px-4">
            Real Anonymity Starts Where Accounts End.
          </p>

          {/* Floating platform — NO blue lines */}
          <div className="flex justify-center perspective-1000">
            <div className="float-platform w-full max-w-2xl">
              <div 
                className="relative w-full p-6 sm:p-10 pt-12 sm:pt-16 rounded-lg"
                style={{ 
                  background: "rgba(0, 100, 150, 0.1)",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  boxShadow: "0 0 50px rgba(0, 255, 255, 0.2)",
                  transform: "rotateX(15deg)"
                }}
              >
                {/* Content — 100% same */}
                <div className="relative z-20 flex flex-col sm:flex-row justify-between text-left gap-8 sm:gap-0">
                  <div className="w-full sm:w-1/2 sm:pr-4 space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 sm:mb-6">GhostWareOS</h3>
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 bg-cyan-800/50 rounded-full flex items-center justify-center border border-cyan-400 glow-pulse-blue">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" strokeWidth={3} />
                        </div>
                        <span className="text-base sm:text-lg text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full sm:w-1/2 sm:pl-8 space-y-4 sm:space-y-6 relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 sm:mb-6">VPNs</h3>
                    {features.map((_, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-4 justify-between sm:justify-start relative">
                        <div className="flex items-center gap-3 sm:gap-4 flex-1">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center sm:invisible">
                            <div className="sm:hidden w-8 h-8 flex items-center justify-center glow-pulse-red">
                              <X className="w-8 h-8 text-red-600" strokeWidth={5} />
                            </div>
                          </div>
                          <div className="text-sm sm:text-lg text-gray-600 font-medium">
                            {["Limited Scope","Account Dependency","No Trace Cleaning","Vulnerable Metadata","Centralized Relays"][i]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red cracked pillar — perfect */}
                <div className="red-cracked-pillar rounded-r-lg sm:rounded-r-lg rounded-b-lg sm:rounded-b-none">
                  <div className="hidden sm:flex absolute inset-0 flex-col justify-start items-end pr-4 sm:pr-6 pt-[4.5rem]">
                    {features.map((_, i) => (
                      <div key={i} className="w-10 h-10 flex items-center justify-center glow-pulse-red mb-[1.15rem]">
                        <X className="w-10 h-10 text-red-600" strokeWidth={5} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* BLUE LINES REMOVED — bilkul clean */}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto -mt-8 h-8 sm:h-12 bg-gray-900/50 rounded-b-[50%] border-t border-cyan-800/50" />

          <p className="mt-12 sm:mt-20 text-base sm:text-xl font-light text-gray-300 tracking-wider px-4">
            They hide your IP. <span className="text-cyan-400 font-bold">We erase your footprint.</span>
          </p>
        </div>
      </section>
    </>
  );
}