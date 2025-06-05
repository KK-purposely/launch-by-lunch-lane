
import React from "react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Shield } from "lucide-react";

const FormHeader = () => {
  return (
    <CardHeader className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/5 to-launch-purple/10 border-b border-launch-orange/20">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-launch-purple to-launch-orange rounded-xl shadow-md">
          <User className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-2xl text-launch-purple mb-2">Join Our Community</CardTitle>
          <CardDescription className="text-base text-gray-600">
            Tell us about yourself to get started with your membership
          </CardDescription>
        </div>
      </div>
      
      {/* Payment clarification notice */}
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
        <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-green-800 font-medium">
          <strong>No credit card required:</strong> You don't pay anything unless you're accepted, and you decide to join.
        </p>
      </div>
    </CardHeader>
  );
};

export default FormHeader;
