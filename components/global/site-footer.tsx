"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Youtube, Instagram, Linkedin } from "lucide-react";

export default function SiteFooter() {
  const footerSections = [
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

  const socialLinks = [
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black text-amber-500">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-amber-500/80 hover:text-amber-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-amber-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Golden Hive Honey</span>
            </Link>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center text-amber-500/60 text-sm">
            <p>Created By Elinaui9</p>
            <p>Copyright © 2023 Golden Hive Honey. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
