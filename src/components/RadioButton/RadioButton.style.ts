import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const radioContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: Theme.spacer.spacing2,
});

export const radioWrapperStyle = css({
  display: 'flex',
});

export const radioStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginRight: Theme.spacer.spacing2,

  'input[type="radio"]:not(:checked) + label': {
    color: Theme.color.gray600,
  },
});

export const labelStyle = css({
  position: 'relative',
  display: 'inline',
  alignItems: 'center',

  width: '16px',
  height: '16px',
  border: `2px solid ${Theme.color.gray200}`,
  borderRadius: '50%',
  marginRight: Theme.spacer.spacing2,

  color: Theme.color.gray800,
  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,

  cursor: 'pointer',

  'input[type="radio"]:checked + &': {
    border: `5px solid ${Theme.color.blue500}`,
  },
});

export const textStyle = css({
  color: Theme.color.gray600,

  'input[type="radio"]:checked + label + &': {
    color: Theme.color.gray800,
  },
});
