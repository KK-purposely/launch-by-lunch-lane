import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, HeartHandshake } from "lucide-react";
import Footer from "@/components/Footer";

const stats = {
  pain: [
    { stat: "63%", text: "of employees say too many tech tools are actively disrupting their work." },
    { stat: "53%", text: "say they spend a significant part of their day on busywork instead of real work." },
    { stat: "4+", text: "hours a week wasted by teams duplicating work that already got done." },
  ],
  flip: [
    { stat: "40%", text: "boost in productivity for teams that adopt AI the right way." },
    { stat: "81%", text: "higher job satisfaction among employees who actually use AI in their work." },
    { stat: "60%", text: "report meaningful stress reduction once the repetitive stuff gets handled." },
  ],
};

const steps = [
  {
    num: "01",
    title: "We listen.",
    desc: "To your team, your goals, your hesitations. All of it. Before we recommend anything.",
  },
  {
    num: "02",
    title: "We build a plan that fits.",
    desc: "Not a template. A real plan built around the way you actually work.",
  },
  {
    num: "03",
    title: "We stay until it sticks.",
    desc: "Implementation, habit building, and support until AI is part of how your team operates every day.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Launch by Lunch - Approachable AI Innovation</title>
        <meta name="description" content="Approachable innovation. AI built for your team, not around it. We help small and mid-sized businesses adopt AI in a practical, people-first way." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://launchbylunch.com/" />
        <meta property="og:title" content="Launch by Lunch - Approachable AI Innovation" />
        <meta property="og:description" content="Approachable innovation. AI built for your team, not around it." />
        <meta property="og:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://launchbylunch.com/" />
        <meta property="twitter:title" content="Launch by Lunch - Approachable AI Innovation" />
        <meta property="twitter:description" content="Approachable innovation. AI built for your team, not around it." />
        <meta property="twitter:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-launch-light via-white to-orange-50" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-36 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-launch-purple mb-6 leading-tight">
              Approachable Innovation.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              That's our kind of AI. Built for your team, not around it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
                onClick={() =>
                  window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")
                }
              >
                <span className="flex items-center gap-3">
                  Let's Talk
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-launch-purple hover:text-launch-orange text-lg font-semibold"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See how it works
              </Button>
            </div>
          </div>
        </section>

        {/* GUIDE SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-6">
              AI isn't coming for your team. It's coming for their to-do list.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The repetitive work. The stuff that eats hours without making you any money. That's what we help your team hand off, so they can get back to the work only they can do.
            </p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 md:py-24 bg-launch-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
              This is how your business is probably working right now.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-14 leading-relaxed">
              Most teams are operating across a mess of disconnected tools. Information lives in emails, docs, Slack, and people's heads. Work gets duplicated, dropped, or delayed. Nobody has a clear view of what's actually happening. Simple things take too long because nothing is connected. That's not a people problem. It's a systems problem. And it's costing you.
            </p>

            {/* Pain stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {stats.pain.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border">
                  <p className="text-4xl md:text-5xl font-bold text-launch-purple mb-3">{item.stat}</p>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-bold text-launch-purple text-center mb-14">
              Here's what changes when you get this right.
            </p>

            {/* Flip stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.flip.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-launch-orange/20">
                  <p className="text-4xl md:text-5xl font-bold text-launch-orange mb-3">{item.stat}</p>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE CHANGE */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-launch-light to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-6">
              This is culture change. We treat it that way.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A new tool won't do it. A one-day training won't either. Real adoption is a shift in how your team thinks about their work. The habits they build. The confidence they develop. The shared language that makes it feel like theirs, not something handed down from the top. We help you build that together.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-14 text-center">
              Here's how it works.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="bg-launch-light rounded-2xl p-8 border border-border hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300">
                  <span className="text-sm font-bold text-launch-orange mb-4 block">{step.num}</span>
                  <h3 className="text-xl font-bold text-launch-purple mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-launch-purple to-launch-purple/90 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nobody got replaced. Everybody got better.
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Your people spend less time on the work that was eating their week. More time on the strategy, the relationships, the things that actually grow your business. That's what AI is supposed to do. That's what we're here to build.
            </p>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-lg text-muted-foreground mb-10">
              We've helped dozens of small and mid-sized businesses move from AI-curious to AI-operational.
            </p>
            <div className="bg-launch-light rounded-2xl p-8 md:p-12 border border-border max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
                "Testimonials coming soon."
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-launch-light via-white to-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
              Most AI rollouts fail because nobody brought the people along.
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-launch-orange mb-8">
              We start there.
            </p>
            <Button
              size="lg"
              className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
              onClick={() =>
                window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")
              }
            >
              <span className="flex items-center gap-3">
                Let's Talk
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">No pressure. Just a real conversation.</p>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
