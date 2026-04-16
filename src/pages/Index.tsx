import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Check, Target, Sprout, Handshake } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";

/* ── Scroll-triggered wrapper ── */
const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Data ── */
const painStats = [
  { stat: "63%", text: "of employees say too many tech tools are actively disrupting their work" },
  { stat: "53%", text: "spend a significant part of their day on busywork instead of real work" },
  { stat: "4+ hrs", text: "wasted every week duplicating work that already got done" },
];

const flipStats = [
  { stat: "40%", text: "boost in productivity for teams that adopt AI the right way" },
  { stat: "81%", text: "higher job satisfaction among employees who actually use AI in their work" },
  { stat: "60%", text: "report meaningful stress reduction once the repetitive stuff gets handled" },
];

const culturePoints = [
  {
    icon: Target,
    title: "We listen before we build anything",
    desc: "Every team is different. We start with your hesitations, your goals, your people's reality before we recommend a single tool.",
  },
  {
    icon: Sprout,
    title: "Habits over one-time training",
    desc: "We don't drop a playbook and disappear. We build the routines that make AI a natural part of how your team works every day.",
  },
  {
    icon: Handshake,
    title: "Your people come along for the ride",
    desc: "Nobody gets left behind or blindsided. We bring your whole team forward together, at a pace that feels right.",
  },
];

const aiTasks = [
  { label: "Compiling weekly reports", ai: true },
  { label: "Scheduling and follow-ups", ai: true },
  { label: "Drafting first versions", ai: true },
  { label: "Client strategy and relationships", ai: false },
  { label: "Creative thinking and decisions", ai: false },
  { label: "The work that actually grows the business", ai: false },
];

const steps = [
  { num: "01", title: "Culture & Readiness Assessment", desc: "Map attitudes, fears, and opportunities. No assumptions, just listening." },
  { num: "02", title: "Leadership Coaching & Messaging", desc: "Help executives communicate the 'why' so AI feels like an upgrade, not a threat." },
  { num: "03", title: "Custom Adoption Roadmap", desc: "A phased plan built around your team's pace, starting with quick wins." },
  { num: "04", title: "Hands-On Team Training", desc: "Role-specific workshops that meet every person where they are. No one gets left behind." },
  { num: "05", title: "Measure, Iterate & Sustain", desc: "Ongoing check-ins to track what's landing and where to go next." },
];

/* ── Page ── */
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Launch by Lunch - Approachable AI Innovation</title>
        <meta name="description" content="Approachable innovation. Same team, new superpowers. We help small and mid-sized businesses adopt AI in a practical, people-first way." />
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

        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-launch-light via-white to-orange-50" />
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-launch-purple/5 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-launch-orange/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">AI Adoption</span>
                  <br />
                  <span className="bg-gradient-to-r from-launch-orange via-pink-500 to-launch-purple bg-clip-text text-transparent whitespace-nowrap">without the Anxiety.</span>
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-launch-purple max-w-xl mb-10 leading-snug font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  We help teams move from overwhelmed to operational, one step at a time.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
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
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col items-center justify-center gap-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <img
                  src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                  alt="Launch by Lunch Logo"
                  className="h-[148px] md:h-[184px] w-auto mb-2"
                />

                <Button
                  size="lg"
                  className="group w-full max-w-sm bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")}
                >
                  <span className="flex items-center gap-2">
                    Book a Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full max-w-sm px-8 py-6 text-lg border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full font-medium transition-all duration-300"
                  onClick={() => window.open("https://learn.launchbylunch.co/?modal=signup", "_blank")}
                >
                  Get Our Newsletter
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ STATS — THE REAL COST ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-launch-orange text-center mb-4">
                The real cost of the status quo
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center leading-tight">
                <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">This is how your business is probably working right now.</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                Most teams are operating across a mess of disconnected tools. Information lives in emails, docs, Slack, and people's heads. Work gets duplicated, dropped, or delayed. Nobody has a clear view of what's actually happening.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* TODAY card */}
              <Reveal>
                <div className="bg-gray-50 rounded-3xl p-8 md:p-10 h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Today</p>
                  <div className="space-y-8">
                    {painStats.map((item, i) => (
                      <div key={i}>
                        <p className="text-4xl md:text-5xl font-bold text-gray-600 mb-2">{item.stat}</p>
                        <p className="text-muted-foreground text-lg">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* AFTER LBL card */}
              <Reveal delay={0.15}>
                <div className="bg-launch-purple rounded-3xl p-8 md:p-10 h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-8">After LBL</p>
                  <div className="space-y-8">
                    {flipStats.map((item, i) => (
                      <div key={i}>
                        <p className="text-4xl md:text-5xl font-bold text-launch-orange mb-2">{item.stat}</p>
                        <p className="text-white/80 text-lg">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ LBL DIFFERENCE — AI TASK LIST ═══ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left copy */}
              <Reveal>
                <div>
                  <span className="inline-block bg-launch-orange text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
                    The LBL difference
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
                    <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">AI isn't coming for your team.</span>
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-launch-orange via-pink-500 to-launch-purple bg-clip-text text-transparent">It's coming for their to-do list.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    The repetitive work. The stuff that eats hours without making you any money. That's what we help your team hand off, so they can get back to the work only they can do.
                  </p>
                </div>
              </Reveal>

              {/* Right task list */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Your team's week, reimagined
                  </p>
                  <div className="space-y-4">
                    {aiTasks.map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            task.ai
                              ? "bg-launch-orange/10"
                              : "bg-green-100"
                          }`}>
                            {task.ai ? (
                              <Zap className="h-4 w-4 text-launch-orange" />
                            ) : (
                              <Check className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                          <span className={`text-base font-medium ${
                            task.ai ? "text-muted-foreground line-through" : "text-foreground"
                          }`}>
                            {task.label}
                          </span>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          task.ai
                            ? "bg-launch-orange/10 text-launch-orange"
                            : "bg-launch-purple/10 text-launch-purple"
                        }`}>
                          {task.ai ? "AI handles it" : "Your team"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ CULTURE CHANGE ═══ */}
        <section className="py-16 md:py-24 bg-launch-purple text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left copy */}
              <Reveal>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-launch-orange mb-4">
                    What nobody else is saying
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-white via-launch-orange to-white bg-clip-text text-transparent">This is culture change. We treat it that way.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                    A new tool won't do it. A one-day training won't either. Real adoption is a shift in how your team thinks about their work. The habits they build. The confidence they develop. The shared language that makes it feel like theirs, not something handed down from the top. We help you build that together.
                  </p>
                </div>
              </Reveal>

              {/* Right icon bullets */}
              <Reveal delay={0.15}>
                <div className="space-y-8">
                  {culturePoints.map((point, i) => {
                    const Icon = point.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-launch-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{point.title}</h3>
                          <p className="text-lg text-white/70 leading-relaxed">{point.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
                <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">Here's how it works.</span>
              </h2>
            </Reveal>
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-launch-purple via-pink-400 to-launch-orange" />
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <Reveal key={step.num} delay={i * 0.1}>
                    <div className="relative flex items-start gap-6 md:gap-8">
                      {/* Number badge */}
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-launch-purple to-launch-orange text-white font-bold flex items-center justify-center shadow-lg text-sm md:text-base">
                        {step.num}
                      </div>
                      {/* Card */}
                      <div className="flex-1 bg-launch-light rounded-2xl p-6 md:p-7 border border-border hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300 group">
                        <h3 className="text-xl md:text-2xl font-bold text-launch-purple mb-2 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRANSFORMATION ═══ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-launch-purple to-launch-purple/90 text-white relative overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-launch-orange/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-launch-orange to-white bg-clip-text text-transparent">Nobody got replaced. Everybody got better.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Your people spend less time on the work that was eating their week. More time on the strategy, the relationships, the things that actually grow your business. That's what AI is supposed to do. That's what we're here to build.
            </p>
          </Reveal>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-launch-light via-white to-orange-50">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">Most AI rollouts fail because nobody brought the people along.</span>
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
          </Reveal>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
