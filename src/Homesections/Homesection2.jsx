"use client";
import { EyeOff, MessageSquare, Share2 } from 'lucide-react';

export default function GhostWareHero() {
  const features = [
    {
      icon: EyeOff,
      title: "Alias Everything",
      desc: "One-Click Shadow Handles for Telegram, Mail, And SMS.",
    },
    {
      icon: MessageSquare,
      title: "Relay Intelligence",
      desc: "Messages Hop Through Encrypted Ghost Nodes.",
    },
    {
      icon: Share2,
      title: "Self-Hosted Optional",
      desc: "Run Your Own Relay And Vanish Completely.",
    },
  ];

  return (
    <>
      {/* ALL Custom CSS — replaces non-working Tailwind gradients & animations */}
      <style jsx global>{`
        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Moving grid background */
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        /* Scanline effect on hover */
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        /* Fade-up entrance */
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        // main background color
        .secmain
      {
        background:linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        /* Gradient text (replaces bg-linear-to-r + bg-clip-text) */
        .gradient-text {
          background: linear-gradient(to right, #67e8f9, #3b82f6, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* Diagonal gradient overlay */
        .gradient-diagonal {
          background: linear-gradient(to bottom right, 
            rgba(6, 182, 212, 0.2), 
            transparent 50%, 
            rgba(147, 51, 234, 0.2)
          );
        }

        /* Neon glow on card hover */
        .neon-glow {
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.4);
        }

        /* Hover scanline trigger */
        .card-hover:hover .scanline {
          animation: scanline 2s linear infinite;
        }

        /* Hover scanline bar */
        .scanline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22d3ee, transparent);
          animation: scanline 2s linear infinite;
        }

        /* Applied classes */
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-grid { animation: gridMove 30s linear infinite; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
      `}</style>

      <section className="secmain relative min-h-screen  overflow-hidden flex items-center justify-center px-6 py-24">
        {/* Animated Matrix/Grid Background */}
        <div className="absolute inset-0 opacity-30 animate-grid">
          <div className="absolute inset-0 gradient-diagonal" />
          <div 
            className="absolute inset-0"
            style={{
              background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold gradient-text leading-tight animate-fade-up">
            Why GhostWareOS?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cyan-300 font-light tracking-wider animate-fade-up animation-delay-300">
            Built for the ones who don&apos;t want to be found.
          </p>

          {/* Feature Cards */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const delays = ["animation-delay-500", "animation-delay-700", "animation-delay-900"];

              return (
                <div
                  key={i}
                  className={`group relative card-hover opacity-0 animate-fade-up ${delays[i] || ''}`}
                >
                  {/* Neon Glow Background on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-1000" />

                  {/* Main Card */}
                  <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-800/50 rounded-3xl p-10 transition-all duration-500 group-hover:border-cyan-400 group-hover:-translate-y-5 group-hover:neon-glow animate-float">
                    {/* Icon */}
                    <div className="w-24 h-24 mx-auto mb-8 bg-black/70 rounded-2xl border border-cyan-700/60 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400">
                      <Icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-semibold text-cyan-200 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {feature.desc}
                    </p>

                    {/* Scanline Effect on Hover */}
                    <div className="scanline pointer-events-none absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}