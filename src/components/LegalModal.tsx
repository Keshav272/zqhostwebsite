import { motion, AnimatePresence } from "framer-motion";

type LegalType = "terms" | "privacy" | "refunds" | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const content = {
  terms: {
    title: "Terms of Service",
    body: (
      <div className="space-y-6 text-sm text-text-secondary">
        <div>
          <h3 className="text-white font-semibold mb-2">1. Agreement to Terms</h3>
          <p>By accessing or using ZQ Hosting's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">2. Acceptable Use Policy</h3>
          <p className="mb-2">Our services are designed for gaming, hosting, and standard web applications. You agree NOT to use our servers for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DDoS attacks, port scanning, or malicious network behavior</li>
            <li>Hosting illegal content or copyright-infringing materials</li>
            <li>Cryptocurrency mining (on non-dedicated/bare metal plans)</li>
            <li>Intentional abuse of CPU/RAM limits on shared nodes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">3. Service Availability</h3>
          <p>While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We reserve the right to perform scheduled maintenance, which will be announced in advance via our Discord server.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">4. Account Termination</h3>
          <p>We reserve the right to suspend or terminate your service instantly and without refund if you are found violating our Acceptable Use Policy.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">5. Changes to Terms</h3>
          <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or our Discord community.</p>
        </div>
      </div>
    )
  },
  privacy: {
    title: "Privacy Policy",
    body: (
      <div className="space-y-6 text-sm text-text-secondary">
        <div>
          <h3 className="text-white font-semibold mb-2">1. Data Collection</h3>
          <p>We only collect the essential information required to provide our hosting services, including your email address, billing information, and IP address for security purposes.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">2. Data Usage</h3>
          <p>Your data is strictly used for account management, service delivery, and legal compliance. We do not sell or share your personal information with third parties for marketing purposes.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">3. Data Security</h3>
          <p>We employ industry-standard encryption and security measures to protect your personal and payment information against unauthorized access, alteration, or destruction.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">4. Cookies</h3>
          <p>We use essential cookies to maintain session states and remember your preferences. You can configure your browser to reject cookies, though this may limit functionality.</p>
        </div>
      </div>
    )
  },
  refunds: {
    title: "Refund Policy",
    body: (
      <div className="space-y-6 text-sm text-text-secondary">
        <div>
          <h3 className="text-white font-semibold mb-2">1. 24-Hour Guarantee</h3>
          <p>We offer a strict, no-questions-asked 24-hour money-back guarantee for all new Minecraft and VPS hosting subscriptions if you are unsatisfied with the performance.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">2. Dedicated Servers</h3>
          <p>Due to the manual labor and hardware allocation involved, Enterprise Dedicated servers are strictly non-refundable once deployed.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">3. Exceptions</h3>
          <p>Refunds will be explicitly denied if the service was suspended due to a violation of our Terms of Service (e.g., launching DDoS attacks or hosting illegal materials).</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">4. How to Request</h3>
          <p>To request a refund within the 24-hour window, open a billing ticket in our Discord server or email our support team with your transaction ID.</p>
        </div>
      </div>
    )
  }
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar glass-card rounded-2xl border border-border-dim shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-white/5 bg-bg-card/90 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white tracking-tight">{content[type].title}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {content[type].body}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 z-20 px-6 py-5 border-t border-white/5 bg-bg-card/90 backdrop-blur-md flex justify-end">
            <button
              onClick={onClose}
              className="btn-primary px-6 py-2.5 text-sm"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
