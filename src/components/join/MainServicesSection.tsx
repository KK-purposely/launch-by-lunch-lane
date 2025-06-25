
import React from "react";
import { Users, Crown, LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface MainServicesSectionProps {
  onServiceClick: (service: any) => void;
}

interface Service {
  id: number;
  title: string;
  price: string;
  savings?: string;
  cancellation?: string;
  sessions?: string;
  provider?: string;
  description: string;
  benefits?: string[];
  icon: LucideIcon;
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
  isContact?: boolean;
}

const MainServicesSection = ({ onServiceClick }: MainServicesSectionProps) => {
  const membershipPlans: Service[] = [
    {
      id: 1,
      title: "Monthly Membership",
      price: "$59/month",
      cancellation: "1 month free, cancel anytime",
      description: "Join our community of AI-first founders with flexible monthly billing",
      benefits: [
        "🤝 Connect and learn from our community of founders and fractional experts",
        "🎯 Discover local AI events", 
        "💬 Join investor fireside chats",
        "⏰ Access office hours 2x a month",
        "🎓 Join exclusive accelerators",
        "🌟 Meet new team members"
      ],
      icon: Users,
      ctaText: "Join Monthly",
      ctaUrl: "/community"
    },
    {
      id: 2,
      title: "Annual Membership (2 free months + 2 free accelerators)",
      price: "$599/year",
      savings: "50% off a $1200 value",
      description: "Get the best value with annual billing and exclusive bonuses",
      benefits: [
        "🤝 Connect and learn from our community of founders and fractional experts",
        "🎯 Discover local AI events", 
        "💬 Join investor fireside chats",
        "⏰ Access office hours 2x a month",
        "🎓 Join exclusive accelerators",
        "🌟 Meet new team members",
        "🎁 BONUS: 2 months free (worth $118)",
        "🚀 BONUS: 2 free accelerators of your choice (worth $400)"
      ],
      icon: Crown,
      ctaText: "Join Annual - Best Value",
      ctaUrl: "/community",
      featured: true
    }
  ];

  const handleStartMembership = () => {
    window.open("https://innercircle.launchbylunch.co/checkout/inner-circle-founding-member", "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {membershipPlans.map((service, index) => (
          <div key={service.id} className="relative">
            <ServiceCard
              service={service}
              index={index}
              onServiceClick={onServiceClick}
              hideButton={true}
            />
          </div>
        ))}
      </div>
      
      {/* Single CTA at the bottom */}
      <div className="flex justify-center mt-12">
        <Button
          onClick={handleStartMembership}
          className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white text-lg py-6 px-12 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <span className="flex items-center justify-center gap-3">
            Start Free Membership
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default MainServicesSection;
