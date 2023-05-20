import { notFound } from 'next/navigation';
import Link from 'next/link';

import { client as supabase } from '@/app/supabaseClient';
import List from '@/app/List';
import SameButton from './SameButton';
import AddFactForm from './AddFactForm';

import type { Drug } from '@/app/types';

export const revalidate = 2;

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

const fetchSameFacts = async (factId: number) =>
  await supabase
    .from('sames')
    .select('*', { count: 'exact', head: true })
    .eq('fact_id', factId);

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  const drug = await fetchDrug(name);
  if (drug === null) notFound();

  const facts = await fetchFacts(drug.id);
  if (facts === null) throw new Error('Could not fetch facts');

  const sames = await Promise.all(facts.map((fact) => fetchSameFacts(fact.id)));
  // TODO: Remove N+1
  // TODO: Deal with error

  return (
    <>
      <h1>
        <Link href={'/'}>◁</Link> {drug.name}
      </h1>
      <main>
        <List>
          {facts.map(({ id, description }, index) => (
            <>
              {description}
              {sames[index].count}
              <SameButton factId={id} />
            </>
          ))}
        </List>
        <AddFactForm drugId={drug.id} />
      </main>
    </>
  );
}
