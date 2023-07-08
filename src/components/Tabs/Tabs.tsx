import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { TabsContainerStyling } from './Tabs.style';

export interface TabsProps extends ComponentPropsWithRef<'div'> {}

const Tabs = ({ children }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={TabsContainerStyling} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Tabs);
