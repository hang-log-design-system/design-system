import type { ComponentPropsWithoutRef } from 'react';

import { getCenterStyling } from '@components/Center/Center.style';

type CenterPorps = ComponentPropsWithoutRef<'div'>;

const Center = ({ children, ...attributes }: CenterPorps) => {
  return (
    <div css={getCenterStyling} {...attributes}>
      {children}
    </div>
  );
};

export default Center;
