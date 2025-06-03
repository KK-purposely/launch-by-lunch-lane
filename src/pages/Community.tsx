
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MessageCircle, Clock } from "lucide-react";

const Community = () => {
  const benefits = [
    {
      id: 1,
      title: "Learn from the Community",
      description: "Connect with experienced entrepreneurs and learn from their journeys, mistakes, and successes",
      icon: Users,
    },
    {
      id: 2,
      title: "Join AI-first Events",
      description: "Access exclusive events focused on AI innovation, product development, and industry insights",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Founder/Investor Fireside Chats",
      description: "Participate in intimate conversations with successful founders and active investors",
      icon: MessageCircle,
    },
    {
      id: 4,
      title: "Office Hours 2x a Month",
      description: "Get personalized guidance and feedback during our bi-monthly office hours sessions",
      icon: Clock,
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-launch-purple">
            Join Our AI-First Community
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Connect with like-minded entrepreneurs building the future with AI
          </p>
          <div className="bg-launch-orange/10 border border-launch-orange/20 rounded-lg p-6 mb-8">
            <p className="text-2xl font-bold text-launch-orange mb-2">$99/month</p>
            <p className="text-sm text-gray-600">or save 2 months with annual subscription</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.id}
              className="border-2 border-gray-200 hover:border-launch-orange transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <benefit.icon className="h-8 w-8 text-launch-orange" />
                  <CardTitle className="text-xl text-launch-purple">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-launch-purple hover:bg-launch-purple/90 text-white px-8 py-3 text-lg font-medium"
            onClick={() => {
              // Add actual subscription logic here
              console.log("Join Community clicked");
            }}
          >
            Join Community Now
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Cancel anytime. No long-term commitments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
