import styles from './page.module.css';

type Drug = { id: string; name: string };

const fetchDrugsList = async (): Promise<Drug[]> => {
  const drugsListResponse = await fetch(
    'https://6453dcccc18adbbdfea9b950.mockapi.io/drugs'
  );
  return drugsListResponse.json();
};

export default async function Home() {
  const drugsList = await fetchDrugsList();

  return (
    <main className={styles.main}>
      <ul className={styles['drugs-list']}>
        {drugsList.map(({ id, name }) => (
          <li className={styles['drugs-list-item']} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
