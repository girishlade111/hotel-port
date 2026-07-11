"use client";

import { motion } from "framer-motion";

export default function BookingForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-white py-[30px]"
      id="book"
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <form action="#" method="post">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="check-in"
                className="block text-[13px] font-semibold text-dark-text mb-2 uppercase tracking-[0.5px]"
              >
                Check-in Date
              </label>
              <input
                id="check-in"
                type="date"
                defaultValue="2026-07-11"
                className="w-full h-[54px] px-4 border border-border-light text-sm text-dark-text bg-white focus:outline-none focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label
                htmlFor="check-out"
                className="block text-[13px] font-semibold text-dark-text mb-2 uppercase tracking-[0.5px]"
              >
                Check-out Date
              </label>
              <input
                id="check-out"
                type="date"
                defaultValue="2026-07-13"
                className="w-full h-[54px] px-4 border border-border-light text-sm text-dark-text bg-white focus:outline-none focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label
                htmlFor="guest"
                className="block text-[13px] font-semibold text-dark-text mb-2 uppercase tracking-[0.5px]"
              >
                Guests
              </label>
              <input
                id="guest"
                type="number"
                defaultValue={2}
                min={1}
                max={20}
                className="w-full h-[54px] px-4 border border-border-light text-sm text-dark-text bg-white focus:outline-none focus:border-gold transition-colors duration-150"
              />
            </div>
            <div className="flex items-end">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full h-[54px] bg-gold hover:bg-gold-dark text-white text-sm font-semibold uppercase tracking-[1px] transition-colors duration-150 cursor-pointer"
              >
                Check Availability
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
