
import React from "react";
import { Users, Crown, LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const membershipPlans: Service[] = [
    {
      id: 1,
      title: "Monthly Membership",
      price: "$59/month",
      cancellation: "cancel anytime",
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
    </div>
  );
};

export default MainServicesSection;
