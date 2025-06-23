
import React from "react";
import { Users, LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainServicesSection;
