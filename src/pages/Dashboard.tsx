import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowRight,
  Check,
  TrendingUp,
  Users,
  MessageSquare,
  Wallet,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import dashboardImage from "@/assets/evergreen-dashboard.png.asset.json";

const GILBARBARA = "https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos";
const SVGL = "https://raw.githubusercontent.com/pheralb/svgl/main/static/library";

const connectors = [
  { name: "Stripe", src: `${GILBARBARA}/stripe.svg` },
  { name: "QuickBooks", src: "/logos/quickbooks.svg" },
  { name: "Google Analytics", src: `${GILBARBARA}/google-analytics.svg` },
  { name: "HubSpot", src: `${GILBARBARA}/hubspot.svg` },
  { name: "Google Sheets", src: `${SVGL}/google-sheets.svg` },
  { name: "Shopify", src: `${GILBARBARA}/shopify.svg` },
  { name: "Airtable", src: `${GILBARBARA}/airtable.svg` },
  { name: "Notion", src: `${GILBARBARA}/notion.svg` },
  { name: "Luma", src: "/logos/luma.svg" },
  { name: "LinkedIn", src: `${GILBARBARA}/linkedin-icon.svg` },
  { name: "Instagram", src: `${GILBARBARA}/instagram-icon.svg` },
  { name: "Gmail", src: `${GILBARBARA}/google-gmail.svg` },
];

const scrollToPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const painPoints = [
  "You get to the end of the month and realize three invoices are overdue, and now you cannot pay your team.",
  "You realize two weeks later that no follow-up was ever sent to a qualified lead after a great meeting.",
  "Two happy customers filled out a feedback survey this month, perfect testimonial material, but it is sitting in Google Forms instead of on your website.",
  "You met a dozen new people at an event this week, and not one of them made it into your email audience or newsletter.",
];

const features = [
  {
    icon: TrendingUp,
    title: "Revenue and cash flow",
    body: "See what came in, what is still owed, and whether you are on pace for the month.",
  },
  {
    icon: Wallet,
    title: "Pipeline and deals",
    body: "Your leads and deals in progress, and what is about to close, so you know what is coming.",
  },
  {
    icon: Users,
    title: "Customers and reach",
    body: "Your active clients and your email audience, together in one view.",
  },
  {
    icon: MessageSquare,
    title: "Customer and client feedback",
    body: "Survey results, testimonials, and reviews that tell you how you are doing.",
  },
];

const customization = [
  {
    kicker: "01 · Pick your look",
    title: "Four dashboard styles",
    body: "Choose the layout that fits how you think.",
    pills: ["Bento grid", "Command center", "Executive brief", "Narrative scorecard"],
  },
  {
    kicker: "02 · Your brand, your colors",
    title: "Not a generic template",
    body: "We build your pick in your brand, so it looks like it belongs to you, not to us.",
  },
  {
    kicker: "03 · Your metrics, your language",
    title: "Speaks the way you do",
    body: "Your products, your goals, and the words your team actually uses.",
  },
];

const baseChecklist = [
  "Up to 5 data connectors wired and reconciled",
  "Your chosen layout, built in your brand",
  "A one-question hero plus your four core sections, our standard build",
  "Live data where possible, simple manual updates where not",
  "A 30-minute kickoff call",
  "An hour-long handoff",
  "A 30-minute check-in a month later to see how you are doing with your dashboard",
];

const Dashboard = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Business Dashboard | Launch by Lunch</title>
        <meta
          name="description"
          content="One screen for your whole business. Revenue, pipeline, customers, and feedback pulled together in a dashboard built in your brand."
        />
        <link rel="canonical" href="https://launchbylunch.co/dashboard" />
        <meta property="og:title" content="Business Dashboard | Launch by Lunch" />
        <meta
          property="og:description"
          content="Understand anything about your company at any time. A single dashboard built in your brand."
        />
        <meta property="og:url" content="https://launchbylunch.co/dashboard" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2a1748 0%, #421f52 40%, #ec4795 80%, #fc8817 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Peace of mind for your business
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Understand anything about your company{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #ffb37a, #fc8817, #ec4795)" }}
                >
                  at any time
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-6 max-w-xl">
                Real clarity about how your business is doing, and the confidence to act on it. We pull your rich data together into one place you can actually reach, so you always know when you are on track, when you are not, and when to course-correct.
              </p>
              <div
                className="rounded-xl border border-white/25 bg-white/10 backdrop-blur px-5 py-4 mb-8 max-w-xl text-white/95"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
              >
                Revenue, engagement, satisfaction, and your sales pipeline, all in one place.
              </div>
              <Button
                size="lg"
                className="group rounded-full px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
                style={{ background: "linear-gradient(90deg, #fc8817, #ec4795)" }}
                onClick={scrollToPricing}
              >
                Build Your Dashboard
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Floating mini-dashboard illustration */}
            <div className="relative">
              <div className="absolute -top-4 left-4 z-20 bg-white text-lbl-ink rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-lbl-orange" />
                Revenue up 18%
              </div>
              <div className="absolute -bottom-3 right-6 z-20 bg-white text-lbl-ink rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lbl-green" />
                On track this month
              </div>
              <div className="relative bg-white text-lbl-ink rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                <div className="text-xs font-semibold text-gray-500 mb-3">This Month at a Glance</div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Revenue tile */}
                  <div
                    className="col-span-2 rounded-xl p-4 text-white"
                    style={{ background: "linear-gradient(135deg, #421f52, #ec4795)" }}
                  >
                    <div className="text-[10px] uppercase tracking-wider opacity-80">Revenue</div>
                    <div className="text-3xl font-extrabold">$48.2k</div>
                    <div className="text-xs opacity-90 mt-1">↑ 18% on pace</div>
                  </div>
                  {/* Must Do tile */}
                  <div className="col-span-2 rounded-xl border border-orange-200 bg-orange-50 p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <AlertCircle className="h-3.5 w-3.5 text-lbl-orange" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lbl-orange">Must Do</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li className="flex justify-between"><span>Atlas Advisory<span className="text-gray-500"> · 14 days overdue</span></span><span className="font-semibold">$2,950</span></li>
                      <li className="flex justify-between"><span>Brightwave Co<span className="text-gray-500"> · 9 days overdue</span></span><span className="font-semibold">$2,500</span></li>
                      <li className="flex justify-between"><span>Cedar & Co<span className="text-gray-500"> · 30 days overdue</span></span><span className="font-semibold">$250</span></li>
                    </ul>
                  </div>
                  {/* Trend + goal */}
                  <div className="rounded-xl border border-gray-200 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Revenue Trend</div>
                    <svg viewBox="0 0 100 40" className="w-full h-12">
                      <polyline
                        fill="none"
                        stroke="#ec4795"
                        strokeWidth="2"
                        points="0,32 15,28 30,30 45,20 60,22 75,12 100,6"
                      />
                      <circle cx="100" cy="6" r="2.5" fill="#fc8817" />
                    </svg>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-3 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f0e6f2" strokeWidth="3" />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.9"
                          fill="none"
                          stroke="#fc8817"
                          strokeWidth="3"
                          strokeDasharray="74, 100"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-extrabold">74%</span>
                        <span className="text-[8px] text-gray-500 uppercase">Goal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAS THIS EVER HAPPENED */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">The daily reality</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">Has this ever happened to you?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If any of these sound familiar, you are running your business without a clear view.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 text-lbl-orange flex items-center justify-center font-bold">
                  !
                </div>
                <p className="text-gray-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 1 */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-lbl-paper rounded-3xl p-10 md:p-12 text-center shadow-sm border border-gray-100">
            <div className="text-4xl text-lbl-magenta font-serif leading-none mb-4">“</div>
            <p className="text-xl md:text-2xl text-lbl-ink leading-relaxed mb-4 italic">
              I used to open six tabs to answer one question. Now it is one screen, and I finally trust the number.
            </p>
            <div className="font-semibold text-lbl-magenta">Allison, CEO and Founder</div>
          </div>
        </div>
      </section>

      {/* SEE IT IN ACTION */}
      <section className="bg-white pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">See it in action</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">This is what yours could look like.</h2>
          <p className="text-lg text-gray-600 mb-10">One screen, your whole business at a glance. Built in your brand.</p>

          <div className="mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white max-w-[1000px]">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <img src={dashboardImage.url} alt="Sample business dashboard" className="w-full block" />
          </div>
          <p className="text-sm text-gray-500 mt-4">Demo data, built in a client's brand. Yours is built in yours.</p>
        </div>
      </section>

      {/* WHAT YOUR DASHBOARD DOES */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">One clear view</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">What Your Dashboard Does</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything in one place to give you peace of mind about your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #ec4795, #fc8817)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-lbl-ink mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTORS */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">Your stack, connected</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">Connect the Tools You Already Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your dashboard pulls from hundreds of tools and connectors like these.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {connectors.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={c.src}
                    alt={`${c.name} logo`}
                    className="h-7 w-7 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 2 */}
      <section className="bg-lbl-paper py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-12 text-center shadow-sm border border-gray-100">
            <div className="text-4xl text-lbl-orange font-serif leading-none mb-4">“</div>
            <p className="text-xl md:text-2xl text-lbl-ink leading-relaxed mb-4 italic">
              We stopped guessing at the end of the month. Now I glance at it every morning with my coffee.
            </p>
            <div className="font-semibold text-lbl-orange">Steve, Store Owner</div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZED */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">Made for you</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--grad-brand)" }}>
                Customized
              </span>{" "}
              to your business.<br />Down to the last tile.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No two businesses operate the same, so no two dashboards look the same.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {customization.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-xs font-bold uppercase tracking-wider text-lbl-magenta mb-3">{c.kicker}</div>
                <h3 className="text-xl font-bold text-lbl-ink mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.body}</p>
                {c.pills && (
                  <div className="flex flex-wrap gap-2">
                    {c.pills.map((p) => (
                      <span key={p} className="text-xs font-medium px-3 py-1 rounded-full bg-lbl-paper border border-gray-200 text-lbl-ink">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-lbl-paper py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-lbl-orange mb-3">Simple pricing</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-lbl-ink mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">Start with the base build, add more as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Featured */}
            <div className="relative bg-white rounded-3xl p-7 shadow-lg border-2 border-lbl-orange">
              <div className="absolute -top-3 left-6 bg-lbl-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Start Here
              </div>
              <h3 className="text-xl font-bold text-lbl-ink">Base Dashboard Build</h3>
              <div className="text-sm text-gray-500 mb-4">Up to 5 connectors</div>
              <div className="text-4xl font-extrabold text-lbl-ink mb-1">$3,500</div>
              <p className="text-sm text-gray-600 mb-5">Your whole business in one screen, built around the one question that matters most to you.</p>
              <ul className="space-y-2.5 mb-6">
                {baseChecklist.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-lbl-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full rounded-full text-white font-semibold py-6"
                style={{ background: "linear-gradient(90deg, #2a1748, #fc8817)" }}
                onClick={() => window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")}
              >
                Get Started
              </Button>
            </div>

            {/* Custom Additions */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-lbl-ink">Custom Additions</h3>
              <div className="text-sm text-gray-500 mb-4">Beyond the base build</div>
              <div className="text-4xl font-extrabold text-lbl-ink mb-1">$1,500+</div>
              <p className="text-sm text-gray-600 mb-5">Add more tools and connectors as you grow your business.</p>
              <ul className="space-y-2.5 mb-5">
                <li className="flex gap-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-lbl-green flex-shrink-0 mt-0.5" />
                  <span>Up to five additional data connectors</span>
                </li>
              </ul>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Additional sections:</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Website analytics", "Social media analytics", "Project updates", "Marketing spend (Google Ads, Facebook Ads)"].map((p) => (
                  <span key={p} className="text-xs font-medium px-3 py-1 rounded-full bg-lbl-paper border border-gray-200 text-lbl-ink">
                    {p}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full rounded-full font-semibold py-6 border-lbl-ink text-lbl-ink hover:bg-lbl-ink hover:text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Talk to Us
              </Button>
            </div>

            {/* Ongoing Care */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-lbl-ink">Ongoing Care</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-lbl-paper border border-gray-200 text-gray-500">
                  Optional
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-4">Monthly, optional</div>
              <div className="text-4xl font-extrabold text-lbl-ink mb-1">
                $500<span className="text-base font-medium text-gray-500"> / month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">We keep it current and evolve it with you.</p>
              <Button
                variant="outline"
                className="w-full rounded-full font-semibold py-6 border-lbl-ink text-lbl-ink hover:bg-lbl-ink hover:text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative text-white py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2a1748 0%, #421f52 35%, #ec4795 75%, #fc8817 100%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            Clarity and Confidence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Your whole business, finally in one place.
          </h2>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            You already have rich data. We pull it together to tell the story and put it somewhere you can actually reach, so you can make better decisions, know when you are on track, and know when to course-correct.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-lg font-semibold bg-white text-lbl-ink hover:bg-white/90 shadow-2xl"
            onClick={() => window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")}
          >
            Build Your Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
