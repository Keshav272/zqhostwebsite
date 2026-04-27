"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rewards = [
  {
    icon: "🎮",
    title: "Free Tier Upgrades",
    description: "Your Free Minecraft server grows with your invites. Bring friends, get more power — no money needed.",
    tiers: [
      { count: "2 Invites", reward: "+1 GB RAM", icon: "💾" },
      { count: "4 Invites", reward: "+2 GB RAM Total", icon: "💾" },
      { count: "10 Invites", reward: "+100% CPU Power", icon: "🔥" },
      { count: "Every 2 Invites", reward: "+1 GB RAM", icon: "📈" },
    ],
    gradient: "from-success to-cyan",
    highlight: true,
  },
  {
    icon: "🎉",
    title: "Invite Rewards",
    description: "Invite friends to our Discord and earn free VPS or Minecraft hosting slots. The more you invite, the bigger the reward.",
    tiers: [
      { count: "5 Invites", reward: "Free Minecraft Slot", icon: "🎮" },
      { count: "15 Invites", reward: "Free VPS Basic", icon: "⚡" },
      { count: "30 Invites", reward: "Free VPS Pro", icon: "🚀" },
    ],
    gradient: "from-electric to-cyan",
  },
  {
    icon: "🚀",
    title: "Server Booster Rewards",
    description: "Boost our Discord server and unlock exclusive perks. Active boosters get priority support and free upgrades.",
    tiers: [
      { count: "1 Boost", reward: "10% Off All Plans", icon: "💎" },
      { count: "2 Boosts", reward: "Free MC Hosting", icon: "🎮" },
      { count: "3+ Boosts", reward: "Free VPS Basic", icon: "⚡" },
    ],
    gradient: "from-purple to-electric",
  },
];

export default function Rewards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rewards" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-60" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-sm font-bold text-purple tracking-[0.2em] uppercase mb-6 px-5 py-2 rounded-full glass-card"
          >
            Community Rewards
          </motion.span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight">
            Earn <span className="gradient-text-alt">Free Hosting</span>
          </h2>
          <p className="text-text-secondary text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Be an active community member and get rewarded. Invite friends or
            boost our server to unlock free hosting and upgrades.
          </p>
        </motion.div>

        {/* First: Free Tier Upgrades - full width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="glass-card rounded-3xl p-10 card-hover group relative overflow-hidden border-success/20">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-success to-cyan opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-5xl">🎮</div>
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight">Free Tier Upgrades</h3>
                      <p className="text-sm text-success font-semibold tracking-wide">Exclusive to Free Minecraft Plan</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Your Free Minecraft server grows with your invites. Every 2 invites = +1 GB RAM. 
                    Hit 10 invites and unlock +100% CPU power. No money needed, ever.
                  </p>
                </div>

                <div className="glass-card bg-bg-primary/40 border-success/30 rounded-2xl p-6 min-w-[280px]">
                  <p className="text-[11px] font-bold text-success uppercase tracking-[0.2em] mb-4">Base Specifications</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">RAM</span>
                      <span className="font-bold text-white">2 GB DDR4</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">CPU</span>
                      <span className="font-bold text-white">100% (1 vCore)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Storage</span>
                      <span className="font-bold text-white">5 GB NVMe</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Slots</span>
                      <span className="font-bold text-white">20 Players</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {rewards[0].tiers.map((tier) => (
                  <div
                    key={tier.count}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-bg-primary/60 border border-border-dim hover:border-success/30 transition-colors duration-300"
                  >
                    <span className="text-2xl">{tier.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{tier.reward}</p>
                      <p className="text-xs text-text-muted">{tier.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Invite + Booster rewards side by side */}
        <div className="grid md:grid-cols-2 gap-10">
          {rewards.slice(1).map((reward, i) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.35 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card rounded-3xl p-10 card-hover group relative overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${reward.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className="text-5xl mb-6">{reward.icon}</div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{reward.title}</h3>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  {reward.description}
                </p>
                <div className="space-y-4">
                  {reward.tiers.map((tier) => (
                    <div
                      key={tier.count}
                      className="flex items-center justify-between p-5 rounded-2xl bg-bg-primary/60 border border-border-dim hover:border-border-glass transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tier.icon}</span>
                        <span className="text-base font-semibold text-text-secondary">{tier.count}</span>
                      </div>
                      <span className="text-base font-bold text-electric-light">{tier.reward}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
