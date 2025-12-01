
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Story</span>
              <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                About Launch by Lunch
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-white via-launch-light/30 to-white">
          <CardContent className="pt-8 p-8 md:p-12">
            {/* Emphasized First Sentence */}
            <div className="mb-8 p-6 bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-2xl border border-launch-orange/20">
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Launch by Lunch is the first community created to empower non-technical founders to move from the back of the crowd to the front of the line.
                </span>
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Paired with strategic consulting services and an online community, startups go from prototype to revenue to scale - all without outsourcing a line of code.
            </p>
          </CardContent>
        </Card>
        
        {/* Team Image */}
        <div className="mb-12 text-center">
          <img 
            src="/lovable-uploads/team-photo-updated.jpg" 
            alt="Karen Kelly and Stephan Smith, founders of Launch by Lunch" 
            className="rounded-2xl shadow-lg mx-auto w-1/2 h-auto"
          />
          <p className="text-sm text-gray-600 mt-4 italic">
            Karen Kelly and Stephan Smith, the founding team behind Launch by Lunch
          </p>
        </div>
        
        {/* Featured Founder Sections */}
        <div className="space-y-8 mb-12">
          {/* Karen Kelly */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">KK</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">
                    <a href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                      Karen Kelly
                    </a>
                  </h3>
                  <p className="text-launch-orange font-semibold text-lg mb-3">CEO</p>
                  <p className="text-gray-700 leading-relaxed">
                    Non-technical visionary who saw the democratization of technology coming. Karen is a 3x founder and ex-advertising exec who brings startup strategy, "find a way" thinking and a passion for empowerment through access, education, and network.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Stephan Smith */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">SS</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">
                    <a href="https://www.linkedin.com/in/stephansmithbc93/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                      Stephan Smith
                    </a>
                  </h3>
                  <p className="text-launch-orange font-semibold text-lg mb-3">CTO</p>
                  <p className="text-gray-700 leading-relaxed">
                    Techstars alum and technical expert with deep AI and low-code experience. Stephan bridges the gap between complex technology and practical founder execution. Stephan was a fractional CTO at Karen's company prior to jumping into this new adventure together - democratizing access to AI for everyone, everywhere.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Community Leaders Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              We are Boston's Startup Community Leaders
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-purple" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">Startup Boston Week Speaker</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Karen has spoken several times at this event, most recently in 2025 on building without code as a non-technical founder to a crowd of 8,000 ecosystem builders.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 2 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-orange/20 to-launch-purple/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-orange" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">Venture Lane Advisory Board</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Stephan sits on the advisory board for Venture Lane, where Launch by Lunch calls it's home and venue for many community-wide events.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 3 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-purple" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">Cambridge Innovation Center (CIC)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We serve as teachers and mentors to the members in CIC's Social Impact Growth Stage accelerator cohort.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 4 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-orange/20 to-launch-purple/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-orange" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">Our events sell out</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We consistently sell out events and workshops with waitlists across topics from alternative networking, to finding your co-founder, to growing revenue through improved culture.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 5 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-purple" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">AI Like a Girl</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Held at AXON's legendary "tron themed" office in Back Bay, Karen spoke on how women can take the helm at empowering their personal and professional lives with AI.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 6 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-orange/20 to-launch-purple/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-orange" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">UPLEVEL with FoundersEdge</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    VC group FoundersEdge asked Karen to lead the vibe coding workshop at their recent invite-only conference for female founders and investors across the country.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 7 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-purple" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">We're scrappy & make it a point to know everyone</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Stephan and Karen camped out in the lobby of Suffolk Law School during Boston Startup Week with a gamified offer for attendees. This led to our membership doubling that month.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Item 8 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-launch-orange/20 to-launch-purple/20 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-launch-orange" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-launch-purple">Core values matter to us</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    One of our core values is that a rising tide lifts all boats. We believe community is the solution for not just weathering the uncertainty of AI, but also for the future of work. We partnered with the Afternoon Shift for an invite only half day workshop on career as a team sport.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Ready to Transform Your Vision?
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build your AI-first company without the traditional barriers.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white rounded-full font-medium px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
