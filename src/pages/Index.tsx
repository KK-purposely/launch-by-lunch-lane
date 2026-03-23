import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  MessageSquare,
  Lightbulb,
  Search,
  Wrench,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

const painPoints = [
  {
    icon: MessageSquare,
    title: "Cost of Implementation and Maintenance",
    desc: "We start with the tools you already have and layer in AI where it saves you the most. No bloated contracts, no surprise fees — just a clear plan that fits your budget and grows with you.",
  },
  {
    icon: Users,
    title: "Lack of Education and Technical Expertise",
    desc: "You don't need a technical team to adopt AI. We provide hands-on training and workshops built for non-technical leaders and teams — so everyone walks away confident, not confused.",
  },
  {
    icon: Shield,
    title: "Data Security and Privacy Concerns",
    desc: "We take security seriously from day one. Every solution we build follows best practices for data privacy, and we help you understand exactly where your data lives and who has access.",
  },
  {
    icon: Clock,
    title: "Difficulty Proving Immediate ROI",
    desc: "We focus on quick wins first — automations and workflows that show measurable results in weeks, not months. You'll see the time saved and costs cut before you even finish onboarding.",
  },
];

const howWeHelp = [
  {
    icon: Brain,
    title: "Build Your Company Brain",
    desc: "A single source of truth for everything your company knows — searchable, accessible, and always up to date. New hires get answers on day one.",
    link: "/enterprise-services",
  },
  {
    icon: Zap,
    title: "Automate What Slows You Down",
    desc: "Your tools should talk to each other. We connect your CRM, email, calendar, and docs so the busywork disappears and your team focuses on real work.",
    link: "/enterprise-services",
  },
  {
    icon: Target,
    title: "AI Strategy That Fits You",
    desc: "No cookie-cutter playbooks. We look at your team, your tools, and your goals — then build a plan that makes sense for where you are right now.",
    link: "/enterprise-services",
  },
  {
    icon: Shield,
    title: "Training That Sticks",
    desc: "Workshops and hands-on sessions designed for non-technical teams. Your people walk away confident, not confused.",
    link: "/claude-code",
  },
];

const realResults = [
  {
    stat: "5+ hours",
    label: "saved per team member per week",
  },
  {
    stat: "Day 1",
    label: "new hires find answers immediately",
  },
  {
    stat: "Zero",
    label: "coding skills required",
  },
  {
    stat: "100%",
    label: "of your existing tools — connected",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Launch by Lunch - AI Adoption for SMBs</title>
        <meta name="description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense — saving money, making teams happier, and future-proofing your business." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://launchbylunch.com/" />
        <meta property="og:title" content="Launch by Lunch - AI Adoption for SMBs" />
        <meta property="og:description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense — saving money, making teams happier, and future-proofing your business." />
        <meta property="og:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://launchbylunch.com/" />
        <meta property="twitter:title" content="Launch by Lunch - AI Adoption for SMBs" />
        <meta property="twitter:description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense — saving money, making teams happier, and future-proofing your business." />
        <meta property="twitter:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
        <Hero />

        {/* Pain Points Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
                AI Sounds Great in Theory.<br />
                <span className="text-launch-orange">Here's What It Actually Feels Like.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                You know AI can help your business — but the path from "interested" to "implemented" is full of real challenges. We've seen them all.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {painPoints.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <Card key={i} className="border border-gray-100 hover:border-launch-purple/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 bg-gradient-to-br from-launch-purple to-launch-orange rounded-xl flex items-center justify-center mb-4">
                        <ItemIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-launch-purple mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transition Banner */}
        <section className="bg-gradient-to-r from-launch-purple to-launch-orange py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
            <Lightbulb className="h-10 w-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              We Don't Just Talk About AI.<br />We Make It Work for Your Team.
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              From your first conversation with us to a fully running system — we handle the strategy, the setup, and the training so your team hits the ground running.
            </p>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
                How We Help You Get There
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical, hands-on AI adoption — built around your team, your tools, and your budget.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {howWeHelp.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <ItemIcon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-launch-purple mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-lg mb-4">{item.desc}</p>
                    <a href={item.link} className="inline-flex items-center gap-1 text-launch-orange font-semibold hover:gap-2 transition-all duration-200">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-launch-light py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-12 text-center">
              What Teams Walk Away With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {realResults.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </p>
                  <p className="text-gray-600 font-medium text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            Ready to Make AI Work<br />
            <span className="text-launch-orange">for Your Team?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            No jargon. No enterprise sales pitch. Just a conversation about what your team actually needs — and how we can help you get there.
          </p>
          <Button
            size="lg"
            className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
            onClick={() =>
              window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")
            }
          >
            <span className="flex items-center gap-3">
              Let's Talk About Your Team
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
