"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[var(--secondary)] opacity-60">
          © {new Date().getFullYear()} Gerald Diasanta. Built with Next.js + Tailwind + Framer Motion.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-mono text-[var(--secondary)] hover:text-[var(--accent)] transition-colors opacity-60 hover:opacity-100"
          whileHover={{ y: -2 }}
        >
          ↑ Back to top
        </motion.button>
      </div>
    </footer>
  );
}
