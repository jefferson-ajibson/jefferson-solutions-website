/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — visitor's full name from the contact form
  - `email` (text, not null) — visitor's email address for reply
  - `phone` (text, nullable) — optional phone number
  - `subject` (text, not null) — message subject line
  - `project_type` (text, not null) — selected type of project enquiry
  - `description` (text, not null) — project description
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` and `authenticated` only — the public contact form writes new enquiries; nobody reads them through the Data API.
- INSERT policy allows anyone to submit an enquiry (intentional public intake form). No SELECT/UPDATE/DELETE policies: messages are read-only via the dashboard/service role, never via the public API.

3. Notes
- Single-tenant marketing site with no sign-in, so policies target `anon, authenticated`.
- The table is intentionally write-only for the public: contact enquiries must not be readable or modifiable through the browser.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  project_type text NOT NULL,
  description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT (full_name, email, phone, subject, project_type, description) ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "public_can_submit_contact_enquiry" ON contact_messages;
CREATE POLICY "public_can_submit_contact_enquiry"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
