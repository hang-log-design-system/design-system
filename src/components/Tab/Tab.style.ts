import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export type TabSelectedStylingProps = 'outline' | 'block';

export const getSelectedTabStyling = (type: TabSelectedStylingProps) => {
  if (type === 'outline') {
    return css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${Theme.color.blue600}`,
      cursor: 'pointer',

      padding: '12px 16px',

      backgroundColor: Theme.color.white,

      fontSize: '16px',
      color: Theme.color.blue600,
    });
  }
  return css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    padding: '12px 16px',
    border: 'none',
    backgroundColor: Theme.color.blue600,
    fontSize: '16px',
    color: Theme.color.white,
  });
};

export const getUnSelectedTabStyling = (type: TabSelectedStylingProps) => {
  if (type === 'outline') {
    return css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      padding: '12px 16px',
      border: 'none',
      backgroundColor: Theme.color.white,
      fontSize: '16px',
      color: Theme.color.gray500,
      transition: `all .2s ease-in`,
      '&:hover': {
        color: Theme.color.gray600,
      },
    });
  }
  return css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    padding: '12px 16px',
    border: 'none',
    backgroundColor: Theme.color.gray100,
    fontSize: '16px',
    color: Theme.color.gray500,
    transition: `all .2s ease-in`,
    '&:hover': {
      color: Theme.color.gray600,
    },
  });
};
