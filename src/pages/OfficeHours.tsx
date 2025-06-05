
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
              <Clock className="h-5 w-5 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Drop-In Office Hours</span>
              <Clock className="h-5 w-5 text-launch-purple animate-pulse" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent">
                Join the New Era of Building
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to office hours designed for 
              <span className="text-launch-orange font-semibold"> non-technical founders</span>. 
              Whether you have a burning question or are just curious about what's possible, 
              <span className="text-launch-purple font-semibold"> you belong here</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        {/* Hosts Card - moved above pricing */}
        <Card className="border-2 border-launch-orange shadow-xl mb-12">
          <CardHeader className="bg-gradient-to-r from-launch-orange/5 to-launch-purple/5">
            <CardTitle className="text-2xl text-launch-orange mb-4">Meet Your Hosts</CardTitle>
            <CardDescription className="text-base text-gray-700 leading-relaxed">
              Learn from two experienced founders who've built successful companies using different paths - 
              one technical, one non-technical. Together, they bring unique perspectives on building products in the AI era.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-launch-purple to-launch-orange flex-shrink-0">
                  <img
                    src="/lovable-uploads/de950dd0-67d3-45fd-b2d5-e419d56f3c2e.png"
                    alt="Stephan Smith"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-launch-purple mb-1">Stephan Smith</h3>
                  <p className="text-launch-orange font-medium text-sm uppercase tracking-wider mb-3">CTO & Technical Co-Founder</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    A seasoned software architect with over 15 years of experience building scalable web applications. 
                    Stephan has led engineering teams at multiple startups and brings deep expertise in modern development 
                    practices, AI integration, and low-code/no-code solutions.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    "I believe the future belongs to builders who can leverage AI as their co-pilot, regardless of their technical background."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-launch-orange to-launch-purple flex-shrink-0">
                  <img
                    src="/lovable-uploads/a25b125a-4110-46e2-bf28-7cd7e60e633f.png"
                    alt="Karen Kelly"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-launch-purple mb-1">Karen Kelly</h3>
                  <p className="text-launch-orange font-medium text-sm uppercase tracking-wider mb-3">CEO & Non-Technical Founder</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    A successful entrepreneur who built and scaled multiple companies without writing a single line of code. 
                    Karen specializes in product strategy, user experience design, and leveraging AI tools to bring ideas to life. 
                    She's passionate about empowering non-technical founders to build confidently.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    "Your lack of technical skills isn't a limitation - it's your superpower for building user-focused products."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Card - moved below hosts */}
        <Card className="border-2 border-launch-orange shadow-xl bg-gradient-to-br from-white via-launch-light to-white mb-12">
          <CardHeader className="bg-gradient-to-r from-launch-orange/5 to-launch-purple/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-launch-orange to-launch-purple shadow-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">
                Weekly Office Hours
              </CardTitle>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-launch-orange">$25</p>
              <p className="text-sm text-gray-600">per person, per session</p>
              <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                👥 Limited to 10 seats per hour
              </p>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <CardDescription className="text-base mb-6 text-gray-700 leading-relaxed">
              Get direct access to expert guidance during our weekly office hours sessions.
            </CardDescription>
            <Button
              className="w-full bg-gradient-to-r from-launch-orange to-launch-purple hover:from-launch-purple hover:to-launch-orange text-white text-base py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleBookSession}
            >
              <span className="flex items-center justify-center gap-2">
                Book a Seat
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Why Join Our Office Hours?
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-launch-orange transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-full bg-launch-orange/10">
                      <feature.icon className="h-4 w-4 text-launch-orange" />
                    </div>
                    <CardTitle className="text-base text-launch-purple">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
          </div>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our weekly sessions and become part of a community that believes in the power of non-technical founders.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleBookSession}
          >
            <span className="flex items-center gap-2">
              Book a Seat
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            $25 per session • 10 seats available • Weekly sessions
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
