import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const getTabsContainerStyling = css({
  display: 'flex',

  width: '100%',
  borderBottom: `1px solid ${Theme.color.gray200}`,

  overflowX: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
