import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getTabsContainerStyling } from '@components/Tabs/Tabs.style';

export type TabsProps = ComponentPropsWithRef<'div'>;

const Tabs = ({ children, ...attributes }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={getTabsContainerStyling} ref={ref} {...attributes}>
      {children}
    </div>
  );
};

export default forwardRef(Tabs);
