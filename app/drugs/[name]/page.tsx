import { notFound } from 'next/navigation';
import Link from 'next/link';

import { client as supabase } from '@/app/supabaseClient';
import List from '@/app/List';
import SameButton from './SameButton';

import type { Drug } from '@/app/types';

const fetchDrug = async (name: string) => {
  const supabaseResponse = await supabase
    .from('drugs')
    .select()
    .ilike('name', name)
    .limit(1)
    .single();

  return supabaseResponse.data;
};

const fetchFacts = async (drugId: number) => {
  const supabaseResponse = await supabase
    .from('facts')
    .select()
    .eq('drug_id', drugId);

  return supabaseResponse.data;
};

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  const drug = await fetchDrug(name);
  if (drug === null) notFound();

  const facts = await fetchFacts(drug.id);
  if (facts === null) throw new Error('Could not fetch facts');

  return (
    <main>
      <h1>
        <Link href={'/'}>Home</Link> - {drug.name}
      </h1>
      <List>
        {facts.map(({ description }) => (
          <>
            {description}
            <SameButton />
          </>
        ))}
      </List>
    </main>
  );
}
