import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const TabsContainerStyling = () => {
  return css({
    display: 'flex',
    overflowX: 'scroll',
    width: '100%',
    borderBottom: `1px solid ${Theme.color.gray200}`,
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  });
};
