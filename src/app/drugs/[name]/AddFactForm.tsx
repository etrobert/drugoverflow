import { revalidatePath } from 'next/cache';
import { Drug } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  drug: Drug;
};

const AddFactForm = ({ drug }: Props) => {
  const addFact = async (data: FormData) => {
    'use server';

    console.log('Adding fact');

    revalidatePath(`/drugs/${drug.name}`);
  };

  return (
    <>
      <form
        className="grid gap-2"
        // @ts-expect-error nextjs server action are not correctly typed
        action={addFact}
      >
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
    </>
  );
};

export default AddFactForm;
