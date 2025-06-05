
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, CheckCircle, Loader2, ClipboardList, Eye, Bug, TrendingUp, Zap, Target, Rocket, Star } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/5 to-launch-orange/5"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-launch-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-launch-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="relative">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 animate-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-green-600 bg-clip-text text-transparent mb-4">
                Mission Accomplished!
              </h1>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Your application has been received and is being processed by our expert team.
              </p>
              <div className="bg-gradient-to-r from-launch-purple/10 to-launch-orange/10 rounded-lg p-4 mb-8">
                <p className="text-base text-gray-600">
                  🚀 <strong>Next steps:</strong> We'll review your application and get back to you within 2-3 business days with a detailed assessment plan.
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Back to Launch Pad
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/5 to-launch-orange/5"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-launch-orange/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-launch-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-launch-purple/5 to-launch-orange/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full shadow-2xl">
                <Search className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent mb-6 animate-slide-in">
            Tear Down MVP Service
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-gray-700 mb-4 font-medium">
              Transform your MVP into a launch-ready powerhouse
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-launch-orange animate-pulse" />
              <p className="text-3xl font-bold bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">
                Only $250
              </p>
              <Zap className="h-6 w-6 text-launch-orange animate-pulse" />
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4 text-green-500" />
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center gap-1">
                <Rocket className="h-4 w-4 text-blue-500" />
                <span>Launch Ready</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>AI-Optimized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Description Section */}
        <Card className="border-2 border-launch-purple/20 shadow-2xl mb-12 bg-gradient-to-br from-white via-launch-light/30 to-white transform hover:scale-[1.02] transition-all duration-300 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <CardTitle className="text-3xl text-center relative z-10">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Complete MVP Health Assessment
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-launch-purple/5 to-transparent hover:from-launch-purple/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-2 bg-launch-purple/10 rounded-full">
                    <ClipboardList className="h-6 w-6 text-launch-purple flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Functionality Deep Dive</h3>
                    <p className="text-gray-600">Complete assessment of core features and user flows with actionable insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-launch-purple/5 to-transparent hover:from-launch-purple/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-2 bg-launch-purple/10 rounded-full">
                    <Eye className="h-6 w-6 text-launch-purple flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">UX/UI Excellence</h3>
                    <p className="text-gray-600">Expert evaluation with proven recommendations for enhanced user experience.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-launch-orange/5 to-transparent hover:from-launch-orange/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-2 bg-launch-orange/10 rounded-full">
                    <Bug className="h-6 w-6 text-launch-orange flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Critical Bug Hunt</h3>
                    <p className="text-gray-600">Identify launch-blocking issues with clear priority rankings and solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-launch-orange/5 to-transparent hover:from-launch-orange/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-2 bg-launch-orange/10 rounded-full">
                    <TrendingUp className="h-6 w-6 text-launch-orange flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Growth Roadmap</h3>
                    <p className="text-gray-600">Strategic roadmap for your next 3-5 development phases with AI optimization.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-xl border-2 border-gradient-to-r from-launch-purple/20 to-launch-orange/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <p className="text-center text-gray-800 font-semibold text-lg relative z-10">
                ⚡ <span className="text-launch-purple font-bold">Perfect for AI-first applications</span> ready to dominate the market! 
                Get the competitive edge with our expert analysis and strategic guidance. ⚡
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="border-2 border-launch-orange/20 shadow-2xl bg-gradient-to-br from-white via-orange-50/20 to-white animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-launch-orange/10 via-launch-purple/10 to-launch-orange/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <CardTitle className="text-3xl text-center relative z-10">
              <span className="bg-gradient-to-r from-launch-orange to-launch-purple bg-clip-text text-transparent">
                🚀 Ready for Takeoff? Apply Now!
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    First Name *
                    <Star className="h-3 w-3 text-launch-orange" />
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border-2 border-gray-200 focus:border-launch-purple transition-all duration-200 hover:border-launch-purple/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    Last Name *
                    <Star className="h-3 w-3 text-launch-orange" />
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border-2 border-gray-200 focus:border-launch-purple transition-all duration-200 hover:border-launch-purple/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Company Name *
                  <Star className="h-3 w-3 text-launch-orange" />
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="border-2 border-gray-200 focus:border-launch-purple transition-all duration-200 hover:border-launch-purple/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicationDescription" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  What is your application? *
                  <Star className="h-3 w-3 text-launch-orange" />
                </Label>
                <Textarea
                  id="applicationDescription"
                  value={formData.applicationDescription}
                  onChange={(e) => handleInputChange('applicationDescription', e.target.value)}
                  className="border-2 border-gray-200 focus:border-launch-purple transition-all duration-200 hover:border-launch-purple/50"
                  rows={4}
                  placeholder="Tell us about your MVP - its purpose, target audience, key features, and what makes it special..."
                  required
                />
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Is your app public yet? *
                  <Star className="h-3 w-3 text-launch-orange" />
                </Label>
                <RadioGroup
                  value={formData.isAppPublic}
                  onValueChange={(value) => handleInputChange('isAppPublic', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 hover:border-launch-purple/30 transition-all duration-200">
                    <RadioGroupItem value="yes" id="public-yes" className="border-2 border-launch-purple" />
                    <Label htmlFor="public-yes" className="text-sm font-medium">🌟 Yes, it's already public and ready for users</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 hover:border-launch-purple/30 transition-all duration-200">
                    <RadioGroupItem value="no" id="public-no" className="border-2 border-launch-purple" />
                    <Label htmlFor="public-no" className="text-sm font-medium">🔒 No, it's still private/in development</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 hover:border-launch-purple/30 transition-all duration-200">
                    <RadioGroupItem value="beta" id="public-beta" className="border-2 border-launch-purple" />
                    <Label htmlFor="public-beta" className="text-sm font-medium">🧪 It's in beta/limited release</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherComments" className="text-sm font-semibold text-gray-700">
                  Additional Comments
                </Label>
                <Textarea
                  id="otherComments"
                  value={formData.otherComments}
                  onChange={(e) => handleInputChange('otherComments', e.target.value)}
                  className="border-2 border-gray-200 focus:border-launch-orange transition-all duration-200 hover:border-launch-orange/50"
                  rows={3}
                  placeholder="Any specific concerns, goals, or questions about your MVP? We're here to help! 💪"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-size-200 hover:bg-pos-100 text-white py-4 text-xl font-bold shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Launching Analysis...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 h-6 w-6" />
                      Submit Now
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  * Required fields • We'll review your application and contact you within 2-3 business days with your custom assessment plan! 🎯
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TearDown;
