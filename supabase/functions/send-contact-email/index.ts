
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  userEmail: string;
  serviceTitle: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, serviceTitle }: ContactRequest = await req.json();

    console.log("Sending contact email for:", serviceTitle, "from:", userEmail);

    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <onboarding@resend.dev>",
      to: ["welcome@launchbylunch.co"],
      subject: `New Contact Request: ${serviceTitle}`,
      html: `
        <h1>New Contact Request</h1>
        <p><strong>Service:</strong> ${serviceTitle}</p>
        <p><strong>User Email:</strong> ${userEmail}</p>
        <p>The user has requested more information about the ${serviceTitle} service.</p>
        <br>
        <p>Please follow up with them at: ${userEmail}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
