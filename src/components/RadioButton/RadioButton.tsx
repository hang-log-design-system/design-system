import { InputHTMLAttributes } from 'react';

import Label from '@components/Label/Label';
import {
  labelStyling,
  radioContainerStyling,
  radioStyling,
  radioWrapperStyling,
  textStyling,
} from '@components/RadioButton/RadioButton.style';
import SupportingText from '@components/SupportingText/SupportingText';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: string[];
  supportingText?: string;
}

const RadioButton = ({ options, label, supportingText, ...attributes }: RadioButtonProps) => {
  return (
    <div css={radioContainerStyling}>
      {label && (
        <Label id={attributes.id} required={attributes.required}>
          {label}
        </Label>
      )}
      <div css={radioWrapperStyling}>
        {options.map((option) => (
          <div css={radioStyling}>
            <input type="radio" hidden id={option} name={attributes.name} {...attributes} />
            <label htmlFor={option} css={labelStyling}></label>
            <p css={textStyling}>{option}</p>
          </div>
        ))}
      </div>
      {supportingText && <SupportingText>{supportingText}</SupportingText>}
    </div>
  );
};

export default RadioButton;
