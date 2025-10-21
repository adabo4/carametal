import { StaticImageData } from "next/image";

export interface GalleryImage {
  src: string;
  alt?: string;
}
export interface GalleryImagesProps {
  images: GalleryImage[];
  className?: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  textMessage: string;
}

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
  title?: string;
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
  { href: "/kontakt", label: "Kontakt" },
  { href: "/kariera", label: "Kariéra" },
  { href: "/kontakt", label: "Kontaktujte nás" },
];
export const navbarMobileLinks: NavItem[] = [
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/kariera", label: "Kariéra" },
];
