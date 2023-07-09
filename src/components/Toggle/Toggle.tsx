import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import {
  getSelectedToggleStyling,
  getUnSelectedToggleStyling,
} from '@components/Toggle/Toggle.style';

export interface ToggleProps extends ComponentPropsWithRef<'div'> {
  selected?: boolean;
  text: string;
}

const Toggle = (
  { selected = false, text, ...attributes }: ToggleProps,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  return selected ? (
    <>
      <div css={getSelectedToggleStyling} {...attributes} ref={ref}>
        {text}
      </div>
    </>
  ) : (
    <>
      <div css={getUnSelectedToggleStyling} {...attributes} ref={ref}>
        {text}
      </div>
    </>
  );
};

export default forwardRef(Toggle);
