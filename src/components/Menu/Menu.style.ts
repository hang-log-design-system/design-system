import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const menuContainerStyling = css({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  zIndex: Theme.zIndex.overlayTop,

  width: '150px',

  padding: `${Theme.spacer.spacing2} 0`,

  backgroundColor: Theme.color.white,
  border: `1px solid ${Theme.color.gray200}`,
  borderRadius: Theme.borderRadius.small,
});

export const menuStyling = css({
  padding: Theme.spacer.spacing2,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: Theme.color.gray200,
  },
});
