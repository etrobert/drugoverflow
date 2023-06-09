import Link from 'next/link';

import { client as supabase } from './supabaseClient';
import List from './List';

import type { Drug } from './types';

const fetchDrugsList = async () => {
  const { data } = await supabase.from('drugs').select();
  return data as Drug[]; // TODO: Infer type w/ Supabase CLI
};

export default async function Home() {
  const drugsList = await fetchDrugsList();

  return (
    <>
      <h1>Drug Overflow</h1>
      <List>
        {drugsList.map(({ id, name }) => (
          <Link key={id} href={'drugs/' + name}>
            {name}
          </Link>
        ))}
      </List>
    </>
  );
}
