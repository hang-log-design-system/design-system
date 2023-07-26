import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const ToggleGroupContainerStyling = css({
  display: 'flex',

  width: 'fit-content',
  borderRadius: Theme.borderRadius.small,

  overflow: 'hidden',

  '& :first-of-type': {
    borderTopLeftRadius: Theme.borderRadius.small,
    borderBottomLeftRadius: Theme.borderRadius.small,
  },

  '& :last-of-type': {
    borderTopRightRadius: Theme.borderRadius.small,
    borderBottomRightRadius: Theme.borderRadius.small,
  },
});
