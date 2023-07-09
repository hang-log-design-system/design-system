import AddIcon from '@assets/svg/add-icon.svg';
import type { Size } from '@type/index';
import type { ComponentPropsWithoutRef } from 'react';

import { getVariantStyling } from '@components/Button/Button.style';
import {
  floatingButtonStyling,
  getIconSizeStyling,
  getIconVariantStyling,
  getSizeStyling,
} from '@components/FloatingButton/FloatingButton.style';

export interface FloatingButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: Extract<Size, 'medium' | 'small'>;
  variant?: 'primary' | 'default';
}

const FloatingButton = ({
  size = 'medium',
  variant = 'primary',
  ...attributes
}: FloatingButtonProps) => {
  return (
    <button
      css={[floatingButtonStyling, getSizeStyling(size), getVariantStyling(variant)]}
      {...attributes}
    >
      <AddIcon css={[getIconSizeStyling(size), getIconVariantStyling(variant)]} />
    </button>
  );
};

export default FloatingButton;
