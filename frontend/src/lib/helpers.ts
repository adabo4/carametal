export interface NavItem {
  href: string;
  label: string;
}

export const navbarLinks: NavItem[] = [
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
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
