import Link from 'next/link';

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
        <ul>
          {drug.facts.map(({ id, description }) => (
            <li
              className="py-1 border-solid border-b border-stone-300 last:border-none"
              key={id}
            >
              {description}
              <SameButton factId={id} />
            </li>
          ))}
        </ul>
        <AddFactForm drug={drug} />
      </main>
    </>
  );
}
