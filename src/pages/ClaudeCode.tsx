
import React from "react";
import blueBotImg from "@/assets/blue-bot-chief-of-staff.png";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, User, Wrench, Building2, CheckCircle2, Zap, Laptop, Brain, Workflow, CalendarCheck, Newspaper, Rocket, Target } from "lucide-react";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/claude-code/IntegrationsSection";
import WorkshopTestimonials from "@/components/claude-code/WorkshopTestimonials";

const workshops = [
  {
    title: "Group Workshop",
    subtitle: "Learn with a cohort",
    price: "$249",
    unit: "per seat",
    description: "Join a high-energy group session and build your Claude Code Chief of Staff alongside other founders and operators.",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    ctaText: "Reserve Your Seat",
    ctaUrl: "https://luma.com/launchbylunch",
    featured: false,
  },
  {
    title: "1-on-1 Workshop",
    subtitle: "Personalized build session",
    price: "$749",
    unit: "",
    description: "Get dedicated, hands-on guidance tailored to your exact workflow and tech stack.",
    icon: User,
    iconBg: "bg-orange-100",
    iconColor: "text-launch-orange",
    ctaText: "Book Your Session",
    ctaUrl: "https://forms.gle/VX1z8FJfGSr8D1AD6",
    featured: true,
  },
  {
    title: "Done-For-You Build",
    subtitle: "We build it for you",
    price: "$1,200",
    unit: "",
    description: "We design and deploy your Claude Code Chief of Staff — fully configured around your priorities, data, and tools.",
    icon: Wrench,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    ctaText: "Get Started",
    ctaUrl: "https://forms.gle/VX1z8FJfGSr8D1AD6",
    featured: false,
  },
  {
    title: "Private Group Onboarding",
    subtitle: "We come to your team or community",
    price: "$4,500",
    unit: "per session",
    description: "We come to your accelerator, team, or community and deliver a 3-hour hands-on onboarding session for up to 12 people.",
    icon: Building2,
    iconBg: "bg-purple-100",
    iconColor: "text-launch-purple",
    ctaText: "Schedule for Your Group",
    ctaUrl: "https://forms.gle/VX1z8FJfGSr8D1AD6",
    featured: false,
  },
];

const buildItems = [
  { icon: Brain, title: "Context-Rich Chief of Staff", desc: "Trained on your goals, responsibilities, and decision-making criteria" },
  { icon: Workflow, title: "Connected Workflow", desc: "Integrating your email, calendar, docs, CRM, and AI notetakers" },
  { icon: CalendarCheck, title: "Daily Executive Briefing", desc: "Pulls tasks and commitments automatically so nothing slips" },
  { icon: Newspaper, title: "AI News Digest", desc: "A clean, consolidated feed so you stop drowning in information" },
  { icon: Rocket, title: "Working System", desc: "Refine and expand immediately — live before you leave" },
  { icon: Target, title: "Built-In Accountability", desc: "Keeps you on track with your personal and professional goals — so nothing falls through the cracks" },
];

const audienceItems = [
  "A founder juggling too many threads",
  "A consultant managing multiple clients",
  "A small team that knows they're losing runway without adding productivity gains now",
  "Someone who wants to learn but doesn't want to feel stupid in the process",
];

const ClaudeCode = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Claude Code Workshops | Launch by Lunch</title>
        <meta name="description" content="Build your Claude Code Chief of Staff in one focused session. Workshops for founders, consultants, and teams ready to stop reading and start building." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-launch-purple via-launch-purple to-launch-purple/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-launch-orange rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-launch-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-lg font-medium">
              <Zap className="h-4 w-4 text-launch-orange" />
              Live, Hands-On Workshops
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Claude Code<br />
              <span className="text-launch-orange">Chief of Staff</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto md:mx-0 mb-4 leading-relaxed">
              The AI inbox system. The daily briefing. The place where your calendar, notes, CRM, and emails finally talk to each other.
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto md:mx-0 mb-10">
              You've been meaning to set this up. Instead, you've been reading about it.<br />
              <span className="text-launch-orange font-semibold">This workshop is where you stop reading — and build it.</span>
            </p>
            <Button
              size="lg"
              className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-2xl hover:scale-105 group"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="flex items-center gap-3">
                See Workshop Options
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={blueBotImg}
              alt="Blue AI bot Chief of Staff assistant"
              className="w-52 h-52 md:w-72 md:h-72 drop-shadow-2xl animate-bounce-slow"
            />
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-launch-light py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
          Is This Your Build Day?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          If any of these sound like you, grab a seat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {audienceItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5">
              <CheckCircle2 className="h-6 w-6 text-launch-orange mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Testimonial - after audience */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <WorkshopTestimonials testimonials={[
          { quote: "Turns out I'd rather trudge through unplowed streets to get into Boston than figure out Claude Code in my pajamas at home...this was so much more efficient and fun than reading through docs on my own! I highly recommend it for anyone curious about how to kick off real workflow optimization as a solopreneur!", name: "Farah Hussain" },
        ]} />
      </section>

      <IntegrationsSection />

      {/* What we build */}
      <section className="bg-launch-light py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4 text-center">
            What We'll Build Together
          </h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
            This is hands-on. Laptop open. Accounts connected. System live before you leave.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildItems.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <ItemIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-launch-purple mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial - before pricing */}
      <section className="bg-gradient-to-r from-launch-orange/5 via-transparent to-launch-purple/5 py-12 px-4 sm:px-6">
        <WorkshopTestimonials testimonials={[
          { quote: "I would have just kept putting this off if I hadn't shown up here today. I needed to drive into Boston and sit on this couch to finally get it done!", name: "Jeff Wechsler" },
        ]} />
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-launch-purple mb-6 text-center">
          Choose Your Workshop
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          From group sessions to fully built systems — pick the path that fits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workshops.map((w, i) => {
            const Icon = w.icon;
            return (
              <Card
                key={i}
                className="relative flex flex-col transition-all duration-300 border border-gray-200 hover:border-launch-orange hover:shadow-[0_0_20px_rgba(255,138,0,0.3)] hover:-translate-y-1"
              >
                <CardContent className="flex flex-col flex-1 p-8 pt-10">
                  <div className={`w-16 h-16 ${w.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon className={`h-8 w-8 ${w.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-launch-purple mb-2">{w.title}</h3>
                  <p className="text-lg text-gray-500 mb-5">{w.subtitle}</p>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-launch-purple">{w.price}</span>
                    {w.unit && <span className="text-lg text-gray-500 ml-2">{w.unit}</span>}
                  </div>
                  <p className="text-gray-600 text-lg flex-1 mb-8">{w.description}</p>
                  <Button
                    className="w-full rounded-full font-semibold transition-all duration-300 bg-launch-purple hover:bg-launch-orange text-white"
                    onClick={() => window.open(w.ctaUrl, "_blank")}
                  >
                    {w.ctaText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bonus */}
      <section className="bg-gradient-to-r from-launch-purple to-launch-orange py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-lg font-bold uppercase tracking-wide">
            🎁 Bonus Included
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            1 Year of Launch by Lunch Community Access
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Stay connected with your cohort and keep learning in a judgment-free zone. Events, office hours, resources, and more.
          </p>
        </div>
      </section>

      {/* Testimonial - after bonus */}
      <section className="bg-launch-light py-12 px-4 sm:px-6">
        <WorkshopTestimonials testimonials={[
          { quote: "This workshop was the bomb! It's exactly what I needed to kickstart AI into my day to day work!", name: "Alicia Tulsee" },
        ]} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div className="flex justify-center mb-6">
          <Laptop className="h-12 w-12 text-launch-orange" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
          Walk in curious.<br />
          <span className="text-launch-orange">Walk out operational.</span>
        </h2>
        <p className="text-gray-500 text-lg mb-8">Seats are limited to keep it hands-on.</p>
        <Button
          size="lg"
          className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
          onClick={() => window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")}
        >
          <span className="flex items-center gap-3">
            Schedule a Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ClaudeCode;
