import type { ComponentPropsWithoutRef } from 'react';

import { getCenterStyling } from '@components/Center/Center.style';

type CenterPorps = ComponentPropsWithoutRef<'div'>;

const Center = ({ children }: CenterPorps) => {
  return <div css={getCenterStyling}>{children}</div>;
};

export default Center;
