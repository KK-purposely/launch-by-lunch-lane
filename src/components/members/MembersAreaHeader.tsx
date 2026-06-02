
import React from "react";
import { Button } from "@/components/ui/button";

interface MembersAreaHeaderProps {
  onLogout: () => void;
}

const MembersAreaHeader = ({ onLogout }: MembersAreaHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-lbl-ink mb-4">Members Area</h1>
        <p className="text-xl text-gray-600">Welcome to your exclusive member portal.</p>
      </div>
      <Button 
        onClick={onLogout} 
        variant="outline" 
        className="border-lbl-ink text-lbl-ink hover:bg-lbl-ink/10"
      >
        Logout
      </Button>
    </div>
  );
};

export default MembersAreaHeader;
