'use client';

const same = async () => {
  const response = await fetch('/api/same', { method: 'POST' });
  const text = await response.text();
  console.log(text);
};

const SameButton = () => {
  return <button onClick={same}>Same</button>;
};

export default SameButton;
