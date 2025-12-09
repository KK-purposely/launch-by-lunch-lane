
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface PasswordFormProps {
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const PasswordForm = ({ password, setPassword, onSubmit, isLoading = false }: PasswordFormProps) => {
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
            <form onSubmit={onSubmit} className="space-y-6">
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
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Access Members Area"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordForm;
