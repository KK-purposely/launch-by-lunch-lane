
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Zap,
  CheckCircle2,
  MessageSquare,
  FileText,
  CalendarCheck,
  Mail,
  BarChart3,
  Shield,
  Users,
  Workflow,
} from "lucide-react";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/claude-code/IntegrationsSection";

const painPoints = [
  "Your team wastes hours searching Slack, email, and docs for answers that should be easy to find",
  "You're paying for a dozen tools that don't talk to each other",
  "You've heard AI can help — but every pitch sounds like it's built for Big Tech, not your team",
  "You want to move faster without making your people feel replaceable",
];

const brainFeatures = [
  {
    icon: FileText,
    title: "Instant Company Knowledge",
    desc: "Every policy, process, and decision — searchable and accessible to your whole team in seconds.",
  },
  {
    icon: Shield,
    title: "Onboarding That Doesn't Suck",
    desc: "New hires get answers on day one instead of waiting three weeks to figure out who to ask.",
  },
  {
    icon: Users,
    title: "Cross-Team Clarity",
    desc: "Sales knows what marketing promised. Ops knows what the client signed. No more telephone games.",
  },
  {
    icon: BarChart3,
    title: "Living Documentation",
    desc: "Your company brain grows with you — it updates as your team works, not as a side project no one finishes.",
  },
];

const automationExamples = [
  {
    icon: FileText,
    title: "Meeting Notes → Proposal",
    desc: "Fathom captures your sales call, Claude drafts a polished proposal with next steps — ready to send before you finish your coffee.",
    tools: "Fathom + Claude",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Invite → Agenda",
    desc: "Schedule a meeting and Claude builds the agenda in Google Docs, pre-filled with context from your last conversation. Attendees show up prepared.",
    tools: "Google Calendar + Google Docs + Claude",
  },
  {
    icon: MessageSquare,
    title: "Slack Question → Instant Answer",
    desc: "Someone asks a question in Slack and Claude pulls the answer from your company brain — no more pinging five people to find one doc.",
    tools: "Slack + Claude",
  },
  {
    icon: Mail,
    title: "Email Thread → CRM Update",
    desc: "A client email comes in, Claude extracts the key details and updates HubSpot — deal stage, notes, follow-up tasks — without you touching the CRM.",
    tools: "Gmail + HubSpot + Claude",
  },
  {
    icon: Workflow,
    title: "Task Assignment → Full Workflow",
    desc: "Create a task in Trello or Asana and Claude sets up the project doc, notifies the team in Slack, and blocks time on your calendar.",
    tools: "Trello/Asana + Slack + Google Calendar + Claude",
  },
  {
    icon: BarChart3,
    title: "Weekly Report → Executive Summary",
    desc: "Claude pulls data from your CRM, project boards, and calendar to generate a weekly leadership briefing — delivered every Monday morning.",
    tools: "HubSpot + Asana + Google Calendar + Claude",
  },
];

const EnterpriseServices = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Enterprise AI Services for SMBs | Launch by Lunch</title>
        <meta
          name="description"
          content="AI adoption that actually fits your business. We help small and medium-sized teams build a company brain, automate workflows, and love their jobs even more."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-launch-purple via-launch-purple to-launch-purple/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-launch-orange rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-launch-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-lg font-medium">
            <Zap className="h-4 w-4 text-launch-orange" />
            AI That Fits Your Business
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Overthinking AI.<br />
            <span className="text-launch-orange">Start Using It.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            We help small and medium-sized businesses adopt AI in a way that
            actually makes sense — cutting through the noise so your team saves
            money, works smarter, and loves what they do even more.
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            No jargon. No enterprise sales pitch. Just practical AI that works
            for <em>your</em> team, <em>your</em> tools, and{" "}
            <em>your</em> budget.
          </p>
          <Button
            size="lg"
            className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-2xl hover:scale-105 group"
            onClick={() =>
              window.open(
                "https://calendly.com/karen-launchbylunch/30min",
                "_blank"
              )
            }
          >
            <span className="flex items-center gap-3">
              Let's Talk About Your Team
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-launch-light py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
            Sound Familiar?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            If any of these hit home, you're exactly who we built this for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5"
              >
                <CheckCircle2 className="h-6 w-6 text-launch-orange mt-0.5 flex-shrink-0" />
                <p className="text-gray-800 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Brain */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-launch-light rounded-full px-4 py-2 mb-6 text-launch-purple font-semibold">
              <Brain className="h-5 w-5 text-launch-orange" />
              Service One
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
              Build Your Company Brain
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A single source of truth for everything your company knows. No one
              on your team should ever be without an answer again — whether
              it's your newest hire or your most senior leader.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {brainFeatures.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <ItemIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-launch-purple mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automations Intro */}
      <section className="bg-gradient-to-r from-launch-purple to-launch-orange py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-lg font-semibold">
            <Zap className="h-5 w-5" />
            Service Two
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Automate What's Already on Your Plate
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Your team already uses great tools. We make them talk to each other —
            so the busywork disappears and your people focus on the work that
            actually matters.
          </p>
        </div>
      </section>

      {/* Reuse Integrations Section from Claude Code */}
      <IntegrationsSection />

      {/* Automation Examples */}
      <section className="bg-launch-light py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
            What This Looks Like in Practice
          </h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
            Real automations we build for teams like yours — all running inside
            Claude, all without leaving your workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationExamples.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <Card
                  key={i}
                  className="border border-gray-200 hover:border-launch-orange hover:shadow-[0_0_20px_rgba(242,123,53,0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-7">
                    <div className="w-12 h-12 bg-gradient-to-br from-launch-purple to-launch-orange rounded-xl flex items-center justify-center mb-4">
                      <ItemIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-launch-purple mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <span className="inline-block text-sm font-medium text-launch-orange bg-launch-orange/10 rounded-full px-3 py-1">
                      {item.tools}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
          Ready to Make AI Work<br />
          <span className="text-launch-orange">for Your Team?</span>
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
          No pitch decks. No upsells. Just a conversation about what your team
          actually needs — and how we can help you get there.
        </p>
        <Button
          size="lg"
          className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
          onClick={() =>
            window.open(
              "https://calendly.com/karen-launchbylunch/30min",
              "_blank"
            )
          }
        >
          <span className="flex items-center gap-3">
            Schedule a Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseServices;
