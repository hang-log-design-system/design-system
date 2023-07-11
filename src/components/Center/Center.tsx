import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { getCenterStyling } from '@components/Center/Center.style';

type CenterPorps = ComponentPropsWithRef<'div'>;

const Center = ({ children }: CenterPorps, ref?: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={getCenterStyling} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Center);
