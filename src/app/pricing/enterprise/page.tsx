"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar, { MagneticButton } from "@/components/Navbar";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

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

const dedicatedPlans: Plan[] = [
  {
    name: "Starter Bare Metal",
    tagline: "Entry-level dedicated power",
    specs: ["Intel Xeon E-2236", "32 GB DDR4 ECC", "500 GB NVMe SSD", "10 TB Bandwidth", "Full Root Access"],
    basePrice: 7999,
    popular: false,
  },
  {
    name: "Performance",
    tagline: "Maximum raw throughput",
    specs: ["AMD EPYC 7443P", "64 GB DDR4 ECC", "1 TB NVMe RAID-1", "Unmetered Bandwidth", "DDoS Protection", "IPMI Access"],
    basePrice: 16999,
    popular: true,
  },
  {
    name: "On-Demand Custom",
    tagline: "Tailored to your exact needs",
    specs: ["Custom CPU Config", "Up to 512 GB RAM", "Multi-NVMe RAID", "Unmetered Bandwidth", "Managed Support", "Custom Networking"],
    basePrice: 0,
    popular: false,
    badge: "CONTACT US",
    note: "Custom quote based on your requirements",
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

export default function EnterprisePricing() {
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
                Enterprise Dedicated
              </span>
            </motion.div>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight relative z-10">
              Maximum <span className="gradient-text glow-text">Raw Power</span>.
            </h2>
            <p className="text-text-secondary text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed font-light relative z-10">
              On-demand high-performance bare metal hardware. Tailored networking and unmetered throughput.
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
          </motion.div>

          {/* Dedicated Plans */}
          <div>
            <PricingCategory
              plans={dedicatedPlans}
              currency={currency}
              billing={billing}
              isInView={isInView}
              delay={0.3}
              onOrder={handleOrder}
            />
            {/* Custom plan banner for Enterprise */}
            <div className="mt-12 text-center">
              <a 
                href="#" 
                onClick={handleOrder}
                className="inline-flex items-center gap-3 text-electric hover:text-electric-light transition-colors font-medium border border-electric/20 rounded-xl px-6 py-3 bg-electric/5 hover:bg-electric/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Looking for completely custom bare metal hardware? Let us build it for you!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

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
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + 0.15 * i,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex w-full"
          >
            <div
              className={`relative glass-card rounded-[2rem] p-8 xl:p-10 w-full card-hover flex flex-col ${
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
