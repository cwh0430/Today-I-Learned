import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fxrxzxkhvkhtvhxdqmxq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cnh6eGtodmtodHZoeGRxbXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MzkyODIsImV4cCI6MTk4OTAxNTI4Mn0.MjX3tGzlsRsYberOf97Ih1-nnMZozQHhAr8TVoDwCqw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
