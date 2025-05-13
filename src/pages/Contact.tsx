
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // Format the email content
      const subject = encodeURIComponent(`Website Inquiry from ${values.firstName} ${values.lastName}`);
      const body = encodeURIComponent(`
Name: ${values.firstName} ${values.lastName}
Email: ${values.email}

Message:
${values.message}
      `.trim());
      
      // Direct approach to open email client
      window.location.href = `mailto:welcome@launchbylunch.co?subject=${subject}&body=${body}`;
      
      // Show success message after a short delay
      setTimeout(() => {
        toast.success("Thank you for your inquiry!");
        form.reset();
      }, 500);
      
    } catch (error) {
      toast.error("Something went wrong. Please try the direct email link below.");
      console.error("Form submission error:", error);
    }
  };

  // Function to handle direct email click
  const handleDirectEmailClick = () => {
    toast.success("Opening email client...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-launch-purple">Contact Us</h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="johndoe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us how we can help you..." 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-launch-purple hover:bg-launch-purple/90"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Send Inquiry"}
              </Button>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>
                  You can also reach us directly at{" "}
                  <a 
                    href="mailto:welcome@launchbylunch.co" 
                    className="text-launch-purple hover:underline font-medium"
                    onClick={handleDirectEmailClick}
                  >
                    welcome@launchbylunch.co
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
