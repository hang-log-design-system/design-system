import { ComponentPropsWithRef, ForwardedRef, forwardRef, useEffect } from 'react';

import useSelect from '@hooks/useSelect';

import { ToggleGroupContainerStyling } from '@components/ToggleGroup/ToggleGroup.style';

export interface ToggleGroupProps extends ComponentPropsWithRef<'div'> {}

const ToggleGroup = ({ children }: ToggleGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { selected } = useSelect();

  useEffect(() => {}, [selected]);

  return (
    <div css={ToggleGroupContainerStyling} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(ToggleGroup);
