import type { ComponentPropsWithoutRef } from 'react';

import { FlexStylingProps, getFlexStyling } from '@components/Flex/Flex.style';

export interface FlexPorps extends ComponentPropsWithoutRef<'div'> {
  styles?: FlexStylingProps;
}

const Flex = ({ styles = {}, children, ...attributes }: FlexPorps) => {
  return (
    <div css={getFlexStyling(styles)} {...attributes}>
      {children}
    </div>
  );
};

export default Flex;
