import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
  it('renders the correct number of radio buttons', () => {
    render(
      <RadioGroup
        values={['0', '1', '2']}
        onChange={() => {}}
        defaultValue="0"
      />
    );

    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('renders the radio buttons with the correct labels', () => {
    render(
      <RadioGroup
        values={['0', '1', '2']}
        defaultValue={'0'}
        onChange={() => {}}
      />
    );

    expect(screen.getByText('0')).toBeDefined();
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
  });

  it('sets the default value correctly', () => {
    render(
      <RadioGroup
        values={['0', '1', '2']}
        defaultValue={'1'}
        onChange={() => {}}
      />
    );

    const defaultRadio = screen.getByLabelText('1');

    expect(defaultRadio).toBeDefined();
    expect(defaultRadio).toBeChecked();
  });

  it('calls onChange with the correct value', async () => {
    const onChange = jest.fn();

    render(
      <RadioGroup
        values={['0', '1', '2']}
        onChange={onChange}
        defaultValue="0"
      />
    );

    await userEvent.click(screen.getByText('1'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('1');
  });
});
