import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import type { TabSelectedStylingProps } from '@components/Tab/Tab.style';
import { getSelectedTabStyling, getUnSelectedTabStyling } from '@components/Tab/Tab.style';

export interface TabProps extends ComponentPropsWithRef<'div'> {
  variant?: TabSelectedStylingProps;
  selected?: boolean;
  text: string;
}

const Tab = (
  { variant = 'outline', selected = false, text, ...attributes }: TabProps,
  ref?: ForwardedRef<HTMLDivElement>
) => {
  return selected ? (
    <>
      <div css={getSelectedTabStyling[variant]} {...attributes} ref={ref}>
        {text}
      </div>
    </>
  ) : (
    <>
      <div css={getUnSelectedTabStyling[variant]} {...attributes} ref={ref}>
        {text}
      </div>
    </>
  );
};

export default forwardRef(Tab);