import styles from './AddFactForm.module.css';
import { serverClient as supabase } from '@/app/supabaseClient';

type Props = {
  drugId: number;
};

const minLength = 5;
const maxLength = 255;

const validate = (data: FormData) => {
  const description = data.get('description');

  if (description === null) return { error: 'Description is required' };

  if (typeof description !== 'string')
    return { error: 'Description should be a string' };

  if (description.length < minLength)
    return { error: 'Description must be at least 5 characters long' };

  if (description.length > maxLength)
    return { error: 'Description must be at most 255 characters long' };

  return { data: { description } };
};

const AddFactForm = ({ drugId }: Props) => {
  const addFact = async (formData: FormData) => {
    'use server';

    const { data, error: validationError } = validate(formData);

    if (data === undefined) throw new Error(validationError);

    const { description } = data;

    const { error } = await supabase
      .from('facts')
      .insert({ description, drug_id: drugId });

    if (error) throw new Error(error.message);
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
          minLength={minLength}
          maxLength={maxLength}
        />
        <button className={styles['form-field']} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddFactForm;
