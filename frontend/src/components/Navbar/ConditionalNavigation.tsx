"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Navbar from "./Navbar";
import React from "react";

export default function ConditionalNavigation() {
  const pathname = usePathname();
  return pathname === "/" ? <Header /> : <Navbar />;
}
