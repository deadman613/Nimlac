"use client";
import React, { useState } from 'react';
import styles from './Gain.module.css';

const Gain = () => {
  const [activeCard, setActiveCard] = useState(null);

  const carBrands = [
    {
      id: 1,
      name: 'Job-Ready Skills',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQEaMGKT52_1jA/article-cover_image-shrink_720_1280/B56ZVPISqJHoAI-/0/1740789332422?e=2147483647&v=beta&t=jw46ByTsgWAwKErAmMtMHw0X_FQ2CnxpCPohK3ZL8Y4',
      alt: 'Machine learning code and AI workflow'
    },
    {
      id: 2,
      name: 'Real Projects',
      image: 'https://www.shutterstock.com/image-vector/artificial-intelligence-circle-processor-two-600nw-2619863383.jpg',
      alt: 'Data analytics dashboard and real projects'
    },
    {
      id: 3,
      name: 'Cloud Deployment',
      image: 'https://t3.ftcdn.net/jpg/05/52/74/84/360_F_552748421_twUz7OpbxVm7Zr976kXmMlN5VxKF5BjJ.jpg',
      alt: 'Cloud computing infrastructure and servers'
    }
  ];

  return (
    <section className={styles.gain}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Title */}
          <h1 className={styles.title}>
            What You Will<br />Gain
          </h1>

          {/* Car Gallery */}
          <div className={styles.carGallery}>
            {carBrands.map((car) => (
              <div
                key={car.id}
                className={`${styles.carCard} ${activeCard === car.id ? styles.active : ''}`}
                onMouseEnter={() => setActiveCard(car.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <img 
                  src={car.image} 
                  alt={car.alt}
                  className={styles.carImage}
                />
                <div className={styles.carBadge}>{car.name}</div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <h2 className={styles.subtitle}>
              Concrete Outcomes<br />That Employers Want
            </h2>
            
            <p className={styles.description}>
              Master practical ML & Cloud techniques through hands-on labs, build a portfolio of real projects,
              and get interview + deployment prep with expert guidance — so you’re ready for roles like
              Data Scientist, ML Engineer, and Cloud Architect.
            </p>

            <button className={styles.bookButton}>
              Talk to a Career Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gain;