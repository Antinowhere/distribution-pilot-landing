const steps = [
  {
    number: '01',
    title: 'You "Hire" Them',
    description: 'Book a call, tell us about your product and goals. We onboard your AI marketer and get them up to speed on your brand.',
  },
  {
    number: '02',
    title: 'They Join Your Slack',
    description: 'A new team member shows up in your workspace. They ask about your niche, target audience, and what\'s worked before.',
  },
  {
    number: '03',
    title: 'Content Starts Flowing',
    description: 'Within a week, posts go live across multiple accounts. Short-form videos, carousels, whatever fits your product.',
  },
  {
    number: '04',
    title: 'Weekly Check-Ins',
    description: 'Performance updates drop in your channel. What\'s working, what\'s not, and what\'s planned next. You approve when needed.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            The Hiring Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Onboard in days. Results in weeks.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl bg-black/30 border border-white/10 p-8 hover-glow transition-all"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl font-bold text-accent/30 font-mono">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 text-center">
          <div className="inline-block rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
            <p className="text-sm text-[var(--muted)]">
              <span className="text-accent font-semibold">Human-in-the-loop:</span> You stay in control. 
              Approve creative direction, give feedback, adjust strategy—whenever you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
