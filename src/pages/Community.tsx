
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Calendar, MessageCircle, Clock, Check } from "lucide-react";
import CommunityForm from "@/components/community/CommunityForm";
import CommunityHeroSection from "@/components/community/CommunityHeroSection";

const Community = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual");

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
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      <CommunityHeroSection />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-8">
        {/* Community Form */}
        <CommunityForm />

        {/* Pricing Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-launch-purple">Membership Options</h2>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monthly Plan */}
            <div className="relative h-full">
              <label htmlFor="monthly" className="cursor-pointer h-full block">
                <Card className={`border-2 transition-all duration-300 hover:shadow-lg h-full flex flex-col bg-gradient-to-br from-purple-50 via-white to-orange-50 ${selectedPlan === 'monthly' ? 'border-launch-orange ring-2 ring-launch-orange/20' : 'border-gray-200 hover:border-launch-orange'}`}>
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
                  <CardContent className="flex-1">
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
            <div className="relative h-full">
              <label htmlFor="annual" className="cursor-pointer h-full block">
                <Card className={`border-2 transition-all duration-300 hover:shadow-lg h-full flex flex-col bg-gradient-to-br from-orange-50 via-white to-purple-50 ${selectedPlan === 'annual' ? 'border-launch-orange ring-2 ring-launch-orange/20' : 'border-gray-200 hover:border-launch-orange'}`}>
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
                  <CardContent className="flex-1">
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
      </div>
    </div>
  );
};

export default Community;
