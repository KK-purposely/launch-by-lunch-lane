
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Users, Brain, Heart, DollarSign, Award, TrendingUp, Handshake, Zap, ArrowRight, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

const APPLY_URL = "https://forms.gle/FvhQK1S1V5j438qbA";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Trainers = () => {
  return (
    <>
      <Helmet>
        <title>Become a Trainer | Launch by Lunch</title>
        <meta name="description" content="Join the Launch by Lunch trainer network. Lead AI workshops, get paid well, and let us handle everything else." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 md:py-24 flex items-center justify-center overflow-hidden bg-launch-purple">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-launch-orange/20 blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-launch-orange/15 blur-[100px] animate-[pulse_8s_ease-in-out_infinite_1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in" style={{ animationDuration: "0.6s" }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-base font-semibold px-5 py-2 rounded-full mb-8 border border-white/20">
              <Sparkles className="h-4 w-4 text-launch-orange" />
              NOW ACCEPTING APPLICATIONS
            </span>
          </div>

          <h1 className="animate-fade-in text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight" style={{ animationDuration: "0.8s", animationDelay: "0.15s", animationFillMode: "both" }}>
            Teach AI.<br />
            <span className="bg-gradient-to-r from-launch-orange to-yellow-300 bg-clip-text text-transparent">Get Paid.</span><br />
            We Handle the Rest.
          </h1>

          <p className="animate-fade-in text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDuration: "0.8s", animationDelay: "0.3s", animationFillMode: "both" }}>
            We're building a community of expert AI trainers under the Launch by Lunch umbrella — people who show up, do great work, and get paid well while we handle everything else.
          </p>

          <div className="animate-fade-in" style={{ animationDuration: "0.8s", animationDelay: "0.45s", animationFillMode: "both" }}>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group bg-launch-orange hover:bg-launch-orange/90 text-white text-xl px-10 py-7 rounded-full shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] transition-all duration-500 hover:scale-105">
                Apply to Become a Trainer
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Moment — editorial feel */}
      <section className="py-16 md:py-20 bg-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-launch-orange/10 mb-8">
              <Sparkles className="h-8 w-8 text-launch-orange" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-launch-purple mb-8 leading-tight">
              AI Fluency Is the Most In-Demand Skill on the Planet
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-6">
              Demand is outpacing our bandwidth — and that's where you come in.
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              If you've been volunteering your time teaching AI to others and wondering when someone's going to actually pay you for it —
            </p>
            <p className="text-3xl font-bold text-launch-purple mt-4">
              this is your moment.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What Trainers Do */}
      <section className="py-20 md:py-24 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-launch-purple text-center mb-4">What Our Trainers Do</h2>
            <p className="text-xl text-gray-500 text-center mb-14 max-w-lg mx-auto">Real work. Real impact. Not another theoretical AI talk.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Lead Live Workshops", desc: "Run in-person AI workshops for founders, executives, and small teams ready to level up.", color: "from-launch-purple to-indigo-600" },
              { icon: Brain, title: "Facilitate Corporate Sessions", desc: "Help companies actually use AI — not just talk about it. Real tools, real workflows, real results.", color: "from-launch-orange to-amber-500" },
              { icon: Zap, title: "Run Follow-Up Sessions", desc: "Make sure people don't walk out and immediately forget everything they learned. Reinforce and build.", color: "from-launch-purple to-launch-orange" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <AnimatedSection key={title} delay={i * 150}>
                <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden h-full hover:-translate-y-2">
                  <div className={`h-1.5 bg-gradient-to-r ${color}`} />
                  <CardContent className="p-8 pt-7">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-launch-purple mb-3">{title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-launch-purple text-center mb-4">Who We're Looking For</h2>
            <p className="text-xl text-gray-500 text-center mb-14 max-w-lg mx-auto">This isn't for everyone — and that's the point.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Mic, title: "Strong Communicators", desc: "You own a room without breaking a sweat. Presence is your superpower.", accent: "launch-orange" },
              { icon: Award, title: "Proven Facilitators", desc: "You've done paid professional work before — training, coaching, consulting, any of it.", accent: "launch-purple" },
              { icon: Brain, title: "Builders", desc: "You don't have to be a developer, but you've built something real with AI.", accent: "launch-orange" },
              { icon: Heart, title: "Patient Explainers", desc: "The kind of person who lights up when a 60-year-old finally gets it.", accent: "launch-purple" },
            ].map(({ icon: Icon, title, desc, accent }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="group relative flex gap-5 p-7 rounded-2xl border border-gray-100 bg-white hover:border-launch-orange/30 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-launch-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-${accent}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 text-${accent}`} />
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-launch-purple text-2xl mb-2">{title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-24 bg-launch-purple relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-launch-orange/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">What You Get</h2>
            <p className="text-xl text-white/60 text-center mb-14 max-w-lg mx-auto">We don't just give you a title. We give you a career path.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "Competitive Pay", desc: "Transparent, competitive hourly pay. No guessing games, no surprises." },
              { icon: Award, title: "LBL Certified Trainer", desc: "An official credential you can add to your LinkedIn and portfolio." },
              { icon: TrendingUp, title: "Steady Client Flow", desc: "A constant stream of clients — without having to find a single one yourself." },
              { icon: Handshake, title: "A Real Community", desc: "Like-minded people who are hungry to learn, share, and grow together." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="group flex gap-5 p-7 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-launch-orange/20 flex items-center justify-center group-hover:bg-launch-orange/30 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-launch-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
                    <p className="text-lg text-white/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-launch-purple">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-launch-purple via-launch-purple/95 to-launch-orange/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-launch-orange/10 blur-[150px]" />
        </div>

        <AnimatedSection>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto">
              Apply today. We'll review your application and get back to you soon.
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group bg-white text-launch-purple hover:bg-white/95 text-xl px-12 py-7 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-105 font-bold">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </>
  );
};

export default Trainers;
