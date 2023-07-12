import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { getCenterStyling } from '@components/Center/Center.style';

type CenterPorps = ComponentPropsWithRef<'div'>;

const Center = ({ children }: CenterPorps) => {
  return <div css={getCenterStyling}>{children}</div>;
};

export default forwardRef(Center);
