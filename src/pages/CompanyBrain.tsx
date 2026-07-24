import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Search,
  MessageSquare,
  Target,
  Presentation,
  FileText,
  Users,
  Mic2,
  Workflow,
  FolderOpen,
  Calendar,
  Link2,
  ShieldCheck,
  Home,
  Brain,
  AlertCircle,
  ListChecks,
  RefreshCw,
  FileSpreadsheet,
  Receipt,
  BookOpen,
  Zap,
} from "lucide-react";
import Footer from "@/components/Footer";

const WARM = "linear-gradient(96deg, #ec4795 0%, #fc8817 100%)";
const PURPLE = "linear-gradient(135deg, #6b3a82 0%, #ec4795 100%)";
const ORB =
  "radial-gradient(circle at 35% 30%, #ffd7c4 0%, #f6a0c4 30%, #ec4795 55%, #6b3a82 100%)";

const scrollToSteps = () =>
  document
    .getElementById("get-there")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const Gradient = ({ children }: { children: React.ReactNode }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: WARM }}
  >
    {children}
  </span>
);

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-clip-text text-transparent inline-block"
    style={{ backgroundImage: WARM }}
  >
    {children}
  </div>
);

/* -------- Hero orb with brain + rotating ring + flowing lines -------- */
const HeroOrb = () => {
  const nodes = [
    { label: "Gmail", type: "logo", src: "/logos/gmail.svg" },
    { label: "Team", type: "icon", icon: Users, bg: PURPLE },
    { label: "Docs", type: "icon", icon: FileText, bg: "linear-gradient(135deg,#ec4795,#b21f63)" },
    { label: "Drive", type: "logo", src: "/logos/google-drive.svg" },
    { label: "Info", type: "icon", icon: MessageSquare, bg: WARM },
    { label: "Brand", type: "icon", icon: ShieldCheck, bg: "linear-gradient(135deg,#fc8817,#b75a06)" },
    { label: "Slack", type: "logo", src: "/logos/slack.svg" },
    { label: "Cadence", type: "icon", icon: Calendar, bg: "linear-gradient(135deg,#ffa84a,#fc8817)" },
  ];
  const R = 44; // % radius for placement
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[560px] mx-auto"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Rotating dashed ring */}
      <motion.div
        className="absolute inset-[8%] rounded-full"
        style={{
          border: "1.5px dashed rgba(255,255,255,0.28)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* SVG flowing connector lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * R;
          const y = 50 + Math.sin(angle) * R;
          return (
            <line
              key={i}
              x1={x}
              y1={y}
              x2="50"
              y2="50"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.3"
              strokeDasharray="1.2 1.2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-12"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
          );
        })}
      </svg>

      {/* Central orb with brain */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: "38%",
          height: "38%",
          background: ORB,
          boxShadow:
            "0 0 60px rgba(236,71,149,0.55), 0 0 120px rgba(252,136,23,0.25)",
        }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(236,71,149,0.45), 0 0 120px rgba(252,136,23,0.2)",
            "0 0 90px rgba(236,71,149,0.7), 0 0 160px rgba(252,136,23,0.35)",
            "0 0 60px rgba(236,71,149,0.45), 0 0 120px rgba(252,136,23,0.2)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center text-white">
          <svg viewBox="0 0 64 64" className="w-16 h-16 md:w-20 md:h-20" fill="none">
            <path
              d="M22 14c-5 0-9 3.5-9 8.5 0 2 .8 3.8 2 5.2-1.5 1.5-2.5 3.6-2.5 5.8 0 3.2 2 6 5 7.2-.3.9-.5 1.9-.5 2.9 0 4.4 3.6 8 8 8 2.5 0 4.7-1.1 6.2-2.9C33.3 50.4 34 51 35 51V13c-1 0-1.7.6-3.8 2.2C29.7 13.4 27.5 12 25 12"
              stroke="white"
              strokeWidth="1.6"
              fill="rgba(255,255,255,0.08)"
              strokeLinejoin="round"
            />
            <path
              d="M42 14c5 0 9 3.5 9 8.5 0 2-.8 3.8-2 5.2 1.5 1.5 2.5 3.6 2.5 5.8 0 3.2-2 6-5 7.2.3.9.5 1.9.5 2.9 0 4.4-3.6 8-8 8-2.5 0-4.7-1.1-6.2-2.9C30.7 50.4 30 51 29 51V13c1 0 1.7.6 3.8 2.2C34.3 13.4 36.5 12 39 12"
              stroke="white"
              strokeWidth="1.6"
              fill="rgba(255,255,255,0.08)"
              strokeLinejoin="round"
            />
            <path d="M32 14v37" stroke="white" strokeWidth="1.4" opacity="0.9" />
            <path d="M18 24c2 1 4 1 6 0M18 34c2 1 4 1 6 0M18 42c2 1 4 1 6 0" stroke="white" strokeWidth="1.1" opacity="0.7" fill="none" />
            <path d="M46 24c-2 1-4 1-6 0M46 34c-2 1-4 1-6 0M46 42c-2 1-4 1-6 0" stroke="white" strokeWidth="1.1" opacity="0.7" fill="none" />
          </svg>
          <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1">
            Company<br />Brain
          </div>
        </div>
      </motion.div>

      {/* Node badges */}
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * R;
        const y = 50 + Math.sin(rad) * R;
        const Icon = (n as any).icon;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: "12%",
              height: "12%",
              boxShadow: "0 10px 30px -6px rgba(20,10,40,0.35)",
            }}
          >
            {n.type === "logo" ? (
              <img src={(n as any).src} alt={n.label} className="w-1/2 h-1/2 object-contain" />
            ) : (
              <span
                className="w-3/4 h-3/4 rounded-full flex items-center justify-center text-white"
                style={{ background: (n as any).bg }}
              >
                <Icon className="w-1/2 h-1/2" />
              </span>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

/* -------- Hub for section 4 -------- */
const HubDiagram = ({ items }: { items: { title: string; body: string; icon: React.ElementType; bg: string }[] }) => {
  const R = 38;
  return (
    <div className="relative w-full max-w-[900px] aspect-square mx-auto hidden lg:block">
      {/* Dashed lines */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {items.map((_, i) => {
          const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R;
          const y = 50 + Math.sin(a) * R;
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#c4b1d9" strokeWidth="0.25" strokeDasharray="1 1" />
          );
        })}
      </svg>

      {/* Central orb */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-white"
        style={{
          width: "22%",
          height: "22%",
          background: ORB,
          boxShadow: "0 0 60px rgba(236,71,149,0.5)",
        }}
      >
        <div className="flex flex-col items-center">
          <Brain className="w-7 h-7" />
          <div className="text-[10px] font-bold uppercase tracking-wider mt-1 text-center leading-tight">
            Your Company<br />Brain
          </div>
        </div>
      </div>

      {/* Cards */}
      {items.map((it, i) => {
        const a = (i / items.length) * 360 - 90;
        const rad = (a * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * R;
        const y = 50 + Math.sin(rad) * R;
        const Icon = it.icon;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[190px] bg-white rounded-2xl p-4 shadow-md border border-gray-100"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className="inline-flex w-9 h-9 rounded-xl items-center justify-center text-white mb-2"
              style={{ background: it.bg }}
            >
              <Icon className="w-4 h-4" />
            </span>
            <div className="font-bold text-lbl-ink text-sm mb-1">{it.title}</div>
            <div className="text-xs text-gray-600 leading-snug">{it.body}</div>
          </div>
        );
      })}
    </div>
  );
};

/* -------- Popover example card -------- */
type Example = {
  icon: React.ElementType;
  title: string;
  ask: string;
  response: string;
};

const ExampleCard = ({ ex, up }: { ex: Example; up: boolean }) => {
  const Icon = ex.icon;
  return (
    <div className="group relative hover:z-40">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full transition-shadow group-hover:shadow-lg">
        <span className="inline-flex w-10 h-10 rounded-xl items-center justify-center bg-lbl-magenta/10 text-lbl-magenta mb-4">
          <Icon className="w-5 h-5" />
        </span>
        <p className="text-lbl-ink font-semibold leading-snug mb-4">{ex.title}</p>
        <div className="flex items-center gap-1.5 text-lbl-magenta text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Hover to see an example
        </div>
      </div>

      {/* Popover */}
      <div
        className={`pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 z-50 w-[340px] md:w-[380px] ${
          up ? "bottom-full mb-3" : "top-full mt-3"
        }`}
      >
        <div
          className="bg-white rounded-2xl overflow-hidden border border-gray-100"
          style={{ boxShadow: "0 30px 60px -20px rgba(20,10,40,0.35)" }}
        >
          <div className="h-1.5" style={{ background: WARM }} />
          <div className="p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-lbl-magenta mb-1">You ask</div>
            <div className="bg-lbl-paper rounded-lg p-3 text-sm text-lbl-ink mb-4">{ex.ask}</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-lbl-magenta mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI response
            </div>
            <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
              {ex.response}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================= PAGE ============================= */
export default function CompanyBrain() {
  const sound = [
    "Information lives in emails, docs, Slack, and people's heads.",
    "Work gets duplicated, dropped, or delayed.",
    "No one has a clear, real-time view of what's happening.",
    "New hires take months to get up to speed.",
  ];

  const imagine = [
    { tag: "Research", icon: Search, bg: PURPLE, body: "It could research every interaction your team has ever had with a company or prospect, and tell you how best to respond, instantly." },
    { tag: "Social media", icon: MessageSquare, bg: PURPLE, body: "It could look at your past LinkedIn posts and write a new one in your voice, based on the conversations you had that week." },
    { tag: "Goals", icon: Target, bg: WARM, body: "It could tell you exactly what to focus on today, and what is obviously getting in the way of the things that matter most." },
    { tag: "Sales", icon: Presentation, bg: WARM, body: "It could build a presentation from a conversation you had earlier that day, in your format and voice, in under five minutes." },
  ];

  const hub = [
    { title: "Who you are", body: "Identity, story, and what sets you apart.", icon: Home, bg: PURPLE },
    { title: "Your team", body: "Who's who and who owns what.", icon: Users, bg: WARM },
    { title: "Your voice & tone", body: "So it sounds just like you.", icon: Mic2, bg: PURPLE },
    { title: "How you operate", body: "Your process and how work moves.", icon: Workflow, bg: WARM },
    { title: "Where to look", body: "Your key docs, drives, and systems.", icon: FolderOpen, bg: PURPLE },
    { title: "Your cadence", body: "The rhythms of your week.", icon: Calendar, bg: WARM },
    { title: "Live tool access", body: "Connected to the tools you use.", icon: Link2, bg: PURPLE },
    { title: "Brand & guidelines", body: "Your standards, always on-brand.", icon: ShieldCheck, bg: WARM },
  ];

  const connectors = [
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Google Calendar", src: "/logos/google-calendar.svg" },
    { name: "Google Drive", src: "/logos/google-drive.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Zoom", src: "/logos/zoom.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Trello", src: "/logos/trello.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Asana", src: "/logos/asana.svg" },
    { name: "Fathom", src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/fathom.svg" },
  ];

  const examples: Example[] = [
    {
      icon: MessageSquare,
      title: "Ask a question about any client, project, or deal and get an instant, accurate answer.",
      ask: "What's the latest with Acme Corp?",
      response: `Acme Corp: Account Snapshot

- Stage: Contract review (sent Tuesday by Sarah)
- Last touch: Zoom call April 11 with their CTO, Marcus. Flagged concerns about onboarding timeline.
- Open items: revised SOW due Friday (you); legal review pending their side, ETA Monday.
- Context: #acme-deal thread mentions a possible EU expansion (3 seats); CFO confirmed Q2 budget April 9.
- Suggested next step: send the revised SOW today, offer a 15-min call early next week.`,
    },
    {
      icon: FileText,
      title: "Generate presentations, summaries, or updates using your company's real data.",
      ask: "Create a Q1 board update using our real numbers and recent wins.",
      response: `Q1 Board Update: Draft Deck (8 slides)

1. Q1 at a glance: Revenue $1.42M (+18% QoQ), 7 new logos, NRR 112%
2. Wins: Closed Acme ($240K ACV), 2x Northstar seats, shipped analytics v2
3. Pipeline: $3.8M qualified, 22 late-stage opps, $1.6M Q2 forecast
4. Product: 14 features shipped, AI summaries + SSO highlighted
5. Team: hired 3 (eng, CS, sales), 2 promotions
6. Risks: onboarding capacity tight; one renewal at risk (mitigation in motion)`,
    },
    {
      icon: Calendar,
      title: "Automatically prep for meetings and send follow-ups, with no manual work.",
      ask: "Prep me for my 10am with Northstar and draft the follow-up.",
      response: `Meeting Prep: Northstar (10:00 AM)
Attendees: Priya (VP Ops), James (CTO)

Context to know:
- Last call (Mar 28): rolling out to their support team (12 seats)
- James's open question: integrate with their ticketing tool?
- Priya: fiscal year ends June 30, wants to wrap before then

Talking points: confirm pilot results (NPS +14), walk through ticketing options, propose 12-seat expansion with June 1 start.
Follow-up email drafted and ready to send.`,
    },
    {
      icon: ListChecks,
      title: "Create and track team-wide to-dos that update across your systems.",
      ask: "Show me what the team owes this week, with status.",
      response: `Team To-Dos: Week of April 14

Sarah (Sales)
- Done: revised SOW to Acme
- Due Thu: follow up with Globex re: renewal
- Due Fri: Q2 forecast review

Marcus (Eng)
- Done: SSO bug fix
- Due Fri: RFC for ticketing integration
- Overdue: code review backlog (4 open)

Auto-synced from Asana, Notion, and Slack.
Next nudge: Marcus on the code review backlog, 4pm.`,
    },
    {
      icon: Receipt,
      title: "Generate invoices, reports, or client communications in seconds.",
      ask: "Generate the April invoice for Northstar.",
      response: `INVOICE #2024-0417
Bill to: Northstar Inc., Net 30

1. Platform subscription (12 seats)     $4,800.00
2. Premium support add-on                 $750.00
3. Q1 strategy workshop (Apr 8)         $2,500.00

Total Due:                              $8,050.00

Ready to send to priya@northstar.com.
Logged in QuickBooks, CRM updated, #finance notified.`,
    },
    {
      icon: RefreshCw,
      title: "Keep projects updated without chasing anyone for status.",
      ask: "Give me a status across all active client projects.",
      response: `Active Projects: auto-compiled this morning

- Acme Corp (Onboarding): On track. Next milestone data import Apr 22.
- Northstar (Expansion): Slightly behind. Waiting on James for sign-off. Nudge drafted.
- Globex (Renewal): On track. Call booked Apr 25. CSAT +9 pts.
- Initech (Implementation): At risk. No response in 8 days. Escalation ready.

Compiled from Asana, HubSpot, Slack, Gmail. No one was asked for an update.`,
    },
  ];

  const steps = [
    { n: 1, title: "Intake", body: "A guided form captures the essentials: who you are, your team, your voice, and your tools." },
    { n: 2, title: "Setup call", body: "We sit down together, connect your tools live, and shape the brain around how you run." },
    { n: 3, title: "We build it", body: "We assemble your persona, folders, skills, and routines, customized to your business." },
    { n: 4, title: "Training & handoff", body: "We train your team to use it and keep it current, then check back in to make sure it sticks." },
  ];

  return (
    <div className="bg-white font-sans">
      <Helmet>
        <title>Company Brain | Launch by Lunch</title>
        <meta
          name="description"
          content="Give your whole team a shared AI brain that knows your business. We build a company brain that knows your people, your voice, your tools, and how you actually work."
        />
        <link rel="canonical" href="https://launchbylunch.co/company-brain" />
        <meta property="og:title" content="Company Brain | Launch by Lunch" />
        <meta property="og:description" content="A shared AI brain that knows your business, so your whole team operates from the same context." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 1. HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg,#2a1748 0%, #421f52 55%, #6b3a82 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 30%, rgba(236,71,149,0.35), transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-lbl-orange" />
                A second brain for your whole company
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Give your team a brain that <Gradient>knows your business</Gradient>
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-6 max-w-xl">
                We build your company a shared AI brain that knows your people, your voice, the tools you use, and how you actually work, so everyone operates from the same context instead of chasing it.
              </p>
              <div
                className="rounded-xl px-5 py-4 mb-8 max-w-xl text-white/95 border-l-4"
                style={{
                  background: "linear-gradient(90deg, rgba(252,136,23,0.18), rgba(236,71,149,0.12))",
                  borderColor: "#fc8817",
                }}
              >
                Set up for you and customized to how your business runs.
              </div>
              <Button
                size="lg"
                className="group rounded-full px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
                style={{ background: WARM }}
                onClick={scrollToSteps}
              >
                See how it works
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div>
              <HeroOrb />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOUND FAMILIAR */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Kicker>Sound familiar?</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              Your company knows a lot. It just lives everywhere.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The context your team needs is scattered across inboxes, docs, chat threads, and people's heads.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {sound.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <span
                  className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white"
                  style={{ background: WARM }}
                >
                  <AlertCircle className="h-5 w-5" />
                </span>
                <p className="text-gray-700 leading-relaxed pt-1.5">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMAGINE */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Kicker>Imagine</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              What if everyone on your team had a <Gradient>second brain</Gradient>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One that knows your business as well as you do, and puts that knowledge to work in seconds.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {imagine.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.tag}
                  className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1" style={{ background: WARM }} />
                  <span
                    className="inline-flex w-12 h-12 rounded-xl items-center justify-center text-white mb-4"
                    style={{ background: c.bg }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-lbl-magenta mb-2">
                    {c.tag}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE COMPANY BRAIN HUB */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Kicker>The company brain</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              One brain that <Gradient>knows your whole company</Gradient>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              During setup we capture how your business really works. All of it lives in one brain your whole team can draw on.
            </p>
          </div>

          <HubDiagram items={hub} />

          {/* Mobile/tablet grid */}
          <div className="grid sm:grid-cols-2 gap-5 lg:hidden">
            {hub.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <span
                    className="inline-flex w-10 h-10 rounded-xl items-center justify-center text-white mb-3"
                    style={{ background: it.bg }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="font-bold text-lbl-ink mb-1">{it.title}</div>
                  <div className="text-sm text-gray-600">{it.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONNECT THE TOOLS */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Kicker>Rich context</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              We connect the tools you already use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your brain plugs into your existing systems for rich, live context, so instead of jumping between platforms, your team works from a single source of truth.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {connectors.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 aspect-square"
              >
                <img src={c.src} alt={c.name} className="h-8 w-8 object-contain" />
                <div className="text-sm font-medium text-lbl-ink">{c.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Connect the tools that matter to your business. These are just some of the most common.
          </p>
        </div>
      </section>

      {/* 6. PUT IT TO WORK */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6 relative overflow-visible">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Kicker>Put it to work</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              Ask anything. Get an answer with <Gradient>your context</Gradient> built in.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hover any card to see what your team's brain could return. Real company context, not generic AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {examples.map((ex, i) => (
              <ExampleCard key={i} ex={ex} up={i >= 3} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT YOUR TEAM GETS */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Kicker>What your team gets</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              A brain that's built, organized, and set to <Gradient>keep itself fresh</Gradient>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't hand you a chatbot. We hand you a structured system, set up around how your company works.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Workspace panel */}
            <div
              className="rounded-2xl p-6 md:p-8 text-white font-mono text-sm leading-7"
              style={{
                background: "linear-gradient(160deg,#421f52 0%, #2a1748 100%)",
                boxShadow: "0 30px 60px -20px rgba(20,10,40,0.4)",
              }}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-4">
                <FolderOpen className="w-3.5 h-3.5" /> Your company workspace
              </div>
              <div>
                <div><span className="text-orange-300">your-company/</span></div>
                <div className="pl-4"><span className="text-orange-200">CLAUDE.md</span>          <span className="text-white/40"># company persona</span></div>
                <div className="pl-4"><span className="text-orange-200">org-narrative.md</span>   <span className="text-white/40"># how you operate</span></div>
                <div className="pl-4"><span className="text-orange-200">routines.md</span>        <span className="text-white/40"># your cadence</span></div>
                <div className="pl-4"><span className="text-orange-200">manifest.csv</span>       <span className="text-white/40"># where to look</span></div>
                <div className="pl-4"><span className="text-orange-200">brand-guidelines</span></div>
                <div className="pl-4"><span className="text-orange-300">skills/</span></div>
                <div className="pl-8"><span className="text-orange-300">daily-brief/</span></div>
                <div className="pl-8"><span className="text-orange-300">update-context/</span></div>
                <div className="pl-8"><span className="text-orange-300">meeting-sync/</span>     <span className="text-white/40"># routine</span></div>
                <div className="pl-8"><span className="text-orange-300">email-sync/</span>       <span className="text-white/40"># routine</span></div>
                <div className="pl-8"><span className="text-orange-300">calendar-sync/</span>    <span className="text-white/40"># routine</span></div>
                <div className="pl-4"><span className="text-orange-300">team/</span>              <span className="text-white/40"># a space per person</span></div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              {/* Persona */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: PURPLE }}>
                    <Brain className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-bold text-lbl-ink text-lg leading-tight">A company persona</div>
                    <div className="text-sm text-lbl-magenta font-medium">Your brain's operating system</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A living profile of who you are, your voice, your team, and how you work, so every answer starts from your context.
                </p>
              </div>

              {/* 2 skills */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: PURPLE }}>
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-bold text-lbl-ink text-lg leading-tight">2 skills</div>
                    <div className="text-sm text-lbl-magenta font-medium">The moves your team runs on demand</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lbl-magenta/10 text-lbl-magenta flex-shrink-0">Daily Brief</span>
                    <p className="text-sm text-gray-700"><span className="font-semibold text-lbl-ink">What matters today.</span> A morning rundown of priorities, meetings, and open threads.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lbl-magenta/10 text-lbl-magenta flex-shrink-0">Update Context</span>
                    <p className="text-sm text-gray-700"><span className="font-semibold text-lbl-ink">Teach it something new.</span> Add a client, a change, or a decision in seconds.</p>
                  </div>
                </div>
              </div>

              {/* 3 routines */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: WARM }}>
                    <RefreshCw className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-bold text-lbl-ink text-lg leading-tight">3 background routines</div>
                    <div className="text-sm text-lbl-magenta font-medium">Keep the brain fresh, on their own</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ["Meeting Sync", "Pulls notes and decisions from your meetings into the brain."],
                    ["Email Sync", "Surfaces what changed in your inbox that the team should know."],
                    ["Calendar Sync", "Keeps the brain aware of what's coming up, every day."],
                  ].map(([tag, body]) => (
                    <div key={tag} className="flex gap-3 items-start">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-lbl-orange flex-shrink-0">{tag}</span>
                      <p className="text-sm text-gray-700">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW WE GET THERE */}
      <section id="get-there" className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Kicker>How we get there</Kicker>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              Set up <Gradient>with you</Gradient>, around how you actually work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This isn't software you install and figure out alone. It's a setup conversation. We help you decide what your brain should know and build it with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <span
                  className="inline-flex w-10 h-10 rounded-xl items-center justify-center text-white font-bold mb-4"
                  style={{ background: WARM, boxShadow: "0 8px 20px -8px rgba(236,71,149,0.5)" }}
                >
                  {s.n}
                </span>
                <div className="font-bold text-lbl-ink text-lg mb-2">{s.title}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
              style={{ background: WARM }}
            >
              <a
                href="https://calendly.com/karen-launchbylunch/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's map your company brain
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
