export interface NavItem {
  href: string;
  label: string;
}

export interface SectionTextProps {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  className?: string;
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
