import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { ToggleGroupContainerStyling } from '@components/ToggleGroup/ToggleGroup.style';

export interface ToggleGroupProps extends ComponentPropsWithRef<'div'> {}

const ToggleGroup = (
  { children, ...attributes }: ToggleGroupProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div css={ToggleGroupContainerStyling} ref={ref} {...attributes}>
      {children}
    </div>
  );
};

export default forwardRef(ToggleGroup);
