
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  name: string;
  email: string;
  cohort: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, cohort }: WaitlistRequest = await req.json();

    console.log('Received waitlist request:', { name, email, cohort });

    // Validate required fields
    if (!name || !email || !cohort) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: name, email, and cohort are required",
          success: false 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Karen
    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <onboarding@resend.dev>",
      to: ["karen@launchbylunch.co"],
      subject: `New Waitlist Registration - ${cohort}`,
      html: `
        <h1>New Waitlist Registration</h1>
        <p>Someone has joined the waitlist for <strong>${cohort}</strong>:</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Cohort:</strong> ${cohort}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p>Please follow up with them when registration opens!</p>
        
        <p>Best regards,<br>Launch by Lunch Platform</p>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Launch by Lunch <onboarding@resend.dev>",
      to: [email],
      subject: "You're on the waitlist! 🎉",
      html: `
        <h1>Welcome to the waitlist, ${name}!</h1>
        <p>Thank you for your interest in our <strong>${cohort}</strong> accelerator.</p>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="margin: 0 0 10px 0;">What's Next?</h2>
          <p style="margin: 0;">We'll notify you as soon as registration opens. In the meantime, follow us on social media for updates and tips!</p>
        </div>
        
        <p>We're excited to help you build AI agents without any coding experience.</p>
        
        <p>Best regards,<br>The Launch by Lunch Team</p>
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Successfully joined waitlist" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in waitlist function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
