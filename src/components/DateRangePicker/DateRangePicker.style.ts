import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const containerStyle = css({
  position: 'relative',
  display: 'inline-flex',
  gap: Theme.spacer.spacing3,
  alignItems: 'flex-start',

  padding: Theme.spacer.spacing3,

  '& > button': {
    position: 'absolute',
    top: '21px',

    backgroundColor: 'white',
    border: 'none',
    outline: 'white',

    cursor: 'pointer',

    '& svg': {
      width: '16px',
      height: '16px',

      '& path': {
        stroke: Theme.color.gray600,
      },

      '&:hover path': {
        stroke: Theme.color.black,
      },
    },
  },
});

export const nextButtonStyle = css({
  right: Theme.spacer.spacing3,
});
