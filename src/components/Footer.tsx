"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import LegalModal from "./LegalModal";
import { useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [legalModal, setLegalModal] = useState<"terms" | "privacy" | "refunds" | null>(null);

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider" />
      <div className="absolute inset-0 noise-overlay" />

      {/* ─── CTA Banner ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card rounded-[2rem] p-10 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="absolute inset-0 radial-glow opacity-80" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

            {/* Left side text */}
            <div className="relative z-10 lg:max-w-xl text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Join our Discord, pick a plan, and we&apos;ll deploy your server within minutes. White-glove service, zero hassle.
              </p>
            </div>

            {/* Right side buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="https://dsc.gg/zqhosting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-base relative z-10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.122-.093.246-.193.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Join Discord</span>
              </a>
              <a href="/pricing/minecraft" className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-base">
                View Plans
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Footer Grid ─── */}
      <div className="relative z-10 border-t border-border-dim bg-bg-card/30 backdrop-blur-xl mt-10">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between gap-16"
          >
            {/* Left Side: Brand & Buttons */}
            <div className="lg:max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-cyan flex items-center justify-center font-black text-xl text-white shadow-lg shadow-electric/20">
                  ZQ
                </div>
                <div>
                  <span className="text-xl font-extrabold block leading-none">ZQ Hosting</span>
                  <span className="text-[10px] text-electric tracking-[0.2em] uppercase font-bold mt-1 block">Premium Servers</span>
                </div>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-8">
                High-performance hosting with white-glove deployment. Built by gamers and developers, for gamers and developers.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://panel.zqhost.qzz.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" rx="1" />
                    <rect x="14" y="3" width="7" height="5" rx="1" />
                    <rect x="14" y="12" width="7" height="9" rx="1" />
                    <rect x="3" y="16" width="7" height="5" rx="1" />
                  </svg>
                  Client Panel
                </a>
                <a
                  href="https://dsc.gg/zqhosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/[0.03] border border-border-dim flex items-center justify-center text-text-muted hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] transition-all"
                  title="Join our Discord"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.122-.093.246-.193.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>

              {/* Horizontal Payments */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-dim/50">
                <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] mr-2">
                  Payments Supported:
                </span>
                <PaymentBanner logo={<UPILogo />} name="UPI" />
                <PaymentBanner logo={<RazorpayLogo />} name="Razorpay" />
                <PaymentBanner logo={<PayPalLogo />} name="PayPal" />
                <PaymentBanner logo={<GooglePayLogo />} name="Google Pay" />
              </div>
            </div>

            {/* Right Side: Links Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] mb-6">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:zqhosting@gmail.com" className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      zqhosting@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@zqhost.qzz.io" className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                      support@zqhost.qzz.io
                    </a>
                  </li>
                  <li>
                    <a href="https://dsc.gg/zqhosting" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.122-.093.246-.193.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Discord Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] mb-6">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <li>
                    <button onClick={() => setLegalModal("terms")} className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors">
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setLegalModal("privacy")} className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setLegalModal("refunds")} className="text-[13px] font-medium text-text-secondary hover:text-electric transition-colors">
                      Refund Policy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="relative z-10 border-t border-border-dim bg-bg-primary/50 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-medium text-text-muted">
            © {new Date().getFullYear()} ZQ Hosting. All rights reserved.
          </p>
          <p className="text-[13px] font-medium text-text-muted flex items-center gap-2">
            Deployed with <span className="text-red-500 animate-pulse">❤️</span> from India 🇮🇳
          </p>
        </div>
      </div>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </footer>
  );
}

/* ─── Payment Banner ─── */
function PaymentBanner({ logo, name }: { logo: React.ReactNode; name: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl bg-white/[0.03] border border-border-dim px-4 py-2 hover:bg-white/[0.06] hover:border-electric/30 transition-all duration-300 h-11 min-w-[80px] group cursor-help"
      title={name}
    >
      <div className="flex items-center justify-center flex-shrink-0 scale-[1.3] group-hover:scale-[1.45] transition-transform duration-300">
        {logo}
      </div>
    </div>
  );
}

/* ─── Payment Logos (inline SVG) ─── */
function UPILogo() {
  return (
    <svg width="24" height="16" viewBox="0 0 100 40" fill="none">
      <path d="M22 2L8 38h14L36 2H22z" fill="#097939" />
      <path d="M40 2L26 38h14L54 2H40z" fill="#ED752E" />
      <text x="58" y="29" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#eef2ff">UPI</text>
    </svg>
  );
}

function RazorpayLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <path d="M28.8 4L14 36h6.4l5.2-11.2L33.2 4H28.8z" fill="#3395FF" />
      <path d="M11.2 4L4 20l7.2 16H16L8.8 20 16 4h-4.8z" fill="#072654" />
    </svg>
  );
}

function PayPalLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <path d="M28.5 10c0-4.4-3.6-8-8-8h-8.9c-.8 0-1.5.6-1.6 1.4L6.5 29c-.1.6.4 1.2 1 1.2h5.8l1.5-9.2v.3c.1-.8.8-1.4 1.6-1.4h3.3c6.5 0 11.6-2.6 13.1-10.2.1-.4.1-.8.1-1.1-.2.1-.2.1 0 0C32.4 10.4 30.5 10 28.5 10z" fill="#003087" />
      <path d="M30 14.6c-1.5 7.6-6.6 10.2-13.1 10.2h-3.3c-.8 0-1.5.6-1.6 1.4L10.2 36c-.1.6.3 1 .9 1h6.4c.7 0 1.3-.5 1.4-1.2l.6-3.8c.1-.7.7-1.2 1.4-1.2h.9c5.7 0 10.1-2.3 11.4-9 .5-2.7.3-5-1.2-6.6" fill="#0070E0" />
    </svg>
  );
}

function GooglePayLogo() {
  return (
    <div className="flex items-center gap-1.5 translate-x-1">
      <svg width="14" height="14" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18c-.6 1.2-1.18 2.53-1.18 3.94s.58 2.74 1.18 3.94l3.66-2.84z" fill="#FBBC04" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
      <span className="text-[14px] font-bold text-white/90 tracking-tight">Pay</span>
    </div>
  );
}
