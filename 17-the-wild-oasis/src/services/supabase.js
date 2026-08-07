import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://kkvruzodqujaaqucmvky.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrdnJ1em9kcXVqYWFxdWNtdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzIyNDYsImV4cCI6MjEwMTYwODI0Nn0.9kYrfCQlMRRCFUZHL9QXpI3H3046w2yYT_vCCeagnvw",
);

export default supabase;
