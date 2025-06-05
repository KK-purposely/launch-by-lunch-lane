import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
                  Launch by Lunch is the first virtual AI accelerator created to empower non-technical founders to move from the back of the crowd to the front of the line.
                </span>
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Paired with strategic consulting services and an online community, startups go from prototype to revenue to scale - all without outsourcing a line of code.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Created by Boston-based CTO <a href="https://www.linkedin.com/in/stephansmithbc93/" target="_blank" rel="noopener noreferrer" className="text-launch-orange font-semibold hover:text-launch-purple transition-colors duration-300 hover:underline">Stephan Smith</a> and 3x non-technical founder <a href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" target="_blank" rel="noopener noreferrer" className="text-launch-orange font-semibold hover:text-launch-purple transition-colors duration-300 hover:underline">Karen Kelly</a>, our vibe coding services shepherd you through the delightful process of using natural language to build technical products.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If code and cost has always stood between you and your vision, come talk to us.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Team Image */}
        <div className="mb-12 text-center">
          <img 
            src="/lovable-uploads/d93cbef0-7fe6-4762-b53e-46153f8f2fad.png" 
            alt="Stephan Smith and Karen Kelly, founders of Launch by Lunch" 
            className="rounded-2xl shadow-lg mx-auto max-w-full h-auto"
          />
          <p className="text-sm text-gray-600 mt-4 italic">
            Stephan Smith and Karen Kelly, the founding team behind Launch by Lunch
          </p>
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
    </div>
  );
};

export default About;
