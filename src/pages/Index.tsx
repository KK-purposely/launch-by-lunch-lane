import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Check, Target, Sprout, Handshake } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import trustedByImg from "@/assets/trusted-by.png";

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
  { stat: "81%", text: "higher job satisfaction among employees who actually use AI in their work" },
  { stat: "60%", text: "report meaningful stress reduction once the repetitive stuff gets handled" },
  { stat: "40%", text: "boost in productivity for teams that adopt AI the right way, that's +15 hours per week/employee" },
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

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent leading-[1.1]">
                    AI adoption for<br />people-first<br />teams.
                  </span>
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

        {/* ═══ TRUSTED BY ═══ */}
        <section className="py-12 md:py-16 bg-white">
          <Reveal className="max-w-6xl mx-auto px-4 sm:px-6">
            <img
              src={trustedByImg}
              alt="Trusted by CIC, Techstars Startup Weekend Boston, KPMG, TEDx, Softheon, Boston Business Journal, Women Applying AI, Williams College, Harvard University, Startup Boston, Adobe, Creative Mornings, MassChallenge, and Building AI Boston"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </Reveal>
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
                <div className="relative bg-launch-purple rounded-3xl p-8 md:p-10 h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-8">AFTER AI</p>
                  <div className="space-y-8">
                    {flipStats.map((item, i) => (
                      <div key={i}>
                        <p className="text-4xl md:text-5xl font-bold text-launch-orange mb-2">{item.stat}</p>
                        <p className="text-white/80 text-lg">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="absolute bottom-4 right-5 text-[11px] uppercase tracking-wider text-white/40">
                    Source: Gallup, 2026
                  </p>
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
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                    <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">AI isn't coming for<br />your team.</span>
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-launch-orange via-pink-500 to-launch-purple bg-clip-text text-transparent">It's coming for their<br />to-do list.</span>
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
        <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white via-launch-light/40 to-white relative overflow-hidden">
          {/* Decorative background blobs */}
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-launch-purple/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-launch-orange/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">Here's how it works.</span>
              </h2>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              {/* Winding road SVG (desktop only) */}
              <svg
                className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 1200"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(270 60% 55%)" />
                    <stop offset="50%" stopColor="hsl(330 80% 65%)" />
                    <stop offset="100%" stopColor="hsl(25 95% 60%)" />
                  </linearGradient>
                  <linearGradient id="roadGradientGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(270 60% 55%)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(330 80% 65%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(25 95% 60%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Glow layer */}
                <path
                  d="M 400 40 Q 200 180, 400 320 T 400 600 Q 600 740, 400 880 T 400 1160"
                  stroke="url(#roadGradientGlow)"
                  strokeWidth="32"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Main road */}
                <path
                  d="M 400 40 Q 200 180, 400 320 T 400 600 Q 600 740, 400 880 T 400 1160"
                  stroke="url(#roadGradient)"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Dashed centerline */}
                <path
                  d="M 400 40 Q 200 180, 400 320 T 400 600 Q 600 740, 400 880 T 400 1160"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10 14"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>

              {/* Mobile vertical road */}
              <div className="md:hidden absolute left-8 top-2 bottom-2 w-3 bg-gradient-to-b from-launch-purple via-pink-400 to-launch-orange rounded-full shadow-lg" />
              <div
                className="md:hidden absolute left-[34px] top-2 bottom-2 w-px"
                style={{
                  backgroundImage: "repeating-linear-gradient(to bottom, white 0, white 8px, transparent 8px, transparent 18px)",
                  opacity: 0.85,
                }}
              />

              <div className="relative space-y-12 md:space-y-20">
                {steps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <Reveal key={step.num} delay={i * 0.1}>
                      <div className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        {/* Milestone marker */}
                        <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                          {/* Outer pulse ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-launch-purple to-launch-orange blur-lg opacity-70"
                            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.85, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                          />
                          {/* Pin shape */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-launch-purple via-pink-500 to-launch-orange text-white font-bold flex items-center justify-center shadow-2xl text-base md:text-xl ring-[6px] ring-white"
                          >
                            {step.num}
                            {/* Inner highlight */}
                            <div className="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/40 blur-sm" />
                          </motion.div>
                        </div>

                        {/* Card */}
                        <div className={`flex-1 md:w-[calc(50%-4rem)] md:flex-none ${isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"}`}>
                          <motion.div
                            whileHover={{ y: -6, rotate: isLeft ? -0.5 : 0.5 }}
                            className="relative bg-white rounded-2xl p-7 md:p-8 border border-border shadow-md hover:shadow-2xl hover:border-launch-purple/40 transition-all duration-300 group"
                          >
                            {/* Connector arrow pointing toward the road */}
                            <div
                              className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white border-border ${
                                isLeft ? "-right-1.5 border-t-0 border-l-0 border-r border-b" : "-left-1.5 border-b-0 border-r-0 border-l border-t"
                              }`}
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-launch-purple mb-3 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h3>
                            <p className="text-muted-foreground text-xl leading-relaxed">{step.desc}</p>
                          </motion.div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Destination flag at the end */}
              <Reveal delay={0.6}>
                <div className="relative flex justify-center mt-12 md:mt-16">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl"
                  >
                    🚩 You've arrived
                  </motion.div>
                </div>
              </Reveal>
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
