import { notFound } from "next/navigation";
import InfoPage from "../components/InfoPage";

type PageConfig = {
  title: string;
  summary: string;
  points: string[];
  contactEmail?: string;
};

const PAGE_CONTENT: Record<string, PageConfig> = {
  "products/ai-sales-rep": {
    title: "AI Sales Rep",
    summary:
      "Your AI Sales Rep handles outbound end-to-end: cold calls, email, LinkedIn outreach, qualification, and booking meetings directly into your calendar.",
    points: [
      "Cold calling with natural voice and objection handling",
      "Personalized outbound email sequences at scale",
      "LinkedIn prospecting and follow-up workflows",
      "Live lead qualification and CRM updates",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "products/marketing": {
    title: "Marketing Agent (Coming Soon)",
    summary:
      "Marketing automation for campaign planning, audience research, and conversion optimization is in active development.",
    points: [
      "Campaign strategy and launch workflows",
      "Creative and copy iteration loops",
      "Performance insights with optimization suggestions",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "products/support": {
    title: "Support Agent (Coming Soon)",
    summary:
      "AI support workflows for rapid response, triage, and resolution orchestration are being rolled out next.",
    points: [
      "Ticket triage and priority routing",
      "Instant FAQ and policy response handling",
      "Escalation handoff with full context",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "products/operations": {
    title: "Operations Agent (Coming Soon)",
    summary:
      "Operations workflows for process monitoring, repetitive admin tasks, and exception handling are on the roadmap.",
    points: [
      "Process compliance and task execution",
      "Operational reporting and anomaly detection",
      "Workflow handoffs across tools and teams",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "products/finance": {
    title: "Finance Agent (Coming Soon)",
    summary:
      "Finance workflows for recurring processes, document prep, and reporting support are under development.",
    points: [
      "Routine finance task automation",
      "Data preparation for reporting cycles",
      "Exception flagging and audit trails",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "products/design": {
    title: "Design Agent (Coming Soon)",
    summary:
      "Design support for production tasks, asset variations, and workflow acceleration is planned.",
    points: [
      "Asset generation and variant workflows",
      "Rapid concept-to-production iteration",
      "Design task handoff support",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/ai-agents": {
    title: "AI Agents",
    summary:
      "Distribution Pilot builds role-specific AI agents that execute real work inside your business workflows.",
    points: [
      "Role-specific behavior and performance goals",
      "Multi-channel execution with persistent memory",
      "Human approval checkpoints where needed",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/coding": {
    title: "Coding",
    summary:
      "AI-assisted coding support for faster implementation, maintenance, and delivery velocity.",
    points: [
      "Task decomposition and implementation support",
      "Refactoring and documentation acceleration",
      "Iteration loops with engineering teams",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/customer-support": {
    title: "Customer Support",
    summary:
      "Support workflows that reduce first-response times and keep ticket quality consistent.",
    points: [
      "Intake and intent recognition",
      "Knowledge-based response drafting",
      "Escalation to humans with full context",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/financial-services": {
    title: "Financial Services",
    summary:
      "AI workflow automation tailored for high-compliance, high-precision environments.",
    points: [
      "Process reliability and controlled automations",
      "Traceable outputs for internal review",
      "Operational efficiency improvements",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/healthcare": {
    title: "Healthcare",
    summary:
      "AI support for operational workflows in healthcare settings where speed and consistency matter.",
    points: [
      "Workflow support for service operations",
      "Structured task execution with auditability",
      "Safer handoffs and escalation patterns",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "solutions/nonprofits": {
    title: "Nonprofits",
    summary:
      "AI workflows to help nonprofit teams increase impact without increasing overhead.",
    points: [
      "Automation for lean teams",
      "Donor and stakeholder communication support",
      "Operational throughput improvements",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "learn/blog": {
    title: "Distribution Pilot Blog",
    summary:
      "Insights on AI employees, sales systems, and practical implementation patterns.",
    points: [
      "Field notes from real deployments",
      "Breakdowns of outbound and conversion systems",
      "Product updates and experiments",
    ],
  },
  "learn/customer-stories": {
    title: "Customer Stories",
    summary:
      "How teams deploy AI employees to increase pipeline, consistency, and speed.",
    points: [
      "Case studies with deployment context",
      "Before/after process outcomes",
      "Implementation lessons from teams",
    ],
  },
  "learn/tutorials": {
    title: "Tutorials",
    summary:
      "Step-by-step guides for onboarding and scaling your AI employees.",
    points: [
      "Launch checklist for first agent",
      "Lead qualification and routing setup",
      "Optimization loops for better results",
    ],
  },
  "learn/use-cases": {
    title: "Use Cases",
    summary:
      "Practical examples of how different teams run with AI employees.",
    points: [
      "Outbound pipeline generation",
      "Multi-touch follow-up orchestration",
      "Support and ops automation patterns",
    ],
  },
  "company/about": {
    title: "About Distribution Pilot",
    summary:
      "Distribution Pilot helps businesses hire AI agents for sales and marketing — with hands-on guidance from our team every step of the way.",
    points: [
      "Started with AI Sales Rep as the first role",
      "Built for operational consistency at scale",
      "Focused on practical, measurable outcomes",
    ],
  },
  "company/careers": {
    title: "Careers",
    summary:
      "We are building a high-output team focused on product quality, velocity, and customer outcomes.",
    points: [
      "Small team, high ownership",
      "Fast shipping cadence",
      "AI-native product development",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "company/research": {
    title: "Research",
    summary:
      "Research initiatives focused on reliable AI behavior in production business workflows.",
    points: [
      "Quality and consistency in autonomous execution",
      "Evaluation methods for practical deployments",
      "Long-term role expansion strategy",
    ],
  },
  "company/news": {
    title: "News",
    summary:
      "Recent announcements, launches, and product milestones from Distribution Pilot.",
    points: [
      "Release notes and milestones",
      "Partnership and company updates",
      "Upcoming roadmap highlights",
    ],
  },
  "help/availability": {
    title: "Availability",
    summary:
      "Service availability details and expected response windows for support requests.",
    points: [
      "Platform uptime targets and maintenance windows",
      "Support availability by priority",
      "Operational status communication flow",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  status: {
    title: "Status",
    summary:
      "Check service health, incident updates, and historical reliability notes.",
    points: [
      "Current platform status",
      "Incident communication updates",
      "Post-incident summary process",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "help/support-center": {
    title: "Support Center",
    summary:
      "Need help with setup or operations? Contact us and we will route your request quickly.",
    points: [
      "Onboarding and account support",
      "Technical troubleshooting",
      "Operational guidance for your AI rep",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  "privacy-choices": {
    title: "Privacy Choices",
    summary:
      "Manage communication and data preferences for your Distribution Pilot relationship.",
    points: [
      "Marketing communication preferences",
      "Account-related notification controls",
      "Request data handling updates",
    ],
    contactEmail: "privacy@distributionpilot.com",
  },
  "usage-policy": {
    title: "Usage Policy",
    summary:
      "Guidelines for acceptable and responsible use of Distribution Pilot services.",
    points: [
      "Use services in compliance with applicable laws",
      "Do not abuse systems or attempt unauthorized access",
      "Do not use the platform for harmful or deceptive activity",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
  mission: {
    title: "Mission",
    summary:
      "Distribution Pilot exists to speed us up into the new age by building fully automated AI teams that compound human potential.",
    points: [
      "Accelerate adoption of practical agentic workflows",
      "Turn repetitive business execution into autonomous systems",
      "Help teams redirect human effort to higher-leverage work",
      "Build responsibly for a more abundant future",
    ],
    contactEmail: "contact@distributionpilot.com",
  },
};

type CatchAllPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function CatchAllInfoPage({ params }: CatchAllPageProps) {
  const resolvedParams = await params;
  const path = resolvedParams.slug.join("/");
  const page = PAGE_CONTENT[path];

  if (!page) {
    notFound();
  }

  return (
    <InfoPage
      title={page.title}
      summary={page.summary}
      points={page.points}
      contactEmail={page.contactEmail}
    />
  );
}
