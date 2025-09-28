import React from "react";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <h4 className={styles.title}>Prečo práve CARAMETAL spol s.r.o.? </h4>
          <h5 className={styles.subtitle}>S nami získate...</h5>
          <ul className={styles.list}>
            <li>komplexné revitalizácie a riešenia povrchových úprav</li>
            <li>projektová dokumentácia na mieru</li>
            <li>expresné cenové ponuky</li>
            <li>zabezpečenú manipuláciu ťažkou technikou</li>
          </ul>
          <div className={styles["stats-container"]}>
            <div>
              <p>1997</p>
              <p>Rok založenia</p>
            </div>
            <div>
              <p>5700</p>
              <p>Hotových projektov</p>
            </div>
            <div>
              <p>7</p>
              <p>zamestnancov</p>
            </div>
            <div>
              <p>5000m2</p>
              <p>Pracovnej plochy</p>
            </div>
          </div>
          <p className={styles.signature}>J. Karaka</p>
          <p className={styles.name}>Ing. Juraj Karaka</p>
          <p>konateľ</p>
        </div>
      </div>
    </>
  );
}
