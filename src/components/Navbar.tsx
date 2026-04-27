"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Outer wrapper for top padding effect */}
        <div className={`transition-all duration-700 ease-out ${scrolled ? "pt-0" : "pt-4"}`}>
          <div
            className={`max-w-[1440px] mx-auto transition-all duration-700 ease-out ${
              scrolled
                ? "mx-0 max-w-full rounded-none glass shadow-2xl shadow-black/40"
                : "mx-6 lg:mx-auto rounded-2xl glass-subtle"
            }`}
          >
            <nav className="relative px-8 py-5 flex items-center justify-between">
              {/* Left Side: Logo & Status */}
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric to-cyan flex items-center justify-center font-black text-xl text-white shadow-lg shadow-electric/25 group-hover:shadow-electric/50 transition-all duration-500 group-hover:scale-105">
                      ZQ
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric to-cyan opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold text-text-primary tracking-tight leading-none">
                      ZQ Hosting
                    </span>
                    <span className="text-[11px] font-medium text-text-muted tracking-widest uppercase">
                      Premium Servers
                    </span>
                  </div>
                </Link>

                <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-border-dim">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </span>
                  <span className="text-success text-sm font-semibold">Online</span>
                </div>
              </div>

              {/* Desktop Nav - perfectly centered */}
              <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                <NavLink href="/">Home</NavLink>
                <NavDropdown 
                  title="Pricing"
                  items={[
                    { label: "Minecraft Servers", href: "/pricing/minecraft" },
                    { label: "VPS Hosting", href: "/pricing/vps" },
                    { label: "Enterprise Dedicated", href: "/pricing/enterprise" },
                    { label: "Game Servers", href: "/pricing/games" },
                  ]}
                />
                <NavLink href="/#features">Features</NavLink>
                <NavLink href="/#rewards">Rewards</NavLink>
              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="https://panel.zqhost.qzz.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary text-sm font-semibold transition-colors flex items-center gap-2 mr-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" rx="1" />
                    <rect x="14" y="3" width="7" height="5" rx="1" />
                    <rect x="14" y="12" width="7" height="9" rx="1" />
                    <rect x="3" y="16" width="7" height="5" rx="1" />
                  </svg>
                  Client Panel
                </a>
                <MagneticButton>
                  <a
                    href="https://dsc.gg/zqhosting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5 !py-3 !px-6 !text-sm relative z-10"
                  >
                    <DiscordIcon />
                    <span>Discord</span>
                  </a>
                </MagneticButton>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-3 text-text-secondary hover:text-text-primary transition-colors rounded-xl hover:bg-white/5"
                aria-label="Toggle menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </nav>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-8 pb-8 flex flex-col gap-2 border-t border-border-dim pt-6">
                <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
                <div className="py-2">
                  <div className="text-sm font-bold text-text-muted uppercase tracking-widest px-4 mb-2">Pricing</div>
                  <div className="pl-4 border-l-2 border-white/5 flex flex-col gap-1">
                    <MobileLink href="/pricing/minecraft" onClick={() => setMobileOpen(false)}>Minecraft Servers</MobileLink>
                    <MobileLink href="/pricing/vps" onClick={() => setMobileOpen(false)}>VPS Hosting</MobileLink>
                    <MobileLink href="/pricing/enterprise" onClick={() => setMobileOpen(false)}>Enterprise Dedicated</MobileLink>
                    <MobileLink href="/pricing/games" onClick={() => setMobileOpen(false)}>Game Servers</MobileLink>
                  </div>
                </div>
                <MobileLink href="/#features" onClick={() => setMobileOpen(false)}>Features</MobileLink>
                <MobileLink href="/#rewards" onClick={() => setMobileOpen(false)}>Rewards</MobileLink>
                <a
                  href="https://dsc.gg/zqhosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center relative z-10 mt-4 !py-4 !text-lg"
                >
                  Join Discord
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors duration-300 group py-2"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-electric to-cyan group-hover:w-full transition-all duration-400 rounded-full" />
    </Link>
  );
}

function NavDropdown({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative z-[100]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="relative text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors duration-300 group py-2 flex items-center gap-1.5">
        {title}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-electric to-cyan group-hover:w-full transition-all duration-400 rounded-full" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, y: 0, scale: 1, display: "block" } : { opacity: 0, y: 10, scale: 0.95, transitionEnd: { display: "none" } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
      >
        <div className="bg-bg-primary/90 backdrop-blur-xl rounded-2xl p-2.5 w-64 flex flex-col gap-1 border border-border-dim shadow-2xl shadow-black/50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-text-secondary hover:text-white hover:bg-electric/20 rounded-xl px-4 py-3 transition-all text-left group flex items-center justify-between"
            >
              {item.label}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-electric transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.25;
    const y = (e.clientY - top - height / 2) * 0.25;
    setPosition({ x, y });
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.6 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

function DiscordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
