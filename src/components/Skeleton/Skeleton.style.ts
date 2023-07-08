import { Theme } from '@/styles/Theme';
import { css, keyframes } from '@emotion/react';

import { SkeletonProps } from '@components/Skeleton/Skeleton';

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

export const getSkeletonStyling = ({ width, height }: Required<SkeletonProps>) => {
  return css({
    width,
    height,
    background: 'linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0)',
    backgroundSize: ' 400%',
    animation: `${skeletonAnimation} 5s infinite ease-out`,
    borderRadius: Theme.spacer.spacing2,
  });
};
