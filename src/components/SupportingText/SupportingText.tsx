import type { ComponentPropsWithoutRef } from 'react';

import { getTextStyle } from '@components/SupportingText/SupportingText.style';

export interface SupportingTextProps extends ComponentPropsWithoutRef<'span'> {
  isError?: boolean;
}

const SupportingText = ({ isError = false, children, ...attributes }: SupportingTextProps) => {
  return (
    <span css={getTextStyle(isError)} {...attributes}>
      {children}
    </span>
  );
};

export default SupportingText;
