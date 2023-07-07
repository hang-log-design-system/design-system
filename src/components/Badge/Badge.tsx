import { ComponentPropsWithoutRef } from 'react';

import { badgeStyling, getVariantStyling } from '@components/Badge/Badge.style';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'primary' | 'outline';
}

const Badge = ({ variant = 'default', children, ...attributes }: BadgeProps) => {
  return (
    <span css={[badgeStyling, getVariantStyling(variant)]} {...attributes}>
      {children}
    </span>
  );
};

export default Badge;
