"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/28" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-[1140px] h-full flex items-center px-4"
      >
        <div className="max-w-[520px]">
          <motion.p
            variants={fadeUp}
            className="font-heading italic text-white text-[32px] leading-none"
          >
            A Modern Day Palace
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-white text-[72px] font-bold leading-[1.0] mt-3 max-sm:text-[42px]"
          >
            THE POSH DUBAI
          </motion.h1>
          <motion.hr
            variants={fadeUp}
            className="w-[60px] border-t-[2px] border-white/70 my-6"
          />
          <motion.p
            variants={fadeUp}
            className="text-white/90 text-[15px] leading-[1.8] max-w-[480px]"
          >
            With meticulously restored and discreetly modernised features, Posh
            is the ultimate in sophistication. Highly customizable with a visual
            style that is simple but glamorous.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-6 mt-6">
            <CTA href="#!" label="Explore Posh Dubai" icon="chevron-right" />
            <CTA href="#!" label="Watch the Film" icon="play" iconSize="text-[10px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CTA({
  href,
  label,
  icon,
  iconSize = "",
}: {
  href: string;
  label: string;
  icon: string;
  iconSize?: string;
}) {
  return (
    <motion.a
      href={href}
      className="group relative flex items-center gap-2 text-white/90 hover:text-white text-[13px] font-light uppercase tracking-[2px] no-underline transition-colors duration-150"
      whileHover="hover"
    >
      <span>{label}</span>
      <motion.span
        className={`inline-block ${iconSize || "text-xs"}`}
        variants={{
          hover: { x: [0, 4, 0], transition: { repeat: Infinity, duration: 1.5 } },
        }}
      >
        <i className={`fas fa-${icon}`}></i>
      </motion.span>
    </motion.a>
  );
}
