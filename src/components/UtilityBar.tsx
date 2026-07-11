"use client";

import { motion } from "framer-motion";

export default function UtilityBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="hidden lg:block h-10 bg-utility-bg"
    >
      <div className="mx-auto max-w-[1140px] h-full flex items-center justify-between px-4">
        <p className="text-[11px] text-[#bebebe] font-semibold tracking-[0.3px]">
          <span>3752 Las Vegas Boulevard South, Las Vegas, NV 89158 USA</span>
          <span className="mx-2.5 text-[#666]">&nbsp;|&nbsp;</span>
          <a href="tel:+17025908888" className="hover:text-white transition-colors duration-150">
            +1 (702) 590 8888
          </a>
          <span className="mx-2.5 text-[#666]">&nbsp;|&nbsp;</span>
          <a
            href="#map"
            className="hover:text-white transition-colors duration-150 uppercase text-[11px]"
          >
            <i className="fas fa-map-marker-alt mr-1.5 text-[11px]"></i>Maps &amp; Directions
          </a>
        </p>
        <motion.a
          href="#book"
          whileHover={{ scale: 1.03 }}
          className="bg-gold hover:bg-gold-dark text-white text-[11px] font-semibold uppercase tracking-[1px] px-[18px] h-8 flex items-center transition-colors duration-150"
        >
          Book My Stay
        </motion.a>
      </div>
    </motion.div>
  );
}
