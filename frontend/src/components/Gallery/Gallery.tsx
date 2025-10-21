"use client";

import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.css";
import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GalleryImage, GalleryImagesProps } from "@/lib/helpers";

const galleryImages = [
  {
    src: "/img/gallery-img/img1.jpg",
    alt: "Horská dráha Tulireki",
  },
  {
    src: "/img/gallery-img/img2.jpg",
    alt: "Most Apollo",
  },
  {
    src: "/img/gallery-img/img3.jpg",
    alt: "FŠ Nitra",
  },
  {
    src: "/img/gallery-img/img4.jpg",
    alt: "Športová hala Nitra",
  },
  {
    src: "/img/gallery-img/img5.jpg",
    alt: "Kontajnery Strabag",
  },
  {
    src: "/img/gallery-img/img6.jpg",
    alt: "ČS Aral",
  },
  {
    src: "/img/gallery-img/img7.jpg",
    alt: "Nádrže Považský Cukor",
  },
  {
    src: "/img/gallery-img/img8.jpg",
    alt: "Most Nitra",
  },
  {
    src: "/img/gallery-img/img9.jpg",
    alt: "Bilboardy",
  },
  {
    src: "/img/gallery-img/img10.jpg",
    alt: "Nadrozmerné kontajnery 15m",
  },
  {
    src: "/img/gallery-img/img11.jpg",
    alt: "Poľná kuchyňa",
  },
  {
    src: "/img/gallery-img/img12.jpg",
    alt: "Poľnohospodárska technika",
  },
  {
    src: "/img/gallery-img/img13.jpg",
    alt: "Cyklotrasa Jaslovské Bohunice",
  },
  {
    src: "/img/gallery-img/img14.jpg",
    alt: "Nádrže",
  },
  {
    src: "/img/gallery-img/img15.jpg",
    alt: "Vodojemy",
  },
];

export default function Gallery({ images }: GalleryImagesProps) {
  const [galleryImage, setGalleryImage] = useState(images[0].src);
  const [title, setTitle] = useState("");
  const [showImage, setShowImage] = useState("hidden");
  const [index, setIndex] = useState(0.3);
  const [imageOpacity, setImageOpacity] = useState(1);

  // Touch/swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  function nextImage() {
    setImageOpacity(0.3);

    setTimeout(() => {
      if (index + 1 === images.length) {
        setIndex(0);
        setGalleryImage(images[0].src);
        setTitle(images[0].alt);
      } else {
        setIndex(index + 1);
        setGalleryImage(images[index + 1].src);
        setTitle(images[index + 1].alt);
      }

      setTimeout(() => {
        setImageOpacity(1);
      }, 50);
    }, 300);
  }
  function prevImage() {
    setImageOpacity(0.3);

    setTimeout(() => {
      if (index === 0) {
        setIndex(images.length - 1);
        setGalleryImage(images[images.length - 1].src);
        setTitle(images[images.length - 1].alt);
      } else {
        setIndex(index - 1);
        setGalleryImage(images[index - 1].src);
        setTitle(images[index - 1].alt);
      }

      setTimeout(() => {
        setImageOpacity(1);
      }, 50);
    }, 300);
  }

  // Swipe detection constants
  const minSwipeDistance = 50;

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
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
      nextImage(); // Swipe left = next image
    } else if (isRightSwipe) {
      prevImage(); // Swipe right = previous image
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only work when gallery is open (not hidden)
      if (showImage !== "hidden") {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        } else if (event.key === "Escape") {
          setShowImage("hidden");
        }
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showImage, index]); // Dependencies: re-run when showImage or index changes

  return (
    <div className={styles["grid-container"]}>
      {images.map((image, index) => (
        <div>
          <div
            key={index}
            className={styles["img-container"]}
            onClick={() => {
              setShowImage("");
              setGalleryImage(image.src);
              setTitle(image.alt);
              setIndex(index);
            }}
          >
            <Image src={image.src} alt={image.alt} width={500} height={500} />
          </div>
          <p className={styles["img-title"]}>{image.alt}</p>
        </div>
      ))}

      <div
        className={`fixed h-screen w-full left-0 top-0 py-40 md:py-28 lg:py-10 px-5  bg-white flex max-[980px]:flex-col items-center z-10 ${styles.galleryPadding} ${showImage}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles["left-arrow"]} onClick={prevImage}>
          <FiChevronLeft className="w-10 h-10"></FiChevronLeft>
        </div>
        <Image
          src={galleryImage}
          width={1000}
          height={800}
          alt="1st Image"
          className={styles["gallery-img"]}
          style={{ opacity: imageOpacity }}
        ></Image>

        <div className={styles["left-arrow"]} onClick={nextImage}>
          <FiChevronRight className="w-10 h-10"></FiChevronRight>
        </div>
        <div
          className={`${styles["close-btn"]} ${showImage}`}
          onClick={() => {
            setShowImage("hidden");
          }}
        >
          <AiOutlineClose className="w-10 h-10"></AiOutlineClose>
        </div>
        <h5
          className={`text-4xl self-start my-10 max-[980px]:self-center ${styles.headline}`}
        >
          {title}
        </h5>
      </div>
    </div>
  );
}
