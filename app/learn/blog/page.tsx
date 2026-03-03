import Link from "next/link";

export const metadata = { title: "Blog — Distribution Pilot" };

const POSTS = [
  {
    slug: "copilot-to-pilot",
    title: "From Co-Pilot to Pilot: The Shift That Changes Everything",
    excerpt:
      "Cursor went from tab completions to autonomous cloud agents. That same shift is coming for your business — and the teams that adapt will outrun everyone else.",
    date: "March 2, 2026",
    image: "/58E1028F-6B8B-4FFB-80C0-A6278C18E08F.webp",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <div className="max-w-4xl mx-auto">
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
            Blog
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]"
            style={{ color: "#1a1a2e" }}
          >
            Thinking out loud.
          </h1>
          <p className="text-lg mt-4 max-w-2xl leading-relaxed" style={{ color: "#4a5568" }}>
            Notes on AI adoption, change management, and what it actually takes to make this stuff work inside a real business.
          </p>
        </section>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/learn/blog/${post.slug}`}
              className="group block rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "#dbe3f5",
                background: "#ffffff",
                boxShadow: "0 1px 2px rgba(31, 61, 136, 0.05)",
              }}
            >
              {post.image && (
                <div className="w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "#2a5cc7" }}>
                  {post.date}
                </p>
                <h2
                  className="text-xl sm:text-2xl font-medium mb-2 group-hover:text-[#2a5cc7] transition-colors"
                  style={{ color: "#1a1a2e" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7a94" }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
