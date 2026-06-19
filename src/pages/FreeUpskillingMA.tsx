import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, DollarSign, Building2, CheckCircle2, ArrowRight, FileText, Search, ClipboardList, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import commCorpLogo from "@/assets/commonwealth-corporation-logo.png.asset.json";

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

  const courses = [
    { number: "C-15543", title: "AI Essentials: Your New Co-Worker Is Claude" },
    { number: "C-15681", title: "AI for HR Operations and Internal Documentation" },
    { number: "C-15682", title: "AI for Sales: From Prospecting to Proposal" },
    { number: "C-15683", title: "Learn to Build Your Own Website with AI" },
    { number: "C-15684", title: "AI for Customer Service and Client Communication" },
    { number: "C-15685", title: "AI for Marketing and Content Creation" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Free Upskilling MA | Workforce Training Fund | Launch by Lunch</title>
        <meta
          name="description"
          content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner."
        />
        <link rel="canonical" href="https://launchbylunch.co/free-upskilling-ma" />
        <meta property="og:title" content="Free Upskilling MA | Workforce Training Fund | Launch by Lunch" />
        <meta property="og:description" content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner." />
        <meta property="og:url" content="https://launchbylunch.co/free-upskilling-ma" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Free Upskilling MA | Workforce Training Fund | Launch by Lunch" />
        <meta name="twitter:description" content="Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program. Launch by Lunch is an official partner." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free AI Upskilling for Massachusetts Small Businesses",
            description: "Massachusetts small businesses can access up to $15,000 per year in free AI and workforce upskilling through the Workforce Training Fund Express Program.",
            url: "https://launchbylunch.co/free-upskilling-ma",
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
          <p className="mt-4 text-center text-lg text-lbl-ink/60">
            Loom defaults to 1.2× playback. Click the gear icon in the player and select 1× if the video sounds too fast.
          </p>
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
                <div className="grid sm:grid-cols-2 gap-4">
                  {courses.map((course) => (
                    <div
                      key={course.number}
                      className="flex items-start gap-3 p-3 rounded-xl bg-lbl-orange/5"
                    >
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-lbl-orange/10 text-lbl-orange font-semibold text-sm whitespace-nowrap">
                        {course.number}
                      </span>
                      <span className="text-base text-lbl-ink leading-snug">{course.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              <a
                href="https://calendly.com/karen-launchbylunch/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to our team
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
