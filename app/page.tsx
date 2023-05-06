import Link from 'next/link';

import { supabase } from './supabaseClient';
import List from './List';

import type { Drug } from './types';

import styles from './page.module.css';

const fetchDrugsList = async () => {
  const { data } = await supabase.from('drugs').select();
  return data as Drug[]; // TODO: Infer type w/ Supabase CLI
};

export default async function Home() {
  const drugsList = await fetchDrugsList();

  return (
    <main className={styles.main}>
      <List>
        {drugsList.map(({ name }) => (
          <Link href={'drugs/' + name}>{name}</Link>
        ))}
      </List>
    </main>
  );
}
