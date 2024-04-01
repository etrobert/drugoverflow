import Link from 'next/link';

import List from './List';

const drugs = [
  { id: 0, name: 'Paracetamol' },
  { id: 1, name: 'Ibuprofen' },
]

export default async function Home() {
  return (
    <>
      <h1>Drug Overflow</h1>
      <List>
        {drugs.map(({ id, name }) => (
          <Link key={id} href={'drugs/' + name}>
            {name}
          </Link>
        ))}
      </List>
    </>
  );
}
