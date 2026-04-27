import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-electric tracking-[0.2em] uppercase mb-4 block">LEGAL</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Refund Policy</h1>
            <p className="text-text-secondary text-lg">Strict 24-Hour Money Back Guarantee</p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-12 prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-electric hover:prose-a:text-electric-light">
            <h2>1. Our 24-Hour Guarantee</h2>
            <p>
              We stand behind the quality of our servers. If you are not completely satisfied with your hosting experience, you may request a full refund <strong>within 24 hours of your initial purchase</strong>.
            </p>

            <h2>2. Eligibility for Refund</h2>
            <p>
              To be eligible for a refund under our 24-hour policy, the following conditions must be met:
            </p>
            <ul>
              <li>The request must be made within exactly 24 hours of the service being provisioned.</li>
              <li>You must not have violated our Terms of Service or Acceptable Use Policy during this period.</li>
              <li>This must be your first purchase with ZQ Hosting (abuse of the refund policy by repeatedly buying and refunding will result in a permanent ban).</li>
              <li>Dedicated Bare Metal servers and Custom Plan deployments are strictly non-refundable due to the manual labor and hardware allocation involved.</li>
            </ul>

            <h2>3. How to Request a Refund</h2>
            <p>
              To request a refund, please open a Billing/Support ticket in our Discord server. State your reason for cancellation and provide your service ID. Our team will process the refund to your original payment method.
            </p>
            <p>
              Please note that depending on your payment provider (UPI, PayPal, Razorpay, etc.), it may take 3-7 business days for the funds to appear in your account after we have processed the refund.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
