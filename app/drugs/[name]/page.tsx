import { notFound } from 'next/navigation';
import { supabase } from '@/app/supabaseClient';

const fetchDrug = async (name: string) => {
  const supabaseResponse = await supabase
    .from('drugs')
    .select()
    .ilike('name', name)
    .limit(1)
    .single();

  return supabaseResponse.data;
};

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  const drug = await fetchDrug(name);
  if (drug === null) notFound();

  return <h1>{drug.name}</h1>;
}
