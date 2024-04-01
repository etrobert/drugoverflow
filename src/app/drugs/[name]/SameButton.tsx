'use client';

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
  <button onClick={() => same(factId)}>Same</button>
);

export default SameButton;
