import { Card, CardContent } from "@/components/ui/card";
import secondBrainImg from "@/assets/second-brain.png";
import secondBrainVisual from "@/assets/second-brain-visual.png";
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
  Zap,
  Lightbulb,
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
  { icon: Layers, text: "360° understanding of your entire business at any time" },
];

const HowYourBusinessChanges = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            How Your Business is Working Today
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


        {/* Second Brain Vision */}
        <div id="second-brain" className="mb-16 bg-gradient-to-br from-launch-light via-white to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img src={secondBrainImg} alt="AI second brain illustration" loading="lazy" width={512} height={512} className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 object-contain" style={{ filter: 'drop-shadow(0 0 35px rgba(126, 34, 206, 0.7)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.4)) brightness(1.1)' }} />
              <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
                What If Everyone on Your Team<br />
                <span className="text-launch-orange">Had a Second Brain?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                One that knew everything happening across your business — and could actually do something with it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-7">
                  <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-5 w-5 text-launch-purple/70" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could research every interaction your team has ever had with a given company or prospect and tell you how to best respond — instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-7">
                  <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-5 w-5 text-launch-purple/70" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could look at your past LinkedIn posts and create a new one in your voice, based on conversations you've had that week.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-7">
                  <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-launch-purple/70" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could tell you exactly what to focus on today — and what's obviously getting in the way.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-7">
                  <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-5 w-5 text-launch-purple/70" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could create a presentation based on a conversation you'd had earlier that day in under five minutes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* We connect the tools you already use */}
        <div className="mb-16 text-center bg-white rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            We connect the tools you already use
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            So instead of jumping between platforms, your team operates from a single pane of glass.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {integrations.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img src={item.logo} alt={`${item.name} logo`} className="w-10 h-10 object-contain" />
                </div>
                <span className="text-sm text-muted-foreground font-medium group-hover:text-launch-purple transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* In practice */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-launch-purple mb-3">
              What that actually looks like in practice
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real workflows. Real results. Every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inPractice.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="group relative bg-card rounded-2xl p-8 border border-border hover:border-launch-purple/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsl(var(--launch-purple)/0.25)] hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-purple to-launch-orange rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-gradient-to-br from-launch-purple/15 to-launch-orange/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <ItemIcon className="h-7 w-7 text-launch-purple" />
                  </div>
                  <p className="text-foreground text-lg font-semibold leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second Brain Visual */}
        <div className="mb-20 flex justify-center">
          <img
            src={secondBrainVisual}
            alt="Three-step process: The Second Brain organizes company knowledge, Integrations connect your tools, Smart Automations power daily workflows"
            className="w-full max-w-5xl rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* What this unlocks */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-launch-purple/5 via-transparent to-launch-orange/5 rounded-3xl -m-4" />
          <div className="relative bg-gradient-to-br from-launch-purple to-launch-purple/90 rounded-3xl p-10 md:p-14 text-white shadow-[0_20px_60px_-15px_hsl(var(--launch-purple)/0.4)]">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                What this unlocks for your team
              </h3>
              <p className="text-white/70 text-lg">The compounding advantage of connected intelligence.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {unlocks.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-launch-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="h-6 w-6 text-launch-orange" />
                    </div>
                    <p className="text-white text-lg font-semibold leading-snug">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowYourBusinessChanges;
