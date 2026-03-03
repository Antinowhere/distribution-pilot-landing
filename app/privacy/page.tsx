import Link from "next/link";

export const metadata = { title: "Privacy Policy — Distribution Pilot" };

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm transition-colors mb-8 block" style={{ color: "#6b7a94" }}>
          &larr; Back to Distribution Pilot
        </Link>

        <h1 className="text-3xl font-light mb-2" style={{ color: "#1a1a2e" }}>Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: "#6b7a94" }}>Last updated: February 2026</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#4a5568" }}>
          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>What We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name, work email, and account details required to deliver the service</li>
              <li>Sales workflow inputs you provide, including ICP, messaging, and campaign settings</li>
              <li>Usage data, interaction logs, and performance metrics for product improvement</li>
              <li>Business profile information relevant to deploying your AI sales rep</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>How We Use Your Data</h2>
            <p>Your data is used to operate and improve Distribution Pilot services, including onboarding, outbound execution, reporting, and support. We do not sell your personal data.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services to operate Distribution Pilot:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong style={{ color: "#1a1a2e" }}>Supabase</strong> (supabase.com) — Database and authentication infrastructure. See their{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#2a5cc7" }}>privacy policy</a>.
              </li>
              <li>
                <strong style={{ color: "#1a1a2e" }}>AI Processing</strong> — We use AI systems to execute sales workflows and produce responses on your behalf, under configured controls.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Data Retention</h2>
            <p>Your account and operational data are retained while your service is active. After cancellation, associated data is deleted within <strong style={{ color: "#1a1a2e" }}>30 days</strong> unless longer retention is required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Your Rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You can request access to all data we hold about you</li>
              <li>You can request deletion of your data at any time</li>
              <li>You can request export of applicable account and usage records</li>
              <li>You have the right to withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Security</h2>
            <p>All data is transmitted over HTTPS. We implement industry-standard security practices including encryption at rest and in transit, access controls, and regular security audits.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Contact</h2>
            <p>For privacy-related questions, contact us at privacy@distributionpilot.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
