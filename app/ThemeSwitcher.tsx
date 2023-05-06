'use client';

import RadioGroup from './RadioGroup';

function setTheme(theme: string) {
  const doc = document.firstElementChild;
  if (doc === null) return;
  doc.setAttribute('color-scheme', theme);
}

export default function ThemeSwitcher() {
  return (
    <RadioGroup
      values={['auto', 'light', 'dark']}
      defaultValue="auto"
      onChange={setTheme}
    />
  );
}
