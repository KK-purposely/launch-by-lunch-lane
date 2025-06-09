
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import PasswordForm from "@/components/members/PasswordForm";
import MembersAreaHeader from "@/components/members/MembersAreaHeader";
import MemberWelcomeCard from "@/components/members/MemberWelcomeCard";
import MemberResourcesCard from "@/components/members/MemberResourcesCard";

const MembersOnly = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if user was previously authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem("members-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "nocodelaunch") {
      setIsAuthenticated(true);
      sessionStorage.setItem("members-auth", "true");
      toast.success("Access granted!", {
        description: "Welcome to the members only area."
      });
    } else {
      toast.error("Access denied!", {
        description: "The password you entered is incorrect."
      });
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("members-auth");
    toast.info("Logged out", {
      description: "You've been logged out of the members area."
    });
  };

  if (!isAuthenticated) {
    return (
      <PasswordForm 
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <MembersAreaHeader onLogout={handleLogout} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <MemberWelcomeCard />
          <MemberResourcesCard />
        </div>
      </div>
    </div>
  );
};

export default MembersOnly;
