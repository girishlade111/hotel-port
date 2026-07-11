"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section id="map" className="bg-[#f8f8f8] min-h-[420px]">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full lg:w-[30%] flex flex-col items-center justify-center py-16 lg:py-0 px-6 text-center"
        >
          <p className="text-[13px] text-muted font-semibold uppercase tracking-[2px] mb-3">
            #Posh
          </p>
          <h2 className="font-heading text-[42px] font-bold text-dark-text leading-[1.15] max-sm:text-[30px]">
            JOIN the <span className="italic lowercase">POSH</span>
            <br />
            LIFESTYLE
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#!"
              className="text-dark-text hover:text-gold text-lg transition-colors duration-150"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#!"
              className="text-dark-text hover:text-gold text-lg transition-colors duration-150"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#!"
              className="text-dark-text hover:text-gold text-lg transition-colors duration-150"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#!"
              className="text-dark-text hover:text-gold text-lg transition-colors duration-150"
              aria-label="Behance"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <motion.a
            href="#!"
            whileHover={{ scale: 1.02 }}
            className="mt-8 inline-flex bg-gold hover:bg-gold-dark text-white text-[13px] font-semibold uppercase tracking-[1px] px-8 h-11 items-center justify-center transition-colors duration-150"
          >
            View All
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full lg:w-[70%] h-[420px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178734979737!2d55.185278!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Al%20Arab!5e0!3m2!1sen!2sus!4v1680000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Posh Dubai Map"
          />
        </motion.div>
      </div>
    </section>
  );
}
