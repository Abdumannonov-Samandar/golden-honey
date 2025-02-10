"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
    { name: "Gallery", href: "#gallery" },
  ];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-primary/20 sticky top-0 overflow-hidden z-50 backdrop-blur-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" alt="Honey" width={228} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 200 60" className="absolute w-full h-full" preserveAspectRatio="none">
                  <polygon
                    points="10,30 20,5 180,5 190,30 180,55 20,55"
                    className="stroke-primary stroke-1 fill-none"
                  />
                </svg>
              </div>

              <ul className="flex space-x-4 xl:space-x-8 px-16 xl:px-20 py-4 relative z-10">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className="relative">
                      <Link
                        href={item.href}
                        className={`text-primary text-lg font-medium transition-colors hover:text-primary/80
                        `}
                      >
                        {item.name}
                      </Link>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-[-2px] flex items-center gap-0.5"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="w-1 h-1 bg-primary rounded-full"
                            layoutId="dot"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="w-12 h-[1px] bg-gradient-to-r from-primary to-primary/40 rounded-lg"
                            layoutId="underline"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "3rem" }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          />
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/signin" className="auth-button border-primary hover:bg-primary/40 text-primary">
              Sign In
            </Link>
            <Link href="/signup" className="auth-button bg-primary/70 text-slate-10">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4"
          >
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block text-primary hover:text-primary/80 transition-colors ${
                      pathname === item.href ? "border-b border-primary" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 flex flex-col space-y-4">
                <Link
                  href="/signin"
                  className="mobile-auth-button border-primary text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="mobile-auth-button bg-primary text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}
