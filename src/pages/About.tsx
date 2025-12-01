
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
          </CardContent>
        </Card>
        
        {/* Team Photo and Bios Section */}
        <div className="mb-12 flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Team Image */}
          <div className="lg:w-1/2 w-full flex flex-col">
            <img 
              src="/lovable-uploads/team-photo-updated.jpg" 
              alt="Karen Kelly and Stephan Smith, founders of Launch by Lunch" 
              className="rounded-2xl shadow-lg w-full h-full object-cover flex-1"
            />
            <p className="text-sm text-gray-600 mt-4 italic text-center">
              Karen Kelly and Stephan Smith, the founding team behind Launch by Lunch
            </p>
          </div>
          
          {/* Featured Founder Sections */}
          <div className="lg:w-1/2 w-full space-y-6">
            {/* Karen Kelly */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">KK</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      <a href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Karen Kelly
                      </a>
                    </h3>
                    <p className="text-launch-orange font-semibold mb-2">CEO</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Non-technical visionary who saw the democratization of technology coming. Karen is a 3x founder, former CMO, martech president and ex-advertising exec who brings startup strategy, "find a way" thinking and a passion for empowerment through access, education, and network.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stephan Smith */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">SS</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      <a href="https://www.linkedin.com/in/stephansmithbc93/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Stephan Smith
                      </a>
                    </h3>
                    <p className="text-launch-orange font-semibold mb-2">CTO</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Techstars alum and technical expert with deep AI and low-code experience. Stephan bridges the gap between complex technology and practical founder execution. Stephan was a fractional CTO at Karen's company prior to jumping into this new adventure together - democratizing access to AI for everyone, everywhere.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Community Leaders Section */}
        <div className="mb-16 mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              We are Boston's Startup Community Leaders
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/community-leaders-final.png" 
              alt="We are Boston's Startup Community Leaders - showcasing our involvement in the Boston startup ecosystem" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
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
