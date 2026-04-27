import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block">LEGAL</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Terms of Service</h1>
            <p className="text-text-secondary text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-12 prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-electric hover:prose-a:text-electric-light">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using ZQ Hosting&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2>2. Acceptable Use Policy</h2>
            <p>
              Our services are designed for gaming, hosting, and standard web applications. You agree NOT to use our servers for:
            </p>
            <ul>
              <li>DDoS attacks, port scanning, or malicious network behavior</li>
              <li>Hosting illegal content or copyright-infringing materials</li>
              <li>Cryptocurrency mining (on non-dedicated/bare metal plans)</li>
              <li>Intentional abuse of CPU/RAM limits on shared nodes</li>
            </ul>

            <h2>3. Service Availability</h2>
            <p>
              While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We reserve the right to perform scheduled maintenance, which will be announced in advance via our Discord server.
            </p>

            <h2>4. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your service instantly and without refund if you are found violating our Acceptable Use Policy.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or our Discord community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
