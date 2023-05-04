import styles from './page.module.css';

const drugList = ['MDMA', 'Ecstasy', 'GHB', 'Cocaine'];

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles['drug-list']}>
        {drugList.map((drug) => (
          <li className={styles['drug-list-item']} key={drug}>
            {drug}
          </li>
        ))}
      </ul>
    </main>
  );
}
