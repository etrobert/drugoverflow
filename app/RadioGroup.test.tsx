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
    const values = ['0', '1', '2'];

    render(
      <RadioGroup values={values} defaultValue={'0'} onChange={() => {}} />
    );

    values.forEach((value) => expect(screen.getByText(value)).toBeDefined());
  });

  it('sets the default value correctly', () => {
    const defaultValue = '1';

    render(
      <RadioGroup
        values={['0', '1', '2']}
        defaultValue={defaultValue}
        onChange={() => {}}
      />
    );

    const defaultRadio = screen.getByLabelText(defaultValue);

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
    expect(onChange).toHaveBeenCalledWith('1');
  });
});
