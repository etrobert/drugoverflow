import { db } from '@/db';
import AddStoryForm from './AddStoryForm';
import { Button } from '@/components/ui/button';
import same from './same';

export default async function Home() {
  const stories = await db.query.stories.findMany({ with: { sames: true } });

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Drug Overflow
      </h1>
      <main className="grid gap-4">
        <ul>
          {stories.map(({ id, description, sames }) => (
            <li
              className="flex place-content-between items-center py-1 border-solid border-b border-stone-300 last:border-none last:pb-0"
              key={id}
            >
              {description}
              {sames.reduce((acc, { value }) => acc + (value ? 1 : -1), 0)}
              <div className="flex gap-2">
                <form
                  action={async () => {
                    'use server';
                    await same(id, true);
                  }}
                >
                  <Button size="sm">Me Too</Button>
                </form>
                <form
                  action={async () => {
                    'use server';
                    await same(id, false);
                  }}
                >
                  <Button size="sm">Not Me</Button>
                </form>
              </div>
            </li>
          ))}
        </ul>
        <AddStoryForm />
      </main>
    </>
  );
}
