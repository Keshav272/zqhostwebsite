import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block">LEGAL</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-text-secondary text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-12 prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-electric hover:prose-a:text-electric-light">
            <h2>1. Information We Collect</h2>
            <p>
              When you use ZQ Hosting, we collect necessary information to provide you with our services. This includes:
            </p>
            <ul>
              <li>Discord ID and username (for authentication and support)</li>
              <li>Email address (for billing and critical communications)</li>
              <li>Server usage metrics (CPU, RAM, Storage) for performance monitoring</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>
              We only use your data to:
            </p>
            <ul>
              <li>Provision and manage your hosting servers</li>
              <li>Provide customer support via Discord</li>
              <li>Process payments and prevent fraud</li>
              <li>Notify you of critical security or maintenance updates</li>
            </ul>

            <h2>3. Data Sharing and Security</h2>
            <p>
              We <strong>never</strong> sell your personal data to third parties. We only share necessary data with trusted payment processors (like Razorpay, PayPal, or UPI providers) to facilitate billing. All connections to our control panel and billing systems are encrypted using industry-standard SSL/TLS.
            </p>

            <h2>4. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. If you wish to delete your account, simply open a ticket in our Discord server and we will permanently remove your data, subject to any legal obligations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
