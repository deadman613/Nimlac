// app/components/GallerySection.tsx
"use client";

export default function GallerySection() {
  const images = [
    { src: "/nimlacpic/1.webp", alt: "Students in classroom discussion" },
    { src: "/nimlacpic/2.webp", alt: "Modern learning space with plants" },
    { src: "/nimlacpic/3.webp", alt: "Team working on ML project" },
    { src: "/nimlacpic/4.webp", alt: "Faculty teaching session" },
    { src: "/nimlacpic/5.webp", alt: "Students at hackathon" },
    { src: "/nimlacpic/6.webp", alt: "Live cloud deployment lab" },
    { src: "/nimlacpic/8.webp", alt: "Student presenting project" },
    { src: "/nimlacpic/9.webp", alt: "NIMLACC campus environment" },
  ];

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

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
          transition: all 0.5s ease;
        }

        .gallery-img:hover {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 50px rgba(103, 232, 249, 0.4);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          aspect-ratio: 4 / 3;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          background: #000;
          color: #fff;
        }

        /* Center large image */
        .center-large {
          grid-column: 2 / 4;
          grid-row: 2 / 3;
        }

        /* Top row - 4 images */
        .top-left { grid-column: 1 / 2; grid-row: 1 / 2; }
        .top-mid-left { grid-column: 2 / 3; grid-row: 1 / 2; }
        .top-mid-right { grid-column: 3 / 4; grid-row: 1 / 2; }
        .top-right { grid-column: 4 / 5; grid-row: 1 / 2; }

        /* Middle row sides - 2 images */
        .mid-left { grid-column: 1 / 2; grid-row: 2 / 3; }
        .mid-right { grid-column: 4 / 5; grid-row: 2 / 3; }

        /* Bottom row - 4 images */
        .bottom-left { grid-column: 1 / 2; grid-row: 3 / 4; }
        .bottom-mid-left { grid-column: 2 / 3; grid-row: 3 / 4; }
        .bottom-mid-right { grid-column: 3 / 4; grid-row: 3 / 4; }
        .bottom-right { grid-column: 4 / 5; grid-row: 3 / 4; }

        @media (max-width: 1024px) {
          .gallery-grid {
            gap: 0.75rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 0.5rem;
            padding: 1rem;
            aspect-ratio: 3 / 4;
          }

          /* Center image on mobile */
          .center-large {
            grid-column: 1 / 4;
            grid-row: 2 / 4;
          }

          /* Top row mobile - 3 images */
          .top-left { grid-column: 1 / 2; grid-row: 1 / 2; }
          .top-mid-left { grid-column: 2 / 3; grid-row: 1 / 2; }
          .top-mid-right { grid-column: 3 / 4; grid-row: 1 / 2; }
          .top-right { display: none; }

          /* Middle row sides mobile */
          .mid-left { display: none; }
          .mid-right { display: none; }

          /* Bottom row mobile - 4 images */
          .bottom-left { grid-column: 1 / 2; grid-row: 4 / 5; }
          .bottom-mid-left { grid-column: 2 / 3; grid-row: 4 / 5; }
          .bottom-mid-right { grid-column: 3 / 4; grid-row: 4 / 5; }
          .bottom-right { display: none; }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 0.4rem;
            padding: 0.75rem;
            aspect-ratio: auto;
          }

          /* Center image on small mobile */
          .center-large {
            grid-column: 1 / 3;
            grid-row: 2 / 4;
          }

          /* Top row small mobile */
          .top-left { grid-column: 1 / 2; grid-row: 1 / 2; }
          .top-mid-left { grid-column: 2 / 3; grid-row: 1 / 2; }
          .top-mid-right { display: none; }

          /* Bottom row small mobile */
          .bottom-left { grid-column: 1 / 2; grid-row: 4 / 5; }
          .bottom-mid-left { grid-column: 2 / 3; grid-row: 4 / 5; }
          .bottom-mid-right { display: none; }
        }
      `}</style>

      <section className="bg-gradient-diagonal relative py-12 md:py-16 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 md:w-80 md:h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-cyan-400 text-xs md:text-sm uppercase tracking-widest mb-2">Our Learning Environment</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Inside <span className="text-cyan-400">NIMLACC</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
              Classrooms, faculty, students — real hands-on learning in action.
            </p>
          </div>

          {/* Gallery Grid - One large center, rest around it */}
          <div className="gallery-grid">
            {/* Top Row */}
            <div className="grid-item top-left">
              <img src={images[0].src} alt={images[0].alt} className="gallery-img" />
            </div>
            <div className="grid-item top-mid-left">
              <img src={images[1].src} alt={images[1].alt} className="gallery-img" />
            </div>
            <div className="grid-item top-mid-right">
              <img src={images[2].src} alt={images[2].alt} className="gallery-img" />
            </div>
            <div className="grid-item top-right">
              <img src={images[3].src} alt={images[3].alt} className="gallery-img" />
            </div>

            {/* Middle Row */}
            <div className="grid-item mid-left">
              <img src={images[4].src} alt={images[4].alt} className="gallery-img" />
            </div>
            
            {/* CENTER HERO IMAGE - 8.jpeg */}
            <div className="grid-item center-large object-bottom">
              <img src={images[6].src} alt={images[6].alt} className="gallery-img" />
            </div>

            <div className="grid-item mid-right">
              <img src={images[5].src} alt={images[5].alt} className="gallery-img" />
            </div>

            {/* Bottom Row */}
            <div className="grid-item bottom-left">
              <img src={images[7].src} alt={images[7].alt} className="gallery-img" />
            </div>
            <div className="grid-item bottom-mid-left">
              <img src={images[0].src} alt={images[0].alt} className="gallery-img" />
            </div>
            <div className="grid-item bottom-mid-right">
              <img src={images[1].src} alt={images[1].alt} className="gallery-img" />
            </div>
            <div className="grid-item bottom-right">
              <img src={images[2].src} alt={images[2].alt} className="gallery-img" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 md:mt-12">
            <p className="text-base md:text-xl text-cyan-300 font-light">
              Ready to experience it yourself?{" "}
              <span className="text-white font-bold">Book a free counseling call</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}