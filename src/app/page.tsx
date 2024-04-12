import { db } from '@/db';
import { Button } from '@/components/ui/button';
import AddStoryForm from './AddStoryForm';

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
              <div className="flex gap-2">
                {sames.length}
                <Button size="sm">Me Too</Button>
                <Button size="sm">Not Me</Button>
              </div>
            </li>
          ))}
        </ul>
        <AddStoryForm />
      </main>
    </>
  );
}
