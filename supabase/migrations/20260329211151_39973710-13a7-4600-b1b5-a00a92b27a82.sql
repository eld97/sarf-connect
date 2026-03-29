CREATE TABLE public.beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  organization text NOT NULL,
  currency text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.beta_signups
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);