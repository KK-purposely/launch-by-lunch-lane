-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create community_applications table
CREATE TABLE public.community_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  title TEXT,
  linkedin_url TEXT,
  interests TEXT[],
  referral_source TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create teardown_applications table
CREATE TABLE public.teardown_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  app_description TEXT NOT NULL,
  is_public_app BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teardown_applications ENABLE ROW LEVEL SECURITY;

-- Create insert policies (public forms - anyone can submit)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit community application" 
ON public.community_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit teardown application" 
ON public.teardown_applications 
FOR INSERT 
WITH CHECK (true);