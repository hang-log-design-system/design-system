import type { ComponentPropsWithoutRef } from 'react';

import { FlexStylingProps, getFlexStyling } from '@components/Flex/Flex.style';

interface FlexPorps extends ComponentPropsWithoutRef<'div'> {
  styles?: FlexStylingProps;
}

const Flex = ({ styles = {}, children }: FlexPorps) => {
  return <div css={getFlexStyling(styles)}>{children}</div>;
};

export default Flex;
