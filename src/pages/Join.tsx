import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Code, Rocket, Search } from "lucide-react";

const Join = () => {
  const services = [
    {
      id: 1,
      title: "Join our Community of AI-first Founders",
      price: "$99/month",
      savings: "or save 2 months with annual",
      description: "Connect with like-minded entrepreneurs building AI-first companies",
      icon: Users,
      ctaText: "Join Community",
      ctaUrl: "#"
    },
    {
      id: 2,
      title: "Drop in Office Hours",
      price: "$25 per person",
      availability: "10 seats open per hour",
      description: "Get direct access to expert guidance during scheduled office hours",
      icon: Clock,
      ctaText: "Book Session",
      ctaUrl: "#"
    },
    {
      id: 3,
      title: "Vibe Coding Support Packages",
      price: "Starting at $1500",
      provider: "Provided by Stephan Smith or Karen Kelly",
      description: "Professional coding support to bring your vision to life",
      icon: Code,
      ctaText: "Learn More",
      ctaUrl: "#",
      isLearnMore: true
    },
    {
      id: 4,
      title: "Launch by Lunch Accelerators",
      price: "$199",
      sessions: "4, 1 hour virtual sessions",
      description: "Intensive accelerator program to fast-track your startup journey",
      icon: Rocket,
      ctaText: "Apply Now",
      ctaUrl: "/accelerators"
    },
    {
      id: 5,
      title: "Tear Down MVP Service",
      price: "$250",
      timing: "When you're ready to soft launch",
      description: "Comprehensive review and optimization of your MVP before launch",
      icon: Search,
      ctaText: "Get Started",
      ctaUrl: "#"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-launch-purple">Join Launch by Lunch</h1>
        <p className="text-xl text-center text-gray-700 mb-12">Choose the service that best fits your entrepreneurial journey</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="border-2 border-gray-200 hover:border-launch-orange transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="bg-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="h-6 w-6 text-launch-orange" />
                  <CardTitle className="text-xl text-launch-purple">{service.title}</CardTitle>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-launch-orange">{service.price}</p>
                  {service.savings && (
                    <p className="text-sm text-gray-600">{service.savings}</p>
                  )}
                  {service.availability && (
                    <p className="text-sm text-gray-600">{service.availability}</p>
                  )}
                  {service.sessions && (
                    <p className="text-sm text-gray-600">{service.sessions}</p>
                  )}
                  {service.provider && (
                    <p className="text-sm text-gray-600">{service.provider}</p>
                  )}
                  {service.timing && (
                    <p className="text-sm text-gray-600">{service.timing}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-base mb-6">
                  {service.description}
                </CardDescription>
                <Button
                  className="w-full bg-launch-purple hover:bg-launch-purple/90 text-white"
                  onClick={() => {
                    if (service.ctaUrl === "#") {
                      // For placeholder links, you can add actual URLs later
                      console.log(`Clicked ${service.title}`);
                    } else {
                      window.location.href = service.ctaUrl;
                    }
                  }}
                >
                  {service.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
