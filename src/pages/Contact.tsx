
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert the contact submission into the database
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          company: formData.company || null,
          title: formData.title || null,
          email: formData.email,
          message: formData.message,
        });

      if (insertError) {
        throw insertError;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          title: formData.title,
          email: formData.email,
          message: formData.message,
        },
      });

      if (emailError) {
        console.error("Error sending email notification:", emailError);
        // Don't throw here as the form submission was successful
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        title: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Mail className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Get in Touch</span>
              <Mail className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're grateful for the number of people hoping to work with us. Although our time is limited, we interview with every applicant to understand their needs and make referrals when necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                How Can We Help?
              </span>
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-gray-700 font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                  className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-700 font-medium">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  required
                  className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-gray-700 font-medium">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange"
                />
              </div>
              <div>
                <Label htmlFor="title" className="text-gray-700 font-medium">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Your title"
                  className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium">
                How can we help? *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, questions, or how we can assist you..."
                required
                rows={6}
                className="mt-2 border-gray-300 focus:border-launch-orange focus:ring-launch-orange resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-size-200 hover:bg-pos-100 text-white py-4 text-xl font-bold shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-6 w-6" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
