'use client';

const SameButton = () => {
  return (
    <button
      onClick={async () =>
        console.log(await (await fetch('/api/hello')).text())
      }
    >
      Same
    </button>
  );
};

export default SameButton;
