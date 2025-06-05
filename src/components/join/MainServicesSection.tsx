
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
      description: "Transform your brilliant idea into a real, working app - no coding required! Our accelerators are specially designed for visionary founders who want to build independently.",
      benefits: [
        "🚀 Build real applications without writing a single line of code",
        "💡 Perfect for non-technical founders (coding knowledge actually gets in the way!)",
        "🎉 Learn through hands-on fun with your cohort of fellow builders",
        "🤝 Gain lifelong connections with entrepreneurs just like you",
        "⚡ Go from idea to working prototype in just 4 weeks",
        "🎯 Small group format ensures personalized attention and support"
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
      description: "Strategic technical guidance for founders who have proven their AI concept and are ready to scale. Perfect for those with working prototypes, active users, and a vision for robust growth.",
      benefits: [
        "🎯 Ideal for founders with validated AI prototypes and real user traction",
        "🏗️ Strategic oversight for transitioning from MVP to scalable, production-ready systems",
        "📚 Educational approach that empowers you to make informed technology decisions",
        "🛠️ Curated recommendations for tools, platforms, and tech stack evolution",
        "🚀 Maintain deep product knowledge while building technical confidence",
        "📈 Future-focused roadmap planning that aligns with your growth trajectory",
        "💡 Learn to evaluate and implement solutions that scale with your vision"
      ],
      icon: Code,
      ctaText: "Contact us",
      ctaUrl: "#",
      isContact: true
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
