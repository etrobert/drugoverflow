'use client';

import styles from './AddFactForm.module.css';

type Props = {
  drugId: number;
};

const minLength = 5;
const maxLength = 255;

const AddFactForm = ({ drugId }: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const description = formData.get('description');
    const drugId = formData.get('drug_id');
    fetch('/api/facts', {
      method: 'POST',
      body: JSON.stringify({ description, drugId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
        <input type="hidden" name="drug_id" value={drugId} />
      </form>
    </>
  );
};

export { minLength, maxLength };
export default AddFactForm;
