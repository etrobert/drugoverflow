import Link from 'next/link';

import SameButton from './SameButton';
import AddFactForm from './AddFactForm';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { drugs } from '@/db/schema';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

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
              className="flex place-content-between items-center py-1 border-solid border-b border-stone-300 last:border-none"
              key={id}
            >
              {description}
              <div className="flex gap-2">
                <SameButton factId={id} />
                <Button size="sm">Not Me</Button>
              </div>
            </li>
          ))}
        </ul>
        <AddFactForm drug={drug} />
      </main>
    </>
  );
}
