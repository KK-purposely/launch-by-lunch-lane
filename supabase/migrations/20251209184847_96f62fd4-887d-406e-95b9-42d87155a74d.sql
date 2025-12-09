-- Create invite_requests table for Chef's Table applications
CREATE TABLE public.invite_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.invite_requests ENABLE ROW LEVEL SECURITY;

-- Create insert policy (public form - anyone can submit)
CREATE POLICY "Anyone can submit invite request" 
ON public.invite_requests 
FOR INSERT 
WITH CHECK (true);