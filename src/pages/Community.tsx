
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Calendar, MessageCircle, Clock, Check } from "lucide-react";

const Community = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

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

  const handlePayment = () => {
    // Placeholder for Stripe integration
    console.log(`Processing ${selectedPlan} payment`);
    alert(`${selectedPlan} payment integration will be implemented once Stripe is configured`);
  };

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
        </div>

        {/* Pricing Options */}
        <div className="mb-12">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monthly Plan */}
            <div className="relative">
              <label htmlFor="monthly" className="cursor-pointer">
                <Card className={`border-2 transition-all duration-300 hover:shadow-lg ${selectedPlan === 'monthly' ? 'border-launch-orange ring-2 ring-launch-orange/20' : 'border-gray-200 hover:border-launch-orange'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-launch-purple">Monthly</CardTitle>
                        <CardDescription className="text-base">Pay month-to-month</CardDescription>
                      </div>
                      <RadioGroupItem value="monthly" id="monthly" />
                    </div>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-launch-orange">$99</p>
                      <p className="text-sm text-gray-600">per month</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefits.map((benefit) => (
                        <li key={benefit.id} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {benefit.title}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </label>
            </div>

            {/* Annual Plan */}
            <div className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-launch-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  Best Value
                </span>
              </div>
              <label htmlFor="annual" className="cursor-pointer">
                <Card className={`border-2 transition-all duration-300 hover:shadow-lg ${selectedPlan === 'annual' ? 'border-launch-orange ring-2 ring-launch-orange/20' : 'border-gray-200 hover:border-launch-orange'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-launch-purple">Annual</CardTitle>
                        <CardDescription className="text-base">Save $600 yearly</CardDescription>
                      </div>
                      <RadioGroupItem value="annual" id="annual" />
                    </div>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-launch-orange">$990</p>
                      <p className="text-sm text-gray-600">per year</p>
                      <p className="text-xs text-green-600 font-medium">Save 2 months + $400 bonus</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefits.map((benefit) => (
                        <li key={benefit.id} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {benefit.title}
                        </li>
                      ))}
                      <li className="flex items-start gap-2 text-sm text-launch-orange font-medium">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Bonus: 2 Accelerator seats (Worth $400)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Benefits Grid */}
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

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-launch-purple hover:bg-launch-purple/90 text-white px-8 py-3 text-lg font-medium"
            onClick={handlePayment}
          >
            {selectedPlan === 'monthly' ? 'Subscribe Monthly - $99/month' : 'Subscribe Annually - $990/year'}
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Cancel anytime. No long-term commitments.
          </p>
          {selectedPlan === 'annual' && (
            <p className="text-sm text-green-600 font-medium mt-2">
              🎉 You're saving $600 and getting 2 accelerator seats worth $400!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
