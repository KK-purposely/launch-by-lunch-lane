
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CommunityApplicationRequest {
  applicantName: string;
  applicantEmail: string;
  linkedinProfile: string;
  whyJoin: string;
  whatCanGive: string;
  aiStage: string;
  buildingAiFirst: string;
  isTechnical: string;
  howFoundUs: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      applicantName,
      applicantEmail,
      linkedinProfile,
      whyJoin,
      whatCanGive,
      aiStage,
      buildingAiFirst,
      isTechnical,
      howFoundUs,
    }: CommunityApplicationRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Community Applications <onboarding@resend.dev>",
      to: ["karen@launchbylunch.co"],
      subject: `New Community Application from ${applicantName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6B46C1; border-bottom: 2px solid #FB923C; padding-bottom: 10px;">
            New Community Application
          </h1>
          
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #374151; margin-top: 0;">Personal Information</h2>
            <p><strong>Name:</strong> ${applicantName}</p>
            <p><strong>Email:</strong> ${applicantEmail}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedinProfile}" target="_blank">${linkedinProfile}</a></p>
          </div>

          <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #92400E; margin-top: 0;">Application Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong>Why do they want to join?</strong>
              <p style="background-color: white; padding: 10px; border-radius: 4px; margin: 5px 0;">${whyJoin}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong>What can they contribute?</strong>
              <p style="background-color: white; padding: 10px; border-radius: 4px; margin: 5px 0;">${whatCanGive}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
              <div>
                <strong>AI Building Stage:</strong>
                <p style="margin: 5px 0; font-weight: 500; color: #6B46C1;">${aiStage}</p>
              </div>
              
              <div>
                <strong>Building AI-first:</strong>
                <p style="margin: 5px 0; font-weight: 500; color: #6B46C1;">${buildingAiFirst}</p>
              </div>
              
              <div>
                <strong>Technical Background:</strong>
                <p style="margin: 5px 0; font-weight: 500; color: #6B46C1;">${isTechnical}</p>
              </div>
              
              <div>
                <strong>How they found us:</strong>
                <p style="margin: 5px 0; font-weight: 500; color: #6B46C1;">${howFoundUs}</p>
              </div>
            </div>
          </div>

          <div style="background-color: #DBEAFE; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1E40AF;">
              <strong>Next Steps:</strong> Review this application and follow up with the applicant as needed.
            </p>
          </div>

          <p style="color: #6B7280; font-size: 14px; text-align: center; margin-top: 30px;">
            This email was automatically generated from the Launch by Lunch community application form.
          </p>
        </div>
      `,
    });

    console.log("Community notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-community-notification function:", error);
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
