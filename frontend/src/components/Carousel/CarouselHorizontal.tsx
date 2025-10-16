"use client";
import React, { useState, useEffect } from "react";
import styles from "./CarouselHorizontal.module.css";
import Image from "next/image";

const projectData = [
  {
    img: "/img/carousel-img/img1.jpg",
    title: "Industrial Structure",
  },
  {
    img: "/img/carousel-img/img2.jpg",
    title: "Bridge Construction",
  },
  {
    img: "/img/carousel-img/img3.jpg",
    title: "Steel Framework",
  },
  {
    img: "/img/carousel-img/img4.jpg",
    title: "Metal Coating",
  },
  {
    img: "/img/carousel-img/img5.jpg",
    title: "Industrial Painting",
  },
  {
    img: "/img/carousel-img/img6.jpg",
    title: "Steel Processing",
  },
];

export default function CarouselHorizontal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imagesPerView = isMobile ? 1 : 3;
  const maxSlide = projectData.length - imagesPerView;

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const getVisibleImages = () => {
    return projectData.slice(currentSlide, currentSlide + imagesPerView);
  };

  // Calculate translateX value for smooth sliding
  const getTransform = () => {
    const slideWidth = 33.333; // Each slide is 1/3 of container (100% / 3)
    return `translateX(-${currentSlide * slideWidth}%)`;
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={prevSlide}
      >
        ‹
      </button>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack} data-slide={currentSlide}>
          {projectData.map((project, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={project.img}
                width={500}
                height={375}
                alt={project.title}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
}
