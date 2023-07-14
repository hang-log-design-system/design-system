import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import {
  getSelectedToggleStyling,
  getUnSelectedToggleStyling,
} from '@components/Toggle/Toggle.style';

export interface ToggleProps extends ComponentPropsWithRef<'div'> {
  toggleId: string;
  selectedId: string;
  text: string;
  changeSelect: (toggleId: string) => void;
}

const Toggle = (
  { toggleId, text, selectedId, changeSelect, ...attributes }: ToggleProps,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <div
        css={selectedId === toggleId ? getSelectedToggleStyling : getUnSelectedToggleStyling}
        onClick={() => {
          changeSelect(toggleId);
        }}
        {...attributes}
        ref={ref}
      >
        {text}
      </div>
    </>
  );
};

export default forwardRef(Toggle);
