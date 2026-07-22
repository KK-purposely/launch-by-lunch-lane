import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, DollarSign, Building2, CheckCircle2, ArrowRight, ChevronDown, FileText, Search, ClipboardList, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import commCorpLogo from "@/assets/commonwealth-corporation-logo.png.asset.json";
import ogImage from "@/assets/og-free-upskilling.jpg.asset.json";
import amandaSwiatocha from "@/assets/testimonial-amanda-swiatocha.jpg";
import mollyPapermaster from "@/assets/molly-papermaster.png.asset.json";



const FreeUpskillingMA = () => {
  const resources = [
    {
      icon: FileText,
      title: "How to Apply",
      description: "Step-by-step guidance from Commonwealth Corporation on the Express Program application process.",
      href: "https://commcorp.org/subprogram/wtfp-express-program-for-applicants/",
    },
    {
      icon: Search,
      title: "Course Finder",
      description: "Browse the official Express Directory and search \"Launch by Lunch\" in the Training Provider Name field to find our courses.",
      href: "https://commcorp.org/subprogram/wtfp-express-directory/",
    },
    {
      icon: ClipboardList,
      title: "Application Walkthrough",
      description: "A visual, click-by-click Scribe walkthrough of the Express New Application for 2025.",
      href: "https://scribehow.com/o/FokoeLKWTB2AwQ_VecfpKg/viewer/Express_New_Application_2025__7SK8cy6nTG6jMHFpaXyoUQ",
    },
  ];

  const eligibility = [
    "Massachusetts-based business with 100 or fewer employees",
    "Up to date on Massachusetts unemployment insurance contributions",
    "Training delivered by an approved Express Program provider (Launch by Lunch is one)",
    "Courses selected from the official Express Directory",
  ];

  const highlights = [
    {
      icon: DollarSign,
      title: "Up to $15,000 per year",
      description: "Each eligible Massachusetts small business can access up to $15,000 annually in fully funded training and AI upskilling, with no employer match required for Express grants.",
    },
    {
      icon: Building2,
      title: "Built for small businesses",
      description: "The Express Program is specifically designed for organizations with 100 or fewer Massachusetts employees, the businesses that need upskilling most but rarely have a training budget for it.",
    },
    {
      icon: GraduationCap,
      title: "Pre-approved AI courses",
      description: "Launch by Lunch is an official Express Program partner. Our AI literacy, automation, and leadership courses are pre-approved and listed in the state's Express Directory.",
    },
  ];

  const courses: { number: string; title: string; meta: string; description: string; inRoom: string; prerequisite?: string }[] = [
    {
      number: "C-15866",
      title: "AI Leadership Alignment: Assessing Readiness and Leading Adoption",
      meta: "3 hours | In-person or live virtual · Up to 10 participants · $4,500 per cohort | $749/person (open enrollment)",
      description:
        "The leadership course that comes before any rollout. AI initiatives rarely stall on technology; they stall because the leadership team isn't aligned on where they're going or how to get there. This session gives senior leaders a shared language and a repeatable method for leading AI adoption, built on four established frameworks: the 5A adoption model, Rogers' Diffusion of Innovations curve, the Brynjolfsson productivity J-curve, and the difference between sponsoring a change and actively leading it. Participants work through a guided readiness assessment, analyze where AI shifts how their organization competes, and examine the gap between the AI behaviors their teams have actually seen them model and the ones that would inspire others to follow. They leave able to lead adoption deliberately instead of leaving it to scattered individual experimentation.",
      inRoom:
        "AI-readiness pulse check, framework walkthroughs, think-pair-share strategy exercises, modeling self-assessment, structured behavioral goal-setting. All exercises use instructor-provided frameworks and practice prompts.",
    },
    {
      number: "C-15543",
      title: "AI Essentials: Your New Co-Worker Is Claude",
      meta: "Half-day workshop (4 hours) | In-person or live virtual · Up to 15 participants · $5,000 per cohort | $525/person (open enrollment)",
      description:
        "The \"start here\" course for any employee in any department. Most people know they should be using AI, they just don't know where to begin. This workshop removes the anxiety and builds a working foundation in one morning. Participants spend the first hour understanding what Claude is and how to talk to it effectively. The rest of the session is hands-on: drafting emails, summarizing documents, preparing for meetings, and answering business questions in real time. Everyone leaves with a personal prompt library they built themselves and can use immediately.",
      inRoom: "Prompt-writing exercises, live demos, small group practice, personal prompt library built during class.",
    },
    {
      number: "C-15859",
      title: "Beyond Claude Chat: Skills, Routines, and a Connected Toolkit",
      meta: "Half-day 4 hours | In-person or live virtual · Up to 15 participants · $5,000 per cohort | $525/person (open enrollment)",
      description:
        "The \"next step\" course for anyone who's already using Claude and wants to move past one-off prompts. Most people who've adopted AI hit the same wall: they get value from chatting with Claude but still copy-paste between tools, retype the same context every week, and miss the real leverage that comes from a connected setup. This workshop closes that gap in half a day. Participants spend the session understanding how to build an operating system within Claude. We'll cover how to design reusable skills and routines so Claude handles repetitive work without re-explaining it, how to connect your everyday tools (email, calendar, Drive, Notion, and more) so Claude can act across them, key commands for managing token usage so longer sessions stay fast and affordable, and best practices for organizing projects and workstreams so each piece of work has the right context loaded. Everyone leaves with the knowledge to connect their tools in Claude, an example starter set of skills, and the muscle to add more on their own.",
      inRoom: "Demonstrate tool connections, demo of building a skill and routine, project structure templates, review of common commands.",
      prerequisite: "Comfort using Claude for everyday tasks (drafting, summarizing, Q&A). The AI Essentials course or equivalent daily use is recommended.",
    },
    {
      number: "C-15685",
      title: "AI for Marketing and Content Creation",
      meta: "Full-day workshop (7 hours) | In-person or live virtual · Up to 12 participants · $8,250 per cohort | $925/person (open enrollment)",
      description:
        "Massachusetts SMBs often have one person doing the job of three when it comes to marketing. This full-day course teaches teams how to produce more content in less time without sacrificing quality or brand voice. Morning session covers social media posts, email campaigns, and blog content. Afternoon covers repurposing one asset into multiple formats, writing ad copy, and building a reusable content system. Participants work on real content for their actual businesses throughout the day.",
      inRoom: "Live content creation in Claude, brand voice exercises, 90-day content calendar built during class, reusable prompt templates for every content type.",
    },
    {
      number: "C-15684",
      title: "AI for Customer Service and Client Communication",
      meta: "Half-day workshop (4 hours) | In-person or live virtual · Up to 15 participants · $5,300 per cohort | $565/person (open enrollment)",
      description:
        "Slow response times and inconsistent messaging cost customers, and Massachusetts businesses in hospitality, retail, healthcare admin, and professional services feel this acutely. This workshop teaches front-line staff how to draft professional, on-brand replies quickly, handle complaints with the right tone, respond to reviews, and build a shared FAQ library the whole team can use. Participants practice with real scenarios from their industry and leave with a ready-to-use response library.",
      inRoom: "Live response drafting, tone calibration exercises, complaint-handling practice, shared response library built as a team.",
    },
    {
      number: "C-15682",
      title: "AI for Sales: From Prospecting to Proposal",
      meta: "Full-day workshop (7 hours) | In-person or live virtual · Up to 12 participants · $9,350 per cohort | $1,050/person (open enrollment)",
      description:
        "This course gives sales teams a repeatable AI-assisted workflow from first touch to signed proposal. Morning covers prospect research, personalized outreach, and follow-up sequences that don't sound like templates. Afternoon covers proposal writing, objection preparation, and post-call summaries. Participants practice on real accounts and prospects during the day, so the work is immediately applicable. Especially relevant for B2B services, professional services firms, and innovation-economy companies across the state.",
      inRoom: "Live prospect research and outreach drafting, proposal workshop, objection prep exercises, three completed proposal templates.",
    },
    {
      number: "C-15681",
      title: "AI for HR Operations and Internal Documentation",
      meta: "Full-day workshop (7 hours) | In-person or live virtual · Up to 15 participants · $8,250 per cohort | $790/person (open enrollment)",
      description:
        "The invisible work of running a business, SOPs, onboarding guides, training materials, meeting notes, employee policies, consumes enormous time and often never gets done well. This course teaches operations and admin teams how to turn rough notes into clean procedures, build onboarding materials that actually hold up, and maintain living documentation that doesn't go stale. Ideal for manufacturing, construction, healthcare, and any business scaling past five employees. Participants complete three real internal documents during the day.",
      inRoom: "SOP drafting from rough notes, onboarding checklist creation, policy writing exercises, documentation system setup.",
    },
    {
      number: "C-15683",
      title: "Build Your Own Website with AI",
      meta: "Half-day workshop (4 hours) | In-person or live virtual · Up to 12 participants · $5,750 per cohort | $655/person (open enrollment)",
      description:
        "Most Massachusetts small businesses either pay an agency thousands for a basic site or settle for a template they can't update on their own. This workshop teaches owners and operators how to build a working business website using AI. Participants start with a clear sitemap, draft homepage and service-page copy in their own voice, and use Claude alongside an AI website builder to publish a live site by the end of the session. Especially relevant for home services, professional services, retail, and consultants who need a credible web presence without an ongoing agency retainer.",
      inRoom: "Sitemap planning, homepage and service-page copy drafted live, AI-assisted page build, published site live by end of class.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Free Upskilling MA | Workforce Training Fund | Launch by Lunch</title>
        <meta
          name="description"
          content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner."
        />
        <link rel="canonical" href="https://launchbylunch.co/comm-corp-express-ai-training-in-ma" />
        <meta property="og:title" content="Free Upskilling MA | Workforce Training Fund | Launch by Lunch" />
        <meta property="og:description" content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner." />
        <meta property="og:url" content="https://launchbylunch.co/comm-corp-express-ai-training-in-ma" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://launchbylunch.co${ogImage.url}`} />
        <meta property="og:image:width" content="1216" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Upskilling MA | Workforce Training Fund | Launch by Lunch" />
        <meta name="twitter:description" content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner." />
        <meta name="twitter:image" content={`https://launchbylunch.co${ogImage.url}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free AI Upskilling for Massachusetts Small Businesses",
            description: "Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program.",
            url: "https://launchbylunch.co/comm-corp-express-ai-training-in-ma",
            mainEntity: {
              "@type": "GovernmentService",
              name: "Massachusetts Workforce Training Fund Express Program",
              description: "A state initiative administered by Commonwealth Corporation that helps Massachusetts small businesses with 100 or fewer employees access up to $15,000 per year in fully funded training and AI upskilling.",
              provider: {
                "@type": "GovernmentOrganization",
                name: "Commonwealth Corporation",
                url: "https://commcorp.org",
              },
              serviceOperator: {
                "@type": "Organization",
                name: "Launch by Lunch",
                url: "https://launchbylunch.co",
              },
              areaServed: {
                "@type": "State",
                name: "Massachusetts",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Massachusetts small businesses with 100 or fewer employees",
              },
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-lbl-ink/10 via-white to-lbl-orange/10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-lbl-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-lbl-ink/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lbl-orange/10 text-lbl-orange font-medium text-lg mb-6">
              <Sparkles className="h-5 w-5" />
              Launched April 1, 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-lbl-ink via-lbl-magenta to-lbl-orange bg-clip-text text-transparent leading-[1.1]">
                Free AI Upskilling for Massachusetts Small Businesses
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Through the Massachusetts Workforce Training Fund Express Program, your team can access up to{" "}
              <span className="font-semibold text-lbl-ink">$15,000 per year</span> in fully funded AI and workforce training. Launch by Lunch is a proud official partner.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <p className="text-base text-gray-500">In partnership with</p>
              <a
                href="https://commcorp.org/subprogram/wtfp-express-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Commonwealth Corporation"
              >
                <img
                  src={commCorpLogo.url}
                  alt="Commonwealth Corporation logo"
                  className="h-12 md:h-14 w-auto"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <div style={{ position: "relative", paddingBottom: "50.52083333333333%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/d4139caaf1184028be542bffbc6c0606"
                title="Free Upskilling MA program overview"
                frameBorder={0}
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-lbl-orange/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-lbl-ink mb-3">Helpful Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to apply for funding and find the right courses for your team, directly from the state of Massachusetts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full border-gray-200 hover:border-lbl-orange hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-lbl-orange/10 flex items-center justify-center mb-4 group-hover:bg-lbl-orange/20 transition-colors">
                        <resource.icon className="h-6 w-6 text-lbl-orange" />
                      </div>
                      <h3 className="text-xl font-semibold text-lbl-ink mb-2 group-hover:text-lbl-orange transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-base text-gray-600 mb-4">{resource.description}</p>
                      <div className="inline-flex items-center text-lbl-orange font-medium">
                        Open resource
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <Card className="border-gray-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-lbl-ink mb-2">
                  Launch by Lunch courses in the Express Directory
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  These courses are pre-approved for the grant and available to any eligible Massachusetts small business.
                </p>
                <div className="space-y-3">
                  {courses.map((course) => (
                    <details
                      key={course.number}
                      className="group rounded-xl bg-lbl-orange/5 border border-lbl-orange/10 open:bg-lbl-orange/10 transition-colors"
                    >
                      <summary className="flex items-start gap-3 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-lbl-orange/10 text-lbl-orange font-semibold text-sm whitespace-nowrap">
                          {course.number}
                        </span>
                        <span className="flex-1 text-base text-lbl-ink leading-snug font-medium">
                          {course.title}
                        </span>
                        <ChevronDown className="h-5 w-5 text-lbl-orange flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="px-4 pb-5 pt-1 space-y-3 text-base text-gray-700 leading-relaxed">
                        <p className="text-sm font-medium text-lbl-ink/80">{course.meta}</p>
                        <p>{course.description}</p>
                        <p>
                          <span className="font-semibold text-lbl-ink">In the room: </span>
                          {course.inRoom}
                        </p>
                        {course.prerequisite && (
                          <p>
                            <span className="font-semibold text-lbl-ink">Prerequisite: </span>
                            {course.prerequisite}
                          </p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-4xl mx-auto bg-lbl-orange/5 border-l-4 border-lbl-orange rounded-xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={mollyPapermaster.url}
                alt="Molly Papermaster, Chief of Staff at The Engine"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <blockquote className="text-lg md:text-xl text-lbl-ink leading-relaxed italic">
                  "I honestly wasn't sure we'd see real adoption. Getting a busy team to change how they work is its own challenge. But people picked this up quickly because it was built around what they were already doing. Watching the team get time back in their week to focus on the work that actually moves the needle for our company has been the real win."
                </blockquote>
                <figcaption className="mt-4 text-base font-semibold text-lbl-ink">
                  Molly Papermaster
                  <span className="block font-normal text-gray-600">Chief of Staff, The Engine (Cambridge)</span>
                </figcaption>
              </div>
            </div>
          </motion.figure>
        </div>
      </section>

      {/* What it is */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lbl-ink mb-4">
              What is the Workforce Training Fund Express Program?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Workforce Training Fund Program (WTFP) is a Massachusetts state initiative administered by Commonwealth Corporation that helps employers train current and newly hired workers. The Express Program is the small-business track: it reimburses companies for the cost of pre-approved training courses, so you can upskill your team without the budget conversation that usually kills these projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lbl-ink to-lbl-magenta flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-lbl-ink mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gradient-to-br from-lbl-ink/5 via-white to-lbl-orange/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-lbl-ink mb-4">Who is eligible?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Express Program is open to most Massachusetts small businesses. If you employ 100 or fewer people in the Commonwealth and pay into the state's unemployment insurance system, you almost certainly qualify.
              </p>
              <Button
                asChild
                className="bg-lbl-orange hover:bg-lbl-orange/90 text-white rounded-full"
              >
                <a
                  href="https://commcorp.org/subprogram/wtfp-express-program-for-applicants/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check eligibility & apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <Card className="border-gray-200 bg-white">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-lbl-orange flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>


        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 mt-12"
        >
          <div className="bg-white border-l-4 border-lbl-orange rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start gap-6">
            <img
              src={amandaSwiatocha}
              alt="Amanda Swiatocha, Chief Marketing Officer at Softheon"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
              loading="lazy"
            />
            <div>
              <blockquote className="text-lg md:text-xl text-lbl-ink leading-relaxed italic">
                "We brought Karen in to speak to our EmpowerHER female employee resource group. I had high expectations but she surpassed all of them. She received the highest scores of any meeting we had ever had."
              </blockquote>
              <figcaption className="mt-4 text-base font-semibold text-lbl-ink">
                Amanda Swiatocha
                <span className="block font-normal text-gray-600">Chief Marketing Officer, Softheon</span>
              </figcaption>
            </div>
          </div>
        </motion.figure>
      </section>


      {/* How LBL fits */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lbl-ink mb-4">
            How Launch by Lunch fits in
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            As an official Express Program training partner, Launch by Lunch courses are listed in the Express Directory and pre-approved for reimbursement. That means once your business is approved for funding, you can apply it directly to our AI literacy, automation, and team upskilling programs without any extra paperwork on our end.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you'd like a hand picking the right training for your team or walking through the application together, we're happy to help.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-lbl-orange hover:bg-lbl-orange/90 text-white rounded-full"
            >
              <a
                href="https://commcorp.org/subprogram/wtfp-express-directory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find our courses in the directory
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-lbl-ink text-lbl-ink hover:bg-lbl-ink hover:text-white"
            >
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeUpskillingMA;
