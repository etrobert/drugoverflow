import { db } from '@/db';
import AddStoryForm from './AddStoryForm';
import SameButtons from './SameButtons';

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
              <SameButtons storyId={id} />
            </li>
          ))}
        </ul>
        <AddStoryForm />
      </main>
    </>
  );
}
