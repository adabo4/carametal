import CareerForm from "@/components/Form/CareerForm";
import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import styles from "./CareerPage.module.css";
import Image from "next/image";

export default function Career() {
  return (
    <div className="main-container">
      <section className="section-header">
        <HomeSections
          title="Kariéra u nás"
          subtitle="Voľné pracovné pozície"
          subtitleWidth="wide"
          paragraphWidth="50%"
          paragraph="Momentálne máme voľné nasledujúce pracovné pozície. Ak máte záujem, zavolajte nám na 0905 601 300, vyplňte doleuvedený formulár, prípadne zašlite Váš životopis na info@carametal.sk a my sa Vám obratom ozveme. "
        ></HomeSections>
      </section>
      <div className={styles.wrapper}>
        <div className={styles["form-container"]}>
          <CareerForm></CareerForm>
        </div>
        <Image
          className={styles.image}
          src={`/img/careerImg.avif`}
          width={600}
          height={600}
          alt="Career Image"
        ></Image>
      </div>
      <div className={styles.positions}>
        <h2>Voľné pracovné pozície</h2>
        <div>
          <p>Vozíčkar</p>
          <p>Lakýrnik</p>
        </div>
      </div>
    </div>
  );
}
