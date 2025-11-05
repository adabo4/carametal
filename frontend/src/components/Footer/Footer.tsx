import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["logo-container"]}>
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Carametal logo"
          />
          <p className={`${styles["logo-title"]}`}>Carametal spol. s.r.o.</p>
        </div>
        <div className={styles["footer-info"]}>
          <div>
            <h5 className={styles["footer-info-title"]}>Sídlo</h5>
            <div>
              <p>Nábrežie mládeže 61 </p>
              <p>949 01, Nitra</p>
            </div>
            <div>
              <p>
                Mobil:{" "}
                <Link href="tel:+421 905 601 300">+421 905 601 300</Link>{" "}
              </p>
              <p>
                Tel:{" "}
                <Link href="tel:+421 37 77 29065">+421 37 77 29065</Link>{" "}
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:info@carametal.sk">info@carametal.sk</Link>
              </p>
            </div>
          </div>
        </div>

        <div className={styles["footer-info"]}>
          <div>
            <h5 className={styles["footer-info-title"]}>Prevádzka</h5>
            <div>
              <p>Jarocká 949 01, Nitra​</p>
              <p>GPS: N 48.17,221' E 18.01,368'</p>
            </div>
          </div>
        </div>
        <div className={styles["footer-info"]}>
          <div>
            <h5 className={styles["footer-info-title"]}>Fakturačné údaje</h5>
            <div>
              <p>CARAMETAL spol. s.r.o​</p>
              <p>IČO: 36523623</p>
              <p>DIČ: 2020150781</p>
              <p>IČ DPH SK 2020150781</p>
            </div>
          </div>
        </div>
        <div className={styles["footer-info"]}>
          <div>
            <Link className={styles["btn"]} href="/kontakt">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.subfooter}>
        <p>© 2024 vytvorené pre CARAMETAL spol. s.r.o</p>
        <Link className={styles["gdpr-link"]} target="_blank" href="/gdpr">
          Ochrana súkromia
        </Link>
      </div>
    </footer>
  );
}
