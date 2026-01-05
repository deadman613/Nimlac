"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const galleryData = [
    {
      id: 1,
      title: "Modern Classrooms",
      description: "State-of-the-art learning spaces equipped with the latest technology for hands-on ML and Cloud training.",
      images: [
        "/nimlacpic/1.webp",
        "/nimlacpic/2.webp",
        "/nimlacpic/3.webp",
        "/nimlacpic/4.webp"
      ]
    },
    {
      id: 2,
      title: "Innovation Labs",
      description: "Dedicated workspaces where students build real-world ML projects and deploy cloud solutions.",
      images: [
        "/nimlacpic/5.webp",
        "/nimlacpic/6.webp",
        "/nimlacpic/8.webp",
        "/nimlacpic/9.webp"
      ]
    },
    {
      id: 3,
      title: "Collaborative Spaces",
      description: "Open areas designed for team projects, peer learning, and knowledge sharing sessions.",
      images: [
        "/nimlacpic/2.webp",
        "/nimlacpic/4.webp",
        "/nimlacpic/1.webp",
        "/nimlacpic/5.webp"
      ]
    },
    {
      id: 4,
      title: "Faculty & Mentors",
      description: "Industry experts providing one-on-one guidance and real-world insights to shape your career.",
      images: [
        "/nimlacpic/3.webp",
        "/nimlacpic/6.webp",
        "/nimlacpic/9.webp",
        "/nimlacpic/8.webp"
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === galleryData[activeSection].images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, activeSection, galleryData]);

  // Reset image index when section changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeSection]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryData[activeSection].images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryData[activeSection].images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.gallery}>
      {/* Background Glows */}
      <div className={styles.backgroundGlows}>
        <div className={`${styles.glow} ${styles.glow1}`}></div>
        <div className={`${styles.glow} ${styles.glow2}`}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subtitle}>Our Learning Environment</p>
          <h2 className={styles.title}>
            Inside <span className={styles.highlight}>NIMLACC</span>
          </h2>
          <p className={styles.description}>
            Classrooms, faculty, students — real hands-on learning in action.
          </p>
        </div>

        {/* Gallery Content */}
        <div className={styles.content}>
          {/* Left Side - List */}
          <div className={styles.leftSection}>
            {galleryData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.listItem} ${activeSection === index ? styles.listItemActive : ''}`}
                onMouseEnter={() => !isMobile && setActiveSection(index)}
                onClick={() => setActiveSection(index)}
              >
                <div className={styles.listNumber}>{String(index + 1).padStart(2, '0')}</div>
                <div className={styles.listContent}>
                  <h3 className={styles.listTitle}>{item.title}</h3>
                  <p className={styles.listDescription}>{item.description}</p>
                </div>
                <div className={styles.listIndicator}></div>
              </div>
            ))}
          </div>

          {/* Right Side - Images */}
          <div className={styles.rightSection}>
            {isMobile ? (
              // Mobile: Carousel View
              <div className={styles.mobileCarousel}>
                <div className={styles.carouselImageWrapper}>
                  <img
                    src={galleryData[activeSection].images[currentImageIndex]}
                    alt={galleryData[activeSection].title}
                    className={styles.carouselImage}
                  />
                  
                  {/* Carousel Controls */}
                  <button
                    onClick={handlePrevImage}
                    className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
                  >
                    <ChevronLeft className={styles.carouselIcon} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                  >
                    <ChevronRight className={styles.carouselIcon} />
                  </button>

                  {/* Dots Indicator */}
                  <div className={styles.carouselDots}>
                    {galleryData[activeSection].images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(imgIndex)}
                        className={`${styles.carouselDot} ${currentImageIndex === imgIndex ? styles.carouselDotActive : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Desktop: 2x2 Grid View
              <div className={styles.imageGrid}>
                {galleryData[activeSection].images.map((image, index) => (
                  <div key={index} className={styles.gridItem}>
                    <img
                      src={image}
                      alt={`${galleryData[activeSection].title} ${index + 1}`}
                      className={styles.gridImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Ready to experience it yourself?{" "}
            <span className={styles.ctaBold}>Book a free counseling call</span>
          </p>
        </div>
      </div>
    </section>
  );
}