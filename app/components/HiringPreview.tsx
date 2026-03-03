"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiSlack } from "react-icons/si";

type Candidate = {
  id: string;
  name: string;
  role: string;
  color: string;
  iconBg: string;
  profile: string;
  cvHighlights: string[];
  skills: string[];
  unread: number;
  quote: string;
  completedStep: number;
};

const CANDIDATES: Candidate[] = [
  {
    id: "1",
    name: "Ari Quinn",
    role: "Meta Ads Campaign Manager",
    color: "#4a6cf7",
    iconBg: "#edf0ff",
    profile: "Data-driven, creative, and relentless at optimizing spend.",
    cvHighlights: [
      "Launches and manages full-funnel Meta ad campaigns autonomously",
      "Generates ad creatives, tests variants, and kills underperformers fast",
      "Maintains ROAS targets across retargeting, lookalike, and cold audiences",
    ],
    skills: ["Ad creative", "Audience targeting", "Budget optimization"],
    unread: 3,
    quote:
      "I launched 47 ad sets this week. Your ROAS went up. You didn't touch Ads Manager once.",
    completedStep: 1,
  },
  {
    id: "2",
    name: "Mina Vale",
    role: "Cold Email Sender",
    color: "#e85d04",
    iconBg: "#fff3e6",
    profile: "Precise, personalized, and impossible to ignore in an inbox.",
    cvHighlights: [
      "Writes hyper-personalized cold emails using prospect research",
      "Runs multi-step sequences with smart follow-up timing",
      "A/B tests subject lines and CTAs to maximize reply rates",
    ],
    skills: ["Email copywriting", "Sequencing", "Reply optimization"],
    unread: 1,
    quote:
      "I sent 3,000 emails this week. 42% open rate. Your sales team just has to show up to the meetings I book.",
    completedStep: 2,
  },
  {
    id: "3",
    name: "Rowan Pike",
    role: "LinkedIn Content Generator",
    color: "#0a66c2",
    iconBg: "#e8f4fd",
    profile: "Thought-leadership voice that sounds human, not corporate.",
    cvHighlights: [
      "Creates daily LinkedIn posts aligned with your brand voice",
      "Engages with target accounts through strategic commenting",
      "Builds authority content around your niche and expertise",
    ],
    skills: ["Content creation", "Engagement", "Brand voice"],
    unread: 2,
    quote:
      "I turned your founder into a LinkedIn thought leader. They wrote zero of the posts. Engagement is up 340%.",
    completedStep: 3,
  },
  {
    id: "4",
    name: "Sol Mercer",
    role: "Landing Page SEO Analyzer",
    color: "#16a34a",
    iconBg: "#ecfdf5",
    profile: "Technical, sharp-eyed, and obsessed with conversion rates.",
    cvHighlights: [
      "Audits landing pages for SEO gaps and rewrite opportunities",
      "Rewrites headlines, meta tags, and body copy for search intent",
      "Tracks keyword rankings and suggests structural improvements",
    ],
    skills: ["SEO audit", "Copywriting", "Conversion optimization"],
    unread: 4,
    quote:
      "I rewrote 12 landing pages last week. Organic traffic is up 28%. Your agency charged more for less.",
    completedStep: 2,
  },
  {
    id: "5",
    name: "Kai Reeves",
    role: "Lead Nurturer",
    color: "#9333ea",
    iconBg: "#f5f0ff",
    profile: "Patient, context-aware, and never lets a warm lead go cold.",
    cvHighlights: [
      "Maintains personalized drip sequences for every stage of the funnel",
      "Re-engages stale leads with contextual, timely touchpoints",
      "Coordinates handoffs to sales when buying signals spike",
    ],
    skills: ["Drip campaigns", "Lead scoring", "Handoff timing"],
    unread: 2,
    quote:
      "I nurtured 200 leads through a 6-touch sequence. 34 booked calls. I don't sleep, so neither does your pipeline.",
    completedStep: 1,
  },
];

const HIRING_STEPS = ["Review CV", "Chat / Interview", "Send offer"];

export default function HiringPreview() {
  const [active, setActive] = useState(0);
  const activeCandidate = useMemo(() => CANDIDATES[active], [active]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % CANDIDATES.length);
    }, 6400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{
        background: "#ffffff",
        borderColor: "#dbe3f5",
        boxShadow: "0 8px 24px rgba(31, 61, 136, 0.08)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "#2a5cc7" }}>
            Candidate dashboard
          </p>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5"
          style={{ borderColor: "#cfe0ff", color: "#2a4a7f", background: "#eef4ff" }}
        >
          <SiSlack />
          Slack comms connected
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">
        <aside className="space-y-2">
          {CANDIDATES.map((candidate, idx) => (
            <button
              key={candidate.id}
              type="button"
              onClick={() => setActive(idx)}
              className="w-full text-left rounded-xl border p-3 transition-all"
              style={{
                borderColor: idx === active ? "#2a5cc788" : "#dbe3f5",
                background: idx === active ? "#edf3ff" : "#fdfefe",
                boxShadow: idx === active ? "0 8px 16px rgba(42, 92, 199, 0.12)" : "none",
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: candidate.color }} />
                  <p className="text-sm font-semibold" style={{ color: "#10172b" }}>
                    {candidate.name}
                  </p>
                </div>
                {candidate.unread > 0 ? (
                  <span
                    className="min-w-5 h-5 px-1.5 rounded-full text-[11px] flex items-center justify-center"
                    style={{ background: "#ef4444", color: "#ffffff" }}
                  >
                    {candidate.unread}
                  </span>
                ) : null}
              </div>
              <p className="text-xs mt-1 font-medium ml-[18px]" style={{ color: "#4a5f84" }}>
                {candidate.role}
              </p>
            </button>
          ))}
        </aside>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCandidate.id}
            className="rounded-xl border p-4 sm:p-5 min-h-[430px]"
            style={{ borderColor: "#dbe3f5", background: `linear-gradient(180deg, ${activeCandidate.color}08 0%, ${activeCandidate.color}04 100%)` }}
            initial={{ opacity: 0, y: 10, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.995 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            layout
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "#10172b" }}>
                  {activeCandidate.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: "#49618e" }}>
                  {activeCandidate.role}
                </p>
              </div>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: "#dfeaff", color: "#1f4bb2" }}
              >
                Profile ready
              </span>
            </div>

            <p className="text-sm font-medium mb-4" style={{ color: "#384b70" }}>
              {activeCandidate.profile}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {activeCandidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full border font-medium"
                  style={{ borderColor: "#cbdcff", color: "#1f4bb2", background: "#ffffff" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-5 min-h-[88px]">
              {activeCandidate.cvHighlights.map((line) => (
                <div key={line} className="flex items-start gap-2 text-sm" style={{ color: "#3f5277" }}>
                  <span style={{ color: "#2a5cc7" }}>-</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border px-3 py-2 mb-5 min-h-[84px]" style={{ borderColor: "#dbe3f5", background: "#ffffff" }}>
              <p className="text-xs mb-1 font-medium" style={{ color: "#6f82a8" }}>
                Personality sample
              </p>
              <p className="text-sm italic font-medium" style={{ color: "#2f436a" }}>
                "{activeCandidate.quote}"
              </p>
            </div>

            <div className="rounded-lg border p-3" style={{ borderColor: "#dbe3f5", background: "#ffffff" }}>
              <div className="grid grid-cols-3 gap-2 items-start">
                {HIRING_STEPS.map((step, idx) => {
                  const done = idx < activeCandidate.completedStep;
                  const current = idx === activeCandidate.completedStep;
                  const isOffer = idx === 2;
                  return (
                    <div key={step} className="relative flex flex-col items-center text-center min-h-[72px]">
                      {idx < HIRING_STEPS.length - 1 ? (
                        <span
                          className="absolute top-[12px] left-[62%] w-[76%] border-t-2 border-dotted"
                          style={{ borderColor: done ? "#7da3ff" : "#c9d6f0" }}
                        />
                      ) : null}
                      <span
                        className="relative z-10 h-6 w-6 rounded-full text-[11px] font-semibold flex items-center justify-center mb-2"
                        style={{
                          background: done ? "#2a5cc7" : current ? "#8fb2ff" : "#e5eaf7",
                          color: done || current ? "#ffffff" : "#6f82a8",
                        }}
                      >
                        {idx + 1}
                      </span>
                      {isOffer ? (
                        <button
                          type="button"
                          className="text-[11px] px-2.5 py-1.5 rounded-full font-medium"
                          style={{
                            background: done || current ? "#16a34a" : "#dcfce7",
                            color: done || current ? "#ffffff" : "#166534",
                          }}
                        >
                          {step}
                        </button>
                      ) : (
                        <span
                          className="text-xs font-medium"
                          style={{ color: done || current ? "#2a4a7f" : "#8090a8" }}
                        >
                          {step}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
