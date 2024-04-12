import Link from 'next/link';

import { db } from '@/db';

export default async function Home() {
  const drugs = await db.query.drugs.findMany();

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Drug Overflow
      </h1>
      <ul>
        {drugs.map(({ id, name }) => (
          <li
            className="py-1 border-solid border-b border-stone-300 last:border-none"
            key={id}
          >
            <Link key={id} href={'drugs/' + name}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
