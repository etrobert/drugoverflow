import styles from './page.module.css';

type Drug = { id: string; name: string };

const fetchDrugList = async (): Promise<Drug[]> => {
  const drugListResponse = await fetch(
    'https://6453dcccc18adbbdfea9b950.mockapi.io/drugs'
  );
  return drugListResponse.json();
};

export default async function Home() {
  const drugList = await fetchDrugList();

  return (
    <main className={styles.main}>
      <ul className={styles['drug-list']}>
        {drugList.map(({ id, name }) => (
          <li className={styles['drug-list-item']} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
