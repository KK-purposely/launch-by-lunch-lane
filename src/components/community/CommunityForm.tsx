
import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import FormHeader from "./FormHeader";
import PersonalInfoSection from "./PersonalInfoSection";
import CommunityQuestionsSection from "./CommunityQuestionsSection";
import { CommunityFormData } from "./types";

const CommunityForm = () => {
  const { toast } = useToast();
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

  const onSubmit = async (data: CommunityFormData) => {
    try {
      console.log("Submitting community application:", data);
      
      // Insert into Supabase
      const { error: insertError } = await supabase
        .from('community_applications')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          linkedin_profile: data.linkedinProfile,
          why_join: data.whyJoin,
          what_can_give: data.whatCanGive,
          ai_stage: data.aiStage,
          building_ai_first: data.buildingAiFirst,
          is_technical: data.isTechnical,
          how_found_us: data.howFoundUs,
        });

      if (insertError) {
        console.error("Error inserting application:", insertError);
        toast({
          title: "Error",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Send notification email
      const { error: emailError } = await supabase.functions.invoke('send-community-notification', {
        body: {
          applicantName: `${data.firstName} ${data.lastName}`,
          applicantEmail: data.email,
          linkedinProfile: data.linkedinProfile,
          whyJoin: data.whyJoin,
          whatCanGive: data.whatCanGive,
          aiStage: data.aiStage,
          buildingAiFirst: data.buildingAiFirst,
          isTechnical: data.isTechnical,
          howFoundUs: data.howFoundUs,
        },
      });

      if (emailError) {
        console.error("Error sending notification email:", emailError);
        // Still show success to user since their application was saved
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest! Your application has been submitted and we'll review it soon.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Card className="mb-12 border-launch-orange/30 shadow-xl bg-gradient-to-br from-white to-launch-light">
      <FormHeader />
      
      <CardContent className="pt-8 px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInfoSection control={form.control} />
            <CommunityQuestionsSection control={form.control} />

            <div className="pt-8 border-t border-gray-200">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
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
