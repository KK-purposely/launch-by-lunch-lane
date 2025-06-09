
import React from "react";
import { Button } from "@/components/ui/button";

interface MembersAreaHeaderProps {
  onLogout: () => void;
}

const MembersAreaHeader = ({ onLogout }: MembersAreaHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-launch-purple mb-4">Members Area</h1>
        <p className="text-xl text-gray-600">Welcome to your exclusive member portal.</p>
      </div>
      <Button 
        onClick={onLogout} 
        variant="outline" 
        className="border-launch-purple text-launch-purple hover:bg-launch-purple/10"
      >
        Logout
      </Button>
    </div>
  );
};

export default MembersAreaHeader;
