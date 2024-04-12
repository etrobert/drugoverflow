import { revalidatePath } from 'next/cache';
import { stories } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { db } from '@/db';

const AddStoryForm = () => {
  const addStory = async (data: FormData) => {
    'use server';

    const description = data.get('description');

    if (typeof description !== 'string') return;

    await db.insert(stories).values({ description });
    revalidatePath(`/`);
  };

  return (
    <form className="grid gap-2" action={addStory}>
      <Textarea
        name="description"
        placeholder="Add your experience"
        required
        minLength={5}
        maxLength={255}
        className="resize-none"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddStoryForm;
