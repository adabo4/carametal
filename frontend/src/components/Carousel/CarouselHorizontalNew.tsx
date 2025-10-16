"use client";
import React, { useState, useEffect } from "react";
import styles from "./CarouselHorizontalNew.module.css";
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

export default function CarouselHorizontalNew() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalImages = projectData.length; // 6 images
  const visibleImages = 3; // Always show 3 images
  const maxSlide = Math.max(0, totalImages - visibleImages); // 6 - 3 = 3

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  };

  // Touch/Swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentSlide, maxSlide]);

  return (
    <div className={styles.carousel}>
      {/* Carousel Container with overlaid arrows */}
      <div
        className={styles.carouselWrapper}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.carouselTrack} data-slide={currentSlide}>
          {projectData.map((project, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={project.img}
                width={400}
                height={300}
                alt={project.title}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {/* Overlay navigation buttons */}
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous images"
        >
          ‹
        </button>

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          disabled={currentSlide >= maxSlide}
          aria-label="Next images"
        >
          ›
        </button>
      </div>
    </div>
  );
}
