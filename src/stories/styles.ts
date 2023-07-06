import { css } from '@emotion/react';

import { Theme } from '../styles/Theme';

const containerStyle = css({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const informationStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  '& > h6': {
    color: `${Theme.color.gray500}`,
    fontSize: '12px',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
});

const containerWrapperStyle = css({
  position: 'absolute',
  top: '0',
  left: '0',
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export { containerStyle, informationStyle, containerWrapperStyle };
