import { StaticImageData } from "next/image";
export interface NavItem {
  href: string;
  label: string;
}

export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
}

export interface SectionTextProps {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  className?: string;
  img?: ImageProps;
  logoImg?: ImageProps;
}
export interface ServiceTextProps {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  className?: string;
  img?: ImageProps;
}

export interface HomeSectionProps {
  title: string;
  subtitle: string;
  paragraph?: string;
  btnText?: string;
  subtitleWidth?: "normal" | "wide";
  subtitleWeight?: "light" | "bold";
  paragraphWidth?: string;
}

export const navbarLinks: NavItem[] = [
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kariera", label: "Kariéra" },
  { href: "/kontaktujte-nas", label: "Kontaktuje nás" },
];
export const navbarMobileLinks: NavItem[] = [
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontaktujte-nas", label: "Kontakt" },
  { href: "/kariera", label: "Kariéra" },
];
