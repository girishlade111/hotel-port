"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#101010] h-[70px]"
    >
      <div className="mx-auto max-w-[1140px] h-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-2">
          <p className="text-[12px] text-[#999] font-semibold tracking-[0.3px]">
            &copy; 2026 POSH&trade;
          </p>
          <div className="flex items-center gap-3 text-[14px]">
            <a
              href="#!"
              className="text-[#999] hover:text-white transition-colors duration-150"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#!"
              className="text-[#999] hover:text-white transition-colors duration-150"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#!"
              className="text-[#999] hover:text-white transition-colors duration-150"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#!"
              className="text-[#999] hover:text-white transition-colors duration-150"
              aria-label="Behance"
            >
              <i className="fab fa-behance"></i>
            </a>
            <a
              href="#!"
              className="text-[#999] hover:text-white transition-colors duration-150"
              aria-label="Dribbble"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
          <p className="text-[12px] text-[#999] font-semibold tracking-[0.3px]">
            Made with <span className="text-red-400">&hearts;</span> by{" "}
            <a
              href="https://themewagon.com/"
              target="_blank"
              className="text-gold hover:text-gold-dark transition-colors duration-150"
            >
              Posh
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
