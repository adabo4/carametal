import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

const servicesData = [
  {
    img: "/img/svg/nater.svg", // Correct: starts with / (no public)
    alt: "Pieskovanie a nátery kontajnerov",
    title: "Pieskovanie a nátery kontajnerov",
    width: 105,
    height: 105,
  },
  {
    img: "/img/svg/nater2.svg", // Correct: starts with / (no public)
    alt: "Priemyselné a potravinárske nátery",
    title: "Priemyselné a potravinárske nátery",
    width: 80,
    height: 80,
  },
];

export default function ServicesSection() {
  return (
    <div className={styles.container}>
      {servicesData.map(({ img, alt, title, width, height }, index) => (
        <div className={styles.box} key={index}>
          <Image src={img} width={width} alt={alt} height={height}></Image>
          <h5 className={styles.title}>{title}</h5>
        </div>
      ))}
    </div>
  );
}
