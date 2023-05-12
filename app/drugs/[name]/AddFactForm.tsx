import styles from './AddFactForm.module.css';

const AddFactForm = () => (
  <>
    <form className={styles.form}>
      <textarea
        className={styles.textarea}
        placeholder="Add your experience"
      ></textarea>
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  </>
);

export default AddFactForm;
