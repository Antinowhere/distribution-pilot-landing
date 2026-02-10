const features = [
  {
    title: 'Joins Your Team Chat',
    description: 'Shows up in Slack or Discord as a real team member. Asks questions, shares updates, flags issues. Or DMs you directly on iMessage, WhatsApp, Telegram—wherever you actually check.',
    icon: '💬',
  },
  {
    title: 'Builds Custom Tools',
    description: 'Writes scripts, builds dashboards, automates workflows. Need custom software for your specific use case? It ships code, not excuses.',
    icon: '🛠️',
  },
  {
    title: 'Researches & Analyzes',
    description: 'Digs into competitors, trends, and market data. Analyzes performance across all your channels. Finds what\'s working and why.',
    icon: '🔍',
  },
  {
    title: 'Creates Content Daily',
    description: 'Generates short-form videos, slideshows, and images tailored to your product. No templates—custom to your brand.',
    icon: '🎬',
  },
  {
    title: 'Scales Your Presence',
    description: 'Grows your reach across TikTok, Instagram, and more. Builds momentum, maintains consistency, keeps your brand active everywhere it matters.',
    icon: '📱',
  },
  {
    title: 'Recursively Improves',
    description: 'Tracks what works, kills what doesn\'t. Every batch of content gets smarter. Winning hooks spawn variations. Losers get cut. Darwinian marketing.',
    icon: '🔄',
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
