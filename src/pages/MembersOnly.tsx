
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import PasswordForm from "@/components/members/PasswordForm";
import MembersAreaHeader from "@/components/members/MembersAreaHeader";
import MemberWelcomeCard from "@/components/members/MemberWelcomeCard";
import MemberResourcesCard from "@/components/members/MemberResourcesCard";
import MemberVideoSection from "@/components/members/MemberVideoSection";

const MembersOnly = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if user was previously authenticated with valid token
  useEffect(() => {
    const token = sessionStorage.getItem("members-session-token");
    if (token) {
      // Basic validation - token should be properly formatted
      try {
        const decoded = atob(token);
        if (decoded.startsWith("member_")) {
          setIsAuthenticated(true);
        } else {
          // Invalid token format, clear it
          sessionStorage.removeItem("members-session-token");
        }
      } catch {
        // Invalid base64, clear it
        sessionStorage.removeItem("members-session-token");
      }
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      toast.error("Please enter a password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Validate password server-side
      const { data, error } = await supabase.functions.invoke("validate-member-access", {
        body: { password },
      });
      
      if (error) {
        throw error;
      }
      
      if (data.success && data.sessionToken) {
        setIsAuthenticated(true);
        sessionStorage.setItem("members-session-token", data.sessionToken);
        toast.success("Access granted!", {
          description: "Welcome to the members only area."
        });
      } else {
        toast.error("Access denied!", {
          description: "The password you entered is incorrect."
        });
        setPassword("");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Access denied!", {
        description: "The password you entered is incorrect."
      });
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("members-session-token");
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
        isLoading={isLoading}
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
        
        <div className="mb-12">
          <MemberVideoSection />
        </div>
      </div>
    </div>
  );
};

export default MembersOnly;
