
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    price: string;
    savings?: string;
    sessions?: string;
    provider?: string;
    availability?: string;
    timing?: string;
    description: string;
    benefits?: string[];
    icon: LucideIcon;
    ctaText: string;
    ctaUrl: string;
    featured?: boolean;
    isContact?: boolean;
  };
  index: number;
  onServiceClick: (service: any) => void;
}

const ServiceCard = ({ service, index, onServiceClick }: ServiceCardProps) => {
  return (
    <Card 
      className={`group relative border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
        service.featured 
          ? 'border-gradient-to-r from-launch-purple to-launch-orange shadow-xl bg-gradient-to-br from-white via-launch-light to-white lg:scale-105' 
          : 'border-gray-200 hover:border-launch-orange bg-white'
      }`}
      style={{
        animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {service.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-launch-purple to-launch-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            🌟 Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className={`${service.featured ? 'bg-gradient-to-r from-launch-purple/5 to-launch-orange/5' : 'bg-gray-50'} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <service.icon className="w-full h-full text-launch-orange" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-full ${service.featured ? 'bg-gradient-to-r from-launch-purple to-launch-orange' : 'bg-launch-orange'} shadow-lg`}>
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle className={`text-lg md:text-xl ${service.featured ? 'bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent' : 'text-launch-purple'}`}>
              {service.title}
            </CardTitle>
          </div>
          <div className="space-y-2">
            <p className={`text-2xl md:text-3xl font-bold ${service.featured ? 'bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent' : 'text-launch-orange'}`}>
              {service.price}
            </p>
            {service.savings && (
              <p className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                💰 {service.savings}
              </p>
            )}
            {service.sessions && (
              <p className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                🎯 {service.sessions}
              </p>
            )}
            {service.provider && (
              <p className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                👨‍💻 {service.provider}
              </p>
            )}
            {service.availability && (
              <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                👥 {service.availability}
              </p>
            )}
            {service.timing && (
              <p className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                ⏰ {service.timing}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <CardDescription className="text-sm md:text-base mb-6 text-gray-700 leading-relaxed">
          {service.description}
        </CardDescription>
        
        {service.benefits && (
          <div className="mb-6 space-y-3">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        <Button
          className={`w-full group text-base py-4 transition-all duration-300 ${
            service.featured 
              ? 'bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white shadow-lg hover:shadow-xl' 
              : 'bg-launch-purple hover:bg-launch-purple/90 text-white'
          }`}
          onClick={() => onServiceClick(service)}
        >
          <span className="flex items-center justify-center gap-2">
            {service.ctaText}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
