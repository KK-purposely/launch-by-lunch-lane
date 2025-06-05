
import React from "react";
import { Sparkles } from "lucide-react";

const CommunityHeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
            <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">Elite Network</span>
            <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              The Elite Network for the AI-First Community
            </span>
          </h1>
          <div className="mb-6">
            <p className="text-lg font-semibold text-launch-orange mb-2">
              COMING SUMMER 2025
            </p>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              Where the new eco-system of founders, fractionals, and investors build, scale and fund the next generation of 
              <span className="text-launch-orange font-semibold"> AI-first startups</span>
            </p>
            <p className="text-lg font-medium text-launch-purple">
              Get our early bird rates for the next 60 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeroSection;
