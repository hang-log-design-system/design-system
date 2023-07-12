import type { ComponentPropsWithoutRef } from 'react';

import { BoxStylingProps, getBoxStyling } from '@components/Box/Box.style';

export interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  styles?: BoxStylingProps;
}

const Box = ({ styles = {}, children }: BoxProps) => {
  return <div css={getBoxStyling(styles)}>{children}</div>;
};

export default Box;
