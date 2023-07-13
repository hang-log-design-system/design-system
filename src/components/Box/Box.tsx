import type { ComponentPropsWithoutRef } from 'react';

import { BoxStylingProps, getBoxStyling } from '@components/Box/Box.style';

export interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  styles?: BoxStylingProps;
}

const Box = ({ styles = {}, children, ...attributes }: BoxProps) => {
  return (
    <div css={getBoxStyling(styles)} {...attributes}>
      {children}
    </div>
  );
};

export default Box;
