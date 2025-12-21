// app/components/ComparisonSection.tsx
"use client";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    "Enterprise-Grade Projects",
    "Real Industry Datasets",
    "Cloud Deployments (AWS/Azure)",
    "Professional Portfolio Building",
    "Industry-Aligned Curriculum",
    "End-to-End Career Tracks",
  ];

  const traditionalDesc = [
    "Generic Toy Projects",
    "Public Sample Datasets Only",
    "Local Training Only",
    "Basic Notebooks, No Portfolio",
    "Outdated or Academic Focus",
    "Isolated Classes, No Pathway",
  ];

  return (
    <>
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

        .mainbg {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

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

      <section className="mainbg relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%)" }} />

        <div className="relative z-20 max-w-5xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight px-4">
            How Does <span className="text-cyan-400">NIMLACC</span> Compare?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 sm:mb-16 px-4">
            Real Industry-Ready Training Starts Where Generic Courses End.
          </p>

          {/* Floating comparison platform */}
          <div className="flex justify-center perspective-1000">
            <div className="float-platform w-full max-w-4xl">
              <div 
                className="relative w-full p-6 sm:p-10 pt-12 sm:pt-16 rounded-lg"
                style={{ 
                  background: "rgba(0, 100, 150, 0.1)",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  boxShadow: "0 0 50px rgba(0, 255, 255, 0.2)",
                  transform: "rotateX(15deg)"
                }}
              >
                {/* Main comparison content - now using grid for perfect alignment */}
                <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 text-left gap-8">
                  {/* NIMLACC Side */}
                  <div className="space-y-6 sm:space-y-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-6">NIMLACC</h3>
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-cyan-800/50 rounded-full flex items-center justify-center border border-cyan-400 glow-pulse-blue mt-0.5">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" strokeWidth={3} />
                        </div>
                        <span className="text-base sm:text-lg text-white font-medium leading-tight pt-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Traditional Courses Side */}
                  <div className="space-y-6 sm:space-y-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-6">Traditional Courses</h3>
                    {traditionalDesc.map((desc, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mt-0.5" />
                        <span className="text-base sm:text-lg text-gray-600 font-medium leading-tight pt-1">
                          {desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red cracked pillar with perfectly aligned X marks */}
                <div className="red-cracked-pillar rounded-r-lg sm:rounded-r-lg rounded-b-lg sm:rounded-b-none">
                  <div className="hidden sm:flex absolute inset-0 flex-col justify-start items-end pr-6 pt-[5.2rem]">
                    {traditionalDesc.map((_, i) => (
                      <div key={i} className="w-10 h-10 flex items-center justify-center glow-pulse-red mb-[2.05rem]">
                        <X className="w-9 h-9 text-red-600" strokeWidth={5} />
                      </div>
                    ))}
                  </div>

                  {/* Mobile inline X marks */}
                  <div className="sm:hidden absolute inset-0 pointer-events-none">
                    <div className="grid grid-cols-1 gap-8 px-6 pt-[5rem]">
                      <div className="space-y-6 sm:space-y-7" />
                      <div className="space-y-6 sm:space-y-7">
                        {traditionalDesc.map((_, i) => (
                          <div key={i} className="flex justify-end -ml-4">
                            <div className="w-9 h-9 flex items-center justify-center glow-pulse-red">
                              <X className="w-8 h-8 text-red-600" strokeWidth={5} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom shadow curve */}
          <div className="relative w-full max-w-4xl mx-auto -mt-8 h-8 sm:h-12 bg-gray-900/50 rounded-b-[50%] border-t border-cyan-800/50" />

          <p className="mt-12 sm:mt-20 text-base sm:text-xl font-light text-gray-300 tracking-wider px-4">
            Others teach theory. <span className="text-cyan-400 font-bold">We build careers.</span>
          </p>
        </div>
      </section>
    </>
  );
}