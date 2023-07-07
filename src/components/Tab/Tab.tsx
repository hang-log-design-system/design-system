import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getSelectedTabStyling, getUnSelectedTabStyling } from './Tab.style';

export interface TabsProps extends ComponentPropsWithRef<'div'> {
  type?: 'outline' | 'block';
  selected?: boolean;
  text: string;
}

const Tabs = (
  { type = 'outline', selected = false, text, ...attributes }: TabsProps,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  if (selected) {
    return (
      <>
        <div css={getSelectedTabStyling(type)} {...attributes}>
          {text}
        </div>
      </>
    );
  }
  return (
    <>
      <div css={getUnSelectedTabStyling(type)} {...attributes}>
        {text}
      </div>
    </>
  );
};

export default forwardRef(Tabs);
