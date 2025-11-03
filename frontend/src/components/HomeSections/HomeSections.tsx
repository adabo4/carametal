import React from "react";
import { HomeSectionProps } from "@/lib/helpers";
import styles from "./Sections.module.css";
import Link from "next/link";

export default function HomeSections({
  title,
  subtitle,
  btnText,
  paragraph,
  subtitleWidth = "normal",
  subtitleWeight = "light",
  paragraphWidth,
  pathway,
}: HomeSectionProps): React.JSX.Element {
  const widthClass = subtitleWidth !== "normal" ? styles[subtitleWidth] : "";
  const weightClass = subtitleWeight !== "light" ? styles[subtitleWeight] : "";
  return (
    <>
      <div
        className={styles.titles}
        style={
          paragraphWidth
            ? ({ "--paragraph-width": paragraphWidth } as React.CSSProperties)
            : {}
        }
      >
        <h2>{title}</h2>
        <h3 className={`${styles.subtitle} ${widthClass} ${weightClass}`}>
          {subtitle}
        </h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
      {btnText && pathway && (
        <Link href={pathway || "#"} className={styles.btn}>
          {btnText}
        </Link>
      )}
    </>
  );
}
