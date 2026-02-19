/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the student
      - `email` (text, required, unique) - Email address
      - `phone` (text, required) - Phone number
      - `accommodation_type` (text, required) - Either 'hostel' or 'day_scholar'
      - `campus_ambassador` (boolean, default false) - Interest in becoming campus ambassador
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting waitlist entries (public access for form submission)
    - Add policy for authenticated users to view all entries (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  accommodation_type text NOT NULL CHECK (accommodation_type IN ('hostel', 'day_scholar')),
  campus_ambassador boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit to waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);