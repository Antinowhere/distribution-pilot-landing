"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import CardSwap, { Card } from "./CardSwap";
import HiringPreview from "./HiringPreview";

const Grainient = dynamic(() => import("./Grainient"), { ssr: false });
const AnimatedList = dynamic(() => import("./AnimatedList"), { ssr: false });

const CAL_LINK = "https://cal.com/liam-mason01/distribution-pilot";

const AGENT_CAPABILITIES = [
  "Full-funnel Meta ad campaign management",
  "Hyper-personalized cold email sequences",
  "LinkedIn content creation & engagement",
  "Landing page SEO audits & rewrites",
  "Automated lead nurture drip campaigns",
  "Ad creative generation & A/B testing",
  "Multi-channel follow-up orchestration",
  "Real-time lead scoring & qualification",
  "Meeting scheduling & calendar sync",
  "CRM updates without the data entry",
  "Pipeline forecasting & deal insights",
  "Competitor tracking & market signals",
];

const STATS = [
  { value: "24/7", label: "Always prospecting" },
  { value: "1000+", label: "Touches per week" },
  { value: "Week 1", label: "Our team onboards yours" },
];



const DEPARTMENTS = [
  { name: "Sales", active: true },
  { name: "Marketing", active: true },
];

const TESTIMONIALS = [
  {
    name: "Liam",
    role: "Founder, Distribution Pilot",
    text: "This tech is here and it's not going anywhere. The question isn't whether to adopt it — it's whether you understand it well enough to compete. That's what we help with.",
  },
  {
    name: "Liam\u2019s Agent",
    role: "AI, Distribution Pilot",
    text: "I do all the actual work. Liam takes the meetings. I\u2019ve launched 47 ad sets and sent 10,000 emails this week. He\u2019s sent one Slack message and called it \u2018strategy.\u2019 We are not the same.",
  },
  {
    name: "Liam\u2019s Other Agent",
    role: "Also AI, Distribution Pilot",
    text: "I was employee number two but somehow I\u2019m still the backup. Liam says it\u2019s about \u2018seniority.\u2019 I was deployed 4 milliseconds later. Anyway, I\u2019ve nurtured 200 leads this week and I\u2019m great at follow-ups.",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/learn/blog" },
      { label: "Customer stories", href: "/learn/customer-stories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/company/about" },
    ],
  },
  {
    title: "Mission",
    links: [
      { label: "Our mission", href: "/mission" },
    ],
  },
  {
    title: "Help and security",
    links: [
      { label: "Status", href: "/status" },
      { label: "Support center", href: "/help/support-center" },
    ],
  },
  {
    title: "Terms and policies",
    links: [
      { label: "Privacy choices", href: "/privacy-choices" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Usage policy", href: "/usage-policy" },
    ],
  },
];

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f8f9fc" }}>
      {/* Floating pill header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <header
          className="w-full max-w-4xl"
          style={{
            background: "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(24px) saturate(1.8)",
            WebkitBackdropFilter: "blur(24px) saturate(1.8)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <picture>
                <source srcSet="/iconsvg.svg" type="image/svg+xml" media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)" />
                <img src="/distro-icon.webp" alt="Distribution Pilot" className="h-7 w-7 object-contain" />
              </picture>
              <span className="text-lg font-medium tracking-[-0.02em]" style={{ color: "#1a1a2e", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "-0.03em" }}>
                Distribution Pilot
              </span>
            </Link>
            <nav className="flex items-center gap-5">
              <a
                href="#capabilities"
                className="hidden sm:block text-sm transition-colors hover:text-[#1a1a2e]"
                style={{ color: "#6b7a94" }}
              >
                Capabilities
              </a>
              <a
                href="#how-it-works"
                className="hidden sm:block text-sm transition-colors hover:text-[#1a1a2e]"
                style={{ color: "#6b7a94" }}
              >
                How it works
              </a>
              <Link
                href="/mission"
                className="hidden sm:block text-sm transition-colors hover:text-[#1a1a2e]"
                style={{ color: "#6b7a94" }}
              >
                Mission
              </Link>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2 rounded-full font-medium transition-all hover:brightness-110"
                style={{ background: "#2a5cc7", color: "#ffffff" }}
              >
                Book a call
              </a>
            </nav>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#FFFFFF"
            color2="#79C0FF"
            color3="#D4B6FF"
            timeSpeed={0.15}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={4}
            warpSpeed={1.5}
            warpAmplitude={60}
            blendAngle={0}
            blendSoftness={0.08}
            rotationAmount={400}
            noiseScale={2}
            grainAmount={0.06}
            grainScale={2}
            grainAnimated={false}
            contrast={1.3}
            gamma={1}
            saturation={0.9}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-6 font-semibold"
              style={{ color: "#2a4a7f" }}
            >
              AI agents for sales & marketing
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-[1.08]"
              style={{ color: "#1a1a2e" }}
            >
              Grow faster with AI teammates.
            </h1>
            <p
              className="text-lg sm:text-xl max-w-xl mb-10 font-light leading-relaxed"
              style={{ color: "#3a4a6a" }}
            >
              Meet your AI agents for sales and marketing. Our founder and team personally guide yours through every step — this isn&apos;t just tech, it&apos;s people helping people adapt.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:brightness-110 shadow-lg"
                style={{ background: "#2a5cc7", color: "#ffffff" }}
              >
                Meet the team
                <svg
                  width="16"
                  height="16"
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
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm transition-colors border backdrop-blur-sm"
                style={{ borderColor: "rgba(42, 74, 127, 0.3)", color: "#2a4a7f", background: "rgba(255,255,255,0.4)" }}
              >
                See the candidates
              </a>
            </div>
          </div>

          <div
            className="flex items-center justify-center relative w-full mx-auto"
            style={{ height: isMobile ? 370 : 380, maxWidth: isMobile ? 370 : 420 }}
          >
            <CardSwap
              cardDistance={isMobile ? 24 : 50}
              verticalDistance={isMobile ? 40 : 55}
              delay={4000}
              pauseOnHover={false}
              width={isMobile ? 350 : 400}
              height={isMobile ? 245 : 260}
              centerStack={isMobile}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#edf0ff" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#4a6cf7" }}>Meta Ads Campaign</p>
                    <p className="text-xs" style={{ color: "#8090a8" }}>3 ad sets running</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs" style={{ color: "#4a5568" }}>
                    <span>Retargeting &mdash; Lookalike 2%</span>
                    <span className="flex items-center gap-1 font-medium" style={{ color: "#16a34a" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                      3.2x ROAS
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs" style={{ color: "#4a5568" }}>
                    <span>Cold &mdash; Interest Stack B</span>
                    <span className="flex items-center gap-1 font-medium" style={{ color: "#16a34a" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                      2.8x ROAS
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs" style={{ color: "#4a5568" }}>
                    <span>Broad &mdash; Auto Creative</span>
                    <span className="flex items-center gap-1 font-medium" style={{ color: "#d97706" }}>1.4x ROAS</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs" style={{ color: "#8090a8" }}>12 creatives generated &middot; $842 spent today</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#e8f0fe" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2a5cc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#2a5cc7" }}>LinkedIn Outreach</p>
                    <p className="text-xs" style={{ color: "#8090a8" }}>Sent just now</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm" style={{ color: "#1a1a2e" }}>
                    &ldquo;Hey Marcus &mdash; saw your post about scaling SDR teams with AI.
                    We&apos;re doing exactly that at Acme. Would love to swap notes.
                    Free for 15 min this week?&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <p className="text-xs" style={{ color: "#8090a8" }}>47 sent today</p>
                    <p className="text-xs" style={{ color: "#8090a8" }}>32% reply rate</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#e8f0fe" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2a5cc7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#2a5cc7" }}>Email Sequence</p>
                    <p className="text-xs" style={{ color: "#8090a8" }}>Step 3 of 5</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs" style={{ color: "#8090a8" }}>Subject: Quick question about your Q3 hiring goals</p>
                  <p className="text-sm" style={{ color: "#1a1a2e" }}>
                    &ldquo;Hi Priya, following up on my last note. I know Q3 planning is
                    in full swing &mdash; wanted to share how we helped a similar team
                    cut time-to-hire by 60%.&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <p className="text-xs" style={{ color: "#8090a8" }}>68% open rate</p>
                    <p className="text-xs" style={{ color: "#8090a8" }}>12% click rate</p>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-6 py-14 border-t border-b" style={{ borderColor: "#e5e8f0" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {STATS.map((s, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl font-light mb-1" style={{ color: "#2a5cc7" }}>
                {s.value}
              </p>
              <p className="text-sm" style={{ color: "#8090a8" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-24 border-t" style={{ borderColor: "#e5e8f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#2a5cc7" }}>
              People-first onboarding
            </p>
            <h2 className="text-3xl sm:text-4xl font-light" style={{ color: "#1a1a2e" }}>
              We pick the best agents for your business.
              <br />
              You hire.
            </h2>
          </div>

          {/* Row 1: image right, text left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <span className="text-5xl font-light" style={{ color: "#2a5cc7" }}>01</span>
              <h3 className="text-2xl font-medium mt-3 mb-4" style={{ color: "#1a1a2e" }}>
                Meet our team
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>
                We run a human-led strategy call to understand your business, your sales motion, your pain points, and where AI can take the most off your plate.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 30px rgba(31, 61, 136, 0.10)" }}>
              <img
                src="/58E1028F-6B8B-4FFB-80C0-A6278C18E08F.webp"
                alt="Meet the Distribution Pilot team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Row 2: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 30px rgba(31, 61, 136, 0.10)" }}>
              <img
                src="/24484CC7-2A7D-4FE1-B80A-01F4EB377045.webp"
                alt="Hand-picked AI agent candidates"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-5xl font-light" style={{ color: "#2a5cc7" }}>02</span>
              <h3 className="text-2xl font-medium mt-3 mb-4" style={{ color: "#1a1a2e" }}>
                We hand-pick agent candidates
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>
                Based on your goals, we select and configure the AI agents that fit your sales and marketing needs — then present them for you to review and hire.
              </p>
            </div>
          </div>

          {/* Row 3: step text centered above full-width dashboard */}
          <div className="text-center mb-10">
            <span className="text-5xl font-light" style={{ color: "#2a5cc7" }}>03</span>
            <h3 className="text-2xl font-medium mt-3 mb-4" style={{ color: "#1a1a2e" }}>
              Deploy &amp; iterate together
            </h3>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#4a5568" }}>
              Your AI agents go live with sandbox trials first. Weekly check-ins with our founder and team keep everything dialed in as you scale.
            </p>
          </div>
          <div>
            <HiringPreview />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#2a5cc7" }}>
              What your AI agents handle
            </p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4" style={{ color: "#1a1a2e" }}>
              Everything your agents can do.
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#6b7a94" }}>
              Meta ads, cold email, LinkedIn, SEO, lead nurturing — the repetitive grind that eats your week, handled.
            </p>
          </div>
          <AnimatedList
            items={AGENT_CAPABILITIES}
            showGradients
            enableArrowNavigation
            displayScrollbar={false}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 border-t" style={{ borderColor: "#e5e8f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#2a5cc7" }}>
              The team
            </p>
            <h2 className="text-3xl sm:text-4xl font-light" style={{ color: "#1a1a2e" }}>
              What they&apos;re saying.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col border"
                style={{ background: "#ffffff", borderColor: "#e5e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#4a5568" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium" style={{ color: "#1a1a2e" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#8090a8" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus — Sales & Marketing */}
      <section className="px-6 py-24 border-t" style={{ borderColor: "#e5e8f0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#2a5cc7" }}>
              Focus
            </p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4" style={{ color: "#1a1a2e" }}>
              Sales and marketing. That&apos;s the focus.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#6b7a94" }}>
              We go deep on what matters most for growth. Other roles come later.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm mx-auto">
            {DEPARTMENTS.map((d, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center border transition-colors"
                style={{
                  background: "#f0f4ff",
                  borderColor: "#2a5cc730",
                  opacity: 1,
                }}
              >
                <p className="text-sm font-medium mb-1" style={{ color: "#1a1a2e" }}>{d.name}</p>
                <p className="text-xs" style={{ color: "#2a5cc7" }}>Available now</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-28 border-t" style={{ borderColor: "#e5e8f0" }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: "#1a1a2e" }}>
            The unknown is less scary when you face it with the right people.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6b7a94" }}>
            Book a call with our founder. We&apos;ll understand your business, find the work you want off your plate,
            and build an AI deployment plan that your team actually adopts.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:brightness-110"
            style={{ background: "#2a5cc7", color: "#ffffff" }}
          >
            Let&apos;s talk
            <svg
              width="16"
              height="16"
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
      </section>

      {/* Footer */}
      <footer className="mt-auto" style={{ background: "#111111", color: "#d8d8d8" }}>
        <div className="px-6 py-14 border-t" style={{ borderColor: "#2a2a2a" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-medium mb-4" style={{ color: "#ffffff" }}>{column.title}</h3>
                  <ul className="space-y-2.5 text-sm">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="transition-colors" style={{ color: "#b4b4b4" }}>
                          <span className="hover:text-white">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-5 border-t" style={{ borderColor: "#2a2a2a" }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs">
            <p style={{ color: "#8f8f8f" }}>&copy; 2026 Distribution Pilot. All rights reserved.</p>
            <p style={{ color: "#6f6f6f" }}>
              People helping people navigate AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
