import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const getContainerStyling = (width: number, height: number) => {
  return css({
    position: 'relative',

    width,
    height,

    '& *': {
      userSelect: 'none',
    },
  });
};

export const sliderWrapperStyling = {
  width: '100%',
  margin: 0,
  padding: 0,

  overflow: 'hidden',
};

export const getSliderContainerStyling = (
  currentPosition: number,
  width: number,
  translateX: number,
  animate: boolean
) => {
  return css({
    display: 'flex',

    width: '100%',
    height: '100%',

    transform: `translateX(${-currentPosition * width + translateX}px)`,
    transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
  });
};

export const getImageWrapperStyling = (width: number, height: number) => {
  return css({
    minWidth: width,
    width,
    minHeight: height,
    height,

    '& > img': {
      width,
      height,
      borderRadius: Theme.borderRadius.medium,

      objectFit: 'cover',
    },
  });
};

export const getButtonContainerStyling = (showOnHover: boolean) =>
  css({
    transition: 'opacity .1s ease-in',

    opacity: showOnHover ? 0 : 1,

    'div:hover &': {
      opacity: 1,
    },

    '& > button': {
      position: 'absolute',
      top: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: Theme.zIndex.overlayTop,

      width: '28px',
      height: '28px',
      border: 'none',
      borderRadius: '50%',
      outline: '0',

      backgroundColor: Theme.color.white,
      boxShadow: Theme.boxShadow.shadow8,

      transform: 'translateY(-50%)',

      '& svg': {
        width: '12px',
        height: '12px',

        '& path': {
          strokeWidth: 2,
        },
      },
    },
  });

export const leftButtonStyling = css({
  left: Theme.spacer.spacing2,
});

export const rightButtonStyling = css({
  right: Theme.spacer.spacing2,
});

export const getDotsWrapperStyling = (showOnHover: boolean) => {
  return css({
    position: 'absolute',
    left: '50%',
    bottom: Theme.spacer.spacing3,
    display: 'flex',
    gap: Theme.spacer.spacing2,

    transform: 'translateX(-50%)',
    transition: 'opacity .1s ease-in',

    opacity: showOnHover ? 0 : 1,
    cursor: 'pointer',

    'div:hover &': {
      opacity: 1,
    },
  });
};

export const dotStyling = (isSelected: boolean) => {
  return css({
    width: '6px',
    height: '6px',
    borderRadius: '50%',

    backgroundColor: Theme.color.white,

    opacity: isSelected ? 1 : 0.6,
  });
};
