'use client';

const same = (factId: string) => {
  const params = new URLSearchParams({ fact_id: factId });
  return fetch(`/api/same?${params}`, {
    method: 'POST',
  });
};

type Props = {
  factId: string;
};

const SameButton = ({ factId }: Props) => (
  <button onClick={() => same(factId)}>Same</button>
);

export default SameButton;
