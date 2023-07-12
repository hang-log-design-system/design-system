import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { BoxStylingProps, getBoxStyling } from '@components/Box/Box.style';

interface BoxProps extends ComponentPropsWithRef<'div'> {
  styles?: BoxStylingProps;
}

const Box = ({ styles = {}, children }: BoxProps) => {
  return <div css={getBoxStyling(styles)}>{children}</div>;
};

export default forwardRef(Box);
