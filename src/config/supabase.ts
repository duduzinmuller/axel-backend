import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase configuration: SUPABASE_URL or SUPABASE_ANON_KEY is not set",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
