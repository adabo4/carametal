import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles["background-img"]}>
        <Navbar></Navbar>
        <div className={styles["header-text"]}>
          <h1 className={styles["main-title"]}>Povrchové útvary náterov</h1>
          <h2 className={styles["second-title"]}>
            Pieskovanie, otryskávanie, nátery
          </h2>
          <button className={styles.btn}>Projekty</button>
          <button className={styles.btn}>Kontaktujte nás</button>
        </div>
      </header>
      <div className={styles["header-cover"]}>sfd</div>
    </>
  );
}
