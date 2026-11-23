
import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import commCorpLogo from "@/assets/commonwealth-corporation-logo.png.asset.json";
import anthropicLogo from "@/assets/anthropic-wordmark.png.asset.json";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lbl-paper via-white to-orange-50">
      <Helmet>
        <title>About Launch by Lunch | Our Story & Mission</title>
        <meta name="description" content="Meet the team behind Launch by Lunch. Our mission is to make AI practical and people-first for the small and mid-sized businesses we serve." />
        <link rel="canonical" href="https://launchbylunch.co/about" />
        <meta property="og:title" content="About Launch by Lunch | Our Story & Mission" />
        <meta property="og:description" content="The story behind Launch by Lunch and our mission to bring approachable AI to growing teams." />
        <meta property="og:url" content="https://launchbylunch.co/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lbl-ink/10 via-transparent to-lbl-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 text-lbl-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Story</span>
              <Sparkles className="h-6 w-6 text-lbl-ink animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-10">
              <span className="bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent">
                Why We Exist
              </span>
            </h1>
            <div className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                When I founded Launch by Lunch in 2024, my goal was simple: help non-technical founders build with AI. Since then, it has evolved into more than 2,500 IRL community members, monthly AI coworking events, and{" "}
                <a href="/industries" className="text-lbl-orange underline underline-offset-2 hover:text-lbl-ink transition-colors">bespoke AI solutions</a>{" "}
                and training for small business owners.
              </p>
              <p>
                We are grounded in the belief that AI can support our ability to be more human as leaders, friends, parents, and colleagues. We exist to build community through AI and ensure that no business is left behind in the greatest evolution of opportunity our economy has ever seen.
              </p>
              <p>
                Join us for a{" "}
                <a
                  href="https://luma.com/launchbylunch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lbl-orange underline underline-offset-2 hover:text-lbl-ink transition-colors"
                >
                  public workshop
                </a>
                ,{" "}
                <a
                  href="https://luma.com/launchbylunch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lbl-orange underline underline-offset-2 hover:text-lbl-ink transition-colors"
                >
                  monthly AI co-working
                </a>
, or{" "}
                <a
                  href="/industries"
                  className="text-lbl-orange underline underline-offset-2 hover:text-lbl-ink transition-colors"
                >
                  ask how
                </a>{" "}
                we can bring your business into the new world of work.
              </p>
            </div>
            <p className="mt-10 text-lbl-ink font-semibold text-lg">
              - Karen Kelly, Founder, CEO
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">

        {/* Team Photo and Bios Section */}
        <div className="mb-12 space-y-10">
          {/* Karen Kelly */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 w-full">
              <img
                src="/lovable-uploads/karen-kelly.jpg"
                alt="Karen Kelly, CEO of Launch by Lunch"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 w-full flex">
              <Card className="border-none shadow-lg bg-gradient-to-br from-white via-lbl-paper/20 to-white overflow-hidden w-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        <a href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                          Karen Kelly
                        </a>
                      </h3>
                      <p className="text-lbl-orange font-semibold mb-2">Founder and CEO, CCAR-F</p>
                      <p className="text-gray-700 leading-relaxed text-base">
                        Karen Kelly is a 3x founder and TEDx speaker helping leaders navigate the future of work in an AI-driven world. Named a Top 100 Voice of the Massachusetts AI Coalition in 2026, Karen founded Launch by Lunch as Boston's first AI community with the goal of enabling non-technical teams with the power of no code solutions. She has worked with dozens of Fortune 1000 organizations, making AI practical and accessible for non-technical executives while emphasizing judgment and communication as leadership advantages.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Ariel Galipeau */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 w-full">
              <img
                src="/lovable-uploads/ariel-galipeau-final.png"
                alt="Ariel Galipeau, Director of AI Programs at Launch by Lunch"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 w-full flex">
              <Card className="border-none shadow-lg bg-gradient-to-br from-white via-lbl-paper/20 to-white overflow-hidden w-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        <span className="bg-gradient-to-r from-lbl-orange to-lbl-ink bg-clip-text text-transparent">
                          Ariel Galipeau
                        </span>
                      </h3>
                      <p className="text-lbl-orange font-semibold mb-2">Director of AI Programs, CCAR-F</p>
                      <p className="text-gray-700 leading-relaxed text-base">
                        Ariel Galipeau is a Claude Certified Architect and coach who helps founders and teams turn ideas into executable plans, scalable systems, and consistent progress. With a decade inside fast-moving, mission-driven startups, she translates complexity into clear priorities and embeds AI into day-to-day workflows to improve decision-making, reduce friction, and drive real momentum. She has a particular interest in closing the AI adoption gap for women.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <section className="mb-16" aria-labelledby="credentials-heading">
          <h2 id="credentials-heading" className="text-2xl md:text-3xl font-bold mb-3 text-center">
            <span className="bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent">
              Our Credentials
            </span>
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
            The training, approvals, and certifications behind every engagement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <img src="/lovable-uploads/claude-partner-network.png" alt="Claude Partner Network logo" className="h-14 w-auto mb-5" />
                <h3 className="text-xl font-bold text-lbl-ink mb-2">Claude Partner Network</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Launch by Lunch is a member of the Claude Partner Network, Anthropic's program for the trusted firms it relies on to help organizations adopt Claude. Membership is selective: partners are vetted by Anthropic and gain direct access to its training, technical guidance, and product teams.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <img src={anthropicLogo.url} alt="Anthropic" className="h-6 w-auto mb-5" />
                <h3 className="text-xl font-bold text-lbl-ink mb-2">Claude Approved SMB Training</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are one of the only small business training companies in the US approved by Anthropic. That means we teach from Anthropic's own playbook and receive week to week updates, so your team learns what works with Claude today, not last quarter.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <img src={commCorpLogo.url} alt="Commonwealth Corporation logo" className="h-14 w-auto mb-5" />
                <h3 className="text-xl font-bold text-lbl-ink mb-2">State Approved AI Upskilling</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We partner with the Commonwealth of Massachusetts through Commonwealth Corporation's Workforce Training Fund Express Program. Our AI upskilling curriculum is state approved, so eligible Massachusetts businesses can train their teams with grant funding.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 md:p-8">
                <div className="h-14 flex items-center mb-5">
                  <span className="text-4xl font-bold bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent">10</span>
                </div>
                <h3 className="text-xl font-bold text-lbl-ink mb-2">Claude Certified Architects (CCAR-F)</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ten of our builders hold Anthropic's Claude Certified Architect credential. The exam tests deep technical skill, including the Model Context Protocol (MCP), building on the Claude API, agent design, and production-grade integrations. It holds our team to the same engineering standard expected of software developers with a traditional CS degree.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lbl-ink/10 via-lbl-orange/10 to-lbl-ink/10 rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-lbl-ink to-lbl-orange bg-clip-text text-transparent">
                Ready to Transform Your Vision?
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build your AI-first company without the traditional barriers.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lbl-ink to-lbl-orange hover:from-lbl-orange hover:to-lbl-ink text-white rounded-full font-medium px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => navigate('/contact')}
            >
              <span className="mr-2">Talk to Us</span>
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
