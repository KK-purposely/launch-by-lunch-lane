
import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityHeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-3">
            <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wide">Elite Network</span>
            <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              The Elite Network for the AI-First Community
            </span>
          </h1>
          <div className="mb-5">
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              Where the new eco-system of founders, fractionals, and investors build, scale and fund the next generation of
              <span className="text-launch-orange font-semibold"> AI-first startups</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full px-8 font-medium transition-all duration-300"
                onClick={() =>
                  window.open("https://login.circle.so/sign_in?request_host=innercircle.launchbylunch.co#email", "_blank")
                }
              >
                Sign In
              </Button>
              <Button
                size="lg"
                className="bg-launch-orange hover:bg-launch-orange/90 text-white rounded-full px-8 font-medium transition-all duration-300"
                onClick={() =>
                  document.getElementById("join-community")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeroSection;
