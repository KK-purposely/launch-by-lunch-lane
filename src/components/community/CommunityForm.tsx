
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
import { User, Linkedin } from "lucide-react";

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
    <Card className="mb-12 border-launch-orange/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-launch-purple/5 to-launch-orange/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl text-launch-purple">Join Our Community</CardTitle>
            <CardDescription className="text-base">
              Tell us about yourself to get started with your membership
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
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
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
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
                  <FormLabel className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    LinkedIn Profile *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Community Questions */}
            <div className="space-y-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-launch-purple">Tell Us About Yourself</h3>
              
              <FormField
                control={form.control}
                name="whyJoin"
                rules={{ required: "Please tell us why you want to join" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to join our community? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share what motivates you to join our AI-first community..."
                        className="min-h-[100px]"
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
                    <FormLabel>What can you give to our community? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your skills, experience, or how you'd like to contribute..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aiStage"
                rules={{ required: "Please select your AI building stage" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What stage are you at in building with AI? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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
                name="buildingAiFirst"
                rules={{ required: "Please answer this question" }}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Are you building AI-first? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="ai-first-yes" />
                          <Label htmlFor="ai-first-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="ai-first-no" />
                          <Label htmlFor="ai-first-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="planning-to" id="ai-first-planning" />
                          <Label htmlFor="ai-first-planning">Planning to</Label>
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
                  <FormItem className="space-y-3">
                    <FormLabel>Are you technical? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="technical-yes" />
                          <Label htmlFor="technical-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="technical-no" />
                          <Label htmlFor="technical-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="somewhat" id="technical-somewhat" />
                          <Label htmlFor="technical-somewhat">Somewhat</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
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
                    <FormLabel>How did you find us? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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

            <div className="pt-6 border-t border-gray-200">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-3 text-lg font-medium"
              >
                Submit Application
              </Button>
              <p className="text-sm text-gray-600 text-center mt-3">
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
