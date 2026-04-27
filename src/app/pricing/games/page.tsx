import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GameServersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-40 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block animate-pulse">
            In Development
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 animate-shimmer-text">
            Game Servers
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12">
            We&apos;re building the ultimate high-performance hosting platform for Rust, Palworld, ARK, CS2, and more. 
            Expect blazing fast NVMe storage and zero lag.
          </p>

          <div className="glass-card inline-flex flex-col items-center justify-center rounded-[2rem] p-10 sm:p-14 border border-electric/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent pointer-events-none" />
             <h2 className="text-3xl font-extrabold mb-4 relative z-10 text-white">Launching Soon</h2>
             <p className="text-text-muted mb-8 relative z-10">
               Join our Discord to get notified when we go live and claim early-bird discounts!
             </p>
             <a
              href="https://dsc.gg/zqhosting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-base relative z-10 w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.122-.093.246-.193.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Get Notified</span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
