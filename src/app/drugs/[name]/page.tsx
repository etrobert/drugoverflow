import Link from 'next/link';

import List from '@/app/List';
import SameButton from './SameButton';
import AddFactForm from './AddFactForm';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { drugs } from '@/db/schema';
import { notFound } from 'next/navigation';

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  const drug = await db.query.drugs.findFirst({
    with: { facts: true },
    where: eq(drugs.name, name),
  });
  if (!drug) notFound();

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Link href={'/'}>◁</Link> {name}
      </h1>
      <main>
        <List>
          {drug.facts.map(({ id, description }) => (
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
