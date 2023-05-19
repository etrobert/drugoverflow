import styles from './AddFactForm.module.css';
import { serverClient as supabase } from '@/app/supabaseClient';

type Props = {
  drugId: number;
};

const AddFactForm = ({ drugId }: Props) => {
  const addFact = async (data: FormData) => {
    'use server';

    const { error } = await supabase
      .from('facts')
      .insert({ description: data.get('description'), drug_id: drugId });

    if (error) throw new Error(error.message);
  };

  return (
    <>
      <form
        className={styles.form}
        // @ts-expect-error nextjs server action are not correctly typed
        action={addFact}
      >
        <textarea
          name="description"
          className={styles.textarea}
          placeholder="Add your experience"
          required
          minLength={5}
          maxLength={255}
        ></textarea>
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddFactForm;
