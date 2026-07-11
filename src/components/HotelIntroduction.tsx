"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HotelIntroduction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white py-[120px]"
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-[52px] font-bold leading-[1.1] text-dark-text max-sm:text-[36px]"
            >
              A TEMPLATE{" "}
              <span className="italic font-heading lowercase">like</span> NO
              OTHER
            </motion.h2>
            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t-[2px] border-dark-text my-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-gold text-[13px] mt-0.5 w-4 shrink-0"></i>
                <div>
                  <p className="text-[15px] leading-relaxed text-muted">
                    <strong className="text-dark-text font-semibold">
                      Posh International Hotel Las Vegas
                    </strong>
                    <br />
                    2000 Fashion Show Drive
                    <br />
                    Las Vegas, Nevada 56846
                  </p>
                  <p className="text-[15px] leading-relaxed text-muted mt-3">
                    <strong className="text-dark-text font-semibold">Phone:</strong>{" "}
                    458.564.4545
                    <br />
                    <strong className="text-dark-text font-semibold">Reserve:</strong>{" "}
                    677.454.5757
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-envelope text-gold text-[13px] mt-1 w-4 shrink-0"></i>
                <a
                  href="mailto:info@posh.com"
                  className="text-[15px] text-dark-text hover:text-gold transition-colors duration-150"
                >
                  info@posh.com
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] leading-[1.8] text-muted mb-8"
            >
              Posh is the Best Template in the market you can find. It&apos;s
              built with Bootstrap 5 and all other state of the earth cutting
              edge frontend technologies. Packed with tremendous amount of well
              designed elements and detailed documentation of each of them,
              Posh is perfect for starters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85"
                alt="Hotel luxury lobby with modern lighting"
                width={660}
                height={420}
                className="w-full h-[420px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-104"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
