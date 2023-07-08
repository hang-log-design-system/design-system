import CheckedIcon from '@assets/svg/checked-icon.svg';
import UncheckedIcon from '@assets/svg/unchecked-icon.svg';
import { useCallback } from 'react';
import { forwardRef, useState } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';

import { checkboxStyle, inputStyle } from '@components/Checkbox/Checkbox.style';

interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isChecked?: boolean;
}

const Checkbox = (
  { id, label = '', isChecked = false, ...attributes }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <label css={checkboxStyle} htmlFor={id}>
      <input css={inputStyle} id={id} checked={checked} type="checkbox" {...attributes} ref={ref} />
      {checked ? (
        <CheckedIcon onClick={handleChecked} />
      ) : (
        <UncheckedIcon onClick={handleChecked} />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};

export default forwardRef(Checkbox);
