"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Partner 1", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-3.png" },
  { name: "Partner 2", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-5.png" },
  { name: "Partner 3", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-6.png" },
  { name: "Partner 4", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-7.png" },
  { name: "Partner 5", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-3.png" },
  { name: "Partner 6", img: "https://prium.github.io/Posh/v2.1.0/assets/images/partners/partner-5.png" },
];

export default function PartnerLogos() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-[70px]"
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {partners.map((p, i) => (
            <motion.div
              key={`${p.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="opacity-45 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={p.img}
                alt={`${p.name} logo`}
                width={100}
                height={40}
                className="object-contain h-10 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
