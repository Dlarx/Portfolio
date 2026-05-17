"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Zap, Database, BarChart, GitMerge, Smartphone } from "lucide-react";

const COMPETENCIES = [
  {
    icon: Layers,
    title: "System Architecture",
    tagline: "Designing for scale from day one.",
    description: "I design reliable software foundations that allow applications to handle more users and grow smoothly without slowing down.",
    span: "md:col-span-2",
  },
  {
    icon: Zap,
    title: "Frontend Execution",
    tagline: "Pixel-perfect. Blazingly fast.",
    description: "I create visually appealing and highly responsive user interfaces that provide an effortless experience for the end user.",
    span: "",
  },
  {
    icon: Database,
    title: "Data Integration",
    tagline: "Bridging the data-product gap.",
    description: "I securely connect different systems so that information flows seamlessly and is always available exactly when it is needed.",
    span: "",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    tagline: "Turning numbers into insights.",
    description: "I transform complex, raw data into clear and meaningful insights that help drive better business decisions.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Responsive Craft",
    tagline: "Every screen, flawlessly.",
    description: "I ensure that every application looks beautiful and functions perfectly on any device, from large desktop monitors to mobile phones.",
    span: "",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          02 — Competencies
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Skill Architecture
        </motion.h2>

        <motion.p
          className="text-[var(--secondary)] mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Hover each tile to explore how I think and work within each domain.
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMPETENCIES.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  item,
  index,
  inView,
}: {
  item: (typeof COMPETENCIES)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className={`group relative rounded-2xl p-6 cursor-default overflow-hidden ${item.span} glass`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      {/* Gradient background — slides in on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, #8B5CF608, #06B6D408)" }}
      />

      {/* Gradient border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #8B5CF6, #06B6D4) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ background: "linear-gradient(135deg, #8B5CF633, #06B6D433)" }}
        >
          <item.icon size={22} className="text-[var(--accent)]" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-[var(--text)] mb-1 group-hover:gradient-text transition-all">
          {item.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs font-mono text-[var(--secondary)] mb-3">{item.tagline}</p>

        {/* Description — reveals on hover */}
        <p className="text-sm text-[var(--secondary)] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}