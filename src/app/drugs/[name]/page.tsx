import Link from 'next/link';

import List from '@/app/List';
import SameButton from './SameButton';
import AddFactForm from './AddFactForm';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { drugs } from '@/db/schema';
import { notFound } from 'next/navigation';

const facts = [{ id: 0, description: 'I once had a seizure using this drug.' }];

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  const drug = await db.query.drugs.findFirst({ where: eq(drugs.name, name) });
  if (!drug) notFound();

  return (
    <>
      <h1>
        <Link href={'/'}>◁</Link> {name}
      </h1>
      <main>
        <List>
          {facts.map(({ id, description }) => (
            <>
              {description}
              <SameButton factId={id} />
            </>
          ))}
        </List>
        <AddFactForm drug={drug} />
      </main>
    </>
  );
}
