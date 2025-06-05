import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Code, Rocket, Search, Check, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const Join = () => {
  const navigate = useNavigate();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const mainServices = [
    {
      id: 1,
      title: "Join our Community of AI-first Founders",
      price: "$99/month",
      savings: "or save with annual",
      description: "Connect with like-minded entrepreneurs building AI-first companies",
      benefits: [
        "Connect and learn from our community of founders and fractional experts",
        "Discover local AI events", 
        "Join investor fireside chats",
        "Access office hours 2x a month",
        "Bonus: Pay annually and score a seat in 2 accelerators of your choice ($400 value)"
      ],
      icon: Users,
      ctaText: "Apply to Join",
      ctaUrl: "/community",
      featured: true
    },
    {
      id: 2,
      title: "Launch by Lunch Accelerators",
      price: "$199",
      sessions: "4, 1 hour virtual sessions",
      description: "Transform your brilliant idea into a real, working app - no coding required! Our accelerators are specially designed for visionary founders who want to build independently.",
      benefits: [
        "🚀 Build real applications without writing a single line of code",
        "💡 Perfect for non-technical founders (coding knowledge actually gets in the way!)",
        "🎉 Learn through hands-on fun with your cohort of fellow builders",
        "🤝 Gain lifelong connections with entrepreneurs just like you",
        "⚡ Go from idea to working prototype in just 4 weeks",
        "🎯 Small group format ensures personalized attention and support"
      ],
      icon: Rocket,
      ctaText: "View Accelerators",
      ctaUrl: "/accelerators"
    },
    {
      id: 4,
      title: "Vibe Coding Support Packages",
      price: "Starting at $1500",
      provider: "Provided by Stephan Smith or Karen Kelly",
      description: "Support for AI-first founders using no-code or low code solutions.",
      icon: Code,
      ctaText: "Contact us",
      ctaUrl: "#",
      isContact: true
    }
  ];

  const pointOfServiceItems = [
    {
      id: 5,
      title: "Tear Down MVP Service",
      price: "$250",
      timing: "When you're ready to soft launch",
      description: "Comprehensive review and optimization of your MVP before launch",
      icon: Search,
      ctaText: "Get Started",
      ctaUrl: "#"
    },
    {
      id: 3,
      title: "Drop in Office Hours",
      price: "$25 per person",
      availability: "10 seats open per hour",
      description: "Get direct access to expert guidance from our founders Karen Kelly & Stephan Smith during scheduled office hours.",
      icon: Clock,
      ctaText: "Book a Seat",
      ctaUrl: "https://calendly.com/karen-launchbylunch/ai-low-code-office-hours"
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.isContact) {
      setSelectedService(service.title);
      setContactFormOpen(true);
    } else if (service.ctaUrl === "https://calendly.com/karen-launchbylunch/ai-low-code-office-hours") {
      window.open(service.ctaUrl, "_blank");
    } else if (service.ctaUrl === "#") {
      console.log(`Clicked ${service.title}`);
    } else if (service.ctaUrl.startsWith("/")) {
      navigate(service.ctaUrl);
    } else {
      window.location.href = service.ctaUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Your Journey Starts Here</span>
              <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Join Launch by Lunch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the service that best fits your entrepreneurial journey and 
              <span className="text-launch-orange font-semibold"> transform your ideas into reality</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Services - Horizontal Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Card 
              key={service.id}
              className={`group relative border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                service.featured 
                  ? 'border-gradient-to-r from-launch-purple to-launch-orange shadow-xl bg-gradient-to-br from-white via-launch-light to-white lg:scale-105' 
                  : 'border-gray-200 hover:border-launch-orange bg-white'
              }`}
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-launch-purple to-launch-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🌟 Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`${service.featured ? 'bg-gradient-to-r from-launch-purple/5 to-launch-orange/5' : 'bg-gray-50'} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <service.icon className="w-full h-full text-launch-orange" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${service.featured ? 'bg-gradient-to-r from-launch-purple to-launch-orange' : 'bg-launch-orange'} shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className={`text-lg md:text-xl ${service.featured ? 'bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent' : 'text-launch-purple'}`}>
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="space-y-2">
                    <p className={`text-2xl md:text-3xl font-bold ${service.featured ? 'bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent' : 'text-launch-orange'}`}>
                      {service.price}
                    </p>
                    {service.savings && (
                      <p className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                        💰 {service.savings}
                      </p>
                    )}
                    {service.sessions && (
                      <p className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                        🎯 {service.sessions}
                      </p>
                    )}
                    {service.provider && (
                      <p className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                        👨‍💻 {service.provider}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <CardDescription className="text-sm md:text-base mb-6 text-gray-700 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {service.benefits && (
                  <div className="mb-6 space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  className={`w-full group text-base py-4 transition-all duration-300 ${
                    service.featured 
                      ? 'bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white shadow-lg hover:shadow-xl' 
                      : 'bg-launch-purple hover:bg-launch-purple/90 text-white'
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  <span className="flex items-center justify-center gap-2">
                    {service.ctaText}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Point of Service Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Point of Service
            </span>
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Targeted support services designed to help you at specific moments in your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pointOfServiceItems.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative border-2 border-gray-200 hover:border-launch-orange transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 bg-white"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <CardHeader className="bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <service.icon className="w-full h-full text-launch-orange" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-launch-orange shadow-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-launch-purple">
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl md:text-4xl font-bold text-launch-orange">
                      {service.price}
                    </p>
                    {service.availability && (
                      <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        👥 {service.availability}
                      </p>
                    )}
                    {service.timing && (
                      <p className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                        ⏰ {service.timing}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <CardDescription className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
                  {service.description}
                </CardDescription>

                <Button
                  className="w-full group text-lg py-6 transition-all duration-300 bg-launch-purple hover:bg-launch-purple/90 text-white"
                  onClick={() => handleServiceClick(service)}
                >
                  <span className="flex items-center justify-center gap-2">
                    {service.ctaText}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Ready to Transform Your Ideas?
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have already taken the leap into the AI-first future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-blue-500" />
                No long-term commitments
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-blue-500" />
                Expert guidance included
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-blue-500" />
                Community support
              </span>
            </div>
          </div>
        </div>

        <ContactForm
          isOpen={contactFormOpen}
          onClose={() => setContactFormOpen(false)}
          serviceTitle={selectedService}
        />
      </div>
    </div>
  );
};

export default Join;
