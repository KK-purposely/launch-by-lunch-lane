-- Add restrictive SELECT policies to prevent public data access
-- These tables contain personal information and should not be publicly readable

-- Block all SELECT access on community_applications (only service role can access)
CREATE POLICY "Block public read access on community_applications"
ON public.community_applications
FOR SELECT
USING (false);

-- Block all SELECT access on contact_submissions
CREATE POLICY "Block public read access on contact_submissions"
ON public.contact_submissions
FOR SELECT
USING (false);

-- Block all SELECT access on invite_requests
CREATE POLICY "Block public read access on invite_requests"
ON public.invite_requests
FOR SELECT
USING (false);

-- Block all SELECT access on teardown_applications
CREATE POLICY "Block public read access on teardown_applications"
ON public.teardown_applications
FOR SELECT
USING (false);