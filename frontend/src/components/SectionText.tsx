import React from "react";
import { SectionTextProps } from "@/lib/helpers";
import Image from "next/image";

export default function SectionText({
  title,
  paragraphs,
  listItems,
  className,
  img,
}: SectionTextProps) {
  return (
    <div className={className}>
      <h4 className="section-title">{title}</h4>
      {img && (
        <div className="section-image">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width || 500}
            height={img.height || 300}
          />
        </div>
      )}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="section-text">
          {paragraph}
        </p>
      ))}
      {listItems && (
        <ul className="section-list">
          {listItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
