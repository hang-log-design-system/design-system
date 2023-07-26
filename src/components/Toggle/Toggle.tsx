import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getToggleStyling } from '@components/Toggle/Toggle.style';

export interface ToggleProps extends ComponentPropsWithRef<'li'> {
  toggleId: string | number;
  selectedId: string | number;
  text: string;
  changeSelect: (toggleId: string | number) => void;
}

const Toggle = (
  { toggleId, text, selectedId, changeSelect, ...attributes }: ToggleProps,
  ref?: ForwardedRef<HTMLLIElement>
) => {
  return (
    <li
      ref={ref}
      css={getToggleStyling(selectedId === toggleId)}
      onClick={() => changeSelect(toggleId)}
      {...attributes}
    >
      {text}
    </li>
  );
};

export default forwardRef(Toggle);
