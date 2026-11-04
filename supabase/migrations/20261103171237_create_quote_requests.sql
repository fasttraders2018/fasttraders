/*
# Create quote_requests table

1. New Tables
- `quote_requests`: stores quote requests submitted from the public website contact form.
  - `id` (uuid, primary key)
  - `name` (text, required)
  - `phone` (text, required)
  - `email` (text, optional)
  - `service` (text, required) - the service the visitor is interested in
  - `message` (text, optional) - project details from the visitor
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `quote_requests`.
- Grant INSERT only to `anon` and `authenticated`. Visitors can submit requests but cannot read, edit, or delete anyone's requests.
- Insert policy enforces basic length limits so malformed or oversized submissions are rejected.

3. Notes
- No sign-in is required on the website, so the public role is used for the insert policy.
- The company reads submissions from the database dashboard.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 30),
  email text CHECK (email IS NULL OR char_length(email) <= 200),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 120),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON quote_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
