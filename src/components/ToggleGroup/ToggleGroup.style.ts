import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const ToggleGroupContainerStyling = css({
  display: 'flex',

  width: 'fit-content',
  borderRadius: Theme.borderRadius.small,

  overflow: 'hidden',
  '& :first-child': {
    borderTopLeftRadius: Theme.borderRadius.small,
    borderBottomLeftRadius: Theme.borderRadius.small,
  },
  '& :last-child': {
    borderTopRightRadius: Theme.borderRadius.small,
    borderBottomRightRadius: Theme.borderRadius.small,
  },
});
