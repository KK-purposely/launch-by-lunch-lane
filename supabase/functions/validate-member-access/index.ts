import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Password stored server-side only - not exposed to client
const MEMBER_PASSWORD = "nocodelaunch";

interface ValidateRequest {
  password: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { password }: ValidateRequest = await req.json();

    console.log("Member access validation attempt");

    // Validate input
    if (!password || typeof password !== "string") {
      return new Response(
        JSON.stringify({ success: false, error: "Password is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate password length to prevent abuse
    if (password.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid password" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Server-side password validation
    const isValid = password === MEMBER_PASSWORD;

    if (isValid) {
      // Generate a simple session token (timestamp-based for basic validation)
      const sessionToken = btoa(`member_${Date.now()}_${crypto.randomUUID()}`);
      
      console.log("Member access granted");
      
      return new Response(
        JSON.stringify({ success: true, sessionToken }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } else {
      console.log("Member access denied - invalid password");
      
      return new Response(
        JSON.stringify({ success: false, error: "Invalid password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  } catch (error: any) {
    console.error("Error in validate-member-access function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
