import React from "react";
import styles from "./Contact.module.css";
import { FiMapPin } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "../home.css";
import Form from "@/components/Form/Form";

export const metadata = {
  title: "Kontakt | Carametal",
  alternates: {
    canonical: "https://carametal.sk/kontakt",
  },
  description:
    "Kontaktujte nás telefonicky, alebo na emailovej adrese info@carametal.sk. Jarocká cesta, 949 01, Nitra.",
};

export default function ContactUs() {
  return (
    <div className={styles["main-container"]}>
      <section className={styles["contact-container"]}>
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
        <Form></Form>
      </section>
      <section className={styles["map-container"]}>
        <div className={styles["map-iframe"]}>
          <iframe
            title="CARAMETAL spol. s.r.o. GPS: 48.291330015173145, 18.023459094043865"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.6113348467975!2d18.020885376239836!3d48.291092740461565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee781db8a65%3A0xa135fe2a557a9757!2sCarametal%2C%20spol.%20s%20r.o.!5e0!3m2!1ssk!2ssk!4v1760294861798!5m2!1ssk!2ssk"
          />
        </div>
      </section>
    </div>
  );
}
