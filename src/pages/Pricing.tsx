import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import katherineOtwayPhoto from "@/assets/katherine-otway.jpg.asset.json";
import anthropicLogo from "@/assets/anthropic-certified.png.asset.json";
import harvardLogo from "@/assets/harvard-logo.png.asset.json";
import cicLogo from "@/assets/cic-logo.png.asset.json";
import softheonLogo from "@/assets/softheon-logo.png.asset.json";
import surfsideLogo from "@/assets/surfside-logo.png.asset.json";
import elixrLogo from "@/assets/elixr-logo.png.asset.json";
import theEngineLogo from "@/assets/the-engine-logo.png.asset.json";
import womenApplyingAiLogo from "@/assets/women-applying-ai-logo.png.asset.json";
import greaterBostonChamberLogo from "@/assets/greater-boston-chamber.png.asset.json";
import simoneBernsteinPhoto from "@/assets/simone-bernstein.png.asset.json";
import flamingPizzaLogo from "@/assets/flaming-pizza-logo.png.asset.json";
import katLazellPhoto from "@/assets/testimonial-kat-lazell.jpg";
import amandaSwiatochaPhoto from "@/assets/testimonial-amanda-swiatocha.jpg";
import jessLynchPhoto from "@/assets/testimonial-jess-lynch.jpg";
import {
  Flame,
  Check,
  Compass,
  Users,
  Sparkles,
  ClipboardList,
  Presentation,
  Workflow,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

const DISCOVERY_URL = "https://calendly.com/karen-launchbylunch/30min";
const LUMA_URL = "https://luma.com/launchbylunch";

function LogoMark({
  name,
  src,
  scale = 1,
  filter = "grayscale(1) brightness(0) invert(1)",
}: {
  name: string;
  src?: string;
  scale?: number;
  filter?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <div
      className="flex items-center justify-center h-12 sm:h-14 px-2 group"
      title={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          loading="lazy"
          className="max-h-full max-w-[140px] w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ filter, transform: `scale(${scale})` }}
        />
      ) : (
        <span className="text-center text-white/60 group-hover:text-white transition-colors duration-300 text-sm sm:text-base font-semibold uppercase tracking-[0.14em] leading-tight">
          {name}
        </span>
      )}
    </div>
  );
}

type Card = {
  eyebrow?: string;
  name: string;
  price: string;
  meta: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  included: string[];
  deliverables?: string[];
  bestFor: string;
  note?: string;
  cta: { label: string; href: string; external?: boolean; internal?: boolean };
  footnote?: React.ReactNode;
  quote?: { text: string; name: string; title: string; image?: string };
};

type CardTheme = {
  surface: string;
  bar: string;
  divider: string;
};

const CARD_THEMES: Record<string, CardTheme> = {
  "Discovery Call": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-ink to-lbl-eggplant",
    divider: "border-lbl-ink/10",
  },
  "Join a Public Workshop": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-magenta to-lbl-orange",
    divider: "border-lbl-orange/10",
  },
  "Custom-Built Chief of Staff": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-eggplant via-lbl-magenta to-lbl-orange",
    divider: "border-lbl-magenta/10",
  },
  "AI Readiness Assessment": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-eggplant to-lbl-magenta",
    divider: "border-lbl-eggplant/10",
  },
  "Private Team Workshop": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-orange to-lbl-magenta",
    divider: "border-lbl-orange/10",
  },
  "Strategic Implementation": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-ink to-lbl-magenta",
    divider: "border-lbl-ink/10",
  },
  "Monthly AI Advisory Retainer": {
    surface: "bg-white",
    bar: "bg-gradient-to-r from-lbl-magenta to-lbl-ink",
    divider: "border-lbl-magenta/10",
  },
};

const cards: Card[] = [
  {
    name: "Discovery Call",
    price: "Free",
    meta: "30 minutes",
    icon: Compass,
    desc: "No jargon. No enterprise sales pitch. Just a conversation.",
    included: [
      "Where AI can save you time and money right now",
      "A candid read on whether AI is even worth it for your business",
      "A clear next step, with no pressure",
    ],
    bestFor: "Any small-business owner curious where to start.",
    cta: { label: "Schedule discovery call", href: DISCOVERY_URL, external: true },
  },
  {
    name: "Join a Public Workshop",
    price: "$199 to $499",
    meta: "per seat, per session",
    icon: Users,
    desc: "Hands-on, cohort-style sessions where you build something real in Claude and walk out using it.",
    included: [
      "Live build against real work",
      "A playbook you keep",
      "Topics across AI for productivity, marketing, and getting comfortable with Claude",
      "Laptop open, system live before you leave",
    ],
    bestFor: "Individuals and team members who learn by doing.",
    cta: { label: "See the workshop calendar", href: LUMA_URL, external: true },
  },
  {
    name: "Custom-Built Chief of Staff",
    price: "$3,500",
    meta: "Done-for-you build, plus follow-up sessions",
    badge: "Most individualized",
    icon: Sparkles,
    desc: "We build your personal AI Chief of Staff for you, fully configured and live. An AI briefing hub that pulls your calendar, email, notes, and CRM into a single pane of glass in Claude.",
    included: [
      "A roughly 90-minute deep dive into how you work, where your gaps are, and what you want AI to take off your plate",
      "Built-in context for you, your work, and your goals, so it makes decisions the way you would",
      "A context-rich Chief of Staff that pulls your calendar, email, notes, and CRM into one daily briefing",
      "A daily executive briefing that surfaces your tasks automatically, plus an AI news digest and a built-in accountability system",
      "Works with hundreds of tools like Gmail, Google Calendar, Drive, Slack, Notion, Zoom, HubSpot, Airtable, Trello, Asana, Zapier, and Fathom",
      "Two one-hour implementation sessions after the build, so the system fits the way you actually work",
      
    ],
    bestFor: "Founders, consultants, and solo operators juggling many priorities.",
    quote: {
      text: "It's been a huge help. I've been focused on capacity lately, and finding real solutions to the load I carry every day. My Chief of Staff lets me put down the weight until I need to pick it back up.",
      name: "Simone Bernstein",
      title: "CEO, Wellth Society",
      image: simoneBernsteinPhoto.url,
    },
    cta: { label: "See how it works", href: "/claude-code", internal: true },
  },
  {
    name: "AI Readiness Assessment",
    price: "$2,500",
    meta: "1 to 2 weeks",
    badge: "Recommended starting point for teams",
    icon: ClipboardList,
    desc: "Before we build anything, we listen. A clear-eyed read on where AI pays off for your small business and where it does not.",
    included: [
      "A working session with your team",
      "An audit of your current tools and workflows",
      "AI automation recommendations",
      "Realistic ROI projections",
      "A plain-English executive summary",
    ],
    deliverables: ["AI Opportunity Map", "Priority Matrix", "Adoption Roadmap", "Executive Brief"],
    bestFor: "Small-business owners who want a plan before they spend.",
    cta: { label: "Start with an assessment", href: "/contact", internal: true },
  },
  {
    name: "Private Team Workshop",
    price: "Starting at $5,000",
    meta: "Half or full day, up to ~12 people",
    icon: Presentation,
    desc: "We come to your team. A private, hands-on session where everyone builds real workflows in Claude against your own tools.",
    included: [
      "Role-specific workflows",
      "A prompt and playbook library your team keeps",
      "Tool recommendations that cut redundant subscriptions",
      "Everyone leaves able to do it themselves",
    ],
    bestFor: "Teams ready to put AI to work together, this week.",
    cta: { label: "Book a team workshop", href: "/contact", internal: true },
    footnote: (
      <>
        Curious about upskilling your whole team on a budget? See our{" "}
        <Link to="/comm-corp-express-ai-training-in-ma" className="text-lbl-orange font-medium hover:underline">
          free AI upskilling program
        </Link>
        . If you&apos;re in MA, ask us about the free mini-grant program for on-site AI education.
      </>
    ),
  },
  {
    name: "Strategic Implementation",
    price: "$15,000 to $50,000",
    meta: "Scope-dependent",
    icon: Workflow,
    desc: "We build the custom AI workflows that move the needle, train your team on them, and hand you the keys.",
    included: [
      "A dedicated team",
      "Weekly updates",
      "Custom integrations against your real systems",
      "Hands-on team training",
      "A live dashboard",
      "30 days of support after launch",
    ],
    deliverables: [
      "Customer service automation",
      "Document processing",
      "Sales intelligence",
      "Internal knowledge bases",
      "Reporting dashboards",
    ],
    note: "Custom scope is set with you after the assessment, so you are never guessing.",
    bestFor: "Businesses ready to make AI part of how the whole team works.",
    cta: { label: "Scope an implementation", href: "/contact", internal: true },
  },
  {
    name: "Monthly AI Advisory Retainer",
    price: "Starting at $2,500 / month",
    meta: "Ongoing partnership",
    icon: RefreshCw,
    desc: "Keep the momentum after we build. Ongoing strategy and support so results compound instead of fading.",
    included: [
      "A monthly strategy session",
      "Async support over email and Slack",
      "A quarterly audit of what is saving time and money",
      "New workflow and agent builds as your business grows",
      "Team refreshers",
    ],
    bestFor: "Clients who finished an implementation and want to keep scaling.",
    cta: { label: "Talk about a retainer", href: "/contact", internal: true },
  },
];

const investmentBlocks = [
  {
    title: "Program pricing",
    body:
      "Implementation pricing depends on scope: team size, how many workflows we build, and how deep the training goes. We scope it with you after the assessment, so the number reflects your business, not a package.",
  },
  {
    title: "Why we start with an assessment",
    body:
      "We listen before we build anything. The assessment makes sure we build the workflows that actually save you money, not the flashy ones that do not. It usually pays for itself by keeping the build focused.",
  },
  {
    title: "What you should expect",
    body:
      "Two things, every time: save money, and scale in a way you could not before. If AI is not worth it for a given problem, we will tell you.",
  },
  {
    title: "How payment works",
    body:
      "50% upfront and 50% on delivery for builds and implementations. Retainers billed monthly. Strategic implementations include 30 days of support after launch. Cards and bank transfer accepted.",
  },
];

const stats = [
  { num: "2,500+", label: "Automations built" },
  { num: "100+", label: "AI courses and workshops taught" },
  { num: "Certified", label: "Anthropic Certified Partner" },
  { num: "Top 100", label: "Voice, Massachusetts AI Coalition (Karen Kelly)" },
];

const logos: { name: string; src?: string; scale?: number; filter?: string }[] = [
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" },
  { name: "KPMG", src: "https://upload.wikimedia.org/wikipedia/commons/d/db/KPMG_blue_logo.svg" },
  { name: "Harvard", src: harvardLogo.url, filter: "none" },
  { name: "Bank of America", src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" },
  { name: "Techstars", src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Techstars_logo.png" },
  { name: "Greater Boston Chamber of Commerce", src: greaterBostonChamberLogo.url, scale: 1.5 },
  { name: "Softheon", src: softheonLogo.url },
  { name: "The Engine", src: theEngineLogo.url, scale: 1.5 },
  { name: "Women Applying AI", src: womenApplyingAiLogo.url },
  { name: "Elixr", src: elixrLogo.url, filter: "none" },
  { name: "Surfside Capital", src: surfsideLogo.url },
  { name: "CIC", src: cicLogo.url },
];

const testimonials = [
  {
    quote:
      "Within 45 minutes we had built our first app with AI. Karen is incredibly relatable and makes the complex seem easy, leading to her session being the most talked about of the day.",
    name: "Jess Lynch",
    title: "Founding Partner, FoundersEdge",
    image: jessLynchPhoto,
  },
  {
    quote:
      "I had high expectations but she surpassed all of them. She received the highest scores of any meeting we had ever had.",
    name: "Amanda Swiatocha",
    title: "CMO, Softheon (EmpowerHER)",
    image: amandaSwiatochaPhoto,
  },
  {
    quote:
      "Karen's AI workshop at the CIC accelerator was invigorating and clarifying for many non-technical founders in the room. You could feel the energy shift from intimidation to curiosity, to momentum.",
    name: "Kat Lazell",
    title: "Senior Program Manager, Cambridge Innovation Center (CiC)",
    image: katLazellPhoto,
  },
];

const faqs = [
  {
    q: "What is AI automation for small business?",
    a: "AI automation for small business means using artificial intelligence to handle repetitive, time-consuming tasks that currently drain your team's energy. At Launch by Lunch, we use Claude as a central intelligence layer that connects the tools you already use, your email, calendar, CRM, documents, Slack, and more, so they can communicate with each other seamlessly. Instead of jumping between a dozen apps to find information or complete a workflow, you get a single pane of glass where AI handles the repetitive work across all of them. This means less manual data entry, fewer missed follow-ups, faster response times to customers, and more hours in your week to focus on growing the business rather than managing it.",
  },
  {
    q: "How can a small business owner actually start using AI?",
    a: "The best way to start is by picking one or two repetitive workflows that are eating up your team's time, things like inbox triage, meeting follow-ups, daily reporting, or lead routing. We help you map those workflows and then let Claude orchestrate them across your existing tools. Because Claude can connect to nearly every platform you already pay for, you don't need to rip anything out or buy a whole new software stack. You simply add an intelligence layer on top that ties everything together. Most small business owners are surprised by how quickly they see results, often within the first few weeks, because the AI is working with the tools and processes your team already knows.",
  },
  {
    q: "Do I need new software or expensive tools to add AI to my business?",
    a: "No. One of the biggest misconceptions about AI for small business is that you need to invest in expensive new software or rip out your existing systems. The reality is that most small businesses already have the tools they need. We use Claude as the connective tissue between your existing platforms, giving you one place to ask questions, take action, and get work done across email, documents, calendar, CRM, project management, and more. You don't need to buy a stack of new software or pay for another dozen subscriptions. The value comes from making what you already own work together intelligently, not from adding more complexity to your tech stack.",
  },
  {
    q: "What is a single pane of glass for AI?",
    a: "A single pane of glass means one unified interface, powered by Claude, where you can see, understand, and act on information from every tool your business runs on. Instead of context-switching between ten different browser tabs, five apps, and a scattered inbox, you ask once and Claude pulls the right data, summarizes it, drafts a response, schedules a meeting, or executes a workflow across all connected systems. For a small business owner, this is transformative. You no longer have to hunt through spreadsheets for a customer note or dig through Slack to find a decision. Everything is accessible, actionable, and connected in one intelligent workspace.",
  },
  {
    q: "Is AI safe for a small business to adopt?",
    a: "Yes, when it is set up thoughtfully and with the right guardrails. We help small business owners adopt AI in a people-first way, which means clear role-based access controls, data privacy protections, and a phased rollout that brings your team along rather than surprising them. Claude operates within the permissions of the tools you already use, so it cannot access what your employees cannot access. We also help you establish review checkpoints for high-stakes workflows, like customer communications or financial reporting, so a human stays in the loop where it matters. The goal is to make your business faster and more efficient without ever compromising trust, accuracy, or security.",
  },
  {
    q: "How long does it take to see results from AI automation?",
    a: "Most small businesses see meaningful time savings within the first few weeks of implementation. Once Claude is wired into your core tools as a single pane of glass, the repetitive work that used to eat hours of your week, generating reports, scheduling meetings, drafting follow-up emails, routing leads, updating spreadsheets, gets handled automatically or with minimal input. The timeline depends on the complexity of your workflows, but because we build on top of tools your team already uses, there is no steep learning curve or months-long migration. Your people continue working the way they always have, except now Claude is working alongside them, handling the busywork so they can focus on the strategy, the relationships, and the creative problem-solving that actually grows the business.",
  },
];

const processSteps = [
  { num: "01", title: "Leadership Coaching & Messaging", icon: Compass, desc: "Help executives communicate the 'why' so AI feels like an upgrade, not a threat." },
  { num: "02", title: "Tool and Process Audit", icon: ClipboardList, desc: "Helps us understand how you work and what subscriptions you can drop." },
  { num: "03", title: "Custom Build & Adoption Roadmap", icon: Workflow, desc: "A phased plan built around your team's pace, starting with quick wins." },
  { num: "04", title: "Hands-On Team Training", icon: Presentation, desc: "Role-specific workshops that meet every person where they are. No one gets left behind." },
  { num: "05", title: "Measure, Iterate & Sustain", icon: RefreshCw, desc: "Ongoing check-ins to track what's landing and where to go next." },
];

const phaseLabels = ["One", "Two", "Three", "Four", "Five"];

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white border-b border-[var(--lbl-lilac)]/20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="eyebrow mb-3">YOUR PATH</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--lbl-eggplant)]">
            How we work with you.
          </h2>
        </div>

        <div className="relative">
          {/* Desktop decorative curved path */}
          <svg
            className="hidden md:block absolute top-[48px] left-0 w-full h-16 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 64"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="timelinePath" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--lbl-ink)" />
                <stop offset="50%" stopColor="var(--lbl-magenta)" />
                <stop offset="100%" stopColor="var(--lbl-orange)" />
              </linearGradient>
            </defs>
            <path
              d="M0 32C100 32 140 0 240 0C340 0 380 64 480 64C580 64 620 0 720 0C820 0 860 64 960 64C1060 64 1100 32 1200 32"
              fill="none"
              stroke="url(#timelinePath)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.4"
              className="animate-dash-flow"
            />
          </svg>

          {/* Mobile vertical track */}
          <div className="md:hidden absolute left-8 top-2 bottom-2 w-1 bg-[var(--lbl-lilac)]/30 rounded-full" />
          <motion.div
            className="md:hidden absolute left-8 top-2 w-1 bg-gradient-to-b from-lbl-ink via-lbl-magenta to-lbl-orange rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "calc(100% - 1rem)" } : { height: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.18, ease: "easeOut" }}
                  className={`relative flex-1 flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-0 text-left md:text-center group ${isEven ? "md:mt-16" : ""}`}
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl bg-gradient-to-br from-lbl-ink via-lbl-magenta to-lbl-orange text-white flex items-center justify-center text-lg md:text-xl font-extrabold shadow-xl shadow-lbl-ink/10 mb-0 md:mb-8 group-hover:-translate-y-1 transition-transform duration-300">
                    {parseInt(step.num)}
                    <div className="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/40 blur-sm" />
                  </div>
                  <div className="flex-1 pt-1 md:pt-0">
                    <p className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--lbl-orange)] opacity-80 mb-1.5">
                      Phase {phaseLabels[i]}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-[var(--lbl-eggplant)] mb-1.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- shared bits --- */

const CTAButton = ({
  card,
  variant = "primary",
}: {
  card: Card;
  variant?: "primary" | "ghost";
}) => {
  const cls =
    variant === "primary"
      ? "btn-cta group"
      : "inline-flex items-center gap-2 h-[52px] px-7 rounded-full font-semibold text-[var(--lbl-eggplant)] border-2 border-[var(--lbl-eggplant)] hover:bg-[var(--lbl-eggplant)] hover:text-white transition-colors";
  const inner = (
    <>
      {card.cta.label}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </>
  );
  if (card.cta.internal) {
    return (
      <Link to={card.cta.href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={card.cta.href}
      target={card.cta.external ? "_blank" : undefined}
      rel={card.cta.external ? "noopener noreferrer" : undefined}
      className={cls}
    >
      {inner}
    </a>
  );
};

const ServiceCard = ({ card }: { card: Card }) => {
  const Icon = card.icon;
  const theme = CARD_THEMES[card.name] ?? CARD_THEMES["Discovery Call"];
  return (
    <article
      className={`relative ${theme.surface} rounded-2xl overflow-hidden border border-[var(--lbl-lilac)]/50`}
      style={{ boxShadow: "0 6px 18px rgba(23,10,31,0.08)" }}
    >
      {/* gradient top border */}
      <div
        className={`h-[4px] w-full ${theme.bar}`}
        aria-hidden
      />
      <div className="p-5 sm:p-7 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        {/* left: name / price / cta */}
        <div className="flex flex-col">
          <div className="flex items-start gap-3 mb-4">
            <div
              className={`shrink-0 w-10 h-10 rounded-[12px] flex items-center justify-center text-white ${theme.bar}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            {card.badge && (
              <span className="inline-flex items-center h-6 px-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[var(--lbl-orange)]/10 text-[var(--lbl-orange)]">
                {card.badge}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--lbl-eggplant)] tracking-tight leading-tight mb-2">
            {card.name}
          </h3>
          <div className="mb-2">
            <div className="text-2xl font-semibold text-[var(--lbl-ink)] tracking-tight">
              {card.price}
            </div>
            <div className="text-sm text-gray-600 mt-1">{card.meta}</div>
          </div>
          <p className="text-base text-gray-700 leading-relaxed mt-3 mb-5">
            {card.desc}
          </p>

          {card.quote && (
            <blockquote className="relative mt-2 mb-6 pl-4 border-l-[3px] border-[var(--lbl-orange)]">
              <p className="text-base italic text-gray-700 leading-relaxed mb-3">
                &ldquo;{card.quote.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                {card.quote.image && (
                  <img
                    src={card.quote.image}
                    alt={card.quote.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-[var(--lbl-orange)]/20 flex-shrink-0"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="font-semibold text-[var(--lbl-eggplant)] text-base">{card.quote.name}</div>
                  <div className="text-sm text-gray-500">{card.quote.title}</div>
                </div>
              </footer>
            </blockquote>
          )}

          <div className="mt-auto pt-2">
            <CTAButton card={card} />
          </div>
        </div>

        {/* right: included / deliverables / best for */}
        <div className={`md:border-l ${theme.divider} md:pl-8`}>
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-orange)] mb-3">
            What&apos;s included
          </div>
          <ul className="space-y-2 mb-5">
            {card.included.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-gray-800 leading-relaxed">
                <Flame className="h-4 w-4 shrink-0 mt-0.5 text-[var(--lbl-orange)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {card.deliverables && (
            <div className="mb-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-eggplant)] mb-3">
                {card.name === "AI Readiness Assessment" ? "Deliverables" : "Common projects"}
              </div>
              <div className="flex flex-wrap gap-2">
                {card.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center h-7 px-3 rounded-full text-sm font-medium bg-[var(--lbl-lilac)]/25 text-[var(--lbl-eggplant)] border border-[var(--lbl-lilac)]/60"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {card.note && (
            <p className="text-sm text-gray-600 italic mb-5">{card.note}</p>
          )}

          <div className="pt-4 border-t border-[var(--lbl-lilac)]/40">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-eggplant)] mb-2">
              Best for
            </div>
            <p className="text-base text-gray-800">{card.bestFor}</p>
          </div>

          {card.footnote && (
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">{card.footnote}</p>
          )}
        </div>
      </div>
    </article>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "var(--lbl-paper)" }}>
      <Helmet>
        <title>Services | Launch by Lunch</title>
        <meta
          name="description"
          content="Practical AI services for small businesses. Discovery calls, hands-on workshops, custom-built AI Chief of Staff, readiness assessments, private team trainings, strategic implementations, and monthly advisory."
        />
        <link rel="canonical" href="https://launchbylunch.co/services" />
        <meta property="og:title" content="Services | Launch by Lunch" />
        <meta
          property="og:description"
          content="Priced-plainly AI services for small businesses. From a free discovery call to fully built systems."
        />
        <meta property="og:url" content="https://launchbylunch.co/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-hero-soft overflow-hidden">
        <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5">PRICING</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-lbl-ink via-lbl-magenta to-lbl-orange bg-clip-text text-transparent leading-[1.1]">
                Approachable AI,<br /><span className="whitespace-nowrap">sticky results.</span>
              </span>
            </h1>
            <hr className="brand-rule mb-8" />
            <p className="text-xl sm:text-[22px] leading-relaxed text-[var(--lbl-eggplant)] mb-10">
              We work exclusively with small businesses. Start wherever you are, from a free call
              to a fully built system. Every engagement is designed so your team keeps the results
              without staying dependent on us.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer" className="btn-cta group">
                Book a free discovery call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center gap-2 h-[52px] px-6 rounded-full font-semibold text-[var(--lbl-eggplant)] border-2 border-[var(--lbl-eggplant)] hover:bg-[var(--lbl-eggplant)] hover:text-white transition-colors"
              >
                See our track record
              </a>
            </div>
          </div>

          {/* Animated flaming pizza logo */}
          <img
            src={flamingPizzaLogo.url}
            alt="Launch by Lunch flaming pizza logo"
            className="hidden lg:block absolute right-0 top-8 xl:-top-2 w-48 xl:w-56 h-auto flame-flicker"
            loading="eager"
          />
        </div>
      </section>

      <ProcessTimeline />

      {/* ── Service cards stack ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {cards.map((c) => (
            <ServiceCard key={c.name} card={c} />
          ))}
        </div>
      </section>

      {/* ── Investment section ── */}
      <section className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #faf0ec 0%, #f7f7f7 100%)" }}>
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">INVESTMENT</div>
            <h2 className="text-[36px] sm:text-[52px] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--lbl-eggplant)]">
              How we think about <span className="gradient-text grad-warm">investment</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {investmentBlocks.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-8 border border-[var(--lbl-lilac)]/40"
                style={{ boxShadow: "0 8px 24px rgba(23,10,31,0.06)" }}
              >
                <h3 className="text-xl font-semibold text-[var(--lbl-eggplant)] mb-3">{b.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof / dark section ── */}
      <section id="proof" className="py-20 sm:py-28 bg-ink text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="eyebrow mb-4">TRACK RECORD</div>
          <h2 className="gradient-text grad-warm text-[40px] sm:text-[64px] font-semibold leading-[1.05] tracking-[-0.02em] mb-6">
            The receipts.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-14 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-[42px] sm:text-[56px] font-semibold leading-none tracking-tight text-[var(--lbl-orange)]"
                  style={{ fontWeight: 700 }}
                >
                  {s.num}
                </div>
                <div className="mt-3 text-[var(--lbl-lilac)] text-base leading-snug">
                  {s.label}
                </div>
                {s.label === "Anthropic Certified Partner" && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={anthropicLogo.url}
                      alt="Anthropic Certified Partner"
                      className="h-12 w-auto opacity-90"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* featured Katherine Otway quote */}
          <figure className="mt-16 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border-l-4 border-[var(--lbl-orange)] rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={katherineOtwayPhoto.url}
                alt="Katherine Otway, Chief Marketing Officer at The Engine"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                  &ldquo;The Engine exists to support companies pushing the boundaries of what&apos;s possible creatively and operationally, and how we use AI internally should reflect that. Launch by Lunch built something that fits how we actually work, not a generic tool people open twice and forget. And that makes the investment worth it.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-base font-semibold text-white">
                  Katherine Otway
                  <span className="block font-normal text-[var(--lbl-lilac)]">Chief Marketing Officer, The Engine</span>
                </figcaption>
              </div>
            </div>
          </figure>

          {/* trusted-by strip */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-[var(--lbl-lilac)]/70 mb-5">
              Trusted by teams at
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 items-center">
              {logos.map((l) => (
                <LogoMark key={l.name} name={l.name} src={l.src} scale={l.scale} filter={l.filter} />
              ))}
            </div>
          </div>

          {/* testimonials */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[5px]"
                  style={{ background: "var(--grad-brand)" }}
                  aria-hidden
                />
                <blockquote className="text-lg leading-relaxed text-white/90 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--lbl-lilac)]">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-[36px] sm:text-[52px] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--lbl-eggplant)]">
              Common <span className="gradient-text grad-warm">questions</span>.
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-[var(--lbl-paper)] rounded-2xl p-7 sm:p-8 border border-[var(--lbl-lilac)]/40"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--lbl-eggplant)] mb-3">
                  {f.q}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-24 sm:py-32"
        style={{ background: "linear-gradient(120deg, #f1ebf7 0%, #faf0ec 55%, #ffffff 100%)" }}
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="gradient-text text-[42px] sm:text-[68px] font-semibold leading-[1.05] tracking-[-0.02em] mb-8 max-w-3xl mx-auto">
            Ready to put AI to work?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer" className="btn-cta group">
              Book a free discovery call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full font-semibold text-[var(--lbl-eggplant)] border-2 border-[var(--lbl-eggplant)] hover:bg-[var(--lbl-eggplant)] hover:text-white transition-colors"
            >
              See the workshop calendar
            </a>
          </div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We work exclusively with small businesses. No jargon. No enterprise sales pitch. Just a
            conversation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
