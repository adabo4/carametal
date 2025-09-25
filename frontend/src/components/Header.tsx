import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { montserratAlt1Light, montserratAlt1SemiBold } from "@/lib/fonts";

export default function Header() {
  return (
    <>
      <header className={styles["background-img"]}>
        <Navbar></Navbar>
        <div className={styles["header-text"]}>
          <h1
            className={`${styles["main-title"]} ${montserratAlt1SemiBold.className}`}
          >
            Povrchové úpravy materiálov
          </h1>
          <h2
            className={`${styles["second-title"]} ${montserratAlt1Light.className}`}
          >
            Pieskovanie, otryskovávanie, nátery v Nitre
          </h2>
          <button className={styles.btn}>Projekty</button>
          <button className={styles.btn}>Kontaktujte nás</button>
        </div>
      </header>
      <div className={styles["header-cover"]}>sfd</div>
    </>
  );
}
