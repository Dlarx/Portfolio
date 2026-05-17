"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Github, Linkedin, Facebook, CheckCircle2, AlertCircle } from "lucide-react";

const SOCIAL = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/Dlarx" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gerald-diasanta-bb375a319/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dlarxxu.istiguuu" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Get your free access key at https://web3forms.com — enter your Gmail and they'll email it to you
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ac042bb9-4e21-4d55-81d6-9574e6f5472e",
          ...form,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass text-sm text-[var(--text)] placeholder-[var(--secondary)] placeholder-opacity-50 border border-transparent focus:border-[var(--accent)] focus:outline-none transition-colors duration-200 bg-transparent";

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05 — Contact
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.p
          className="text-[var(--secondary)] mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Whether it&apos;s a project idea, a collaboration, or just a hello — my inbox is open.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              required
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
              whileHover={status !== "loading" ? { scale: 1.02, boxShadow: "0 0 25px rgba(139,92,246,0.5)" } : {}}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </span>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 px-4 py-3 rounded-xl"
              >
                <CheckCircle2 size={16} />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl"
              >
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>

          {/* Social & info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                I&apos;m currently open to{" "}
                <span className="gradient-text font-semibold">freelance projects</span> and{" "}
                <span className="gradient-text font-semibold">full-time opportunities</span>. If
                you want to build something great together, let&apos;s connect.
              </p>

              <div className="flex flex-col gap-3">
                {SOCIAL.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:glass transition-all duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--accent)] group-hover:text-white group-hover:bg-[var(--accent)] transition-all">
                      <s.icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {s.label}
                    </span>
                    <span className="ml-auto text-xs text-[var(--secondary)] opacity-50">↗</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-[var(--secondary)] mb-2">Email me directly</p>
              <a
                href="mailto:geraldmolino026@gmail.com"
                className="font-display font-bold text-lg gradient-text hover:opacity-80 transition-opacity"
              >
                geraldmolino026@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}