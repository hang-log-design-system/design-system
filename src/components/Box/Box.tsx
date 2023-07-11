import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { BoxStylingProps, getBoxStyling } from '@components/Box/Box.style';

interface BoxProps extends ComponentPropsWithRef<'div'> {
  styles?: BoxStylingProps;
}

const Box = ({ styles = {}, children }: BoxProps, ref?: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={getBoxStyling(styles)} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Box);
