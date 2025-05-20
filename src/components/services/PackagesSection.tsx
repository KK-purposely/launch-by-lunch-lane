
import React from "react";
import ServicePackage from "./ServicePackage";
import { Layers, ChartBar } from "lucide-react";

const PackagesSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-launch-purple mb-8">Our Packages</h2>
      
      {/* Momentum Builder */}
      <ServicePackage
        title="Momentum Builder"
        description="For Teams Ready to Turn Concepts Into Testable Products"
        price="$3,000 – $4,500"
        time="10–15 hours"
        includes={[
          "1:1 strategy + design sprint (CEO-led)",
          "Technical stack matching & AI flow design (CTO-led)",
          "Full build of interactive prototype, micro-app, or internal tool",
          "Up to 2 feedback iterations",
          "Demo day prep or investor-ready video walkthrough"
        ]}
        perfectFor="No-code MVPs, internal automation tools, early pilots for pre-seed or pre-revenue startups."
        icon={Layers}
      />
      
      {/* Launch Lab */}
      <ServicePackage
        title="Launch Lab"
        description="For Startups or Business Units Ready to Ship Something Live"
        price="$9,000 – $15,000"
        time="30–50 hours"
        includes={[
          "Full-service vibe coding studio: product strategy, UX wireframes, build, test",
          "Real-time collaboration w/ CTO + CEO",
          "Tooling setup: automation, API integrations, AI features (chatbots, workflows, etc.)",
          "Implementation support up to soft launch",
          "30-day check-in + optimization sprint"
        ]}
        perfectFor="Teams without devs, marketing departments with an idea, or solo founders ready to go live without engineering."
        icon={Layers}
      />
      
      {/* Enterprise Innovation Sprint */}
      <ServicePackage
        title="Enterprise Innovation Sprint"
        description="AI-Powered Product Development for Enterprises, Orgs, & Agencies"
        price="Custom ($25,000+)"
        time="60–100+ hours"
        includes={[
          "Dedicated CTO + CEO pair as fractional product + technical leads",
          "Internal innovation sprint: from whiteboard to launch",
          "Live working sessions with your team",
          "Custom integrations into enterprise systems (Salesforce, Airtable, internal APIs, etc.)",
          "Optional: staff training, AI literacy bootcamp, async support library"
        ]}
        perfectFor="Innovation teams, digital transformation units, enterprise departments testing new service lines or tools."
        icon={ChartBar}
      />
    </section>
  );
};

export default PackagesSection;
