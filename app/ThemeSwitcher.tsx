'use client';

import { useCallback, useState } from 'react';

type OneRadioProps = {
  value: string;
  currentValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const OneRadio = ({ value, currentValue, onChange }: OneRadioProps) => (
  <label>
    {value}
    <input
      type="radio"
      id={value}
      name="theme"
      value={value}
      checked={value === currentValue}
      onChange={onChange}
    />
  </label>
);

function setTheme(theme: string) {
  const doc = document.firstElementChild;
  if (doc === null) return;
  doc.setAttribute('color-scheme', theme);
}

export default function ThemeSwitcher() {
  const [currentValue, setCurrentValue] = useState('auto');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.value;
    setCurrentValue(theme);
    setTheme(theme);
  }, []);

  return (
    <div>
      <OneRadio value="auto" currentValue={currentValue} onChange={onChange} />
      <OneRadio value="light" currentValue={currentValue} onChange={onChange} />
      <OneRadio value="dark" currentValue={currentValue} onChange={onChange} />
    </div>
  );
}
