
import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { User, Linkedin, Shield } from "lucide-react";

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

const CommunityForm = () => {
  const form = useForm<CommunityFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      linkedinProfile: "",
      whyJoin: "",
      whatCanGive: "",
      aiStage: "",
      buildingAiFirst: "",
      isTechnical: "",
      howFoundUs: "",
    },
  });

  const onSubmit = (data: CommunityFormData) => {
    console.log("Community form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! Your application has been submitted.");
  };

  return (
    <Card className="mb-12 border-launch-orange/30 shadow-xl bg-gradient-to-br from-white to-launch-light">
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
            <strong>No upfront payment required:</strong> You don't pay anything unless you're accepted, and you decide to join.
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-8 px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-launch-orange pl-4">
                <h3 className="text-lg font-semibold text-launch-purple mb-1">Personal Information</h3>
                <p className="text-sm text-gray-600">Basic details to get to know you</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                control={form.control}
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
                control={form.control}
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

            {/* Community Questions Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="border-l-4 border-launch-orange pl-4">
                <h3 className="text-lg font-semibold text-launch-purple mb-1">Tell Us About Yourself</h3>
                <p className="text-sm text-gray-600">Help us understand your background and goals</p>
              </div>
              
              <FormField
                control={form.control}
                name="whyJoin"
                rules={{ required: "Please tell us why you want to join" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-launch-purple font-medium">Why do you want to join our community? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share what motivates you to join our AI-first community..."
                        className="min-h-[120px] border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatCanGive"
                rules={{ required: "Please tell us what you can contribute" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-launch-purple font-medium">What can you give to our community? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your skills, experience, or how you'd like to contribute..."
                        className="min-h-[120px] border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="aiStage"
                  rules={{ required: "Please select your AI building stage" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-launch-purple font-medium">What stage are you at in building with AI? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20">
                            <SelectValue placeholder="Select your current stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="just-getting-started">Just getting started</SelectItem>
                          <SelectItem value="working-prototype">Have a working prototype</SelectItem>
                          <SelectItem value="expert">I'm an expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="howFoundUs"
                  rules={{ required: "Please tell us how you found us" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-launch-purple font-medium">How did you find us? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-launch-orange focus:ring-launch-orange/20">
                            <SelectValue placeholder="Select how you discovered us" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="friend">A friend</SelectItem>
                          <SelectItem value="podcast">A podcast</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="buildingAiFirst"
                rules={{ required: "Please answer this question" }}
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-launch-purple font-medium">Are you building AI-first? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="yes" id="ai-first-yes" className="border-launch-purple" />
                          <Label htmlFor="ai-first-yes" className="font-medium cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="no" id="ai-first-no" className="border-launch-purple" />
                          <Label htmlFor="ai-first-no" className="font-medium cursor-pointer">No</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="planning-to" id="ai-first-planning" className="border-launch-purple" />
                          <Label htmlFor="ai-first-planning" className="font-medium cursor-pointer">Planning to</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isTechnical"
                rules={{ required: "Please answer this question" }}
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-launch-purple font-medium">Are you technical? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="yes" id="technical-yes" className="border-launch-purple" />
                          <Label htmlFor="technical-yes" className="font-medium cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="no" id="technical-no" className="border-launch-purple" />
                          <Label htmlFor="technical-no" className="font-medium cursor-pointer">No</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-launch-orange/50 transition-colors">
                          <RadioGroupItem value="somewhat" id="technical-somewhat" className="border-launch-purple" />
                          <Label htmlFor="technical-somewhat" className="font-medium cursor-pointer">Somewhat</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-8 border-t border-gray-200">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit Application
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                * Required fields. Your information will be reviewed before membership approval.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CommunityForm;
