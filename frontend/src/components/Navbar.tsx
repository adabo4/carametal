import React, { useState, useRef } from "react";
import { Route } from "next";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { navbarLinks, navbarMobileLinks } from "@/lib/helpers";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { avenirLight, ganache, montserratAlt1SemiBold } from "@/lib/fonts";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={`${styles.navbar} `}>
        <div className={`${styles["nav-items-left"]}`}>
          <p>CARAMETAL spol. s.r.o.</p>
          <div className={styles.logo}></div>
        </div>
        <button className={styles["btn"]}>Kontaktujte nás</button>
        <ul
          className={`${styles["nav-items-right"]} ${show ? styles.show : ""}`}
        >
          {show
            ? navbarMobileLinks.map(({ href, label }) => (
                <li key={href} className={styles.navFont}>
                  <Link href={href as Route}>{label}</Link>
                </li>
              ))
            : navbarLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href as Route}>{label}</Link>
                </li>
              ))}
        </ul>
        <TfiClose
          className={`${styles["nav-btn-close"]} ${show ? "" : styles.visible}`}
          onClick={() => setShow(false)}
        />
        <CiMenuBurger
          onClick={() => setShow(true)}
          className={`${styles["nav-btn"]} ${show ? styles.visible : ""}`}
        />
      </nav>
    </>
  );
}
