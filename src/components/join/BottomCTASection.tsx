
import React from "react";
import { Check } from "lucide-react";

const BottomCTASection = () => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Ready to Transform Your Ideas?
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Join thousands of entrepreneurs who have already taken the leap into the AI-first future.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-blue-500" />
            No long-term commitments
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-blue-500" />
            Expert guidance included
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-blue-500" />
            Community support
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomCTASection;
