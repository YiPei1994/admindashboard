import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jleituoxiyygpslootwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZWl0dW94aXl5Z3BzbG9vdHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MDYxNDAsImV4cCI6MjAxODM4MjE0MH0.EEbxhwh1BbmH9IW58QyYVYbd96JjrWEAush_9vJff-o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
