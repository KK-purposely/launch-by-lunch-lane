
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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

interface CommunityQuestionsSectionProps {
  control: Control<CommunityFormData>;
}

const CommunityQuestionsSection = ({ control }: CommunityQuestionsSectionProps) => {
  return (
    <div className="space-y-6 pt-6 border-t border-gray-200">
      <div className="border-l-4 border-launch-orange pl-4">
        <h3 className="text-lg font-semibold text-launch-purple mb-1">Tell Us About Yourself</h3>
        <p className="text-sm text-gray-600">Help us understand your background and goals</p>
      </div>
      
      <FormField
        control={control}
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
        control={control}
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
          control={control}
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
          control={control}
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
        control={control}
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
        control={control}
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
  );
};

export default CommunityQuestionsSection;
