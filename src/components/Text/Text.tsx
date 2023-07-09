import { Size } from '@type/index';
import type { ComponentPropsWithRef } from 'react';

import * as S from '@components/Text/Text.style';

export interface TextProps extends ComponentPropsWithRef<'p'> {
  size?: Extract<Size, 'xSmall' | 'small' | 'medium' | 'large'>;
}

const Text = ({ size = 'medium', children, ...attributes }: TextProps) => {
  return (
    <p css={S.getSizeStyling(size)} {...attributes}>
      {children}
    </p>
  );
};

export default Text;
