import { getServerClientSingleton } from '@/app/supabaseClient';

export async function POST(request: Request) {
  const supabase = getServerClientSingleton();
  const { searchParams } = new URL(request.url);
  const factId = searchParams.get('fact_id');

  if (factId === null) return new Response('Missing fact_id', { status: 400 });

  const { error } = await supabase
    .from('sames')
    .insert({ same: true, fact_id: factId });

  if (error) throw new Error(error.message);

  return new Response();
}
