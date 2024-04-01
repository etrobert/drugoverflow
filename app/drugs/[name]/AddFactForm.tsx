import { revalidatePath } from 'next/cache';
import styles from './AddFactForm.module.css';
import { Drug } from '@/app/types';

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
        <button className={styles['form-field']} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddFactForm;
