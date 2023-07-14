import { ComponentPropsWithRef, ForwardedRef, forwardRef, useEffect } from 'react';

import { getTabsContainerStyling } from '@components/Tabs/Tabs.style';

export type TabsProps = ComponentPropsWithRef<'ul'>;

const Tabs = ({ children, ...attributes }: TabsProps, ref: ForwardedRef<HTMLUListElement>) => {
  return (
    <ul css={getTabsContainerStyling} ref={ref} {...attributes}>
      {children}
    </ul>
  );
};

export default forwardRef(Tabs);
