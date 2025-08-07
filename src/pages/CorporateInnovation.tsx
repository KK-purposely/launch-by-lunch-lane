import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const CorporateInnovation = () => {
  const navigate = useNavigate();

  const strategies = [
    {
      icon: Target,
      title: "AI Strategy Development",
      description: "Develop comprehensive AI roadmaps aligned with your business objectives and competitive landscape."
    },
    {
      icon: TrendingUp,
      title: "Productivity Implementation",
      description: "Deploy AI solutions that measurably improve operational efficiency and employee productivity."
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through AI transformation with structured adoption frameworks."
    },
    {
      icon: Zap,
      title: "Innovation Acceleration",
      description: "Fast-track AI pilot programs from concept to deployment with proven methodologies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Innovation | AI Strategy for C-Suite Leaders | Launch by Lunch</title>
        <meta name="description" content="Transform your enterprise with AI-first strategies. Expert consulting for C-suite executives on AI implementation, productivity enhancement, and digital transformation." />
        <meta property="og:title" content="Corporate Innovation | AI Strategy for C-Suite Leaders" />
        <meta property="og:description" content="Transform your enterprise with AI-first strategies. Expert consulting for C-suite executives on AI implementation and productivity enhancement." />
        <meta name="keywords" content="AI strategy, corporate innovation, C-suite consulting, digital transformation, enterprise AI, productivity optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
                <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wide">Enterprise Solutions</span>
                <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Corporate Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Empower your C-suite with AI-first strategies that drive productivity, innovation, and competitive advantage
              </p>
            </div>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-white via-launch-light/30 to-white">
            <CardContent className="pt-8 p-8 md:p-12">
              <div className="mb-8 p-6 bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-2xl border border-launch-orange/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                    Transform Your Enterprise with AI-First Leadership
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In today's rapidly evolving business landscape, C-suite executives need more than just technology—they need strategic AI implementation that drives measurable productivity gains and sustainable competitive advantage.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our Corporate Innovation practice partners with senior executives to develop and execute comprehensive AI strategies that align with your organization's goals, culture, and operational realities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't just implement technology—we transform how your organization thinks, operates, and competes in an AI-driven marketplace.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Strategy Areas */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Our Strategic Approach
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white via-launch-light/20 to-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-launch-purple to-launch-orange rounded-lg p-3 flex-shrink-0">
                        <strategy.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-launch-purple">
                          {strategy.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {strategy.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Outcomes Section */}
          <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-white via-launch-light/30 to-white">
            <CardContent className="pt-8 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Measurable Outcomes
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-launch-purple mb-2">40%</div>
                  <p className="text-gray-700">Average productivity increase within 6 months</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-launch-orange mb-2">60%</div>
                  <p className="text-gray-700">Reduction in repetitive task processing time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-launch-purple mb-2">90%</div>
                  <p className="text-gray-700">Executive satisfaction with AI strategy implementation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Executive Testimonial */}
          <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-launch-purple/5 via-launch-orange/5 to-launch-purple/5">
            <CardContent className="pt-8 p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "Launch by Lunch didn't just help us implement AI—they transformed how we think about innovation at the executive level. The productivity gains have been transformational."
              </blockquote>
              <cite className="text-launch-purple font-semibold">
                — Fortune 500 CEO
              </cite>
            </CardContent>
          </Card>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Ready to Lead the AI Revolution?
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Schedule a strategic consultation to discuss how AI can transform your organization's productivity and competitive position.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white rounded-full font-medium px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => navigate('/contact')}
              >
                <span className="mr-2">Schedule Executive Consultation</span>
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CorporateInnovation;