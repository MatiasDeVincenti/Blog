import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mxeeldheotieekeytfzn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14ZWVsZGhlb3RpZWVrZXl0ZnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ2ODgsImV4cCI6MjA0MTQ4MDY4OH0.JKylv86gglGA3eO-PrP5VgICwyBjY_OtCn4LTeK5r94"
);
