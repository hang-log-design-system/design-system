import { css } from '@emotion/react';

export interface FlexStylingProps {
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  basis?: 'auto' | '0' | '200px';
  grow?: string;
  shrink?: string;
  align?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'inherit'
    | 'initial'
    | 'unset';
  justify?:
    | 'center'
    | 'start'
    | 'flex-start'
    | 'end'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
  gap?: string;
  width?: string;
  height?: string;
}

export const getFlexStyling = ({
  direction = 'row',
  wrap = 'nowrap',
  basis = 'auto',
  grow = '1',
  shrink = '0',
  align = 'flex-start',
  justify = 'flex-start',
  gap = '0px',
  width = '100%',
  height = '100%',
}: FlexStylingProps) => {
  return css({
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    flexBasis: basis,
    grow,
    flexShrink: shrink,
    alignItems: align,
    justifyContent: justify,
    gap,
    width,
    height,
  });
};
