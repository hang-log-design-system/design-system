import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import type { TabSelectedStylingProps } from '@components/Tab/Tab.style';
import { getSelectedTabStyling, getUnSelectedTabStyling } from '@components/Tab/Tab.style';

export interface TabProps extends ComponentPropsWithRef<'div'> {
  variant?: TabSelectedStylingProps;
  tabId: string;
  selectedId: string;
  text: string;
  changeSelect: (tabId: string) => void;
}

const Tab = (
  { tabId, selectedId, variant = 'outline', text, changeSelect, ...attributes }: TabProps,
  ref?: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      css={selectedId === tabId ? getSelectedTabStyling[variant] : getUnSelectedTabStyling[variant]}
      {...attributes}
      ref={ref}
      onClick={() => {
        changeSelect(tabId);
      }}
    >
      {text}
    </div>
  );
};

export default forwardRef(Tab);
