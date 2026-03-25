
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Users, Brain, Heart, DollarSign, Award, TrendingUp, Handshake, Zap, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const APPLY_URL = "https://forms.gle/FvhQK1S1V5j438qbA";

const Trainers = () => {
  return (
    <>
      <Helmet>
        <title>Become a Trainer | Launch by Lunch</title>
        <meta name="description" content="Join the Launch by Lunch trainer network. Lead AI workshops, get paid well, and let us handle everything else." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-launch-purple via-launch-purple/95 to-launch-orange/80 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            NOW ACCEPTING APPLICATIONS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Teach AI. Get Paid.<br className="hidden sm:block" /> We Handle the Rest.
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            We're building a community of expert AI trainers under the Launch by Lunch umbrella — people who show up, do great work, and get paid well while we handle everything else.
          </p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-launch-orange hover:bg-launch-orange/90 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Apply to Become a Trainer <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">You Just Teach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Sales. Marketing. Logistics. Client management. All of it — handled by us. You focus on what you do best: lighting the room up.
          </p>
        </div>
      </section>

      {/* What Trainers Do */}
      <section className="py-16 md:py-20 bg-launch-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple text-center mb-12">What Our Trainers Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Lead Live Workshops", desc: "Run in-person AI workshops for founders, executives, and small teams ready to level up." },
              { icon: Brain, title: "Facilitate Corporate Sessions", desc: "Help companies actually use AI — not just talk about it. Real tools, real workflows, real results." },
              { icon: Zap, title: "Run Follow-Up Sessions", desc: "Make sure people don't walk out and immediately forget everything they learned. Reinforce and build." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-launch-purple to-launch-orange mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-launch-purple mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple text-center mb-12">Who We're Looking For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Mic, title: "Strong Communicators", desc: "You own a room without breaking a sweat. Presence is your superpower." },
              { icon: Award, title: "Proven Facilitators", desc: "You've done paid professional work before — training, coaching, consulting, any of it." },
              { icon: Brain, title: "Builders", desc: "You don't have to be a developer, but you've built something real with AI." },
              { icon: Heart, title: "Patient Explainers", desc: "The kind of person who lights up when a 60-year-old finally gets it." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 rounded-xl border border-launch-orange/20 bg-gradient-to-br from-white to-launch-light hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-launch-orange/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-launch-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-launch-purple text-lg mb-1">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-20 bg-launch-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple text-center mb-12">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "Competitive Pay", desc: "Transparent, competitive hourly pay. No guessing games." },
              { icon: Award, title: "LBL Certified Trainer", desc: "An official credential you can add to your LinkedIn and portfolio." },
              { icon: TrendingUp, title: "Steady Client Flow", desc: "A constant stream of clients — without having to find a single one yourself." },
              { icon: Handshake, title: "A Real Community", desc: "Like-minded people who are hungry to learn, share, and grow together." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-launch-purple/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-launch-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-launch-purple text-lg mb-1">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Moment */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-6">The Demand Is Real</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            AI fluency is the most in-demand skill on the planet right now. Demand is outpacing our bandwidth — and that's where you come in.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you've been volunteering your time teaching AI to others and wondering when someone's going to actually pay you for it — <strong className="text-launch-purple">this is your moment.</strong>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-launch-purple to-launch-orange text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
            Apply today. We'll review your application and get back to you soon.
          </p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-launch-purple hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Trainers;
