
import React from "react";
import { Search, Clock, LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface PointOfServiceSectionProps {
  onServiceClick: (service: any) => void;
}

interface Service {
  id: number;
  title: string;
  price: string;
  timing?: string;
  availability?: string;
  description: string;
  icon: LucideIcon;
  ctaText: string;
  ctaUrl: string;
}

const PointOfServiceSection = ({ onServiceClick }: PointOfServiceSectionProps) => {
  const pointOfServiceItems: Service[] = [
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

  return (
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
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onServiceClick={onServiceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PointOfServiceSection;
