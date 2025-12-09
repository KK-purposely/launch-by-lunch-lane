import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InviteRequestPayload {
  name: string;
  companyName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received invite request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, companyName, email }: InviteRequestPayload = await req.json();

    console.log(`Processing invite request from ${name} at ${companyName}`);

    // Validate inputs
    if (!name || !companyName || !email) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to admins
    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <onboarding@resend.dev>",
      to: ["welcome@launchbylunch.co"],
      subject: `New Chef's Table Invite Request from ${name}`,
      html: `
        <h1>New Chef's Table Invite Request</h1>
        <p>Someone has requested an invite to the Chef's Table membership.</p>
        <h2>Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p>Please follow up with them to discuss membership.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-invite-request function:", error);
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
