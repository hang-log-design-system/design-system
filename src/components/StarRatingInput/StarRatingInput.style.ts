import { css } from '@emotion/react';

export const inputContainerStyling = (size: number, gap: number) => {
  return css({
    display: 'flex',

    'div:not(:last-of-type):nth-of-type(even)': {
      marginRight: gap,
    },
    svg: {
      width: size / 2,
      height: size,
    },
  });
};
