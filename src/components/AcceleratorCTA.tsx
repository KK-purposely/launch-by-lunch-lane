
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AcceleratorCTA = () => {
  const navigate = useNavigate();

  const handleAcceleratorClick = () => {
    navigate("/accelerators");
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-br from-launch-purple/5 via-white to-launch-orange/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-launch-orange/10 to-launch-purple/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-launch-purple/10 to-launch-orange/10 rounded-full blur-xl" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Icon and title */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-2xl blur-lg opacity-30" />
            <div className="relative w-16 h-16 bg-gradient-to-r from-launch-purple to-launch-orange rounded-2xl flex items-center justify-center">
              <Rocket className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent">
            Ready to Build Your Vision?
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our next accelerator and learn how to{" "}
          <span className="text-launch-orange font-semibold">vibe code a working prototype</span>{" "}
          in just an hour or two. No coding experience required.
        </p>

        {/* CTA Button */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full blur-lg opacity-30 animate-pulse" />
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-12 py-6 text-xl rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            onClick={handleAcceleratorClick}
          >
            <span className="flex items-center gap-3">
              Join Our Accelerator
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Quick benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-launch-orange rounded-full" />
            4 Virtual Sessions
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-launch-purple rounded-full" />
            Small Group Learning
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-launch-orange rounded-full" />
            Working Prototype Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorCTA;
