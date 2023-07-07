import { Size } from '@type/index';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import Label from '@components/Label/Label';
import { getSelectStyling, getSelectWrapperStyling } from '@components/Select/Select.style';
import { getSizeStyling } from '@components/Select/Select.style';
import SupportingText from '@components/SupportingText/SupportingText';

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  label?: string;
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  children: JSX.Element | JSX.Element[];
  supportingText?: string;
}

const Select = (
  { label, size = 'medium', isError = false, children, supportingText, ...attributes }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  return (
    <div>
      {label && (
        <Label id={attributes.id} required={attributes.required}>
          {label}
        </Label>
      )}
      <div css={getSelectWrapperStyling(isError)}>
        <select ref={ref} css={[getSelectStyling(isError), getSizeStyling(size)]} {...attributes}>
          {children}
        </select>
      </div>
      {supportingText && <SupportingText isError={isError}>{supportingText}</SupportingText>}
    </div>
  );
};

export default forwardRef(Select);
