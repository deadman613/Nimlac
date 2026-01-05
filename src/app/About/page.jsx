// app/components/AboutPage.tsx
"use client";
import { ChevronDown, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import LetterGlitch from '../LetterGlitch';
import HomeAbout from '@/Homesections/HomeAbout';

export default function AboutPage() {
  const scrollToStory = () => {
    const storySection = document.getElementById('story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'PoppinsSemiBold';
          src: url('/Poppins-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }


   

      

        .hero-like-overlay-1 {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
       
        }

        .hero-like-overlay-2 {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          
        }

        .glitch-bg-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.4;
          pointer-events: none;
          
          
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;


        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .story-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

      

        .story-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.15);
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>

      {/* SECTION 1: ABOUT US */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">

        {/* Glitch Background */}
        <div className="glitch-bg-container  ">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.18) 20%, rgba(0,0,0,0.92) 70%, rgba(0.98,0,0,0.98) 100%)",
          }}

        />

       

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-20 mx-auto text-center fade-in-up ">

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-[0.3em] mb-8 leading-tight mt-30"
            style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}
          >
            ABOUT
            <span className="text-cyan-400 gap-0.5">US</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            We are <span className="text-cyan-400 font-semibold">GhostWare</span> — architects of digital invisibility,
            <br className="hidden sm:block" />
            pioneers of the decentralized future.
          </p>

          {/* Decorative Line */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-16"></div>

          {/* Key Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">

            <div className="p-6 rounded-lg bg-gray-900/40 border border-cyan-500/20 backdrop-blur-sm">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}>Our Mission</h3>
              <p className="text-gray-400 text-sm">
                To restore privacy as a fundamental human right in the digital age
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-900/40 border border-purple-500/20 backdrop-blur-sm">
              <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}>Our Vision</h3>
              <p className="text-gray-400 text-sm">
                A world where surveillance capitalism is obsolete and freedom is default
              </p>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToStory}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-cyan-400 hover:text-cyan-300 transition-colors scroll-indicator cursor-pointer"
          aria-label="Scroll to story"
        >
          <ChevronDown className="w-10 h-10" />
        </button>

      </section>

      <HomeAbout />

      {/* SECTION 2: THE STORY */}
      <section
        id="story-section"
        className="relative min-h-screen overflow-hidden py-20 px-4 sm:px-6 bg-black"
      >

        <div className="hero-like-overlay-1" />
        <div className="hero-like-overlay-2" />

        {/* Glitch Background */}
        {/* <div className="glitch-bg-container"> */}
        {/* <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div> */}

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto bg-black ">

          {/* Section Header */}
          <div className="text-center mb-16  ">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-widest mb-6"
              style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}
            >
              THE <span className="text-cyan-400">STORY</span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          {/* Story Timeline */}
          <div className="space-y-12 max-w-4xl mx-auto">

            {/* Chapter 1 */}
            <div className="story-card p-8 rounded-xl bg-gray-900/50 border border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/40">
                  <span className="text-cyan-400 font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}>
                    The Genesis
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Born from the frustration of watching Big Tech monopolize personal data, GhostWare began as a manifesto written by a collective of privacy advocates, cryptographers, and ethical hackers. We asked ourselves: <span className="text-cyan-400 italic">"What if surveillance wasn't the default?"</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="story-card p-8 rounded-xl bg-gray-900/50 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/40">
                  <span className="text-purple-400 font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}>
                    The Build
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We spent years developing AI-powered obfuscation protocols that don't just hide your data—they make it impossible to correlate. GhostWareOS became the first operating system to treat <span className="text-purple-400 font-semibold">privacy as infrastructure</span>, not an afterthought.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="story-card p-8 rounded-xl bg-gray-900/50 border border-lime-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0 border border-lime-500/40">
                  <span className="text-lime-400 font-bold text-xl">03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'PoppinsSemiBold, sans-serif' }}>
                    The Movement
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Today, GhostWare is more than software—it's a movement. Thousands of users worldwide have reclaimed their digital autonomy. We're building a future where <span className="text-lime-400 italic">you own your digital footprint</span>, not corporations. This is just the beginning.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl sm:text-2xl italic text-gray-300 mb-6 leading-relaxed">
              "Privacy isn't about having something to hide. It's about having something to <span className="text-cyan-400 font-semibold">protect</span>."
            </blockquote>
            <p className="text-sm text-cyan-400 font-medium">— The GhostWare Collective</p>
          </div>

        </div>

      </section>
    </>
  );
}