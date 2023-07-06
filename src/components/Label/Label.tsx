import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { labelStyle, requiredStyle } from '@components/Label/Label.style';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean;
}

const Label = ({ required = false, children, ...attributes }: LabelProps) => {
  return (
    <label css={labelStyle} {...attributes}>
      {children} {required && <span css={requiredStyle}>*</span>}
    </label>
  );
};

export default Label;
