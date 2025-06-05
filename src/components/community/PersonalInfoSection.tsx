
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Linkedin } from "lucide-react";
import { Control } from "react-hook-form";

interface CommunityFormData {
  firstName: string;
  lastName: string;
  email: string;
  linkedinProfile: string;
  whyJoin: string;
  whatCanGive: string;
  aiStage: string;
  buildingAiFirst: string;
  isTechnical: string;
  howFoundUs: string;
}

interface PersonalInfoSectionProps {
  control: Control<CommunityFormData>;
}

const PersonalInfoSection = ({ control }: PersonalInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-launch-orange pl-4">
        <h3 className="text-lg font-semibold text-launch-purple mb-1">Personal Information</h3>
        <p className="text-sm text-gray-600">Basic details to get to know you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="firstName"
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-launch-purple font-medium">First Name *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your first name" 
                  className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lastName"
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-launch-purple font-medium">Last Name *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your last name" 
                  className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="email"
        rules={{ 
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        }}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-launch-purple font-medium">Email Address *</FormLabel>
            <FormControl>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="linkedinProfile"
        rules={{ required: "LinkedIn profile is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-launch-purple font-medium">
              <Linkedin className="h-4 w-4 text-blue-600" />
              LinkedIn Profile *
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="https://linkedin.com/in/yourprofile" 
                className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PersonalInfoSection;
