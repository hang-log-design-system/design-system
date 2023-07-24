import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export type TabSelectedStylingProps = 'outline' | 'block';

export const getSelectedTabStyling = {
  outline: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: 'max-content',
    padding: '12px 16px',
    borderBottom: `1px solid ${Theme.color.blue600}`,

    backgroundColor: Theme.color.white,

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
    color: Theme.color.blue600,

    cursor: 'pointer',
  }),

  block: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: 'max-content',
    padding: '12px 16px',
    border: 'none',

    backgroundColor: Theme.color.blue600,

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
    color: Theme.color.white,

    cursor: 'pointer',
  }),
};

export const getUnSelectedTabStyling = {
  outline: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: 'max-content',
    padding: '12px 16px',
    borderBottom: '1px solid transparent',

    backgroundColor: Theme.color.white,

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
    color: Theme.color.gray500,

    transition: 'all .2s ease-in',

    cursor: 'pointer',

    '&:hover': {
      color: Theme.color.gray600,
    },
  }),
  block: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: 'max-content',
    padding: '12px 16px',
    border: 'none',

    backgroundColor: Theme.color.gray100,

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
    color: Theme.color.gray500,

    transition: 'all .2s ease-in',

    cursor: 'pointer',

    '&:hover': {
      color: Theme.color.gray600,
    },
  }),
};
