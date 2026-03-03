import Link from "next/link";

export const metadata = { title: "Terms of Use — Distribution Pilot" };

export default function TermsOfUse() {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm transition-colors mb-8 block" style={{ color: "#6b7a94" }}>
          &larr; Back to Distribution Pilot
        </Link>

        <h1 className="text-3xl font-light mb-2" style={{ color: "#1a1a2e" }}>Terms of Use</h1>
        <p className="text-sm mb-10" style={{ color: "#6b7a94" }}>Last updated: February 2026</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#4a5568" }}>
          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Acceptance of Terms</h2>
            <p>By accessing or using Distribution Pilot, you agree to be bound by these Terms of Use. If you do not agree, do not use the service.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Description of Service</h2>
            <p>Distribution Pilot provides AI employee services, starting with an AI sales rep that executes outbound sales workflows such as calling, email, prospecting, and meeting qualification.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Your Content</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You retain ownership of business materials and inputs you submit to the platform</li>
              <li>You grant Distribution Pilot a limited license to process your content solely for providing the service</li>
              <li>You are responsible for the legality and accuracy of campaign data, contact data, and instructions you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Prohibited Uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Using the service for unlawful, deceptive, or abusive outreach</li>
              <li>Submitting false or misleading information for outbound campaigns</li>
              <li>Attempting to bypass security measures or access other clients&apos; data</li>
              <li>Reselling or redistributing data obtained through the service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Disclaimers</h2>
            <p>Distribution Pilot provides AI-assisted workflow execution. Final business decisions, compliance checks, and approvals remain your responsibility. We do not guarantee specific commercial outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Limitation of Liability</h2>
            <p>Distribution Pilot is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of the service, including but not limited to hiring decisions made based on AI-generated recommendations.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Termination</h2>
            <p>We may suspend or terminate your access at any time for violation of these terms. You may discontinue use at any time. Upon termination, your data will be removed per our Privacy Policy (within 30 days).</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3" style={{ color: "#1a1a2e" }}>Contact</h2>
            <p>For questions about these terms, contact us at contact@distributionpilot.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
