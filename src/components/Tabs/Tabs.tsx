import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getTabsContainerStyling } from './Tabs.style';

export type TabsProps = ComponentPropsWithRef<'div'>;

const Tabs = ({ children }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={getTabsContainerStyling} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Tabs);
