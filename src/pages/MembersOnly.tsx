
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";
import { ExternalLink, Lock, Users, BookOpen, Calendar, Star } from "lucide-react";

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
            <div className="flex justify-center mb-6">
              <div className="bg-launch-light p-4 rounded-full">
                <Lock className="w-12 h-12 text-launch-purple" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-launch-purple">Members Only</h1>
            <p className="text-xl text-gray-600">This area is password-protected. Please enter the password to continue.</p>
          </div>
          
          <Card className="shadow-lg border-launch-purple/10">
            <CardHeader className="text-center">
              <CardTitle className="text-launch-purple">Access Required</CardTitle>
              <CardDescription>Enter your password to access exclusive member content</CardDescription>
            </CardHeader>
            <CardContent>
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
                    className="w-full border-gray-300 focus:border-launch-purple focus:ring-launch-purple"
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
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-launch-purple mb-4">Members Area</h1>
            <p className="text-xl text-gray-600">Welcome to your exclusive member portal</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="border-launch-purple text-launch-purple hover:bg-launch-purple/10"
          >
            Logout
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                  <span className="text-gray-700">Monthly webinars with industry experts</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-launch-orange mt-0.5" />
                  <span className="text-gray-700">Early access to new features and tools</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-launch-purple/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-launch-light p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-launch-purple" />
                </div>
                <CardTitle className="text-launch-purple">Member Resources</CardTitle>
              </div>
              <CardDescription>
                Helpful resources for your no-code journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-launch-purple/30 transition-colors">
                  <a 
                    href="https://glossary.launchbylunch.co/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-medium text-launch-purple group-hover:text-launch-purple/80 mb-1">
                        No Code Glossary
                      </h3>
                      <p className="text-gray-600 text-sm">
                        A comprehensive guide to no-code terminology and concepts
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-launch-purple" />
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-launch-purple/30 transition-colors">
                  <a 
                    href="https://memory.launchbylunch.co/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-medium text-launch-purple group-hover:text-launch-purple/80 mb-1">
                        Memory Guide for Founders
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Essential memory techniques and strategies for startup founders
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-launch-purple" />
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-launch-purple/30 transition-colors">
                  <a 
                    href="https://supabase.launchbylunch.co/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-medium text-launch-purple group-hover:text-launch-purple/80 mb-1">
                        Using Supabase
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Learn how to build powerful backend features with Supabase
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-launch-purple" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MembersOnly;
