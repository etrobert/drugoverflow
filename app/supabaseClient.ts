import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wovocqafhjqbsjrmvcpb.supabase.co';

const client = createClient(
  supabaseUrl,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvdm9jcWFmaGpxYnNqcm12Y3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjUwMzUsImV4cCI6MTk5ODgwMTAzNX0.XFlX9ciDuWMyDYa04TxDfjJTrkZpzkPa9C7MgnxtpgY'
);

const service_role_key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (service_role_key === undefined)
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');

const serverClient = createClient(supabaseUrl, service_role_key);

export { client, serverClient };
