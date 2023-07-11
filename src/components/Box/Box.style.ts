import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export interface BoxStylingProps {
  width?: string;
  height?: string;
  margin?: string;
  marginRight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  backgroundColor?: string;
  color?: string;
}

export const getBoxStyling = ({
  width = '100%',
  height = '100%',
  margin = '24px',
  marginRight = '',
  marginTop = '',
  marginLeft = '',
  marginBottom = '',
  padding = '16px',
  paddingTop = '',
  paddingRight = '',
  paddingBottom = '',
  paddingLeft = '',
  border = '',
  borderRadius = '',
  borderColor = `${Theme.color.gray200}`,
  borderTop = '',
  borderRight = '',
  borderBottom = '',
  borderLeft = '',
  backgroundColor = '',
  color = '',
}) => {
  return css({
    width,
    height,
    margin,
    marginRight,
    marginTop,
    marginLeft,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    border,
    borderRadius,
    borderColor,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    backgroundColor,
    color,
  });
};
