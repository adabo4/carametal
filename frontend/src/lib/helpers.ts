export interface NavItem {
  href: string;
  label: string;
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
