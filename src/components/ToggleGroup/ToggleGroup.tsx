import { ComponentPropsWithRef, ForwardedRef, forwardRef, useEffect } from 'react';

import useSelect from '@hooks/useSelect';

import { ToggleGroupContainerStyling } from '@components/ToggleGroup/ToggleGroup.style';

export interface ToggleGroupProps extends ComponentPropsWithRef<'ul'> {}

const ToggleGroup = (
  { children, ...attributes }: ToggleGroupProps,
  ref: ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul css={ToggleGroupContainerStyling} ref={ref} {...attributes}>
      {children}
    </ul>
  );
};

export default forwardRef(ToggleGroup);
