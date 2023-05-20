import { createClient } from '@supabase/supabase-js';
import singleton from './singleton';

const supabaseUrl = 'https://wovocqafhjqbsjrmvcpb.supabase.co';

const anonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvdm9jcWFmaGpxYnNqcm12Y3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjUwMzUsImV4cCI6MTk5ODgwMTAzNX0.XFlX9ciDuWMyDYa04TxDfjJTrkZpzkPa9C7MgnxtpgY';

const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const client = createClient(supabaseUrl, anonKey);

const getServerClient = () => {
  if (serviceRoleKey === undefined)
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
  return createClient(supabaseUrl, serviceRoleKey);
};

/**
 * Returns a singleton instance of the server-side Supabase client.
 *
 * @throws If SUPABASE_SERVICE_ROLE_KEY is not set.
 *
 * @example
 * import { getServerClient } from 'supabaseClient';
 *
 * const supabase = getServerClient();
 *
 * const { data, error } = await supabase
 *   .from('users')
 *   .select()
 *   .eq('id', 1);
 */
const getServerClientSingleton = singleton(getServerClient);

export { client, getServerClientSingleton };
