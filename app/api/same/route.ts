import { serverClient as supabase } from '@/app/supabaseClient';

// To use request object use the following
// export async function GET(request: Request) {
export async function POST() {
  const { error } = await supabase
    .from('sames')
    .insert({ same: true, fact_id: 1 });

  if (error) throw new Error(error.message);

  return new Response('Hello, Next.js!');
}
