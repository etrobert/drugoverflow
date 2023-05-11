'use client';

import RadioGroup from './RadioGroup';

function setColorScheme(colorScheme: string) {
  const doc = document.firstElementChild;
  if (doc === null) return;
  if (colorScheme === 'auto') doc.removeAttribute('color-scheme');
  else doc.setAttribute('color-scheme', colorScheme);
}

const ColorSchemeSwitch = () => (
  <RadioGroup
    values={['auto', 'light', 'dark']}
    defaultValue="auto"
    onChange={setColorScheme}
  />
);

export default ColorSchemeSwitch;
