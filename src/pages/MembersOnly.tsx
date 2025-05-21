
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

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
      <div className="bg-white min-h-screen">
        <div className="max-w-xl mx-auto px-4 sm:px-6 py-24">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-launch-purple">Members Only</h1>
            <p className="text-xl text-gray-600">This area is password-protected. Please enter the password to continue.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-launch-purple hover:bg-launch-purple/90 text-white"
              >
                Access Members Area
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-launch-purple">Members Area</h1>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="border-launch-purple text-launch-purple hover:bg-launch-purple/10"
          >
            Logout
          </Button>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-launch-purple">Welcome to the exclusive members area!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for being part of our community. This area contains exclusive content for our members.
          </p>
          
          <div className="bg-white p-6 rounded-md border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-launch-purple">Special Resources</h3>
            <p className="text-gray-700 mb-4">
              As a member, you have access to special resources, templates, and support to help you with your projects.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Exclusive templates for faster development</li>
              <li>Priority support for your questions</li>
              <li>Monthly webinars with industry experts</li>
              <li>Early access to new features and tools</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-launch-purple">Resources</h3>
            <p className="text-gray-700 mb-4">
              Helpful resources for your no-code journey:
            </p>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://glossary.launchbylunch.co/glossary" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center text-launch-purple hover:text-launch-purple/80 font-medium hover:underline"
                >
                  <span className="mr-2">No Code Glossary</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  A comprehensive guide to no-code terminology and concepts
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersOnly;
