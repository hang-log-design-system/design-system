import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const menuItemStyling = css({
  padding: Theme.spacer.spacing2,

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: Theme.color.gray200,
  },
});
