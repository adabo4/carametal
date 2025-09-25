import React, { useState, useRef } from "react";
import { Route } from "next";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { navbarLinks } from "@/lib/helpers";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["nav-items-left"]}>
          <p>CARAMETAL</p>
          <div className={styles.logo}></div>
        </div>
        <ul
          className={`${styles["nav-items-right"]} ${show ? styles.show : ""}`}
        >
          {navbarLinks.map(({ href, label }) => (
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
