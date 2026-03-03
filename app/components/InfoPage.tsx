"use client";

import Link from "next/link";

type InfoPageProps = {
  title: string;
  summary: string;
  points: string[];
  contactEmail?: string;
};

export default function InfoPage({
  title,
  summary,
  points,
  contactEmail,
}: InfoPageProps) {
  return (
    <main className="min-h-screen px-6 py-12" style={{ background: "#f8f9fc" }}>
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm transition-colors mb-8 block"
          style={{ color: "#6b7a94" }}
        >
          &larr; Back to Distribution Pilot
        </Link>

        <h1 className="text-3xl font-light mb-3" style={{ color: "#1a1a2e" }}>
          {title}
        </h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "#4a5568" }}>
          {summary}
        </p>

        <div className="space-y-3">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-xl border px-4 py-3 text-sm"
              style={{
                borderColor: "#e5e8f0",
                background: "#ffffff",
                color: "#4a5568",
              }}
            >
              {point}
            </div>
          ))}
        </div>

        {contactEmail ? (
          <p className="mt-8 text-sm" style={{ color: "#4a5568" }}>
            Questions:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="underline"
              style={{ color: "#2a5cc7" }}
            >
              {contactEmail}
            </a>
          </p>
        ) : null}
      </div>
    </main>
  );
}
