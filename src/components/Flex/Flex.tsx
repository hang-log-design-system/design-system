import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { FlexStylingProps, getFlexStyling } from '@components/Flex/Flex.style';

interface FlexPorps extends ComponentPropsWithRef<'div'> {
  styles?: FlexStylingProps;
}

const Flex = ({ styles = {}, children }: FlexPorps, ref?: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={getFlexStyling(styles)} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Flex);
