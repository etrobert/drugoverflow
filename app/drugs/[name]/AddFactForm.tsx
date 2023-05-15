import styles from './AddFactForm.module.css';

const AddFactForm = () => {
  const addFact = async (data: FormData) => {
    'use server';

    console.log(data.get('description'));
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
        ></textarea>
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddFactForm;
