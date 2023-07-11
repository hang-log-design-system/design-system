import { fadeIn, fadeOut, moveUp } from '@/styles/animation';
import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const backdropStyling = css({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: Theme.zIndex.overlayMiddle,

  width: '100%',
  height: '100%',

  backgroundColor: 'rgba(128, 128, 128, 0.5)',
});

export const dialogStyling = css({
  position: 'fixed',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: Theme.zIndex.overlayTop,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  minWidth: '300px',
  maxWidth: '500px',
  padding: Theme.spacer.spacing4,
  margin: '0 auto',

  border: 'none',
  borderRadius: Theme.borderRadius.medium,

  backgroundColor: Theme.color.white,
  boxShadow: Theme.boxShadow.shadow8,

  animation: `${fadeIn} 0.2s ease-in`,
});

export const closeIconStyling = css({
  alignSelf: 'flex-end',

  marginBottom: Theme.spacer.spacing1,

  border: 'none',
  backgroundColor: 'transparent',

  cursor: 'pointer',
});
