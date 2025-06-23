
import React from "react";
import { Users, Rocket, LucideIcon } from "lucide-react";
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

  const mainServices: Service[] = [
    {
      id: 1,
      title: "Join our Community of AI-First Founders",
      price: "$59/month",
      savings: "or save with annual",
      description: "Connect with like-minded entrepreneurs building AI-first companies",
      benefits: [
        "🤝 Connect and learn from our community of founders and fractional experts",
        "🎯 Discover local AI events", 
        "💬 Join investor fireside chats",
        "⏰ Access office hours 2x a month",
        "🎓 Join exclusive accelerators",
        "🌟 Access thought leadership on making cultural change",
        "🎁 Bonus: Pay annually and score a seat in 2 accelerators of your choice ($400 value)"
      ],
      icon: Users,
      ctaText: "Apply to Join",
      ctaUrl: "/community"
    }
  ];

  const handleAcceleratorClick = () => {
    navigate("/accelerators");
  };

  const AcceleratorCTA = () => (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-2xl blur-lg opacity-30" />
            <div className="relative w-12 h-12 bg-gradient-to-r from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center">
              <Rocket className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <h4 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Want to jump into a summer accelerator now?
          </span>
        </h4>
        
        <p className="text-sm text-gray-600 max-w-sm">
          Join our next accelerator and learn how to vibe code a working prototype in just an hour or two.
        </p>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full blur-lg opacity-30 animate-pulse" />
          <Button 
            size="sm" 
            className="relative bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            onClick={handleAcceleratorClick}
          >
            <span className="flex items-center gap-2">
              View Open Accelerators
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          {mainServices.map((service, index) => (
            <div key={service.id} className="relative">
              <ServiceCard
                service={service}
                index={index}
                onServiceClick={onServiceClick}
              />
              <AcceleratorCTA />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainServicesSection;
