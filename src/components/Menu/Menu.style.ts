import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const menuContainerStyling = css({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  zIndex: Theme.zIndex.overlayTop,

  minWidth: '150px',

  padding: `${Theme.spacer.spacing2} 0`,
  marginTop: Theme.spacer.spacing2,

  backgroundColor: Theme.color.white,
  border: `1px solid ${Theme.color.gray200}`,
  borderRadius: Theme.borderRadius.small,

  transition: 'all .2 ease-in',
});

export const menuStyling = css({
  padding: Theme.spacer.spacing2,

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: Theme.color.gray200,
  },
});
