import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  Shield,
  Sparkles,
} from "lucide-react";

const businessOutcomes = [
  { icon: Zap, stat: "45%", label: "reduction in manual, repetitive tasks" },
  { icon: Clock, stat: "10+", label: "hours saved per team member per week" },
  { icon: Brain, stat: "3×", label: "faster execution across workflows" },
  { icon: Shield, stat: "87%", label: "improvement in consistency & accuracy" },
];

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
    exampleTitle: "Ask: \"What's the latest with Acme Corp?\"",
    examplePrompt: "What's the latest with Acme Corp?",
    exampleOutput: `Acme Corp — Account Snapshot

• Stage: Contract review (sent Tuesday by Sarah)
• Last touch: Zoom call on April 11 with their CTO, Marcus. He flagged concerns about onboarding timeline.
• Open items:
   - Marcus is waiting on revised SOW (assigned to you, due Friday)
   - Legal review pending from their side, ETA next Monday
• Recent context:
   - Slack thread in #acme-deal mentions a possible expansion into their EU team (3 seats)
   - Email from their CFO on April 9 confirmed budget approved for Q2
• Suggested next step: Send the revised SOW today and offer a 15-min call early next week to align on onboarding.`,
  },
  {
    icon: FileText,
    text: "Generate presentations, summaries, or updates using your company's real data",
    exampleTitle: "Generate: Q1 Board Update Deck",
    examplePrompt: "Create a Q1 board update deck using our real numbers and recent wins.",
    exampleOutput: `Q1 Board Update — Draft Deck (8 slides)

1. Q1 At a Glance
   Revenue: $1.42M (+18% QoQ), New logos: 7, NRR: 112%

2. Wins
   • Closed Acme Corp ($240K ACV)
   • Expanded Northstar by 2x seats
   • Launched v2 of the analytics module

3. Pipeline
   $3.8M qualified, 22 opps in late stage, forecast $1.6M for Q2

4. Product
   Shipped 14 features, 2 highlighted: AI summaries, SSO

5. Team
   Hired 3 (eng, CS, sales), 2 promotions

6. Risks
   • Onboarding capacity tight at >5 new clients/month
   • One renewal at risk (Globex), mitigation in motion

7. Asks
   • Approve hiring plan for 2 additional CS roles
   • Greenlight EU pilot

8. Appendix
   Detailed financials, cohort retention, CSAT trends`,
  },
  {
    icon: CalendarCheck,
    text: "Automatically prep for meetings and send follow-ups without manual work",
    exampleTitle: "Prep: 10am call with Northstar",
    examplePrompt: "Prep me for my 10am with Northstar and draft the follow-up.",
    exampleOutput: `Meeting Prep, Northstar (10:00 AM)

Attendees: Priya (VP Ops), James (CTO)

Context to know:
• Last call (March 28): Discussed rolling out to their support team (12 seats)
• Open question from James: Can we integrate with their internal ticketing tool?
• Priya mentioned their fiscal year ends June 30, pressure to wrap before then

Suggested talking points:
1. Confirm pilot results from the ops team (NPS jumped 14 points)
2. Walk through ticketing integration options (Zapier today, native by Q3)
3. Propose a 12-seat expansion at $X with a June 1 start date

Follow-up email (drafted, ready to send after the call):
"Hi Priya & James, great talking today. As discussed, I'll send over the pilot results, the integration roadmap, and a proposal for the 12-seat expansion by EOD tomorrow. Looking forward to getting this live before your fiscal year wraps."`,
  },
  {
    icon: ListChecks,
    text: "Create and track team-wide to-dos that update across systems",
    exampleTitle: "Team To-Dos, synced across Asana, Notion, Slack",
    examplePrompt: "Show me what the team owes this week, with status.",
    exampleOutput: `Team To-Dos, Week of April 14

Sarah (Sales)
✅ Send revised SOW to Acme, done Tuesday
🟡 Follow up with Globex re: renewal, due Thursday
⏳ Q2 forecast review, due Friday

Marcus (Eng)
✅ Ship SSO bug fix, done Monday
🟡 Draft RFC for ticketing integration, due Friday
🔴 Code review backlog, 4 open, oldest 6 days

Jen (CS)
✅ Onboarded Acme kickoff call, done
🟡 QBR prep deck for Northstar, due Wednesday
⏳ CSAT survey send, scheduled for Thursday

Auto-synced from: Asana (12 tasks), Notion (4 docs), Slack (#standup thread)
Next nudge: Marcus on the code review backlog (Slack DM, 4pm today)`,
  },
  {
    icon: Receipt,
    text: "Generate invoices, reports, or client communications in seconds",
    exampleTitle: "Generate: April invoice for Northstar",
    examplePrompt: "Generate the April invoice for Northstar.",
    exampleOutput: `INVOICE #2024-0417
Bill to: Northstar Inc.
Date: April 30, 2024 · Due: May 30, 2024 (Net 30)

Line items:
1. Monthly platform subscription (12 seats)        $4,800.00
2. Premium support add-on                            $750.00
3. Q1 strategy workshop (delivered April 8)        $2,500.00

Subtotal:                                          $8,050.00
Tax (0%):                                              $0.00
Total Due:                                         $8,050.00

Payment: ACH or credit card via the link below.
Notes: Per our agreement, the strategy workshop fee is one-time. Subscription auto-renews May 1.

Ready to send to: priya@northstar.com, accounting@northstar.com
Logged in: QuickBooks · CRM updated · Slack #finance notified`,
  },
  {
    icon: RefreshCw,
    text: "Keep projects updated without chasing people for status",
    exampleTitle: "Project Status, auto-compiled, no chasing",
    examplePrompt: "Give me a status across all active client projects.",
    exampleOutput: `Active Projects, Status Roll-Up (auto-compiled this morning)

🟢 Acme Corp, Onboarding
   On track. Kickoff complete. Next milestone: data import April 22.
   Source: Asana board + last 3 Slack messages in #acme-impl

🟡 Northstar, Expansion Pilot
   Slightly behind. Waiting on James for ticketing integration sign-off.
   Last update: April 14. Suggested action: Nudge James (drafted DM ready).

🟢 Globex, Renewal
   On track. Renewal call booked April 25. CSAT trending up (+9 pts).

🔴 Initech, Implementation
   At risk. No client response in 8 days. Escalation: notify Sarah + schedule check-in.

Compiled from: Asana, HubSpot, Slack, Gmail, last team standup notes.
No one was asked for an update.`,
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

const exampleThemes = [
  // 0: purple
  {
    accentBar: "bg-gradient-to-r from-launch-purple to-launch-purple/40",
    iconWrap: "bg-gradient-to-br from-launch-purple to-launch-purple/70 shadow-md shadow-launch-purple/20",
    promptBox: "border-launch-purple/15 bg-launch-purple/5",
    promptLabel: "text-launch-purple",
    responseBox: "border-launch-purple/25 bg-gradient-to-br from-launch-light via-white to-launch-purple/5",
    responseLabel: "text-launch-purple",
  },
  // 1: orange
  {
    accentBar: "bg-gradient-to-r from-launch-orange to-launch-orange/40",
    iconWrap: "bg-gradient-to-br from-launch-orange to-launch-orange/70 shadow-md shadow-launch-orange/20",
    promptBox: "border-launch-orange/20 bg-launch-orange/5",
    promptLabel: "text-launch-orange",
    responseBox: "border-launch-orange/25 bg-gradient-to-br from-orange-50 via-white to-launch-orange/5",
    responseLabel: "text-launch-orange",
  },
  // 2: purple + orange blend
  {
    accentBar: "bg-gradient-to-r from-launch-purple to-launch-orange",
    iconWrap: "bg-gradient-to-br from-launch-purple to-launch-orange shadow-md shadow-launch-purple/20",
    promptBox: "border-launch-purple/15 bg-gradient-to-br from-launch-purple/5 to-launch-orange/5",
    promptLabel: "text-launch-purple",
    responseBox: "border-launch-purple/20 bg-gradient-to-br from-launch-light via-white to-orange-50",
    responseLabel: "text-launch-purple",
  },
];

const HowYourBusinessChanges = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const activeExample = openIndex !== null ? inPractice[openIndex] : null;
  const ActiveIcon = activeExample?.icon;
  const theme = openIndex !== null && openIndex < exampleThemes.length ? exampleThemes[openIndex] : null;

  return (
    <section id="what-we-do" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                {"\n"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="relative overflow-hidden bg-gradient-to-br from-white to-launch-purple/5 border border-launch-purple/15 hover:border-launch-purple/40 hover:shadow-[0_8px_30px_-10px_hsl(var(--launch-purple)/0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-purple to-launch-purple/40" />
                <CardContent className="p-7">
                  <div className="w-11 h-11 bg-gradient-to-br from-launch-purple to-launch-purple/70 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-launch-purple/20">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-launch-purple mb-2">Research</h4>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could research every interaction your team has ever had with a given company or prospect and tell you how to best respond, instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-gradient-to-br from-white to-launch-orange/5 border border-launch-orange/20 hover:border-launch-orange/50 hover:shadow-[0_8px_30px_-10px_hsl(24,87%,58%/0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-orange to-launch-orange/40" />
                <CardContent className="p-7">
                  <div className="w-11 h-11 bg-gradient-to-br from-launch-orange to-launch-orange/70 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-launch-orange/20">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-launch-orange mb-2">Social Media</h4>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could look at your past LinkedIn posts and create a new one in your voice, based on conversations you've had that week.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-gradient-to-br from-white via-launch-purple/5 to-launch-orange/5 border border-launch-purple/20 hover:border-launch-orange/40 hover:shadow-[0_8px_30px_-10px_hsl(var(--launch-purple)/0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-purple to-launch-orange" />
                <CardContent className="p-7">
                  <div className="w-11 h-11 bg-gradient-to-br from-launch-purple to-launch-orange rounded-xl flex items-center justify-center mb-4 shadow-md shadow-launch-purple/20">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-2">Goals</h4>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could tell you exactly what to focus on today, and what's obviously getting in the way.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-gradient-to-br from-white to-launch-orange/5 border border-launch-orange/20 hover:border-launch-orange/50 hover:shadow-[0_8px_30px_-10px_hsl(24,87%,58%/0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-orange/40 to-launch-orange" />
                <CardContent className="p-7">
                  <div className="w-11 h-11 bg-gradient-to-br from-launch-orange/70 to-launch-orange rounded-xl flex items-center justify-center mb-4 shadow-md shadow-launch-orange/20">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-launch-orange mb-2">Sales</h4>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    It could create a presentation based on a conversation you'd had earlier that day in under five minutes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Second Brain Visual */}
        <div className="mb-16 flex justify-center">
          <img
            src={secondBrainVisual}
            alt="Three-step process: The Second Brain organizes company knowledge, Integrations connect your tools, Smart Automations power daily workflows"
            className="w-full max-w-5xl rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* We connect the tools you already use */}
        <div className="mb-16 text-center bg-white rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            We connect the tools you already use
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
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
              For a 360° understanding of your business
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Cost savings. Happier employees. Thrilled customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inPractice.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative text-left bg-card rounded-2xl p-8 border border-border hover:border-launch-purple/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsl(var(--launch-purple)/0.25)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-launch-purple"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-launch-purple to-launch-orange rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-gradient-to-br from-launch-purple/15 to-launch-orange/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <ItemIcon className="h-7 w-7 text-launch-purple" />
                  </div>
                  <p className="text-foreground text-lg font-semibold leading-relaxed mb-4">{item.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-launch-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-4 w-4" />
                    See an example
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* What this unlocks */}
        <div className="relative mb-16">
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

        {/* What You Can Expect */}
        <div className="relative bg-gradient-to-br from-launch-light via-white to-orange-50 rounded-3xl p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-launch-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-launch-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
              What You Can Expect
            </h3>
            <p className="text-xl text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
              These are the average results we see from our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {businessOutcomes.map((item, i) => {
                const ItemIcon = item.icon;
                const variants = [
                  {
                    card: "bg-gradient-to-br from-launch-purple to-launch-purple/80 text-white border-transparent",
                    iconWrap: "bg-white/15 backdrop-blur-sm",
                    icon: "text-white",
                    stat: "text-white",
                    label: "text-white/80",
                  },
                  {
                    card: "bg-card border-2 border-launch-orange/30",
                    iconWrap: "bg-gradient-to-br from-launch-orange to-launch-orange/70",
                    icon: "text-white",
                    stat: "bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent",
                    label: "text-muted-foreground",
                  },
                  {
                    card: "bg-gradient-to-br from-launch-orange to-launch-orange/80 text-white border-transparent",
                    iconWrap: "bg-white/15 backdrop-blur-sm",
                    icon: "text-white",
                    stat: "text-white",
                    label: "text-white/85",
                  },
                  {
                    card: "bg-card border-2 border-launch-purple/30",
                    iconWrap: "bg-gradient-to-br from-launch-purple to-launch-orange",
                    icon: "text-white",
                    stat: "bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent",
                    label: "text-muted-foreground",
                  },
                ];
                const v = variants[i % variants.length];
                return (
                  <div
                    key={i}
                    className={`${v.card} rounded-2xl p-7 text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className={`w-14 h-14 ${v.iconWrap} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <ItemIcon className={`h-7 w-7 ${v.icon}`} />
                    </div>
                    <p className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${v.stat}`}>
                      {item.stat}
                    </p>
                    <p className={`font-semibold text-base ${v.label}`}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0">
          {activeExample && (
            <>
              {theme && <div className={`h-1.5 w-full ${theme.accentBar}`} />}
              <div className="p-6">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${theme ? theme.iconWrap : "bg-gradient-to-br from-launch-purple/15 to-launch-orange/10"}`}>
                      {ActiveIcon && <ActiveIcon className={`h-5 w-5 ${theme ? "text-white" : "text-launch-purple"}`} />}
                    </div>
                    <DialogTitle className="text-xl text-launch-purple text-left">
                      {activeExample.exampleTitle}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-left text-base">
                    An illustrative example of what your team's AI second brain might generate.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  <div className={`rounded-xl border p-4 ${theme ? theme.promptBox : "border-border bg-muted/40"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${theme ? theme.promptLabel : "text-muted-foreground"}`}>
                      You ask
                    </p>
                    <p className="text-foreground font-medium">{activeExample.examplePrompt}</p>
                  </div>

                  <div className={`rounded-xl border p-5 ${theme ? theme.responseBox : "border-launch-purple/20 bg-gradient-to-br from-launch-light/40 via-white to-orange-50/40"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5 ${theme ? theme.responseLabel : "text-launch-purple"}`}>
                      <Sparkles className="h-3.5 w-3.5" />
                      AI response
                    </p>
                    <pre className="whitespace-pre-wrap font-sans text-foreground text-base leading-relaxed">
                      {activeExample.exampleOutput}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HowYourBusinessChanges;
