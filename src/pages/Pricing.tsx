import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import anthropicLogo from "@/assets/anthropic-certified.png.asset.json";
import harvardLogo from "@/assets/harvard-logo.png.asset.json";
import cicLogo from "@/assets/cic-logo.png.asset.json";
import softheonLogo from "@/assets/softheon-logo.png.asset.json";
import surfsideLogo from "@/assets/surfside-logo.png.asset.json";
import foundersEdgeLogo from "@/assets/founders-edge-logo.png.asset.json";
import theEngineLogo from "@/assets/the-engine-logo.png.asset.json";
import womenApplyingAiLogo from "@/assets/women-applying-ai-logo.png.asset.json";
import greaterBostonChamberLogo from "@/assets/greater-boston-chamber.png.asset.json";
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

function LogoMark({ name, src, scale = 1 }: { name: string; src?: string; scale?: number }) {
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
          style={{ filter: "grayscale(1) brightness(0) invert(1)", transform: `scale(${scale})` }}
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
  quote?: { text: string; name: string; title: string };
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
    desc: "We build your personal AI Chief of Staff for you, fully configured and live. An AI briefing hub that pulls your calendar, email, notes, and CRM into one place.",
    included: [
      "A roughly 90-minute deep dive into how you work, where your gaps are, and what you want AI to take off your plate",
      "Built-in context for you, your work, and your goals, so it makes decisions the way you would",
      "A context-rich Chief of Staff that pulls your calendar, email, notes, and CRM into one daily briefing",
      "A daily executive briefing that surfaces your tasks automatically, plus an AI news digest and a built-in accountability system",
      "Works with Gmail, Google Calendar, Drive, Slack, Notion, Zoom, HubSpot, Airtable, Trello, Asana, Zapier, and Fathom",
      "Two one-hour implementation sessions after the build, so the system fits the way you actually work",
      "Bonus: one year of Launch by Lunch community access, events, and office hours",
    ],
    bestFor: "Founders, consultants, and solo operators juggling many priorities.",
    quote: {
      text: "It's been a huge help. I've been focused on capacity lately, and finding real solutions to the load I carry every day. My Chief of Staff lets me put down the weight until I need to pick it back up.",
      name: "Simone Bernstein",
      title: "CEO, Wellth Society",
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
      "A competitive read on what peers are doing",
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
  { num: "100+", label: "AI courses and workshops taught" },
  { num: "3 wks → 3 days", label: "Research time cut for Elixr Solutions" },
  { num: "Certified", label: "Anthropic Certified Partner" },
  { num: "Top 100", label: "Voice, Massachusetts AI Coalition (Karen Kelly)" },
];

const logos: { name: string; src?: string }[] = [
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" },
  { name: "KPMG", src: "https://upload.wikimedia.org/wikipedia/commons/d/db/KPMG_blue_logo.svg" },
  { name: "Harvard", src: harvardLogo.url },
  { name: "Bank of America", src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" },
  { name: "Techstars", src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Techstars_logo.png" },
  { name: "CIC", src: cicLogo.url },
  { name: "Softheon", src: softheonLogo.url },
  { name: "The Engine", src: theEngineLogo.url },
  { name: "Women Applying AI", src: womenApplyingAiLogo.url },
  { name: "Founder's Edge", src: foundersEdgeLogo.url },
  { name: "Surfside Capital", src: surfsideLogo.url },
  { name: "Greater Boston Chamber of Commerce", src: greaterBostonChamberLogo.url },
];

const testimonials = [
  {
    quote:
      "Karen's AI workshop at the CIC accelerator was invigorating and clarifying for many non-technical founders in the room. You could feel the energy shift from intimidation to curiosity, to momentum.",
    name: "Kat Lazell",
    title: "Senior Program Manager, Cambridge Innovation Center",
  },
  {
    quote:
      "Within 45 minutes we had built our first app with AI. She's incredibly relatable and makes the complex seem easy, leading to her session being the most talked about of the day.",
    name: "Jess Lynch",
    title: "Founding Partner, FoundersEdge",
  },
  {
    quote:
      "I had high expectations but she surpassed all of them. She received the highest scores of any meeting we had ever had.",
    name: "Amanda Swiatocha",
    title: "CMO, Softheon (EmpowerHER)",
  },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Small businesses and non-technical owners. That is our whole focus. If you run a lean team and need AI to pay for itself, you are who we build for.",
  },
  {
    q: "How fast will we see results?",
    a: "Most people leave a workshop using AI the same week. An assessment takes one to two weeks and points you at the wins that matter first.",
  },
  {
    q: "Do we need to buy new software?",
    a: "Usually not. We lead with Claude as one place that connects the tools you already use, and we often find subscriptions you can cut.",
  },
  {
    q: "What if AI is not worth it for us?",
    a: "We will tell you plainly. We do not train owners to admire AI, we train them to put it to work and keep the results.",
  },
  {
    q: "Do we stay dependent on you?",
    a: "No. Every engagement is built so your team can do the work themselves. That is the point.",
  },
];

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
      style={{ boxShadow: "0 8px 24px rgba(23,10,31,0.10)" }}
    >
      {/* gradient top border */}
      <div
        className={`h-[5px] w-full ${theme.bar}`}
        aria-hidden
      />
      <div className="p-8 sm:p-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        {/* left: name / price / cta */}
        <div className="flex flex-col">
          <div className="flex items-start gap-4 mb-5">
            <div
              className={`shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center text-white ${theme.bar}`}
            >
              <Icon className="h-6 w-6" />
            </div>
            {card.badge && (
              <span className="inline-flex items-center h-7 px-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--lbl-orange)]/10 text-[var(--lbl-orange)]">
                {card.badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--lbl-eggplant)] tracking-tight leading-tight mb-3">
            {card.name}
          </h3>
          <div className="mb-2">
            <div className="text-3xl font-semibold text-[var(--lbl-ink)] tracking-tight">
              {card.price}
            </div>
            <div className="text-sm text-gray-600 mt-1">{card.meta}</div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-6">
            {card.desc}
          </p>

          {card.quote && (
            <blockquote className="relative mt-2 mb-8 pl-5 border-l-[3px] border-[var(--lbl-orange)]">
              <p className="text-[17px] italic text-gray-700 leading-relaxed mb-3">
                &ldquo;{card.quote.text}&rdquo;
              </p>
              <footer>
                <div className="font-semibold text-[var(--lbl-eggplant)] text-base">{card.quote.name}</div>
                <div className="text-sm text-gray-500">{card.quote.title}</div>
              </footer>
            </blockquote>
          )}

          <div className="mt-auto pt-2">
            <CTAButton card={card} />
          </div>
        </div>

        {/* right: included / deliverables / best for */}
        <div className={`md:border-l ${theme.divider} md:pl-10`}>
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-orange)] mb-3">
            What&apos;s included
          </div>
          <ul className="space-y-3 mb-6">
            {card.included.map((item, i) => (
              <li key={i} className="flex gap-3 text-[17px] text-gray-800 leading-relaxed">
                <Flame className="h-5 w-5 shrink-0 mt-0.5 text-[var(--lbl-orange)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {card.deliverables && (
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-eggplant)] mb-3">
                {card.name === "AI Readiness Assessment" ? "Deliverables" : "Common projects"}
              </div>
              <div className="flex flex-wrap gap-2">
                {card.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center h-8 px-3 rounded-full text-sm font-medium bg-[var(--lbl-lilac)]/25 text-[var(--lbl-eggplant)] border border-[var(--lbl-lilac)]/60"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {card.note && (
            <p className="text-sm text-gray-600 italic mb-6">{card.note}</p>
          )}

          <div className="pt-5 border-t border-[var(--lbl-lilac)]/40">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--lbl-eggplant)] mb-2">
              Best for
            </div>
            <p className="text-[17px] text-gray-800">{card.bestFor}</p>
          </div>

          {card.footnote && (
            <p className="mt-5 text-sm text-gray-500 leading-relaxed">{card.footnote}</p>
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
        <title>Pricing | Launch by Lunch</title>
        <meta
          name="description"
          content="Practical AI services for small businesses. Discovery calls, hands-on workshops, custom-built AI Chief of Staff, readiness assessments, private team trainings, strategic implementations, and monthly advisory."
        />
        <link rel="canonical" href="https://launchbylunch.co/pricing" />
        <meta property="og:title" content="Pricing | Launch by Lunch" />
        <meta
          property="og:description"
          content="Priced-plainly AI services for small businesses. From a free discovery call to fully built systems."
        />
        <meta property="og:url" content="https://launchbylunch.co/pricing" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-hero-soft">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
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
        </div>
      </section>

      {/* ── Service cards stack ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
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

          {/* trusted-by strip */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-[var(--lbl-lilac)]/70 mb-5">
              Trusted by teams at
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 items-center">
              {logos.map((l) => (
                <LogoMark key={l.name} name={l.name} src={l.src} />
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
                <figcaption>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-[var(--lbl-lilac)]">{t.title}</div>
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
