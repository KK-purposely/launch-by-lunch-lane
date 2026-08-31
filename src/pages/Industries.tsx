import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, UtensilsCrossed, Briefcase, Palette, Stethoscope, Hammer, GraduationCap, Microscope } from "lucide-react";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";
import { BrainOrb } from "@/components/visuals/BrainOrb";
import { DashboardMock } from "@/components/visuals/DashboardMock";
import blueBotImg from "@/assets/blue-bot-chief-of-staff.png";

const builds = [
  {
    n: "01",
    title: "Company Brain",
    desc: "A living knowledge base that gets new hires up to speed on day one, not month one.",
    to: "/company-brain",
    visual: "brain" as const,
  },
  {
    n: "02",
    title: "Company Dashboard",
    desc: "One screen with revenue, pipeline, and the must-dos, so you always know where the business stands.",
    to: "/dashboard",
    visual: "dashboard" as const,
  },
  {
    n: "03",
    title: "Build Your Chief of Staff",
    desc: "A daily briefing and AI inbox system where your calendar, notes, CRM, and email finally talk to each other.",
    to: "/claude-code",
    visual: "bot" as const,
  },
];


const verticals = [
  {
    name: "Storefront Studio",
    audience: "For independent retailers & e-commerce operators",
    hook: "Product copy that sells, without the writing marathon.",
    detail: "Draft descriptions, run seasonal promotions, answer repeat customer questions, and stay in touch with vendors, all from one retail-aware AI workspace.",
    tags: ["Product Descriptions", "Promo Planner", "Vendor Emails", "Service Scripts"],
    icon: ShoppingBag,
  },
  {
    name: "Hospitality House",
    audience: "For restaurants, hotels & event venues",
    hook: "Happier guests. Brighter reviews.",
    detail: "Write menus, reply to reviews, plan event packages, and keep staff and guests informed with an AI assistant that understands hospitality rhythm.",
    tags: ["Menu Writer", "Review Responder", "Event Proposal", "Staff Schedule"],
    icon: UtensilsCrossed,
  },
  {
    name: "CEO Mindset",
    audience: "For first-time founders & solopreneurs",
    hook: "Founder clarity, from first idea to first revenue.",
    detail: "Shape pricing, craft your first client conversations, define your brand voice, and build a 90-day plan, all while you're still juggling every role.",
    tags: ["Pricing Strategy", "First Client Script", "Brand Voice", "90-Day Plan"],
    icon: Briefcase,
  },
  {
    name: "Creative Collective",
    audience: "For agencies, studios & freelance creatives",
    hook: "More creating. Less documenting.",
    detail: "Generate campaign directions, write briefs, scope projects, and plan content calendars so your team can get back to the actual work.",
    tags: ["Campaign Concept", "Creative Brief", "Project Scope", "Content Calendar"],
    icon: Palette,
  },
  {
    name: "Practice Partner",
    audience: "For solo vets & small animal practices",
    hook: "Cut the paperwork. Keep the patient care.",
    detail: "Generate SOAP notes, client education letters, discharge summaries, and appointment reminders built around veterinary standards and workflows.",
    tags: ["SOAP Notes", "Discharge Summary", "Client Education", "Consent Forms"],
    icon: Stethoscope,
  },
  {
    name: "Bid Builder",
    audience: "For general contractors & specialty trades",
    hook: "More bids won. Less desk time.",
    detail: "Draft proposals, scope subcontractor work, document change orders, and share jobsite updates with an AI built for contractors, not office staff.",
    tags: ["Bid Writer", "Change Orders", "Sub Scope", "Safety Report"],
    icon: Hammer,
  },
  {
    name: "Classroom Copilot",
    audience: "For tutors, private schools & education businesses",
    hook: "Less prep. More presence in the classroom.",
    detail: "Build lesson plans, write progress reports, reach parents, map curriculum, and draft grants so educators can focus on students, not paperwork.",
    tags: ["Lesson Planner", "Progress Report", "Parent Comms", "Curriculum Map"],
    icon: GraduationCap,
  },
  {
    name: "Deep Dive Lab",
    audience: "For research-heavy teams & long-cycle projects",
    hook: "Months of research, compressed into days.",
    detail: "Deploy research agents that pull from top models to run literature reviews, competitive scans, and synthesis reports, turning long-cycle projects into focused, high-output sprints.",
    tags: ["Literature Review", "Competitive Scan", "Synthesis Report", "Insight Memo"],
    icon: Microscope,
  },
];

const Industries = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Industries We Serve | Launch by Lunch</title>
        <meta name="description" content="AI automation for small businesses across retail, hospitality, healthcare, agencies, contractors, education, and more. Built by small business owners, for small business owners." />
        <link rel="canonical" href="https://launchbylunch.co/industries" />
        <meta property="og:title" content="Industries We Serve | Launch by Lunch" />
        <meta property="og:description" content="AI automation tailored to how your industry actually works." />
        <meta property="og:url" content="https://launchbylunch.co/industries" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lbl-ink/10 via-white to-lbl-orange/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-lbl-orange mb-4">
            Industries of every shape & size
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-lbl-eggplant">Built by operators</span>
            <br />
            <span className="bg-grad-brand bg-clip-text text-transparent">tuned to your world.</span>
          </h1>
          <p className="text-lg md:text-xl text-lbl-ink/80 leading-relaxed max-w-3xl">
            Our core team has spent careers inside advertising, media, healthcare, coaching, HR, technology, education, and finance. We think like small business owners because we are small business owners, and we've spent most of our collective careers either running one or working shoulder-to-shoulder inside one.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-lbl-ink to-lbl-orange hover:from-lbl-orange hover:to-lbl-ink text-white rounded-full px-8"
              onClick={() => { trackEvent('book_consultation', { location: 'industries' }); window.open("https://calendly.com/karen-launchbylunch/30min", "_blank"); }}
            >
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-lbl-orange text-lbl-orange hover:bg-lbl-orange hover:text-white px-8"
            >
              <a href="#builds">See What We Build</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Most requested builds */}
      <section id="builds" className="py-20 md:py-28 bg-lbl-paper/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lbl-orange mb-3">Our most requested builds</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-grad-brand bg-clip-text text-transparent">Popular builds for any industry.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {builds.map((b) => (
              <Link
                key={b.n}
                to={b.to}
                className="group relative flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-lbl-orange hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="relative h-56 flex items-center justify-center overflow-hidden px-6"
                  style={{
                    background:
                      b.visual === "dashboard"
                        ? "linear-gradient(135deg,#2a1748,#421f52,#6b3a82)"
                        : b.visual === "brain"
                        ? "linear-gradient(135deg,#2a1748,#421f52,#6b3a82)"
                        : "linear-gradient(135deg,#421f52,#9b2a7a,#ec4795)",
                  }}
                >
                  {b.visual === "brain" && (
                    <div className="w-[230px]">
                      <BrainOrb />
                    </div>
                  )}
                  {b.visual === "dashboard" && (
                    <div className="w-[640px] scale-[0.44] origin-center">
                      <DashboardMock />
                    </div>
                  )}
                  {b.visual === "bot" && (
                    <img
                      src={blueBotImg}
                      alt="Blue AI bot Chief of Staff assistant"
                      className="h-44 w-44 object-contain drop-shadow-2xl"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl font-extrabold bg-grad-brand bg-clip-text text-transparent">{b.n}</span>
                  </div>
                  <h3 className="text-xl font-bold text-lbl-ink mb-2">{b.title}</h3>
                  <p className="text-lg text-lbl-ink/75 leading-relaxed mb-4">{b.desc}</p>
                  <span className="mt-auto inline-flex items-center font-semibold text-lbl-orange">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Vertical solutions */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lbl-orange mb-3">Vertical-specific solutions</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-lbl-eggplant">Made for </span>
              <span className="bg-grad-brand bg-clip-text text-transparent">how you actually work.</span>
            </h2>
            <p className="text-lg text-lbl-ink/75 leading-relaxed">
              A starting point, not a shortlist. If your industry isn't below, we've almost certainly built for it, or something adjacent to it. Ask us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="group relative bg-white rounded-3xl border-2 border-gray-200 p-6 hover:border-lbl-orange hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-lbl-ink to-lbl-orange">
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-lbl-ink">{v.name}</h3>
                    <p className="text-sm text-lbl-ink/60">{v.audience}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-lbl-eggplant mb-2">{v.hook}</p>
                <p className="text-lg text-lbl-ink/75 leading-relaxed mb-5">{v.detail}</p>
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {v.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-lbl-paper text-lbl-ink border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full bg-lbl-ink hover:bg-lbl-orange text-white rounded-full transition-colors"
                >
                  <Link to="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-lbl-ink to-lbl-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't see your industry?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Book a 30-minute discovery call. We'll dig into your workflows, spot the highest-ROI opportunities, and map a plan tailored to how your business actually runs.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-lbl-orange hover:bg-white/90 rounded-full px-8"
              onClick={() => { trackEvent('book_consultation', { location: 'industries' }); window.open("https://calendly.com/karen-launchbylunch/30min", "_blank"); }}
            >
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
