"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value:8, suffix: "", label: "Projects Built", description: "From MVPs to production-grade apps" },
  { value: 18, suffix: "", label: "Tech Tools Used", description: "Languages & frameworks" },
  { value: 4,  suffix: "yrs", label: "In Development", description: "Constantly learning & shipping" },
];

function Counter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl gradient-text tabular-nums">
      {count}
      <span className="text-3xl">{suffix}</span>
    </span>
  );
}

export default function KPI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="font-display font-semibold text-[var(--text)] mt-2 mb-1">{stat.label}</p>
              <p className="text-xs text-[var(--secondary)] font-body">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
