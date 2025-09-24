import React from "react";
import { Route } from "next";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavItem {
  href: string;
  label: string;
}

const navbarLinks: NavItem[] = [
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
  { href: "/kariera", label: "Kariéra" },
  { href: "/kontaktujte-nas", label: "Kontaktuje nás" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-items-left"]}>
        <p>CARAMETAL</p>
        <div className={styles.logo}></div>
      </div>
      <ul className={styles["nav-items-right"]}>
        {navbarLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href as Route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
