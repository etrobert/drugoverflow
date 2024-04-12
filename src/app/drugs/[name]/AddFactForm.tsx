import { revalidatePath } from 'next/cache';
import styles from './AddFactForm.module.css';
import { Drug } from '@/db/schema';
import { Button } from '@/components/ui/button';

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
        // @ts-expect-error nextjs server action are not correctly typed
        action={addFact}
      >
        <textarea
          name="description"
          className={styles['form-field']}
          placeholder="Add your experience"
          required
          minLength={5}
          maxLength={255}
        />
        <Button className={styles['form-field']} type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddFactForm;
