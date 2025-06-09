
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star } from "lucide-react";

const MemberWelcomeCard = () => {
  return (
    <Card className="shadow-lg border-launch-purple/10">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-launch-light p-2 rounded-lg">
            <Users className="w-6 h-6 text-launch-purple" />
          </div>
          <div>
            <CardTitle className="text-launch-purple">Welcome to the Community!</CardTitle>
            <Badge variant="secondary" className="bg-launch-orange/10 text-launch-orange">
              Exclusive Access
            </Badge>
          </div>
        </div>
        <CardDescription>
          Thank you for being part of our community. This area contains exclusive content for our members.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-launch-orange mt-0.5" />
            <span className="text-gray-700">Exclusive templates for faster development</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-launch-orange mt-0.5" />
            <span className="text-gray-700">Priority support for your questions</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-launch-orange mt-0.5" />
            <span className="text-gray-700">Early access to new features and tools</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberWelcomeCard;
