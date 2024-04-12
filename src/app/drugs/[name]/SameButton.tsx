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
  <Button size="sm" onClick={() => same(factId)}>
    Me Too
  </Button>
);

export default SameButton;
