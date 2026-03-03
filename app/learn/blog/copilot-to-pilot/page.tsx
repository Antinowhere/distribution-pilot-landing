import Link from "next/link";

export const metadata = {
  title: "From Co-Pilot to Pilot — Distribution Pilot",
  description:
    "The shift from AI assistance to AI autonomy is already here. What Cursor's evolution teaches us about the future of work.",
};

export default function CopilotToPilotPost() {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <article className="max-w-3xl mx-auto">
        <Link
          href="/learn/blog"
          className="text-sm transition-colors mb-8 inline-block hover:text-[#1a1a2e]"
          style={{ color: "#6b7a94" }}
        >
          &larr; Back to blog
        </Link>

        <header className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4 font-semibold"
            style={{ color: "#2a4a7f" }}
          >
            March 2, 2026
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] mb-6"
            style={{ color: "#1a1a2e" }}
          >
            From Co-Pilot to Pilot: The Shift That Changes Everything
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#4a5568" }}>
            There&apos;s a pattern playing out right now in software that&apos;s about to play out everywhere else.
            If you watch it closely, it tells you almost everything you need to know about where business is headed.
          </p>
        </header>

        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src="/58E1028F-6B8B-4FFB-80C0-A6278C18E08F.webp"
            alt="The shift from co-pilot to pilot"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6 text-base leading-[1.8]" style={{ color: "#3a3a4a" }}>
          <h2 className="text-2xl font-medium mt-4" style={{ color: "#1a1a2e" }}>
            Tab, agent, autopilot
          </h2>

          <p>
            A few years ago, Cursor — the code editor — started with tab completions. You&apos;d type, it would
            suggest the next few characters, and you&apos;d hit tab. You were the pilot. It was the co-pilot.
            Helpful, but you were still doing 95% of the thinking.
          </p>

          <p>
            Then came Cursor Agent. You could describe what you wanted in plain language and watch it write
            entire files, refactor code, fix bugs across multiple files. You were still reviewing, still
            steering — but the balance shifted. Maybe 60/40 now. You directed, it executed.
          </p>

          <p>
            Now there&apos;s Background Agents — cloud-based, fully autonomous. You give it a task, close
            your laptop, go to lunch. When you come back, the work is done. A pull request is waiting for
            your review. The AI didn&apos;t just assist. It <em>did the job</em>.
          </p>

          <p>
            Tab → Agent → Autopilot. Co-pilot → Pilot.
          </p>

          <p>
            That same arc is coming for every function in your business.
          </p>

          <div className="rounded-2xl overflow-hidden my-10">
            <img
              src="/24484CC7-2A7D-4FE1-B80A-01F4EB377045.webp"
              alt="AI agents working autonomously"
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-medium mt-4" style={{ color: "#1a1a2e" }}>
            The uncomfortable question
          </h2>

          <p>
            When you hand more control to the machine, it raises real questions. If the AI writes the emails,
            runs the ads, nurtures the leads, and books the meetings — what do <em>you</em> do? What&apos;s
            your role? Where does your identity as a professional fit when the day-to-day execution is handled?
          </p>

          <p>
            These are worth sitting with. They&apos;re not trivial.
          </p>

          <p>
            But here&apos;s the thing: the economic system we operate in doesn&apos;t wait for anyone to get
            comfortable. The teams that figure out how to hand over the grind and redirect their energy into
            higher-leverage work — strategy, relationships, creative direction, the stuff only humans do well —
            those teams will win. Not eventually. Now.
          </p>

          <h2 className="text-2xl font-medium mt-4" style={{ color: "#1a1a2e" }}>
            Your experience isn&apos;t going anywhere
          </h2>

          <p>
            Here&apos;s what AI can&apos;t replicate: the 15 years you spent in your industry. The intuition you
            built from a thousand deals that went wrong. The way you read a room on a sales call. The weird,
            specific worldview you bring to every decision — shaped by your background, your failures, your
            taste.
          </p>

          <p>
            That stuff is not so easily mimicked. An AI can send 10,000 emails. It can&apos;t know why
            <em> your</em> customer needs to hear it <em>that</em> way. You can. And when you pair that
            instinct with agents that handle the volume, the repetition, the 3am follow-up — you become
            something the market hasn&apos;t really seen before. A small team with the output of a big one.
            A founder with the bandwidth of a department.
          </p>

          <h2 className="text-2xl font-medium mt-4" style={{ color: "#1a1a2e" }}>
            Adaptability is the competitive advantage
          </h2>

          <p>
            The shift from co-pilot to pilot isn&apos;t something to fear. It&apos;s something to steer.
            The businesses that treat AI as a teammate — not a threat and not a toy — are the ones that will
            outcompete everyone else in the next 5 years.
          </p>

          <p>
            You don&apos;t have to do it alone. That&apos;s the whole point of what we do at Distribution Pilot.
            We sit with your team, figure out what&apos;s eating your time, and deploy agents to take it off
            your plate. Then we stick around to make sure the change actually sticks.
          </p>

          <p>
            Because the shift is happening whether you&apos;re ready or not. The question is whether you&apos;ll
            be in the pilot seat.
          </p>
        </div>

        <div
          className="rounded-2xl border p-8 mt-14"
          style={{ background: "#ffffff", borderColor: "#e5e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a5568" }}>
            Want to talk about what this looks like for your team?
          </p>
          <a
            href="https://cal.com/liam-mason01/distribution-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:brightness-110"
            style={{ background: "#2a5cc7", color: "#ffffff" }}
          >
            Book a call with our founder
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <footer className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e8f0" }}>
          <p className="text-sm font-medium" style={{ color: "#1a1a2e" }}>Liam Mason</p>
          <p className="text-xs" style={{ color: "#6b7a94" }}>Founder, Distribution Pilot</p>
        </footer>
      </article>
    </main>
  );
}
