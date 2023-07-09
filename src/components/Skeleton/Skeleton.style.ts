import { css, keyframes } from '@emotion/react';

import { SkeletonProps } from '@components/Skeleton/Skeleton';

import { Theme } from '@styles/Theme';

const skeletonAnimation = keyframes`
 0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const getSkeletonStyling = ({ width, height, variant }: Required<SkeletonProps>) => {
  return css({
    width,
    height,
    borderRadius: variant === 'square' ? Theme.spacer.spacing2 : '50%',

    background: `linear-gradient(-90deg,${Theme.color.gray100}, ${Theme.color.gray200}, ${Theme.color.gray100}, ${Theme.color.gray200})`,
    backgroundSize: ' 400%',

    animation: `${skeletonAnimation} 5s infinite ease-out`,
  });
};
