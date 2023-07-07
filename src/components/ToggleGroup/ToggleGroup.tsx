import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { ToggleGroupContainerStyling } from './ToggleGroup.style';

export interface ToggleGroupProps extends ComponentPropsWithRef<'div'> {}

const ToggleGroup = ({ children }: ToggleGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div css={ToggleGroupContainerStyling()} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(ToggleGroup);
