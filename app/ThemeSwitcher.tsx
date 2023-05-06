'use client';

import RadioGroup from './RadioGroup';

function setTheme(theme: string) {
  const doc = document.firstElementChild;
  if (doc === null) return;
  doc.setAttribute('color-scheme', theme);
}

const ThemeSwitcher = () => (
  <RadioGroup
    values={['auto', 'light', 'dark']}
    defaultValue="auto"
    onChange={setTheme}
  />
);

export default ThemeSwitcher;
