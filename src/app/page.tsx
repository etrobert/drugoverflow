import Link from 'next/link';

import { db } from '@/db';
import List from './List';

export default async function Home() {
  const drugs = await db.query.drugs.findMany();

  return (
    <>
      <h1>Drug Overflow</h1>
      <List>
        {drugs.map(({ id, name }) => (
          <Link key={id} href={'drugs/' + name}>
            {name}
          </Link>
        ))}
      </List>
    </>
  );
}
