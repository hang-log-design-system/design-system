import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const containerStyle = css({
  display: 'inline-block',
});

export const headerStyle = css({
  marginBottom: Theme.spacer.spacing3,

  textAlign: 'center',

  '& > h6': {
    fontWeight: 600,
  },
});

export const dayContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 40px)',
  gridAutoRows: '40px',
  columnGap: '2px',
  rowGap: '2px',
});

export const dayOfWeekContainerStyle = css({
  marginBottom: Theme.spacer.spacing2,

  '& div': {
    color: Theme.color.gray600,

    cursor: 'default',

    '&:hover': {
      backgroundColor: Theme.color.white,
    },
  },
});
