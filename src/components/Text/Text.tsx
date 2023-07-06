import { Size } from '@type/index';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import * as S from '@components/Text/Text.style';

export interface TextProps extends ComponentPropsWithRef<'p'> {
  size?: Extract<Size, 'xSmall' | 'small' | 'medium' | 'large'>;
}

const Text = (
  { size = 'medium', children, ...attributes }: TextProps,
  ref: ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <p ref={ref} css={S.getSizeStyling(size)} {...attributes}>
      {children}
    </p>
  );
};

export default forwardRef(Text);
