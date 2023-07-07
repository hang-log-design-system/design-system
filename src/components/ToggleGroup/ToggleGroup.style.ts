import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const ToggleGroupContainerStyling = () => {
  return css({
    display: 'flex',

    width: 'fit-content',
    border: `1px solid ${Theme.color.gray200}`,
    borderRadius: '4px',

    overflow: 'hidden',
    '& :first-child': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
    '& :last-child': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  });
};
