
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, CheckCircle, Loader2, ClipboardList, Eye, Bug, TrendingUp } from "lucide-react";
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
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

        {/* Service Description Section */}
        <Card className="border-2 border-launch-purple/20 shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-launch-purple/5 to-launch-orange/5">
            <CardTitle className="text-2xl text-launch-purple text-center">
              What You Get: Complete MVP Health Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ClipboardList className="h-6 w-6 text-launch-purple mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Functionality Review</h3>
                    <p className="text-gray-600 text-sm">Complete assessment of your application's core features, performance, and user flows to ensure everything works as intended.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-launch-purple mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">UI/UX Expert Feedback</h3>
                    <p className="text-gray-600 text-sm">Professional evaluation of your interface design, user experience, and recommendations for improving user engagement and conversion.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bug className="h-6 w-6 text-launch-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Bug Detection & Risk Assessment</h3>
                    <p className="text-gray-600 text-sm">Identification of existing bugs and potential issues that could impact your launch, with clear prioritization for fixes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-launch-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Strategic Development Roadmap</h3>
                    <p className="text-gray-600 text-sm">Detailed recommendations for your next 3-5 development phases, complete with actionable prompts and prioritized feature suggestions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-launch-purple/5 to-launch-orange/5 rounded-lg">
              <p className="text-center text-gray-700 font-medium">
                <span className="text-launch-purple font-semibold">Perfect for AI-first applications</span> ready to make their market debut. 
                Get the confidence you need to launch successfully with our expert analysis and strategic guidance.
              </p>
            </div>
          </CardContent>
        </Card>

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
