import Link from 'next/link';

import List from '@/app/List';
import SameButton from './SameButton';
import AddFactForm from './AddFactForm';

import type { Drug } from '@/app/types';

const facts = [{ id: 0, description: 'I once had a seizure using this drug.' }];
const drug = { id: 0, name: 'Paracetamol', created_at: '2021-01' };

type Props = { params: { name: string } };

export default async function Drug({ params: { name } }: Props) {
  return (
    <>
      <h1>
        <Link href={'/'}>◁</Link> {name}
      </h1>
      <main>
        <List>
          {facts.map(({ id, description }) => (
            <>
              {description}
              <SameButton factId={id} />
            </>
          ))}
        </List>
        <AddFactForm drug={drug} />
      </main>
    </>
  );
}
