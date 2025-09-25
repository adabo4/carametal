"use-client";
import React, { useState } from "react";
import { NavItem, navbarLinks } from "@/lib/helpers";
import { CiMenuBurger } from "react-icons/ci";

export default function HamburgerNavbar() {
  const [show, setShow] = useState(false);

  function showMobileNavbar() {
    setShow(show => !show);
  }

  return (
    <>
      <CiMenuBurger className="hamburger-icon" onClick={showMobileNavbar} />
    </>
  );
}
