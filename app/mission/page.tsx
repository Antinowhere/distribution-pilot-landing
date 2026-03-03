import Link from "next/link";

export const metadata = { title: "Mission — Distribution Pilot" };

export default function MissionPage() {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-sm transition-colors mb-8 inline-block hover:text-[#1a1a2e]"
          style={{ color: "#6b7a94" }}
        >
          &larr; Back to Distribution Pilot
        </Link>

        <section className="mb-14">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-5 font-semibold"
            style={{ color: "#2a4a7f" }}
          >
            Mission
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]"
            style={{ color: "#1a1a2e" }}
          >
            Navigate the new AI landscape. Together.
          </h1>
          <p className="text-lg mt-6 max-w-3xl leading-relaxed" style={{ color: "#4a5568" }}>
            Our mission is to help you navigate the new agentic AI tool space and help you understand,
            compete, and grow faster than you ever have before.
          </p>
        </section>

        <section className="mb-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className="rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "#dbe3f5",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                boxShadow: "0 1px 2px rgba(31, 61, 136, 0.05)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "#2a5cc7" }}>
                Understand
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                Help every business understand what agentic AI actually is, what it can do today,
                and how to separate signal from noise.
              </p>
            </div>
            <div
              className="rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "#dbe3f5",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                boxShadow: "0 1px 2px rgba(31, 61, 136, 0.05)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "#2a5cc7" }}>
                Compete
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                This tech is here and it&apos;s not going anywhere. The businesses that lean in now
                will outpace those that wait. We help you lean in.
              </p>
            </div>
            <div
              className="rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "#dbe3f5",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                boxShadow: "0 1px 2px rgba(31, 61, 136, 0.05)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "#2a5cc7" }}>
                Grow
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                Find the things in your business you hate doing most and give them to the AI —
                so you can get back to the work you actually love.
              </p>
            </div>
            <div
              className="rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "#dbe3f5",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                boxShadow: "0 1px 2px rgba(31, 61, 136, 0.05)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "#2a5cc7" }}>
                People first
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                We hate automation and love design. That&apos;s why we LOVE automation:
                it frees up our time for creation. It&apos;s about helping people, not just deploying tech.
              </p>
            </div>
          </div>
        </section>

        <section
          className="rounded-3xl border p-8 sm:p-10 mb-12"
          style={{ background: "#ffffff", borderColor: "#e5e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-medium mb-6" style={{ color: "#1a1a2e" }}>
            A letter from the founder
          </h2>

          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#4a5568" }}>
            <p>
              The AI landscape is moving faster than any of us expected. New tools, new agents,
              new capabilities — every week. For most businesses, it&apos;s overwhelming. Not because
              the tech is bad, but because there&apos;s too much of it and not enough guidance.
            </p>
            <p>
              That&apos;s what Distribution Pilot exists to fix. We&apos;re not just a platform — we&apos;re a team.
              When you work with us, you get me and my team sitting with yours, understanding your business,
              your pain points, and your goals. We help with the change management, the training, the
              &ldquo;how does this actually fit into my day&rdquo; conversations.
            </p>
            <p>
              Because the truth is: this technology is here and it&apos;s not going away. The businesses that
              understand it will outcompete those that don&apos;t. But understanding it doesn&apos;t mean doing it alone.
              Let&apos;s face the unknown head on — together.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t" style={{ borderColor: "#e5e8f0" }}>
            <p className="text-base leading-relaxed mb-7" style={{ color: "#4a5568" }}>
              Let&apos;s get in touch. Our team will help you navigate.
            </p>

            <img
              src="/L-signature.webp"
              alt="Liam Mason signature"
              className="h-12 w-auto mb-2 object-contain"
            />
            <p className="text-sm font-medium" style={{ color: "#1a1a2e" }}>
              Liam Mason
            </p>
            <p className="text-xs" style={{ color: "#6b7a94" }}>
              Founder, Distribution Pilot
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
