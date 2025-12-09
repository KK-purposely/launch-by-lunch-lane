-- Add title column to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN title text;