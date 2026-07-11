"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Components", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.15 }}
      className="sticky top-0 z-50 w-full bg-dark-nav"
      style={{ height: scrolled ? 64 : 72 }}
    >
      <div className="mx-auto max-w-[1140px] h-full flex items-center justify-between px-4">
        <motion.a
          href="/"
          className="relative shrink-0"
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://prium.github.io/Posh/v2.1.0/assets/images/hotel-logo.png"
            alt="Posh Hotel"
            width={137}
            height={36}
            className="object-contain"
            priority
          />
        </motion.a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link, i) => (
            <li key={link.label}>
              <NavLink label={link.label} index={i} />
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-6 h-5 flex flex-col justify-center items-center gap-1.5"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-dark-nav/98 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl uppercase tracking-[3px] font-medium hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-gold text-white text-sm font-semibold uppercase tracking-wider px-8 h-11 flex items-center"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ label, index }: { label: string; index: number }) {
  return (
    <motion.a
      href="#"
      className="relative group text-white/85 hover:text-gold text-[13px] font-semibold uppercase tracking-[1px] py-2 transition-colors duration-150"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
    >
      {label}
      <span className="fas fa-chevron-down ml-1.5 text-[8px] opacity-60"></span>
      <span className="absolute -bottom-px left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-[400ms] ease-in-out" />
    </motion.a>
  );
}
