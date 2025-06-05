
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, MessageCircle, Calendar, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const OfficeHours = () => {
  const features = [
    {
      icon: Users,
      title: "Everyone Welcome",
      description: "Whether you're a complete beginner or experienced founder, all are welcome."
    },
    {
      icon: MessageCircle,
      title: "No Stupid Questions",
      description: "Ask anything - from basic concepts to complex implementation challenges."
    },
    {
      icon: CheckCircle,
      title: "Learn from the Group",
      description: "Benefit from collective wisdom and shared experiences."
    },
    {
      icon: Calendar,
      title: "Weekly Sessions",
      description: "Consistent support every week to keep your momentum going."
    }
  ];

  const handleBookSession = () => {
    window.open("https://calendly.com/karen-launchbylunch/ai-low-code-office-hours", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Clock className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-base font-semibold uppercase tracking-wide">Drop-In Office Hours</span>
              <Clock className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent">
                Join the New Era of Building
              </span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to office hours designed for 
              <span className="text-launch-orange font-semibold"> non-technical founders</span>. 
              Whether you have a burning question or are just curious about what's possible, 
              <span className="text-launch-purple font-semibold"> you belong here</span>.
            </p>

            <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-2xl p-6 mb-8">
              <p className="text-xl font-medium text-gray-800 mb-2">
                🚀 No Stupid Questions Policy
              </p>
              <p className="text-xl text-gray-700">
                Every question is valuable. Every curiosity is welcome. Learn from the group and discover what's truly possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pricing Card */}
          <Card className="border-2 border-launch-orange shadow-xl bg-gradient-to-br from-white via-launch-light to-white">
            <CardHeader className="bg-gradient-to-r from-launch-orange/5 to-launch-purple/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-4xl bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">
                  Weekly Office Hours
                </CardTitle>
              </div>
              <div className="space-y-2">
                <p className="text-6xl font-bold text-launch-orange">$25</p>
                <p className="text-base text-gray-600">per person, per session</p>
                <p className="text-base text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  👥 Limited to 10 seats per hour
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-xl mb-6 text-gray-700 leading-relaxed">
                Get direct access to expert guidance during our weekly office hours sessions.
              </CardDescription>
              <Button
                className="w-full bg-gradient-to-r from-launch-orange to-launch-purple hover:from-launch-purple hover:to-launch-orange text-white text-xl py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleBookSession}
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Seat
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Hosts Card */}
          <Card className="border-2 border-launch-purple shadow-xl">
            <CardHeader className="bg-gradient-to-r from-launch-purple/5 to-launch-orange/5">
              <CardTitle className="text-4xl text-launch-purple mb-4">Meet Your Hosts</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-r from-launch-purple to-launch-orange">
                    <img
                      src="/lovable-uploads/de950dd0-67d3-45fd-b2d5-e419d56f3c2e.png"
                      alt="Stephan Smith"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-launch-purple">Stephan Smith</h3>
                    <p className="text-launch-orange font-medium text-base uppercase tracking-wider">CTO</p>
                    <p className="text-gray-600 text-base">Building the future with AI as your co-pilot.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-r from-launch-orange to-launch-purple">
                    <img
                      src="/lovable-uploads/a25b125a-4110-46e2-bf28-7cd7e60e633f.png"
                      alt="Karen Kelly"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-launch-purple">Karen Kelly</h3>
                    <p className="text-launch-orange font-medium text-base uppercase tracking-wider">CEO • Non-Technical Founder</p>
                    <p className="text-gray-600 text-base">Proving you don't need code to build something amazing.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Why Join Our Office Hours?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-launch-orange transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-launch-orange/10">
                      <feature.icon className="h-6 w-6 text-launch-orange" />
                    </div>
                    <CardTitle className="text-2xl text-launch-purple">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our weekly sessions and become part of a community that believes in the power of non-technical founders.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleBookSession}
            >
              <span className="flex items-center gap-2">
                Book a Seat
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <p className="text-base text-gray-600 mt-4">
              $25 per session • 10 seats available • Weekly sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
