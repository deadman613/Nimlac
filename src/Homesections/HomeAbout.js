"use client";
import React, { useRef, useState } from 'react';
import styles from './HomeAbout.module.css';

const HomeAbout = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className={styles.homeAbout}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Discover What<br />Moves You Naturally.
          </h1>
          <p className={styles.subtitle}>
            From daily essentials to timeless<br />
            finds, explore eco-friendly products<br />
            that fit your lifestyle.
          </p>
        </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* Left Column - Info Cards */}
          <div className={styles.leftColumn}>
            <div className={`${styles.card} ${styles.cardBeige}`}>
              <h3 className={styles.cardTitle}>Why We Do What We Do.</h3>
              <button className={styles.cardButton}>
                Learn More
                <span className={styles.arrow}>↗</span>
              </button>
            </div>

            <div className={`${styles.card} ${styles.cardLight}`}>
              <h3 className={styles.cardTitle}>Giving Back<br />to the Earth.</h3>
              <button className={styles.cardButton}>
                <span className={styles.arrow}>→</span>
              </button>
            </div>

            <div className={`${styles.card} ${styles.cardTan}`}>
              <h3 className={styles.cardTitle}>Practical Steps for<br />a Greener Life.</h3>
              <button className={styles.cardButton}>
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>

          {/* Middle Column - Image Card */}
          <div className={styles.middleColumn}>
            <div className={`${styles.card} ${styles.cardImage}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg" 
                  alt="Cloud computing infrastructure" 
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.badge}>Eco-Tools</span>
                  <h3 className={styles.imageTitle}>Crafted for a<br />Greener Life.</h3>
                  <button className={styles.imageButton}>
                    <span className={styles.arrow}>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Cards */}
          <div className={styles.rightColumn}>
            <div className={`${styles.card} ${styles.cardDark} ${styles.cardProduct}`}>
              <div className={styles.productImage} style={{backgroundImage: 'url(https://irendering.net/wp-content/uploads/2021/11/cloud-computing-machine-learning-1.jpeg)'}}>
                <span className={styles.badge}>Eco-Chemistry</span>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>Science Meets<br />Sustainability.</h3>
                  <button className={styles.productButton}>
                    <span className={styles.arrow}>↗</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardDark} ${styles.cardProduct}`}>
              <div className={styles.productImage} style={{backgroundImage: 'url(https://gem-corp.tech/wp-content/uploads/2025/06/cloud-computing-role-in-edge-ai-workflows.png)'}}>
                <span className={styles.badge}>Eco-Products</span>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>Pure, Gentle,<br />Sustainable.</h3>
                  <button className={styles.productButton}>
                    <span className={styles.arrow}>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerVideo}>
            <div 
              className={styles.videoWrapper}
              onClick={handleVideoPlay}
            >
              <video
                ref={videoRef}
                className={styles.videoPlaceholder}
                src="/uploads/homeabout-banner.mp4"
                playsInline
                preload="metadata"
                muted
                loop
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />
              <button
                type="button"
                className={styles.playButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoPlay();
                }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    style={{ display: 'block' }}
                  >
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    style={{ display: 'block', marginLeft: '2px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <div className={styles.videoTags}>
                
                <span className={styles.tag}>#SUSTAINABLE</span>
                <span className={styles.tag}>#FRIENDLY</span>
                <span className={styles.tag}>#CODING</span>
              </div>
            </div>
          </div>

          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
              Make Everyday<br />
              Sustainable, Beautiful,<br />
              and Simple
            </h2>
            <p className={styles.bannerText}>
              Ready to live better for the planet? Explore our curated collection of eco-friendly 
              finds, natural solutions, and sustainable essentials. Make small changes today that 
              create a lasting impact tomorrow.
            </p>
            <button className={styles.bannerButton}>
              Browse Eco Favorites
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;