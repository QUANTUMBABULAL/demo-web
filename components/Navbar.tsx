"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { academyData } from "../data/academy";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold text-gradient">
          {academyData.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-slate-700 hover:text-primary transition-colors font-medium">
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-primary/30">
            Enroll Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg text-slate-700 font-medium w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-3 rounded-full font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
