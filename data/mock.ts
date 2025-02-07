import { Instagram, Linkedin, Youtube } from 'lucide-react'

export const footerSections = [
  {
    title: "About",
    links: [
      { name: "Products", href: "/products" },
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Terms Of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Store", href: "/store" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { name: "Return", href: "/return" },
      { name: "Purches", href: "/purches" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "Email", href: "mailto:info@goldenhive.com" },
      { name: "Phone", href: "tel:+1234567890" },
      { name: "Address", href: "/contact" },
    ],
  },
];

export const socialLinks = [
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];
