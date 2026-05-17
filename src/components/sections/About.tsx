"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Code2, LineChart, Database } from "lucide-react";

const HIGHLIGHTS = [
  { icon: LineChart, label: "Business Analytics" },
  { icon: Database, label: "Data Architect" },
  { icon: Code2, label: "Web Developer" },
  { icon: Sparkles, label: "UI/UX Designer" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          01 — About
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[var(--secondary)] text-lg leading-relaxed mb-6">
              I am an Information Technology graduate majoring in{" "}
              <span className="gradient-text font-semibold">Business Analytics</span> from{" "}
              <span className="text-[var(--text)] font-semibold">Batangas State University</span>{" "}
              (The National Engineering University - JPLPC Malvar Campus). 
            </p>
            <p className="text-[var(--secondary)] text-base leading-relaxed mb-6">
              My core expertise lies in transforming raw data into meaningful business solutions. However, I believe numbers tell a better story when beautifully presented—which is why I spend my spare time diving deep into web development, building intuitive tools that bridge data with user experience.
            </p>
            <p className="text-[var(--secondary)] text-base leading-relaxed">
              Continuously learning and expanding my technical stack, I thrive at the crossroads of data pipeline engineering, predictive analytics, and interactive web technologies.
            </p>
          </motion.div>

          {/* Highlight chips */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass rounded-xl p-5 flex flex-col gap-3 hover:border-[var(--accent)] border border-transparent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #8B5CF622, #06B6D422)" }}
                >
                  <item.icon size={20} className="text-[var(--accent)]" />
                </div>
                <p className="font-semibold text-sm text-[var(--text)]">{item.label}</p>
              </motion.div>
            ))}

            {/* Download CV button */}
            <motion.a
              href="/Diasanta - Resume.pdf"
              download
              className="col-span-2 py-4 rounded-xl font-semibold text-sm text-center text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
              whileHover={{ boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
            >
              Download CV →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}