'use client';

import { Button } from '@/components/ui/button';

const same = (factId: number) => {
  const params = new URLSearchParams({ fact_id: factId.toString() });
  return fetch(`/api/same?${params}`, {
    method: 'POST',
  });
};

type Props = {
  factId: number;
};

const SameButton = ({ factId }: Props) => (
  <Button onClick={() => same(factId)}>Same</Button>
);

export default SameButton;
