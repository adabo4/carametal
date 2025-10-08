"use client";

import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";

const galleryImages = [
  {
    src: "/img/gallery-img/img1.jpg",
    alt: "Image 1",
  },
  {
    src: "/img/gallery-img/img2.jpg",
    alt: "Image 2",
  },
  {
    src: "/img/gallery-img/img3.jpg",
    alt: "Image 3",
  },
  {
    src: "/img/gallery-img/img4.jpg",
    alt: "Image 4",
  },
  {
    src: "/img/gallery-img/img5.jpg",
    alt: "Image 5",
  },
  {
    src: "/img/gallery-img/img6.jpg",
    alt: "Image 6",
  },
  {
    src: "/img/gallery-img/img7.jpg",
    alt: "Image 7",
  },
];

export default function Gallery() {
  const [galleryImage, setGalleryImage] = useState("/img/gallery-img/img1.jpg");
  const [title, setTitle] = useState("");
  const [showImage, setShowImage] = useState("hidden");
  const [index, setIndex] = useState(0.3);
  const [imageOpacity, setImageOpacity] = useState(1);

  function nextImage() {
    setImageOpacity(0.3);

    setTimeout(() => {
      if (index + 1 === galleryImages.length) {
        setIndex(0);
        setGalleryImage(galleryImages[0].src);
        setTitle(galleryImages[0].alt);
      } else {
        setIndex(index + 1);
        setGalleryImage(galleryImages[index + 1].src);
        setTitle(galleryImages[index + 1].alt);
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
        setIndex(galleryImages.length - 1);
        setGalleryImage(galleryImages[galleryImages.length - 1].src);
        setTitle(galleryImages[galleryImages.length - 1].alt);
      } else {
        setIndex(index - 1);
        setGalleryImage(galleryImages[index - 1].src);
        setTitle(galleryImages[index - 1].alt);
      }

      setTimeout(() => {
        setImageOpacity(1);
      }, 50);
    }, 300);
  }

  return (
    <div className={styles["grid-container"]}>
      {galleryImages.map((image, index) => (
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
          <Image src={image.src} alt={image.alt} width={1000} height={800} />
        </div>
      ))}

      <div
        className={`fixed h-screen w-full left-0 top-0 py-40 md:py-28 lg:py-10 px-5 lg:px-40 bg-white flex items-center z-10 ${showImage}`}
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
        <h5 className="text-4xl self-start">{title}</h5>
      </div>
    </div>
  );
}
