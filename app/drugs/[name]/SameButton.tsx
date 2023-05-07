'use client';

const SameButton = () => {
  return (
    <button
      onClick={async () => console.log(await (await fetch('/api/same')).text())}
    >
      Same
    </button>
  );
};

export default SameButton;
