import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Layers,
  MessageSquare,
  FileText,
  CalendarCheck,
  ListChecks,
  Receipt,
  RefreshCw,
  Clock,
  CheckCircle2,
  Brain,
  TrendingUp,
  Search,
} from "lucide-react";

const integrations = [
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Google Calendar", logo: "/logos/google-calendar.svg" },
  { name: "Google Drive", logo: "/logos/google-drive.webp" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Zoom", logo: "/logos/zoom.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Airtable", logo: "/logos/airtable.svg" },
  { name: "Trello", logo: "/logos/trello.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "Fathom", logo: "/logos/fathom.png" },
];

const currentProblems = [
  "Information lives in emails, docs, Slack, and people's heads",
  "Work gets duplicated, dropped, or delayed",
  "No one has a clear, real-time view of what's happening",
  "Simple things take too long because nothing is connected",
];

const inPractice = [
  {
    icon: MessageSquare,
    text: "Ask a question about a client, project, or deal and get an immediate, accurate answer",
  },
  {
    icon: FileText,
    text: "Generate presentations, summaries, or updates using your company's real data",
  },
  {
    icon: CalendarCheck,
    text: "Automatically prep for meetings and send follow-ups without manual work",
  },
  {
    icon: ListChecks,
    text: "Create and track team-wide to-dos that update across systems",
  },
  {
    icon: Receipt,
    text: "Generate invoices, reports, or client communications in seconds",
  },
  {
    icon: RefreshCw,
    text: "Keep projects updated without chasing people for status",
  },
];


const unlocks = [
  { icon: Clock, text: "Less time searching, rewriting, and coordinating" },
  { icon: CheckCircle2, text: "More consistency across how work gets done" },
  { icon: Brain, text: "Faster decision-making with real context" },
  { icon: Search, text: "Reduced dependency on any one person holding information" },
  { icon: TrendingUp, text: "A system that improves as your business grows" },
];

const HowYourBusinessChanges = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            How Your Business Actually Changes
          </h2>
        </div>

        {/* Current problems */}
        <div className="mb-16 bg-red-950 rounded-2xl p-8 md:p-10 border border-red-800/50 shadow-[0_0_30px_-5px_rgba(220,38,38,0.15)]">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="h-7 w-7 text-red-400" />
            <h3 className="text-2xl font-bold text-red-100">
              Most teams are operating across disconnected tools:
            </h3>
          </div>
          <p className="text-red-300/70 text-sm font-medium mb-6 ml-10">This is costing you time, money, and momentum every single day.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentProblems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-900/50 rounded-xl p-5 border border-red-800/40">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-red-100 text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we build */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-launch-purple mb-2">
            What we build instead:
          </h3>
          <div className="bg-gradient-to-r from-launch-purple to-launch-orange rounded-2xl p-8 mt-6 text-white">
            <Layers className="h-10 w-10 mb-4 opacity-90" />
            <p className="text-xl font-semibold mb-3">
              We create a centralized AI layer across your business.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              A single operational system that connects your tools, your data, and your workflows so your team can access information, take action, and move faster from one place.
            </p>
          </div>
        </div>

        {/* In practice */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-launch-purple mb-6">
            What that actually looks like in practice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inPractice.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <Card key={i} className="border border-border hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ItemIcon className="h-5 w-5 text-launch-purple/70" />
                      </div>
                      <p className="text-foreground text-lg font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Under the hood */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-launch-purple mb-2">
            Under the hood (simple, not technical)
          </h3>
          <p className="text-lg text-muted-foreground mt-2 mb-6">
            We use tools like Claude Code to connect your existing systems:
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {connectedTools.map((tool, i) => {
              const ToolIcon = tool.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-sm border border-border">
                  <ToolIcon className="h-5 w-5 text-launch-orange" />
                  <span className="text-foreground font-medium text-lg">{tool.label}</span>
                </div>
              );
            })}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So instead of jumping between platforms, your team operates from a single pane of glass.
          </p>
        </div>

        {/* What this unlocks */}
        <div>
          <h3 className="text-2xl font-bold text-launch-purple mb-6">
            What this unlocks for your team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unlocks.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm border border-border">
                  <ItemIcon className="h-5 w-5 text-launch-orange mt-0.5 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowYourBusinessChanges;
