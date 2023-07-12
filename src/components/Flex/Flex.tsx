import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { FlexStylingProps, getFlexStyling } from '@components/Flex/Flex.style';

interface FlexPorps extends ComponentPropsWithRef<'div'> {
  styles?: FlexStylingProps;
}

const Flex = ({ styles = {}, children }: FlexPorps) => {
  return <div css={getFlexStyling(styles)}>{children}</div>;
};

export default forwardRef(Flex);
