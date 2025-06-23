
import React from "react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
            <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">Your Journey Starts Here</span>
            <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Join our Waitlist
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-launch-orange font-semibold mb-6">
            Launching June 2025
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
