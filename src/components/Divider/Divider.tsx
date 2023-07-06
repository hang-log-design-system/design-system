import type { ComponentPropsWithoutRef } from 'react';

import * as S from '@components/Divider/Divider.style';

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  length?: string;
  direction?: 'horizontal' | 'vertical';
}

const Divider = ({ length = '100%', direction = 'horizontal', ...attributes }: DividerProps) => {
  return <div css={S.getDirectionStyling(direction, length)} {...attributes} />;
};

export default Divider;
