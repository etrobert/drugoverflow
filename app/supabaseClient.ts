import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://wovocqafhjqbsjrmvcpb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvdm9jcWFmaGpxYnNqcm12Y3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjUwMzUsImV4cCI6MTk5ODgwMTAzNX0.XFlX9ciDuWMyDYa04TxDfjJTrkZpzkPa9C7MgnxtpgY'
);
