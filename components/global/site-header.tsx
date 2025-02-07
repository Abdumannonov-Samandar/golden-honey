"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation'

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="w-full bg-[#0D0D0D] border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-primary text-xl font-normal">
            Golden Hive Honey
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

              <ul className="flex space-x-8 px-16 xl:px-20 py-4 relative z-10">
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
                          <motion.span className="w-1 h-1 bg-primary rounded-full" layoutId="dot" />
                          <motion.div
                            className="w-8 h-[1px] bg-gradient-to-r from-primary to-primary/40 rounded-lg"
                            layoutId="underline"
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
            <Link href="/signin" className="auth-button border-primary text-primary">
              Sign In
            </Link>
            <Link href="/signup" className="auth-button bg-primary text-black">
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
                      item.name === "Home" ? "border-b border-primary" : ""
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
