import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import type { TabSelectedStylingProps } from '@components/Tab/Tab.style';
import { getVariantStyling, tabStyling } from '@components/Tab/Tab.style';

export interface TabProps extends ComponentPropsWithRef<'li'> {
  variant?: TabSelectedStylingProps;
  tabId: string | number;
  selectedId: string | number;
  text: string;
  changeSelect: (tabId: string | number) => void;
}

const Tab = (
  { tabId, selectedId, variant = 'outline', text, changeSelect, ...attributes }: TabProps,
  ref?: ForwardedRef<HTMLLIElement>
) => {
  return (
    <li
      role="tab"
      tabIndex={0}
      css={[tabStyling, getVariantStyling(variant, selectedId === tabId)]}
      ref={ref}
      onClick={() => {
        changeSelect(tabId);
      }}
      {...attributes}
    >
      {text}
    </li>
  );
};

export default forwardRef(Tab);
