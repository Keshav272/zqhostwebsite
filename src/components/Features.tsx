"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Blazing Fast NVMe",
    description:
      "Enterprise-grade NVMe SSDs delivering read speeds up to 7,000 MB/s. Your applications and game servers load instantly with zero lag.",
    accent: "from-electric to-cyan",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DDoS Protection",
    description:
      "Multi-layered DDoS mitigation keeps your services online even during massive volumetric attacks. Always protected, always available.",
    accent: "from-purple to-electric",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Full Root Access",
    description:
      "Complete control over your server with SSH root access. Install anything, configure everything your way. No restrictions.",
    accent: "from-cyan to-success",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "99.9% Uptime",
    description:
      "Enterprise reliability backed by redundant infrastructure, proactive monitoring, and automatic failover. Your services never go down.",
    accent: "from-success to-cyan",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Community Driven",
    description:
      "Join our active Discord community with hundreds of members. Get help, share configs, and earn free hosting through our reward program.",
    accent: "from-electric to-purple",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 2v2m0 16v2" />
      </svg>
    ),
    title: "Flexible Billing",
    description:
      "Pay weekly, monthly, or yearly — whatever suits you. Support for UPI, Razorpay, and PayPal. No lock-in, cancel anytime.",
    accent: "from-warning to-electric",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    title: "Dedicated Resources",
    description: "No overselling, ever. Your RAM and CPU allocations are strictly dedicated to your server for maximum consistency.",
    accent: "from-cyan to-electric",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Instant Deployment",
    description: "Our automated systems provision your server the second you complete your setup. Zero waiting time, pure gaming.",
    accent: "from-success to-electric",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20" />
      </svg>
    ),
    title: "Global Network",
    description: "Strategically located nodes in India and beyond to ensure the lowest possible latency for your player base.",
    accent: "from-electric to-cyan",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-glow-center" />

      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-sm font-bold text-electric tracking-[0.2em] uppercase px-5 py-2 rounded-full glass-card"
            >
              Why ZQ Hosting
            </motion.span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight animate-shimmer-text">
            Built for{" "}
            <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-text-secondary text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Every component of our infrastructure is engineered for speed,
            reliability, and security. No compromises.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.12 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="glass-card rounded-3xl p-10 h-full card-hover group relative overflow-hidden">
                {/* Hover glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} bg-opacity-10 flex items-center justify-center mb-7 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                    style={{ background: `linear-gradient(135deg, rgba(79,143,255,0.12), rgba(34,211,238,0.08))` }}
                  >
                    <span className="text-electric group-hover:text-electric-light transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-text-primary tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-[1.05rem]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
