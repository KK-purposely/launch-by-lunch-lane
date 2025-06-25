
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BottomCTASection = () => {
  const handleStartMembership = () => {
    // Navigate to membership signup or contact form
    console.log("Starting membership signup");
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 bg-gradient-to-r from-launch-purple/5 to-launch-orange/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Ready to Transform Your Ideas?
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join our community of AI-first founders and start building your dream startup today.
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-12 py-6 text-xl rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={handleStartMembership}
        >
          <span className="flex items-center gap-3">
            Get started with your first month free.
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BottomCTASection;
