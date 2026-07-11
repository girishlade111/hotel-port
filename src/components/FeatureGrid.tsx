"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const topCards = [
  {
    title: "100+ Layouts",
    desc: "2088 Premium icons and enormous features",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=85",
  },
  {
    title: "Retina Ready",
    desc: "Pixel perfect and responsive to every screen",
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=85",
  },
  {
    title: "Bootstrap 5X",
    desc: "Made to do more together with Bootstrap",
    img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=85",
  },
];

const bottomCards = [
  {
    title: "Detailed Docs",
    desc: "Well commented and properly indented code",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=85",
    wide: false,
  },
  {
    title: "Featured Accommodation",
    desc: "Experience the Awesomeness with Posh",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=85",
    wide: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeInOut" as const },
  }),
};

export default function FeatureGrid() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
          {topCards.map((card, i) => (
            <FeatureCard key={card.title} {...card} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          {bottomCards.map((card, i) => (
            <div
              key={card.title}
              className={card.wide ? "md:col-span-8" : "md:col-span-4"}
            >
              <FeatureCard {...card} index={i + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  img,
  index,
}: {
  title: string;
  desc: string;
  img: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="group relative overflow-hidden h-[300px]"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="font-heading text-white text-[22px] font-bold">
          {title}
        </h3>
        <p className="text-white/80 text-[13px] mt-1">{desc}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"
      />
    </motion.div>
  );
}
