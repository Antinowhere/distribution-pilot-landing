const features = [
  {
    title: 'Joins Your Team Chat',
    description: 'Shows up in Slack or Discord as a real team member. Asks questions, shares updates, flags issues—just like a human employee.',
    icon: '💬',
  },
  {
    title: 'Runs Multiple Accounts',
    description: 'Manages a fleet of TikTok, Instagram, and other social accounts. Warms them up, maintains health, keeps them active.',
    icon: '📱',
  },
  {
    title: 'Creates Content Daily',
    description: 'Generates short-form videos, slideshows, and images tailored to your product. No templates—custom to your brand.',
    icon: '🎬',
  },
  {
    title: 'Posts on Autopilot',
    description: 'Schedules and publishes content automatically. Optimal timing, consistent cadence, zero manual work from you.',
    icon: '⚡',
  },
  {
    title: 'Tracks What Works',
    description: 'Monitors views, engagement, and conversions. Doubles down on winners, kills losers. Recursive improvement.',
    icon: '📊',
  },
  {
    title: 'Reports Weekly',
    description: 'Sends performance updates right in your team channel. Metrics, insights, and what\'s planned next—no dashboards to check.',
    icon: '📋',
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            What Your AI Marketer Does
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything a growth hire would do.<br className="hidden sm:block" />
            <span className="text-[var(--muted)]">Without the overhead.</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-black/30 border border-white/10 p-6 hover-glow transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
