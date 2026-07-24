
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (
  length(btrim(first_name)) BETWEEN 1 AND 100
  AND length(btrim(last_name)) BETWEEN 1 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 254
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (message IS NULL OR length(message) <= 5000)
  AND (company IS NULL OR length(company) <= 200)
  AND (title IS NULL OR length(title) <= 200)
);

DROP POLICY IF EXISTS "Anyone can submit community application" ON public.community_applications;
CREATE POLICY "Anyone can submit community application"
ON public.community_applications
FOR INSERT
WITH CHECK (
  length(btrim(first_name)) BETWEEN 1 AND 100
  AND length(btrim(last_name)) BETWEEN 1 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 254
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (company IS NULL OR length(company) <= 200)
  AND (title IS NULL OR length(title) <= 200)
  AND (linkedin_url IS NULL OR length(linkedin_url) <= 500)
  AND (referral_source IS NULL OR length(referral_source) <= 500)
  AND (additional_info IS NULL OR length(additional_info) <= 5000)
);

DROP POLICY IF EXISTS "Anyone can submit teardown application" ON public.teardown_applications;
CREATE POLICY "Anyone can submit teardown application"
ON public.teardown_applications
FOR INSERT
WITH CHECK (
  length(btrim(first_name)) BETWEEN 1 AND 100
  AND length(btrim(last_name)) BETWEEN 1 AND 100
  AND length(btrim(company_name)) BETWEEN 1 AND 200
  AND length(btrim(app_description)) BETWEEN 1 AND 5000
);

DROP POLICY IF EXISTS "Anyone can submit invite request" ON public.invite_requests;
CREATE POLICY "Anyone can submit invite request"
ON public.invite_requests
FOR INSERT
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(company_name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 254
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);
