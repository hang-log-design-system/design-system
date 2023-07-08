import { InputHTMLAttributes } from 'react';

import Label from '@components/Label/Label';
import SupportingText from '@components/SupportingText/SupportingText';

import {
  labelStyle,
  radioContainerStyle,
  radioStyle,
  radioWrapperStyle,
  textStyle,
} from './RadioButton.style';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: string[];
  supportingText?: string;
}

const RadioButton = ({ options, label, supportingText, ...attributes }: RadioButtonProps) => {
  return (
    <div css={radioContainerStyle}>
      {label && (
        <Label id={attributes.id} required={attributes.required}>
          {label}
        </Label>
      )}
      <div css={radioWrapperStyle}>
        {options.map((option) => (
          <div css={radioStyle}>
            <input type="radio" hidden id={option} name={attributes.name} />
            <label htmlFor={option} css={labelStyle}></label>
            <p css={textStyle}>{option}</p>
          </div>
        ))}
      </div>
      {supportingText && <SupportingText>{supportingText}</SupportingText>}
    </div>
  );
};

export default RadioButton;
