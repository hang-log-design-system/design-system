import { ComponentPropsWithRef, ForwardedRef, forwardRef, useEffect } from 'react';

import useSelect from '@hooks/useSelect';

import { getTabsContainerStyling } from '@components/Tabs/Tabs.style';

export type TabsProps = ComponentPropsWithRef<'div'>;

const Tabs = ({ children }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { selected } = useSelect();

  useEffect(() => {}, [selected]);

  return (
    <div css={getTabsContainerStyling} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Tabs);
