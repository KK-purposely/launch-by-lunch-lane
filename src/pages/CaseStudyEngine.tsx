import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";

const CALENDLY = "https://calendly.com/karen-launchbylunch/30min";

const aboutSteps = [
  {
    n: "01",
    title: "Infrastructure",
    body: "220,000 square feet of fully-managed wet lab, engineering, and office space, fully equipped for building Tough Tech.",
  },
  {
    n: "02",
    title: "Programs",
    body: "Educational programming that addresses the complex challenges Tough Tech founders face, guiding them from idea to investment to impact.",
  },
  {
    n: "03",
    title: "Ecosystem",
    body: "A thriving network of entrepreneurs, investors, academia, public officials, and corporate partners.",
  },
];

const steps = [
  {
    n: "01",
    title: "Built the shared company brain",
    body: "We stood up a single, secure, always-current knowledge base on Claude, so the AI habits people already had could plug into one governed source of truth, instead of everyone working from their own version of it. It refreshes on a monthly rhythm that leadership reviews in plain English, no code, no diffs, just a quick conversational sign-off.",
  },
  {
    n: "02",
    title: "Added a personal layer for every employee",
    body: "On top of the shared brain, each team member gets a private working layer the assistant remembers, their priorities, their projects, their style, so it works like a real partner, not a generic chatbot. Private to them, never shared.",
  },
  {
    n: "03",
    title: "Automated the recurring work, team by team",
    body: "We built automations around what each team was already doing: meeting follow-ups captured and routed automatically, resident and partner reviews, weekly status, daily facilities summaries. Each one is a 'push a button, get the artifact' workflow, not one tool stretched thin across everyone.",
  },
  {
    n: "04",
    title: "Taught the whole company how to use it",
    body: "Before and after the build, Karen and Ariel spent real time helping staff understand the foundation: what was being built, how it fit together, and why. That upfront investment in shared understanding is what turned a rollout into real adoption.",
  },
  {
    n: "05",
    title: "Stayed on as an ongoing partner",
    body: "The Engine moved into a monthly retainer, so the brain keeps current and the team has a partner for new questions and new workflows as they grow.",
  },
];

const outcomes: { label: string; body: string }[] = [
  {
    label: "9 to 21 Engines supported:",
    body: "The Builder Platform team took on the second NSF Engines cohort without adding anyone to the team.",
  },
  {
    label: "About 1,500 hours a year returned to the team:",
    body: "roughly 29 hours a week, about three-quarters of a full-time position, now spent on the Engines.",
  },
  {
    label: "Call prep and debriefs cut from 1 hour to 10 minutes each:",
    body: "across about 40 Engine calls a month, roughly 67 hours a month back.",
  },
  {
    label: "19 skills the team built themselves in the Navigator library:",
    body: "every Navigator uses the same tools on every Engine, so the quality of support no longer depends on who is running the account that week.",
  },
  {
    label: "6+ tools in the tech stack connected to Claude:",
    body: "the brain plugs into the systems the team already lives in.",
  },
  {
    label: "8 automations and skills from the original Launch by Lunch build, running in production:",
    body: "built for real workflows, not demos.",
  },
  {
    label: "Real adoption across a busy 37-person team:",
    body: "people picked it up quickly because it was built around work they were already doing.",
  },
  {
    label: "Workflows that fit each team:",
    body: "five functional areas got automations built around how they actually operate.",
  },
  {
    label: "A durable foundation:",
    body: "the brain stays current on a monthly rhythm leadership reviews in minutes.",
  },
];

const connectedTools: { name: string; domain: string }[] = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Gmail", domain: "gmail.com" },
  { name: "Google Drive", domain: "drive.google.com" },
  { name: "Google Calendar", domain: "calendar.google.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "Granola", domain: "granola.ai" },
  { name: "Fathom", domain: "fathom.video" },
  { name: "Monday.com", domain: "monday.com" },
  { name: "Airtable", domain: "airtable.com" },
  { name: "Limble", domain: "limblecmms.com" },
  { name: "QuickBooks", domain: "quickbooks.intuit.com" },
];

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num grad-text">{num}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const CaseStudyEngine = () => {
  return (
    <div className="engine-page">
      <Helmet>
        <title>The Engine Case Study | Launch by Lunch</title>
        <meta
          name="description"
          content="How Launch by Lunch built The Engine a shared company brain on Claude plus team-specific automations. One team went from supporting 9 Engines to 21 with no added headcount and got about 1,500 hours a year back."
        />
        <meta property="og:title" content="The Engine Case Study | Launch by Lunch" />
        <meta
          property="og:description"
          content="A team that scaled from 9 Engines to 21 without adding headcount, and got about 1,500 hours a year back."
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://launchbylunch.co/case-studies/engine" />
      </Helmet>

      {/* Co-brand bar */}
      <header className="topbar">
        <div className="topbar-inner">
          <img
            src="/lovable-uploads/9e01cb2b-d7f4-4b83-adb5-706805de7735.png"
            height={32}
            alt="Launch by Lunch"
          />
          <span className="topbar-x">×</span>
          <span className="topbar-client">
            <img src="/case-studies/engine/engine-gear.png" className="topbar-gear" alt="The Engine" />
            <img src="/case-studies/engine/engine-wordmark.png" className="topbar-wordmark" alt="The Engine" />
          </span>
          <span className="topbar-tag">Case Study</span>
        </div>
      </header>

      <main className="container">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-h1">
            A whole company got
            <br />
            <span className="grad-text">a second brain</span> and hours back every week
          </h1>
          <p className="lede">
            Most of The Engine's team was already using AI every day, just individually, tool by tool, without a shared foundation. Launch by Lunch turned that scattered momentum into one shared, AI-powered company brain plus automations tailored to how each team actually works, then taught the whole staff how to use it together. Adoption stuck because it built on habits people already had.
          </p>
          <div className="stat-row">
            <StatCard num="100%" label="of the team working from one shared, governed brain" />
            <StatCard num="9 to 21" label="Engines supported with no added headcount" />
            <StatCard num="~1,500" label="hours a year returned to the team" />
          </div>
        </section>

        {/* About The Engine */}
        <section className="block about-section">
          <div className="about-card">
            <img
              src="/case-studies/engine/mit-engine-logo.jpg"
              alt="The Engine, built by MIT"
              className="about-logo"
            />
            <p className="eyebrow">ABOUT THE ENGINE</p>
            <h2 className="h2">
              Founded by MIT to bridge the gap between breakthrough science and real-world impact
            </h2>
            <p className="body-p">
              The Engine is a nonprofit incubator and accelerator dedicated to providing early-stage
              Tough Tech companies with the critical infrastructure, programs, and ecosystem they
              need to thrive. MIT created The Engine in 2016 to support Tough Tech startups, those
              solving the world's most important challenges through science, engineering, and
              entrepreneurship, as they move from research breakthroughs to commercial impact.
            </p>

            <div className="steps about-steps">
              {aboutSteps.map((s) => (
                <div className="step" key={s.n}>
                  <div className="step-n grad-text">{s.n}</div>
                  <div className="step-body">
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-text">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="stat-row about-stats">
              <StatCard num="135+" label="resident companies across 15 industries" />
              <StatCard num="$10.9B" label="total funds raised by current & former residents" />
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="glance-wrap">
          <dl className="glance">
            <div className="glance-cell">
              <dt>Industry</dt>
              <dd>Venture &amp; tough-tech incubation</dd>
            </div>
            <div className="glance-cell">
              <dt>Team size</dt>
              <dd>37 people</dd>
            </div>
            <div className="glance-cell">
              <dt>Engagement</dt>
              <dd>Company brain + automations, now retainer</dd>
            </div>
            <div className="glance-cell">
              <dt>Timeline</dt>
              <dd>April 2026 to ongoing</dd>
            </div>
          </dl>
        </section>

        {/* Challenge */}
        <section className="block">
          <p className="eyebrow">The Challenge</p>
          <h2 className="h2">AI adoption wasn't the gap, alignment was</h2>
          <p className="body-p">
            Individually, The Engine's team was already deep into AI; people across departments used
            it daily to move faster and get through their own work. The gap wasn't willingness or
            ability, it was structure: everyone was experimenting on their own, with their own tools
            and their own habits, and none of it was shared, governed, or built to scale across the
            team.
          </p>
          <p className="body-p">
            The Engine works with startups and founders building hard things, supporting hundreds of
            them at once. That means things move fast and there are a lot of moving pieces. The
            knowledge that made the team effective lived across different systems or was buried in
            docs, so answers were hard to find and easy to lose track of.
          </p>
          <p className="body-p">
            That fragmentation showed up as knowledge scattered across systems and buried in
            individual workflows, and a CRM only useful when it reflected reality, which took
            constant manual effort to maintain. Recurring work, meeting follow-ups, resident and
            partner updates, facilities reports, weekly status, ate real hours every week that a
            more organized system could reclaim. The Engine needed to bring that scattered momentum
            into one governed foundation: centralized knowledge, consistent workflows, and
            automations that reflected how the team actually operates.
          </p>
        </section>

        {/* What we built */}
        <section className="block">
          <p className="eyebrow">What We Built</p>
          <h2 className="h2">A two-layer brain, plus automations made for each team</h2>
          <p className="subhead">
            One shared knowledge base for the whole company, department-specific workflows on top,
            and the education to make both stick.
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

        {/* Going Further */}
        <section className="block">
          <p className="eyebrow">Going Further</p>
          <h2 className="h2">Then the team kept building</h2>
          <p className="body-p">
            Once the foundation was in place, The Builder Platform team kept building on it at their own pace. They created the Navigator system their whole team runs on: the Navigator Playbook plus a shared library of 19 skills covering every step of an Engine relationship. That includes first outreach, account brief setup, pre-call prep, post-call debriefs, advisor briefs, 90-day action plans, resource and funding matching, and NSF report narratives. Every Navigator uses the same tools on every Engine, so the quality of support no longer depends on who is running the account that week. Debriefs write assessment scores straight into Airtable, so portfolio data stays current without anyone logging it separately.
          </p>
          <p className="body-p">
            The team also uses these tools to go deeper and to check their own work. Before a first call with an Engine, they build a deep dive on its market, capital options, path to commercialization, and workforce, so they know where the risk sits. Cross-portfolio pattern passes run parallel agents that each look at one Engine without seeing the others, then compare findings to surface patterns no single account would show. Before the Cohort 2 handoff, they ran a 28-agent pressure test on the full Navigator workflow and fixed the gaps before any Engine ran into them. Recurring jobs like the weekly team sync report and to-do cleanup now run on a schedule.
          </p>
        </section>

        {/* Results */}
        <section className="block">
          <p className="eyebrow">The Results</p>
          <h2 className="h2">From 9 Engines to 21, with no added headcount</h2>
          <p className="body-p">
            When the second NSF Engines cohort began, The Builder Platform went from supporting 9 Engines to 21 without adding anyone to the team. Claude is a big part of how that works.
          </p>
          <figure className="quote-card quote-card-lg team-quote">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-text">
              <p>Every Navigator uses the same tools on every Engine, so the quality of support no longer depends on who is running the account that week.</p>
              <p>The judgment calls are still ours. What changed is that we spend our time on those decisions and on the Engines instead of on prep and paperwork.</p>
            </blockquote>
            <figcaption className="quote-attr">
              <img className="quote-photo" src="/case-studies/engine/engine-gear.png" alt="The Engine" />
              <span className="quote-attr-text">
                <span className="quote-name">The Builder Platform team</span>
                <span className="quote-role">The Engine</span>
              </span>
            </figcaption>
          </figure>

          <div className="results-table-wrap" role="region" aria-label="Workflow time savings" tabIndex={0}>
            <table className="results-table">
              <thead>
                <tr><th scope="col">Workflow</th><th scope="col">Before</th><th scope="col">After</th><th scope="col">Impact</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Call prep</th><td>1 hour</td><td>10 minutes</td><td>About 67 hours a month combined with debriefs (about 40 Engine calls a month)</td></tr>
                <tr><th scope="row">Post-call debrief</th><td>1 hour</td><td>10 minutes</td><td>Included above</td></tr>
                <tr><th scope="row">Morning Brief</th><td>Separate tools</td><td>One ranked list</td><td>2.5 hours a week for each of 5 team members</td></tr>
                <tr><th scope="row">Weekly status</th><td>90 minutes</td><td>45 minutes</td><td>45 minutes a week</td></tr>
                <tr className="results-total"><th scope="row">Total</th><td></td><td></td><td>About 29 hours a week, about 1,500 hours a year, roughly three-quarters of a full-time position</td></tr>
              </tbody>
            </table>
          </div>
          <p className="results-note">Figures reported by The Builder Platform team.</p>

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
          <figure className="quote-card quote-card-lg">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-text">
              Launch by Lunch built something that fits our existing tool stack and the requirements
              of how we do our work every day. And that made the investment worth it.
            </blockquote>
            <figcaption className="quote-attr">
              <img
                className="quote-photo"
                src="/case-studies/engine/katherine-otway.jpg"
                alt="Katherine Otway"
              />
              <span className="quote-attr-text">
                <span className="quote-name">Katherine Otway</span>
                <span className="quote-role">Chief Marketing Officer, The Engine</span>
              </span>
            </figcaption>
          </figure>
          <figure className="quote-card quote-card-lg team-quote">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-text">
              <p>Every Navigator uses the same tools on every Engine, so the quality of support no longer depends on who is running the account that week.</p>
              <p>The judgment calls are still ours. What changed is that we spend our time on those decisions and on the Engines instead of on prep and paperwork.</p>
            </blockquote>
            <figcaption className="quote-attr">
              <img className="quote-photo" src="/case-studies/engine/engine-gear.png" alt="The Engine" />
              <span className="quote-attr-text">
                <span className="quote-name">The Builder Platform team</span>
                <span className="quote-role">The Engine</span>
              </span>
            </figcaption>
          </figure>
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
            onClick={() => trackEvent('book_consultation', { location: 'case_study_engine' })}
          >
            Book a call with Launch by Lunch
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyEngine;
