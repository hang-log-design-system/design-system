import HalfEmptyLeftStar from '@assets/svg/half-empty-left-star.svg';
import HalfEmptyRightStar from '@assets/svg/half-empty-right-star.svg';
import HalfFilledLeftStar from '@assets/svg/half-filled-left-star.svg';
import HalfFilledRightStar from '@assets/svg/half-filled-right-star.svg';
import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const inputContainerStyling = css({
  display: 'flex',
  flexDirection: 'column',
  gap: Theme.spacer.spacing2,
});

export const getStarRatingInputBoxStyling = (size: number, gap: number) => {
  return css({
    display: 'inline-flex',

    cursor: 'pointer',

    'img:nth-of-type(odd)': {
      width: `${size / 2}px`,
      height: `${size}px`,

      backgroundImage: `url(${HalfEmptyLeftStar})`,
      backgroundSize: 'cover',

      contentVisibility: 'hidden',
    },

    'img:nth-of-type(even)': {
      width: `${size / 2}px`,
      height: `${size}px`,
      marginRight: `${gap}px`,

      backgroundImage: `url(${HalfEmptyRightStar})`,
      backgroundSize: 'cover',

      contentVisibility: 'hidden',
    },

    'img:nth-of-type(odd):hover,img:nth-of-type(odd):has(~ img:hover)': {
      background: `url(${HalfFilledLeftStar})`,
      backgroundSize: 'cover',
    },

    'img:nth-of-type(even):hover,img:nth-of-type(even):has(~ img:hover)': {
      background: `url(${HalfFilledRightStar})`,
      backgroundSize: 'cover',
    },

    'img:nth-of-type(odd).active, img:nth-of-type(odd):has(~img.active)': {
      background: `url(${HalfFilledLeftStar})`,
      backgroundSize: 'cover',
    },

    'img.active, img:nth-of-type(even):has(~img.active)': {
      background: `url(${HalfFilledRightStar})`,
      backgroundSize: 'cover',
    },

    'img:last-of-type': {
      marginRight: 0,
    },
  });
};
