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
      value={value}
      checked={value === currentValue}
      onChange={onChange}
    />
  </label>
);

type Props = {
  values: string[];
  defaultValue: string;
  onChange: (value: string) => void;
};

function RadioGroup({ values, defaultValue, onChange }: Props) {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setCurrentValue(value);
      onChange(value);
    },
    [onChange]
  );

  return (
    <>
      {values.map((value) => (
        <OneRadio
          key={value}
          value={value}
          currentValue={currentValue}
          onChange={onInputChange}
        />
      ))}
    </>
  );
}

export default RadioGroup;
