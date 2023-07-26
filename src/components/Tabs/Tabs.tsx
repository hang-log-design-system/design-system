import { ComponentPropsWithRef, ForwardedRef, forwardRef, useEffect } from 'react';

import { containerStyling } from '@components/Tabs/Tabs.style';

export type TabsProps = ComponentPropsWithRef<'ul'>;

const Tabs = ({ children, ...attributes }: TabsProps, ref: ForwardedRef<HTMLUListElement>) => {
  return (
    <ul css={containerStyling} ref={ref} {...attributes}>
      {children}
    </ul>
  );
};

export default forwardRef(Tabs);
