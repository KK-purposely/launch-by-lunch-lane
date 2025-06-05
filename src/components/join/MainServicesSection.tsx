import React from "react";
import { Users, Code, Rocket, LucideIcon } from "lucide-react";
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
      title: "Join our Community of AI-first Founders",
      price: "$99/month",
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
      ctaUrl: "/community",
      featured: true
    },
    {
      id: 2,
      title: "Launch by Lunch Accelerators",
      price: "$199",
      sessions: "4, 1 hour virtual sessions",
      description: "Transform your brilliant idea into a real, working app - no coding required!",
      benefits: [
        "🚀 Build real applications without writing code",
        "💡 Perfect for non-technical founders",
        "🎉 Learn through hands-on fun with your cohort",
        "⚡ Go from idea to working prototype in 4 weeks",
        "🎯 Small groups ensure personalized attention"
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
      description: "Strategic technical guidance for founders who have proven their AI concept and are ready to scale.",
      benefits: [
        "🎯 Ideal for founders with validated AI prototypes",
        "🏗️ Strategic oversight for scaling to production systems",
        "📚 Educational approach that empowers tech decisions",
        "🛠️ Curated recommendations for tools and platforms",
        "🚀 Maintain product knowledge while building confidence",
        "💡 Learn to evaluate solutions that scale"
      ],
      icon: Code,
      ctaText: "Contact us",
      ctaUrl: "/contact"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
  );
};

export default MainServicesSection;
