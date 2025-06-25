import React from "react";
import { Users, Rocket, LucideIcon, Crown } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MainServicesSectionProps {
  onServiceClick: (service: any) => void;
}

interface Service {
  id: number;
  title: string;
  price: string;
  savings?: string;
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
  const navigate = useNavigate();

  const membershipPlans: Service[] = [
    {
      id: 1,
      title: "Monthly Membership",
      price: "$59/month",
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
      title: "Annual Membership",
      price: "$599/year",
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

  const handleAcceleratorClick = () => {
    navigate("/accelerators");
  };

  const AcceleratorCTA = () => (
    <div className="mt-12 pt-12 border-t border-gray-200">
      <div className="flex flex-col items-center text-center space-y-8 px-6 py-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-3xl blur-xl opacity-30" />
            <div className="relative w-16 h-16 bg-gradient-to-r from-launch-purple to-launch-orange rounded-3xl flex items-center justify-center shadow-2xl">
              <Rocket className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        
        <h4 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Want to jump into a summer accelerator now?
          </span>
        </h4>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Join our next accelerator and learn how to vibe code a working prototype in just an hour or two.
        </p>
        
        <div className="relative inline-block mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full blur-xl opacity-40 animate-pulse" />
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 group"
            onClick={handleAcceleratorClick}
          >
            <span className="flex items-center gap-3">
              View Open Accelerators
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {membershipPlans.map((service, index) => (
          <div key={service.id} className="relative">
            <ServiceCard
              service={service}
              index={index}
              onServiceClick={onServiceClick}
            />
          </div>
        ))}
      </div>
      <AcceleratorCTA />
    </div>
  );
};

export default MainServicesSection;
