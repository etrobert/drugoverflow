import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
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
