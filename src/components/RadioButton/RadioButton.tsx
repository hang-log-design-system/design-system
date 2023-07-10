import { InputHTMLAttributes } from 'react';

import Label from '@components/Label/Label';
import {
  buttonStyling,
  labelStyling,
  radioContainerStyling,
  radioWrapperStyling,
} from '@components/RadioButton/RadioButton.style';
import SupportingText from '@components/SupportingText/SupportingText';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Radio에서 선택할 수 있는 문자열 option*/
  options: string[];
  /** RadioButton의 라벨 텍스트 */
  label?: string;
  /** RadioButton의 부가 정보 텍스트 */
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
          <>
            <label htmlFor={option} css={labelStyling}>
              <input type="radio" hidden id={option} name={attributes.name} {...attributes} />
              <div css={buttonStyling} />
              {option}
            </label>
          </>
        ))}
      </div>
      {supportingText && <SupportingText>{supportingText}</SupportingText>}
    </div>
  );
};

export default RadioButton;
