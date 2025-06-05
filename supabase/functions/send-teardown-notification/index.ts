
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TeardownNotificationRequest {
  firstName: string;
  lastName: string;
  companyName: string;
  applicationDescription: string;
  isAppPublic: string;
  otherComments?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName,
      companyName,
      applicationDescription,
      isAppPublic,
      otherComments
    }: TeardownNotificationRequest = await req.json();

    console.log("Sending teardown application notification for:", {
      firstName,
      lastName,
      companyName
    });

    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <onboarding@resend.dev>",
      to: ["karen@launchbylunch.co"],
      subject: `New Tear Down MVP Service Application - ${companyName}`,
      html: `
        <h1>New Tear Down MVP Service Application</h1>
        
        <h2>Applicant Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        
        <h2>Application Details</h2>
        <p><strong>Application Description:</strong></p>
        <p>${applicationDescription}</p>
        
        <p><strong>Is the app public yet?</strong> ${isAppPublic}</p>
        
        ${otherComments ? `
          <p><strong>Additional Comments:</strong></p>
          <p>${otherComments}</p>
        ` : ''}
        
        <hr>
        <p><em>This application was submitted through the Launch by Lunch website.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-teardown-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
