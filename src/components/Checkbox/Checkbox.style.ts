import { css } from '@emotion/react';

export const checkboxStyle = css({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',

  '& > svg': {
    width: '28px',
    height: '28px',
  },
});

export const inputStyle = css({
  padding: 0,
  display: 'none',
});
