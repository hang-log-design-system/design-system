import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const getSelectedToggleStyling = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: `1px solid ${Theme.color.blue700}`,
  padding: '8px 12px',

  backgroundColor: Theme.color.blue100,

  fontSize: '16px',
  color: Theme.color.blue700,

  transition: `all .2s ease-in`,

  cursor: 'pointer',
  '&:hover': {
    color: Theme.color.blue700,
    backgroundColor: Theme.color.blue200,
  },
});

export const getUnSelectedToggleStyling = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '8px 12px',
  border: `0.5px solid ${Theme.color.gray200}`,

  backgroundColor: Theme.color.white,

  fontSize: '16px',
  color: Theme.color.gray600,

  transition: `all .2s ease-in`,

  cursor: 'pointer',
  '&:hover': {
    color: Theme.color.gray700,
    backgroundColor: Theme.color.gray100,
  },
});
