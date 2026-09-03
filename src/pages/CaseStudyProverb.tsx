import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";

const CALENDLY = "https://calendly.com/karen-launchbylunch/30min";

const aboutStats = [
  { label: "pending — no revenue-impact numbers yet" },
  { label: "pending — no revenue-impact numbers yet" },
];

const steps = [
  {
    n: "01",
    title: "Strategy & Guidance Document",
    body: "Mapped ICP, verticals, and positioning through a round of leadership interviews. Done.",
  },
  {
    n: "02",
    title: "Claude Code foundation",
    body: "9 team members onboarded, 6 tools connected (Gmail, Google Drive, Google Calendar, HubSpot, Granola, Slack). Done.",
  },
  {
    n: "03",
    title: "Voice-matched content system",
    body: "LinkedIn content trained on each person's own writing, live for two of the team's principals. Done.",
  },
  {
    n: "04",
    title: "Pipeline Watch",
    body: "A stage-aware system that flags deals gone quiet and suggests next steps, mapped against live HubSpot data. In build.",
  },
  {
    n: "05",
    title: "Revival",
    body: "Mining twenty years of past relationships, scored and segmented for reactivation. First full test pass complete, not yet live.",
  },
];

const outcomes: { label: string; body: string }[] = [
  { label: "74 warm relationships identified:", body: "from 20 years of email and CRM history, none of them cold outreach." },
  { label: "21 / 41 / 11 segmentation:", body: "sorted into Revive, Resurrect, and Rekindle tiers by relationship strength and timing." },
  { label: "12 deals ($1.09M) caught in a hidden bottleneck:", body: "found stuck in a pipeline stage that looked closed but wasn't, in a live pipeline audit." },
  { label: "Suggest, never send:", body: "every system built with a human review step before anything reaches a real contact." },
];

const connectedTools: { name: string; domain: string }[] = [
  { name: "Gmail", domain: "gmail.com" },
  { name: "Google Drive", domain: "drive.google.com" },
  { name: "Google Calendar", domain: "calendar.google.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Granola", domain: "granola.ai" },
  { name: "Slack", domain: "slack.com" },
];

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{num}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function StatCardTodo({ label }: { label: string }) {
  return (
    <div className="stat-card stat-card-todo">
      <span className="stat-num stat-num-todo">[TBD]</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function PlaceholderQuote({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <figure className="quote-card quote-card-lg">
      <span className="quote-mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="quote-text">
        [Placeholder quote - pending real testimonial and consent]
      </blockquote>
      <figcaption className="quote-attr">
        <span className="quote-photo quote-photo-placeholder" aria-hidden="true">
          {initials}
        </span>
        <span className="quote-attr-text">
          <span className="quote-name">{name}</span>
          <span className="quote-role">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

const CaseStudyProverb = () => {
  return (
    <div className="proverb-page">
      <Helmet>
        <title>Proverb Agency Case Study (Internal Draft) | Launch by Lunch</title>
        <meta
          name="description"
          content="Internal structural draft of a case study page for Proverb Agency. Not real client content."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="test-banner">
        INTERNAL TEST DRAFT - NOT REAL CLIENT CONTENT - DO NOT SHARE
      </div>

      {/* Co-brand bar */}
      <header className="topbar">
        <div className="topbar-inner">
          <span className="topbar-client">Launch by Lunch</span>
          <span className="topbar-x">×</span>
          <span className="topbar-client">Proverb Agency</span>
          <span className="topbar-tag">Case Study</span>
        </div>
      </header>

      <main className="container">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-h1">
            Turning 20 years of relationships into a
            <br />
            <span className="grad-text">repeatable pipeline</span>
          </h1>
          <p className="lede">
            Proverb Agency's new-business team was doing strong work with no system behind it — deals
            went dark after quotes, and two decades of client relationships sat underused. Launch by
            Lunch is building an AI-powered new business engine on Claude Code to change that.
          </p>
          <span className="pending-pill">Phase 1 of 2 — in progress</span>
          <div className="stat-row">
            <StatCard num="74" label="warm relationships identified and scored for reactivation" />
            <StatCard num="32" label="deals ($2.23M) mapped in a live pipeline audit" />
            <StatCard num="9" label="team members onboarded to Claude Code" />
          </div>
        </section>

        {/* About the client */}
        <section className="block about-section">
          <div className="about-card">
            <p className="eyebrow">ABOUT PROVERB AGENCY</p>
            <h2 className="h2">A 20-year branding and marketing agency for places that need to tell their story</h2>
            <p className="body-p">
              Proverb Agency is a place-branding and marketing agency (est. 1997) working with real
              estate developers, anchor institutions, and municipalities — helping organizations with
              large, complicated missions find their people and tell their story.
            </p>

            <div className="stat-row about-stats">
              {aboutStats.map((s, i) => (
                <StatCardTodo key={i} label={s.label} />
              ))}
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="glance-wrap">
          <dl className="glance">
            <div className="glance-cell">
              <dt>Industry</dt>
              <dd>Place branding &amp; marketing</dd>
            </div>
            <div className="glance-cell">
              <dt>Team size</dt>
              <dd>~9 people</dd>
            </div>
            <div className="glance-cell">
              <dt>Engagement</dt>
              <dd>AI-powered new business engine (Claude Code), Phase 1</dd>
            </div>
            <div className="glance-cell">
              <dt>Timeline</dt>
              <dd>Kickoff July 2026 → ongoing</dd>
            </div>
          </dl>
        </section>

        {/* Challenge */}
        <section className="block">
          <p className="eyebrow">The Challenge</p>
          <h2 className="h2">Great relationships, no system to run them through</h2>
          <p className="body-p">
            New-business outreach lived in inboxes and individual habits. Deals that went quiet after a
            quote had no systematic follow-up — roughly 3 in 10 went dark with nobody chasing them.
          </p>
          <p className="body-p">
            Proverb's twenty-year client network was a real asset sitting mostly untapped, and a past
            experience with an outside outreach vendor had left the team wary of anything that touched
            their relationships without a human reviewing it first — any system had to suggest, never send.
          </p>
        </section>

        {/* What we built */}
        <section className="block">
          <p className="eyebrow">What We Built</p>
          <h2 className="h2">A five-part engine, built in stages, human-approved at every step</h2>
          <p className="subhead">
            Foundation and content are live; pipeline and relationship-mining are in active build.
          </p>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-n grad-text">{s.n}</div>
                <div className="step-body">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="block">
          <p className="eyebrow">The Results</p>
          <h2 className="h2">Real findings, from a system still being built</h2>
          <span className="pending-pill">Engagement in progress — quantified business-outcome numbers (win rate, revenue) not yet available.</span>
          <PlaceholderQuote name="[Client Contact]" role="[Title]" initials="CC" />

          <div className="outcomes outcomes-spaced">
            <ul className="outcome-list">
              {outcomes.map((o) => (
                <li key={o.label}>
                  <strong>{o.label}</strong> {o.body}
                </li>
              ))}
            </ul>
          </div>

          <div className="tool-logos">
            <p className="tool-logos-label">Connected tools</p>
            <ul className="tool-logo-grid">
              {connectedTools.map((t) => (
                <li key={t.name} className="tool-logo">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=128`}
                    alt={`${t.name} logo`}
                    loading="lazy"
                  />
                  <span>{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* In their words */}
        <section className="block">
          <p className="eyebrow">In Their Words</p>
          <PlaceholderQuote name="[Second Contact]" role="[Second Title]" initials="SC" />
        </section>
      </main>

      {/* CTA band */}
      <div className="cta-wrap">
        <section className="cta">
          <h2 className="cta-h2">Want a brain like this for your team?</h2>
          <p className="cta-p">
            If your best knowledge lives in people's heads and recurring work is eating your week,
            we can build something that fits how you actually operate.
          </p>
          <a
            className="cta-btn"
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('book_consultation', { location: 'case_study_proverb' })}
          >
            Book a call with Launch by Lunch
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyProverb;
