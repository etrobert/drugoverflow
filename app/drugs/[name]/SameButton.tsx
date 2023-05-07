'use client';

const same = async (factId: string) => {
  const params = new URLSearchParams({ fact_id: factId });
  const response = await fetch(`/api/same?${params}`, {
    method: 'POST',
  });
  const text = await response.text();
  console.log(text);
};

type Props = {
  factId: string;
};

const SameButton = ({ factId }: Props) => {
  return <button onClick={() => same(factId)}>Same</button>;
};

export default SameButton;
