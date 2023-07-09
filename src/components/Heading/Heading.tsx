import { Size } from '@type/index';
import type { ComponentPropsWithRef } from 'react';

import { getSizeStyling } from '@components/Heading/Heading.style';

export interface HeadingProps extends ComponentPropsWithRef<'h4'> {
  size?: Size;
}

const TAG_BY_SIZE = {
  xxLarge: 'h1',
  xLarge: 'h2',
  large: 'h3',
  medium: 'h4',
  small: 'h5',
  xSmall: 'h6',
} as const;

const Heading = ({ size = 'medium', children, ...attributes }: HeadingProps) => {
  const HeadingTag = TAG_BY_SIZE[size];

  return (
    <HeadingTag css={getSizeStyling(size)} {...attributes}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
