"use client";

import { Play } from "lucide-react";
import styles from "./Course1.module.css";

export default function Course1() {
  const handleGetStarted = () => {
    // Add your navigation logic here
    console.log("Get Started clicked");
  };

  const handleWatchVideo = () => {
    // Add your video modal logic here
    console.log("Watch Intro Video clicked");
  };

  return (
    <section className={styles.course1}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Section - Text Content */}
          <div className={styles.leftSection}>
            <h1 className={styles.title}>
              Learn In-Demand Skills. Build a Future You're Proud Of
            </h1>
            
            <p className={styles.description}>
              Master industry-relevant courses taught by experts. Learn anytime, 
              anywhere and get certified to boost your career.
            </p>

            {/* CTA Buttons */}
            <div className={styles.buttonGroup}>
              <button 
                className={styles.primaryButton}
                onClick={handleGetStarted}
              >
                Get Started
              </button>
              
              <button 
                className={styles.videoButton}
                onClick={handleWatchVideo}
              >
                <div className={styles.playIcon}>
                  <Play className={styles.playIconSvg} />
                </div>
                <span>Watch Intro Video</span>
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground}></div>
              <img 
                src="/uploads/g4.png" 
                alt="Student with backpack and books" 
                className={styles.studentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}