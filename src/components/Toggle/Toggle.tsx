import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getSelectedToggleStyling, getUnSelectedToggleStyling } from './Toggle.style';

export interface ToggleProps extends ComponentPropsWithRef<'div'> {
  selected?: boolean;
  text: string;
}

const Toggle = (
  { selected = false, text, ...attributes }: ToggleProps,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  if (selected) {
    return (
      <>
        <div css={getSelectedToggleStyling} {...attributes}>
          {text}
        </div>
      </>
    );
  }
  return (
    <>
      <div css={getUnSelectedToggleStyling} {...attributes}>
        {text}
      </div>
    </>
  );
};

export default forwardRef(Toggle);
