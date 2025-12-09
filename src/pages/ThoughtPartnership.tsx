
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Users, Lightbulb, Target, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ThoughtPartnership = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Strategic Partnership</span>
              <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Thought Partnership
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Karen and Stephan bring complementary fractional expertise that covers every angle of building an AI-first startup.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-8">
        {/* Complementary Skills Section */}
        <div className="mb-16 mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Paired Strengths. One Forward Motion.
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Karen's Expertise */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange p-0.5">
                    <img
                      src="/lovable-uploads/a25b125a-4110-46e2-bf28-7cd7e60e633f.png"
                      alt="Karen Kelly"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                      Karen Kelly
                    </h3>
                    <p className="text-launch-orange font-semibold">CEO & Strategic Visionary</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-launch-purple mt-1 flex-shrink-0" />
                    <p className="text-gray-700">3x founder who understands the non-technical founder journey</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-launch-purple mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Former CMO & martech president with go-to-market mastery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-launch-purple mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Deep network across Boston's startup ecosystem</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 text-launch-purple mt-1 flex-shrink-0" />
                    <p className="text-gray-700">"Find a way" mindset that drives creative problem-solving</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-launch-purple mb-2">Expertise Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Brand Strategy", "Fundraising", "GTM", "Partnerships", "Team Building", "Community"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-launch-purple/10 text-launch-purple text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stephan's Expertise */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple p-0.5">
                    <img
                      src="/lovable-uploads/de950dd0-67d3-45fd-b2d5-e419d56f3c2e.png"
                      alt="Stephan Smith"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">
                      Stephan Smith
                    </h3>
                    <p className="text-launch-orange font-semibold">CTO & Technical Expert</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-launch-orange mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Techstars alum with hands-on startup building experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-launch-orange mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Deep expertise in AI, low-code, and modern tech stacks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-launch-orange mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Fractional CTO experience guiding non-technical founders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 text-launch-orange mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Bridges complex technology with practical execution</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-launch-orange mb-2">Expertise Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Low-Code", "Architecture", "MVP Development", "Tech Strategy", "Automation"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-launch-orange/10 text-launch-orange text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How We Work Together */}
        <div className="mb-16">
          <Card className="border-none shadow-xl bg-gradient-to-r from-launch-purple/5 via-white to-launch-orange/5 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Better Together
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Vision + Execution</h3>
                  <p className="text-gray-600 text-sm">Karen brings the strategic vision while Stephan builds the technical roadmap to get there.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Network + Know-How</h3>
                  <p className="text-gray-600 text-sm">Access to Boston's startup community combined with deep technical mentorship.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Strategy + Speed</h3>
                  <p className="text-gray-600 text-sm">Thoughtful planning meets rapid execution — launch by lunch, not by next year.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Working History */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                A Partnership Proven by Experience
              </span>
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Stephan was Karen's fractional CTO before they joined forces to build Launch by Lunch. They've already navigated the founder-CTO relationship and know how to translate business needs into technical solutions.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Now they're on a mission to democratize access to AI for founders everywhere — combining their complementary skills to help you build faster, smarter, and with the right support.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Ready to Combine Forces?
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's explore how our combined expertise can accelerate your startup journey.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white rounded-full font-medium px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => navigate('/contact')}
          >
            <span className="mr-2">Get in Touch</span>
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThoughtPartnership;
