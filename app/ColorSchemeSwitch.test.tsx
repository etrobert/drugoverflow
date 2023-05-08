import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColorSchemeSwitch from './ColorSchemeSwitch';

describe('ColorSchemeSwitch', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('color-scheme');
  });

  it('does not modify color-scheme upon render', () => {
    render(<ColorSchemeSwitch />);
    expect(document.documentElement.getAttribute('color-scheme')).toBe(null);
  });

  it('changes color scheme on radio button selection', async () => {
    render(<ColorSchemeSwitch />);

    await userEvent.click(screen.getByLabelText('auto'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe(null);

    await userEvent.click(screen.getByLabelText('light'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe('light');

    await userEvent.click(screen.getByLabelText('dark'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe('dark');

    await userEvent.click(screen.getByLabelText('auto'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe(null);
  });

  it('does not change color scheme when selecting the same value', async () => {
    render(<ColorSchemeSwitch />);

    await userEvent.click(screen.getByLabelText('dark'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe('dark');

    await userEvent.click(screen.getByLabelText('dark'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe('dark');

    await userEvent.click(screen.getByLabelText('auto'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe(null);

    await userEvent.click(screen.getByLabelText('auto'));
    expect(document.documentElement.getAttribute('color-scheme')).toBe(null);
  });
});
