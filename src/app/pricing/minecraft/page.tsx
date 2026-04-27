"use client";

import { motion, useInView, animate, motionValue } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Navbar, { MagneticButton } from "@/components/Navbar";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";

type Currency = "INR" | "USD" | "EUR" | "GBP" | "AUD" | "SGD" | "CAD";
type BillingCycle = "weekly" | "biweekly" | "monthly" | "3month" | "6month" | "yearly";

const currencyConfig: Record<Currency, { flag: string; symbol: string; label: string; rate: number }> = {
  INR: { flag: "🇮🇳", symbol: "₹", label: "INR", rate: 1 },
  USD: { flag: "🇺🇸", symbol: "$", label: "USD", rate: 1 / 83 * 1.2 },
  EUR: { flag: "🇪🇺", symbol: "€", label: "EUR", rate: 1 / 90 * 1.2 },
  GBP: { flag: "🇬🇧", symbol: "£", label: "GBP", rate: 1 / 105 * 1.2 },
  AUD: { flag: "🇦🇺", symbol: "A$", label: "AUD", rate: 1 / 55 * 1.2 },
  SGD: { flag: "🇸🇬", symbol: "S$", label: "SGD", rate: 1 / 62 * 1.2 },
  CAD: { flag: "🇨🇦", symbol: "C$", label: "CAD", rate: 1 / 60 * 1.2 },
};

const billingLabels: Record<BillingCycle, string> = {
  weekly: "Weekly",
  biweekly: "Bi-Weekly",
  monthly: "Monthly",
  "3month": "3 Month",
  "6month": "6 Month",
  yearly: "Yearly",
};

const billingMultipliers: Record<BillingCycle, number> = {
  weekly: 0.3,
  biweekly: 0.55,
  monthly: 1,
  "3month": 2.7,
  "6month": 5,
  yearly: 9,
};

const mcPlans: Plan[] = [
  {
    name: "Free Tier",
    tagline: "Start playing instantly",
    specs: [
      "2 GB RAM",
      "10 Recommended Players",
      "Basic Plugins",
      "Shared CPU",
      "Community Support",
    ],
    basePrice: 0,
    popular: false,
    badge: "FREE FOREVER",
    note: "Upgrade with invites — 1 GB RAM per 2 invites, +100% CPU at 10 invites",
  },
  {
    name: "Essentials",
    tagline: "For growing communities",
    specs: ["4 GB RAM", "25 Recommended Players", "Unlimited Plugins", "Dedicated vCPU", "Priority Support"],
    basePrice: 149,
    popular: false,
  },
  {
    name: "Pro Server",
    tagline: "Run massive modded worlds",
    specs: ["8 GB RAM", "50+ Recommended Players", "Unlimited Mods", "Dedicated CPU Cores", "Auto Backups", "Custom Subdomain"],
    basePrice: 349,
    popular: true,
  },
  {
    name: "Advanced Server",
    tagline: "High-performance network",
    specs: ["12 GB RAM", "Up to 75 Recommended Players", "Heavy Modpacks", "8 Dedicated Cores", "DDoS Protection", "Custom Subdomain"],
    basePrice: 699,
    popular: false,
  },
  {
    name: "Elite Server",
    tagline: "For huge communities",
    specs: ["16 GB RAM", "Up to 100 Recommended Players", "Massive Modpacks", "12 Dedicated Cores", "DDoS Protection", "Custom Subdomain"],
    basePrice: 1199,
    popular: false,
  },
  {
    name: "Extreme Server",
    tagline: "Unmatched pure power",
    specs: ["32 GB RAM", "Unlimited Players", "Extreme Modpacks", "16 Dedicated Cores", "Priority Node", "Custom Subdomain"],
    basePrice: 1599,
    popular: false,
  },
];

interface Plan {
  name: string;
  tagline: string;
  specs: string[];
  basePrice: number;
  popular: boolean;
  badge?: string;
  note?: string;
}

function formatPrice(baseINR: number, currency: Currency, cycle: BillingCycle): string {
  if (baseINR === 0) return "Free";
  const cfg = currencyConfig[currency];
  const converted = baseINR * cfg.rate * billingMultipliers[cycle];
  const rounded = Math.round(converted * 100) / 100;

  if (currency === "INR") {
    return `${cfg.symbol}${Math.round(rounded).toLocaleString("en-IN")}`;
  }
  return `${cfg.symbol}${rounded.toFixed(2)}`;
}

function getCycleLabel(cycle: BillingCycle): string {
  const labels: Record<BillingCycle, string> = {
    weekly: "/week",
    biweekly: "/2 wks",
    monthly: "/mo",
    "3month": "/3 mo",
    "6month": "/6 mo",
    yearly: "/yr",
  };
  return labels[cycle];
}

export default function MinecraftPricing() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative pt-32 pb-40 overflow-hidden min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 radial-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-32 bg-electric/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full border border-electric/20 bg-electric/5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric" />
              </span>
              <span className="text-sm font-bold text-electric tracking-[0.2em] uppercase">
                Minecraft Hosting
              </span>
            </motion.div>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight relative z-10">
              Build Your <span className="gradient-text glow-text">World</span>.
            </h2>
            <p className="text-text-secondary text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed font-light relative z-10">
              Optimized game servers with one-click mod installation and instant setup. Join thousands of creators.
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-5 mb-20"
          >
            {/* Currency Toggle */}
            <div>
              <p className="text-xs text-text-muted text-center mb-2 font-medium uppercase tracking-widest">Currency</p>
              <div className="glass-card rounded-2xl p-1.5 inline-flex items-center flex-wrap justify-center gap-0.5">
                {(Object.keys(currencyConfig) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      currency === c
                        ? "text-white"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {currency === c && (
                      <motion.div
                        layoutId="currency-bg"
                        className="absolute inset-0 bg-gradient-to-r from-electric to-electric-dark rounded-xl shadow-lg shadow-electric/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>{currencyConfig[c].flag}</span>
                      <span>{currencyConfig[c].label}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Billing Cycle */}
            <div>
              <p className="text-xs text-text-muted text-center mb-2 font-medium uppercase tracking-widest">Billing Cycle</p>
              <div className="glass-card rounded-2xl p-1.5 inline-flex items-center flex-wrap justify-center gap-0.5">
                {(Object.keys(billingLabels) as BillingCycle[]).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBilling(b)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      billing === b
                        ? "text-white"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {billing === b && (
                      <motion.div
                        layoutId="billing-bg"
                        className="absolute inset-0 bg-gradient-to-r from-electric to-electric-dark rounded-xl shadow-lg shadow-electric/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{billingLabels[b]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              {billing === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-semibold text-success bg-success/10 px-4 py-1.5 rounded-full border border-success/20"
                >
                  🎉 Save up to 25% with yearly billing!
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Minecraft Plans */}
          <div>
            <PricingCategory
              plans={mcPlans}
              currency={currency}
              billing={billing}
              isInView={isInView}
              delay={0.3}
              onOrder={handleOrder}
            />
            {/* Custom plan banner for MC */}
            <div className="mt-12 text-center">
              <a 
                href="#" 
                onClick={handleOrder}
                className="inline-flex items-center gap-3 text-electric hover:text-electric-light transition-colors font-medium border border-electric/20 rounded-xl px-6 py-3 bg-electric/5 hover:bg-electric/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Need more power? Contact us on Discord for a custom plan!
              </a>
            </div>
          </div>

          <div className="section-divider my-24" />

          {/* Power-Ups Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-10"
          >
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block">CUSTOMISE</span>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 animate-shimmer-text">Power-Ups & Add-ons</h3>
              <p className="text-text-secondary text-lg">Bolt-on exactly what you need. All add-ons are billed monthly alongside your plan.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { name: "Extra RAM", desc: "Boost performance for modpacks & large player counts", price: 49, unit: "per GB / mo", icon: "💾" },
                { name: "Extra Port", desc: "Run multiple services — proxy, dynmap, SFTP, etc.", price: 29, unit: "per port / mo", icon: "🔌" },
                { name: "Extra Storage", desc: "More NVMe SSD space for large worlds & mods", price: 29, unit: "per GB / mo", icon: "💽" },
                { name: "Additional Backups", desc: "Extra managed snapshots beyond your plan's included count", price: 19, unit: "per backup slot / mo", icon: "☁️" },
              ].map((pu, i) => (
                <motion.div
                  key={pu.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass-card rounded-2xl p-6 flex items-center justify-between gap-4 card-hover border border-border-dim hover:border-electric/30"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {pu.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary leading-tight mb-1">{pu.name}</h4>
                      <p className="text-sm text-text-muted leading-snug">{pu.desc}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-2xl font-bold text-text-primary flex items-baseline justify-end">
                      <span className="text-electric">{currencyConfig[currency].symbol}</span>
                      {Math.round(pu.price * currencyConfig[currency].rate)}
                    </div>
                    <div className="text-[11px] text-text-muted font-medium">{pu.unit}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="section-divider my-24" />

          {/* Minecraft Features Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block">WHY US?</span>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 animate-shimmer-text">The ZQ Advantage</h3>
              <p className="text-text-secondary text-lg">Every Minecraft plan comes with premium features built-in.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "DDoS Protection", desc: "480Gbps Path.net mitigation keeps your server online 24/7.", icon: "🛡️" },
                { title: "NVMe SSDs", desc: "Lightning-fast storage for zero chunk-loading lag.", icon: "⚡" },
                { title: "1-Click Modpacks", desc: "Install CurseForge, FTB, and more instantly from the panel.", icon: "📦" },
                { title: "Automated Backups", desc: "Off-site daily backups so your world is never lost.", icon: "🔄" },
                { title: "Full FTP Access", desc: "Complete control over your server files and plugins.", icon: "📂" },
                { title: "Custom Subdomain", desc: "Free yourname.zqhost.io address for easy joining.", icon: "🌐" },
              ].map((feature, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 border border-border-dim hover:border-electric/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function PricingCategory({
  plans,
  currency,
  billing,
  isInView,
  delay,
  onOrder,
}: {
  plans: Plan[];
  currency: Currency;
  billing: BillingCycle;
  isInView: boolean;
  delay: number;
  onOrder: (e: React.MouseEvent) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleMouseEnter = () => { isHovered.current = true; };
    const handleMouseLeave = () => { isHovered.current = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter, { passive: true });
    container.addEventListener("touchend", handleMouseLeave);

    const scrollValue = motionValue(0);
    
    const unsubscribe = scrollValue.on("change", (latest) => {
      if (container && !isHovered.current) {
        container.scrollLeft = latest;
      }
    });

    const isMounted = { current: true };

    const startAnimation = async () => {
      if (!container || !isMounted.current) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      // Forward Phase: Smooth glide
      await animate(scrollValue, maxScroll, {
        duration: 35,
        ease: "linear",
      });

      if (!isMounted.current) return;

      // Return Phase: Quick flash-back
      setIsFlashing(true);
      await animate(scrollValue, 0, {
        duration: 1.2,
        ease: [0.45, 0, 0.55, 1],
      });
      
      if (!isMounted.current) return;
      setTimeout(() => {
        if (isMounted.current) setIsFlashing(false);
      }, 500);
      
      // Loop
      if (container && isMounted.current) startAnimation();
    };

    const timeoutId = setTimeout(startAnimation, 1500);

    return () => {
      isMounted.current = false;
      clearTimeout(timeoutId);
      unsubscribe();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative group/carousel px-4 sm:px-12">
      {/* Cinematic Flash Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlashing ? 0.15 : 0 }}
        className="absolute inset-0 bg-white z-30 pointer-events-none rounded-[3rem] blur-3xl mx-12"
      />

      {/* Scroll Hint for Desktop/Mobile */}
      <div className="flex items-center justify-center gap-2 mb-6 text-electric/70 text-sm font-medium animate-pulse relative z-10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span>Swipe or scroll to view all {plans.length} plans</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>

      <div 
        ref={scrollRef}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          scrollBehavior: 'auto',
        }}
        className="flex overflow-x-auto gap-8 xl:gap-12 pb-12 pt-16 px-12 md:px-24 -mx-4 md:-mx-12 custom-scrollbar scrollbar-hide"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + 0.15 * i,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] snap-center flex"
          >
            <motion.div
              initial={false}
              whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
              viewport={{ amount: 0.6, margin: "-15% 0% -15% 0%" }}
              className={`relative glass-card rounded-[2rem] p-8 xl:p-10 w-full transition-all duration-700 ease-out flex flex-col blur-[2px] opacity-60 scale-[0.96] ${
                plan.popular
                  ? "border-electric/40 shadow-2xl shadow-electric/10 ring-2 ring-electric/20 scale-[1.02] md:scale-105 z-10"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-electric to-cyan text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-electric/30 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap ${
                    plan.badge === "FREE FOREVER"
                      ? "bg-gradient-to-r from-success to-emerald-400 shadow-success/30"
                      : "bg-gradient-to-r from-warning to-amber-400 shadow-warning/30"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Name + Tagline */}
              <div className="mb-6 pt-2">
                <h4 className="text-2xl font-bold tracking-tight">{plan.name}</h4>
                <p className="text-sm text-text-muted mt-1.5">{plan.tagline}</p>
              </div>

              {/* Price Block */}
              <div className="mb-6 pb-6 border-b border-border-dim min-h-[100px] flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <motion.span
                    key={`${plan.basePrice}-${currency}-${billing}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-extrabold gradient-text tracking-tight leading-none"
                  >
                    {formatPrice(plan.basePrice, currency, plan.basePrice === 0 ? "monthly" : billing)}
                  </motion.span>
                  {plan.basePrice > 0 && (
                    <span className="text-text-muted text-base font-medium">
                      {getCycleLabel(billing)}
                    </span>
                  )}
                </div>
                {plan.note && (
                  <p className="text-xs text-text-muted mt-3 leading-relaxed">{plan.note}</p>
                )}
              </div>

              {/* Specs */}
              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3.5 text-[0.95rem] text-text-secondary">
                    <div className="w-5 h-5 rounded-md bg-electric/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-electric">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-medium leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <MagneticButton>
                <button
                  onClick={onOrder}
                  className={`w-full text-center block relative z-10 !text-base !py-4 !rounded-xl font-bold ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.badge === "CONTACT US"
                    ? "Contact Us"
                    : plan.basePrice === 0
                    ? "Get Free Server"
                    : "Order Now"}
                </button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
