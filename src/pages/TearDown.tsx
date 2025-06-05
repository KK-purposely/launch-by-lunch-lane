
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const TearDown = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    applicationDescription: "",
    isAppPublic: "",
    otherComments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.companyName || 
        !formData.applicationDescription || !formData.isAppPublic) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert into Supabase
      const { error: insertError } = await supabase
        .from('teardown_applications')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          company_name: formData.companyName,
          application_description: formData.applicationDescription,
          is_app_public: formData.isAppPublic,
          other_comments: formData.otherComments || null
        });

      if (insertError) {
        throw insertError;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-teardown-notification', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
          applicationDescription: formData.applicationDescription,
          isAppPublic: formData.isAppPublic,
          otherComments: formData.otherComments
        }
      });

      if (emailError) {
        console.error('Email notification error:', emailError);
        // Don't throw here as the form submission was successful
      }

      setIsSubmitted(true);
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon."
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="pt-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-launch-purple mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for your interest in our Tear Down MVP Service. We've received your application and will review it shortly.
              </p>
              <p className="text-base text-gray-600 mb-8">
                We'll get back to you within 2-3 business days with next steps.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-launch-purple hover:bg-launch-purple/90 text-white"
              >
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full">
              <Search className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-launch-purple mb-4">
            Tear Down MVP Service
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Get your MVP reviewed and optimized before launch
          </p>
          <p className="text-lg font-semibold text-launch-orange">
            Only $250
          </p>
        </div>

        <Card className="border-2 border-launch-orange/20 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-launch-purple/5 to-launch-orange/5">
            <CardTitle className="text-2xl text-launch-purple">
              Application Form
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="applicationDescription" className="text-sm font-medium text-gray-700">
                  What is your application? *
                </Label>
                <Textarea
                  id="applicationDescription"
                  value={formData.applicationDescription}
                  onChange={(e) => handleInputChange('applicationDescription', e.target.value)}
                  className="mt-1"
                  rows={4}
                  placeholder="Please describe your application, its purpose, target audience, and key features..."
                  required
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Is your app public yet? *
                </Label>
                <RadioGroup
                  value={formData.isAppPublic}
                  onValueChange={(value) => handleInputChange('isAppPublic', value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="public-yes" />
                    <Label htmlFor="public-yes" className="text-sm">Yes, it's already public</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="public-no" />
                    <Label htmlFor="public-no" className="text-sm">No, it's still private/in development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beta" id="public-beta" />
                    <Label htmlFor="public-beta" className="text-sm">It's in beta/limited release</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="otherComments" className="text-sm font-medium text-gray-700">
                  Other Comments
                </Label>
                <Textarea
                  id="otherComments"
                  value={formData.otherComments}
                  onChange={(e) => handleInputChange('otherComments', e.target.value)}
                  className="mt-1"
                  rows={3}
                  placeholder="Any additional information, specific concerns, or questions you'd like us to know about..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. We'll review your application and contact you within 2-3 business days.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TearDown;
