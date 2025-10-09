import React from "react";
import styles from "./Contact.module.css";
import { FiMapPin } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "../home.css";

export default function ContactUs() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["form-container"]}>
        <h1 className={styles.headline}>Kontaktné údaje</h1>
        <div className={styles["form-info"]}>
          <div className={styles["form-icons"]}>
            <FiMapPin></FiMapPin>
          </div>
          <div>
            <p>Jarocká, 949 01, Nitra</p>
            <p>GPS: 48.291330015173145, 18.023459094043865</p>
          </div>
        </div>
        <div className={styles["form-info"]}>
          <div className={styles["form-icons"]}>
            <CiPhone />
          </div>
          <p>+421 905 601 300</p>
        </div>
        <div className={styles["form-info"]}>
          <div className={styles["form-icons"]}>
            <TfiEmail />
          </div>
          <p>info@carametal.sk</p>
        </div>
      </div>
    </div>
  );
}
