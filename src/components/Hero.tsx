"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./Navbar";
import OrderModal from "./OrderModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 noise-overlay" />

        {/* Large Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-electric/15 blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[5%] right-[5%] w-[700px] h-[700px] rounded-full bg-purple/15 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [-20, 30, -20],
            y: [20, -20, 20],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[30%] right-[25%] w-[500px] h-[500px] rounded-full bg-cyan/15 blur-[100px]"
        />

        {/* Accent lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-electric/20 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center pt-40 pb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="glass-card rounded-full px-7 py-3 flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
              </span>
              <span className="text-base text-text-secondary font-medium">
                All Systems Operational
              </span>
              <span className="w-px h-5 bg-border-glass" />
              <span className="text-base font-semibold text-electric-light flex items-center gap-2">
                <span className="text-lg">🇮🇳</span> India
              </span>
              <span className="text-sm text-text-muted font-medium">
                · Global Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] mb-8 relative z-10"
          >
            <span className="text-text-primary">High-Performance</span>
            <br />
            <span className="gradient-text glow-text inline-block">VPS & Game Hosting</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-6 leading-relaxed font-light relative z-10"
          >
            Lightning-fast NVMe storage, enterprise-grade hardware, and a community
            that actually cares. Experience hosting the way it should be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 120, damping: 20 }}
            className="flex items-center justify-center gap-3 mb-10 relative z-10"
          >
            <div className="glass-card rounded-full px-6 py-3 inline-flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-base text-text-muted">
                White-glove manual deployment via Discord — we set up everything for you
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8 relative z-10"
          >
            <MagneticButton>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 relative z-10"
              >
                <span>Get Started Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </MagneticButton>

          <a href="/pricing" className="btn-secondary inline-flex items-center gap-3 px-10 py-5 text-lg relative z-10">
            <span>View Pricing</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l10-10M7 7h10v10" />
            </svg>
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-text-muted mb-20"
        >
          No credit card required · Setup in minutes · Cancel anytime
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 relative z-10"
        >
          {[
            { value: "99.9%", label: "Uptime SLA", icon: "⚡" },
            { value: "<15ms", label: "Avg Latency", icon: "🌐" },
            { value: "NVMe", label: "SSD Storage", icon: "💾" },
            { value: "24/7", label: "Discord Support", icon: "🛡️" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 + i * 0.15, type: "spring", stiffness: 100 }}
              className="glass-card rounded-3xl p-8 text-center card-hover group"
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-base text-text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
    </>
  );
}
