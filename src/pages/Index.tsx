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
    desc: "We start with the tools you already have and layer in AI where it saves you the most. No bloated contracts, no surprise fees. Just a clear plan that fits your budget and grows with you.",
  },
  {
    icon: Users,
    title: "Lack of Education and Technical Expertise",
    desc: "You don't need a technical team to adopt AI. We provide hands-on training and workshops built for non-technical leaders and teams, so everyone walks away confident, not confused.",
  },
  {
    icon: Shield,
    title: "Data Security and Privacy Concerns",
    desc: "We take security seriously from day one. Every solution we build follows best practices for data privacy, and we help you understand exactly where your data lives and who has access.",
  },
  {
    icon: Clock,
    title: "Difficulty Proving Immediate ROI",
    desc: "We focus on quick wins first; automations and workflows that show measurable results in weeks, not months. You'll see the time saved and costs cut before you even finish onboarding.",
  },
];

const whatWeDo = [
  {
    step: "01",
    icon: Search,
    title: "AI Opportunity Audit",
    desc: "We assess your business and identify the highest-impact places to use AI, so you start where it matters most.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Implementation",
    desc: "We build workflows, automations, and systems tailored to your team. No off-the-shelf solutions that don't fit.",
  },
  {
    step: "03",
    icon: GraduationCap,
    title: "Team Training",
    desc: "We train your team so they actually use what we build. No one gets left behind.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Ongoing Support",
    desc: "We evolve your systems as tools and needs change — so you're never stuck with something outdated.",
    optional: true,
  },
];

const thisIsForYou = [
  "Your team is talking about AI but not actually using it",
  "You've tried tools but nothing has stuck",
  "You don't have time to figure this out yourself",
  "You need to move quickly without hiring a full technical team",
];

const businessOutcomes = [
  {
    icon: Zap,
    stat: "60%",
    label: "reduction in manual, repetitive tasks",
  },
  {
    icon: Clock,
    stat: "10+",
    label: "hours saved per team member per week",
  },
  {
    icon: Brain,
    stat: "3×",
    label: "faster execution across workflows",
  },
  {
    icon: Shield,
    stat: "95%",
    label: "improvement in consistency & accuracy",
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
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-launch-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ItemIcon className="h-5 w-5 text-launch-purple/60" />
                        </div>
                        <p className="text-sm font-semibold text-launch-purple/50 uppercase tracking-wide">{item.title}</p>
                      </div>
                      <p className="text-lg text-foreground font-medium leading-relaxed">{item.desc}</p>
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

        {/* What We Do */}
        <section id="what-we-do" className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A clear, repeatable process — from discovery to results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whatWeDo.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300 group relative"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ItemIcon className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-launch-purple/10">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-launch-purple mb-2">
                      {item.title}
                      {item.optional && (
                        <span className="ml-2 text-sm font-medium text-launch-orange">(optional but powerful)</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* This Is for You If */}
        <section className="bg-launch-light py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-10 text-center">
              This Is for You If...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {thisIsForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-launch-orange mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Outcomes */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-3 text-center">
              What You Can Expect
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              These are the average results we see from our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {businessOutcomes.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-launch-purple to-launch-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                      <ItemIcon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-1">
                      {item.stat}
                    </p>
                    <p className="text-gray-600 font-medium text-sm">{item.label}</p>
                  </div>
                );
              })}
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
