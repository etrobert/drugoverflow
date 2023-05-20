import { validate } from '@/app/addFactValidate';
import { serverClient as supabase } from '@/app/supabaseClient';

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error: validationError } = validate(body);

  if (data === undefined) return new Response(validationError, { status: 400 });

  const { description, drugId } = data;

  const { error } = await supabase
    .from('facts')
    .insert({ description, drug_id: drugId });

  if (error) throw new Error(error.message);

  return new Response();
}
