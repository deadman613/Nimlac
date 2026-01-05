"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Before NIMLACC I had zero coding experience, but after the Diploma program I'm now confidently working as a Machine Learning intern at a top startup. The project-based learning and one-on-one mentoring completely transformed my skills and outlook.",
      name: "Aisha Kapoor",
      batch: "2024 Graduate",
      journey: "Career Switcher → ML Engineer Intern",
    },
    {
      quote:
        "I was a final-year engineering student unsure of my path. NIMLACC's Advanced ML & Cloud course gave me direction – I built a full ML project portfolio and today I'm placed as a Data Analyst at a leading firm. This program gave me hands-on experience nobody else offered.",
      name: "Raj Patel",
      batch: "Batch of 2023",
      journey: "CS Grad → Data Analyst",
    },
    {
      quote:
        "As a marketing professional, switching to tech felt impossible. NIMLACC's entry-level Machine Learning course was perfect. I learned from scratch, built real projects, and now I'm interviewing for data roles. I can't recommend it enough.",
      name: "Sneha Verma",
      batch: "Batch of 2024",
      journey: "Non-Tech → ML Enthusiast",
    },
    {
      quote:
        "The hands-on cloud deployment projects and live mentoring sessions made all the difference. Within months of completing the course, I landed a role as a Junior ML Engineer at a growing fintech company.",
      name: "Arjun Mehta",
      batch: "2024 Graduate",
      journey: "Fresher → Junior ML Engineer",
    },
    {
      quote:
        "NIMLACC didn't just teach theory — they made me build production-ready models. My portfolio impressed recruiters, and I'm now working as a Data Scientist at a unicorn startup.",
      name: "Priya Singh",
      batch: "Batch of 2024",
      journey: "Analyst → Data Scientist",
    },
    {
      quote:
        "The career guidance and mock interviews prepared me perfectly. From confusion to clarity — I transitioned into an MLOps role thanks to the practical focus of the program.",
      name: "Vikram Rao",
      batch: "2023 Graduate",
      journey: "DevOps → MLOps Engineer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.testimonials}>
      {/* Animated Background Glows */}
      <div className={styles.backgroundGlows}>
        <div className={`${styles.glow} ${styles.glow1}`}></div>
        <div className={`${styles.glow} ${styles.glow2}`}></div>
        <div className={`${styles.glow} ${styles.glow3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left: Hero Text with Image Background */}
          <div className={styles.leftSection}>
            <div className={styles.heroTextWrapper}>
              <div className={styles.heroText}>
                Student Success Stories
              </div>
            </div>
            
            <div className={styles.headingSection}>
              <h1 className={styles.heading}>
                {/* Student <span className={styles.highlight}>Success Stories</span> */}
              </h1>
              <p className={styles.paragraph}>
                Real graduates. Real careers. Real transformations.
              </p>
              <p className={styles.subParagraph}>
                Discover how our students transformed their careers and achieved their dreams through dedication, mentorship, and hands-on learning.
              </p>
            </div>
          </div>

          {/* Right: Testimonial Card Stack */}
          <div className={styles.rightSection}>
            <div className={styles.testimonialWrapper}>
              <div className={styles.cardStack}>
                {/* Card Container */}
                <div className={styles.cardContainer}>
                  {testimonials.map((testimonial, index) => {
                    // Determine card position based on current index
                    let cardClass = `${styles.card} `;
                    
                    if (index === currentIndex) {
                      cardClass += styles.cardVisible;
                    } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                      cardClass += styles.cardBehind;
                    } else if (index === (currentIndex - 2 + testimonials.length) % testimonials.length) {
                      cardClass += styles.cardFarBehind;
                    } else {
                      cardClass += styles.cardHidden;
                    }

                    return (
                      <div key={index} className={cardClass}>
                        <div className={styles.cardContent}>
                          <div className={styles.quoteIcon}>"</div>
                          <p className={styles.quote}>
                            {testimonial.quote}
                          </p>
                          
                          <div className={styles.authorSection}>
                            <div className={styles.authorInfo}>
                              <div className={styles.avatar}>
                                {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </div>
                              <div>
                                <div className={styles.authorName}>{testimonial.name}</div>
                                <div className={styles.authorTitle}>{testimonial.journey}</div>
                              </div>
                            </div>
                            <div className={styles.batchTag}>{testimonial.batch}</div>
                          </div>
                          
                          <div className={styles.cardFooter}>
                            <div className={styles.journeyTag}>{testimonial.journey}</div>
                            <div className={styles.navButtons}>
                              <button onClick={prev} className={styles.navButton}>
                                <ChevronLeft className={styles.navIcon} />
                              </button>
                              <button onClick={next} className={styles.navButton}>
                                <ChevronRight className={styles.navIcon} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Centered Dots Indicator */}
                <div className={styles.dotIndicator}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}