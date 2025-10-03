import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["logo-container"]}>
        <Image src="/logo.png" width={100} height={100} alt="Carametal logo" />
        <p className={`${styles["logo-title"]}`}>Carametal spol. s.r.o.</p>
      </div>
      <div className={styles["footer-info"]}>
        <h5 className={styles["footer-info-title"]}>Sídlo</h5>
        <p>Nábrežie mládeže 61 </p>
        <p>949 01, Nitra</p>
        <p>Mobil: +421 905 601 300 </p>
        <p>Tel: +421 37 77 29065</p>
        <p>Email: info@carametal.sk</p>
      </div>
    </footer>
  );
}
