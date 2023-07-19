import { useState } from 'react';
import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import Label from '@components/Label/Label';
import {
  buttonStyling,
  labelStyling,
  radioContainerStyling,
  radioWrapperStyling,
} from '@components/RadioButton/RadioButton.style';
import SupportingText from '@components/SupportingText/SupportingText';

export interface RadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  initialCheckedOption?: string;
  /** Radio에서 선택할 수 있는 문자열 option*/
  options: string[];
  /** RadioButton의 라벨 텍스트 */
  label?: string;
  /** RadioButton의 부가 정보 텍스트 */
  supportingText?: string;
  /** 라디오 버튼들을 하나로 묶어주는 이름 */
  name?: string;
}

const RadioButton = ({
  initialCheckedOption,
  options,
  label,
  supportingText,
  name = 'sample',
  onChange,
  ...attributes
}: RadioButtonProps) => {
  const [checkedOption, setCheckedOption] = useState<string>(initialCheckedOption ?? options[0]);

  const handleOptionClick = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    setCheckedOption(e.target.id);
  };

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
            <label htmlFor={option} key={option} css={labelStyling}>
              <input
                type="radio"
                hidden
                id={option}
                name={name}
                checked={checkedOption === option}
                onChange={handleOptionClick}
                {...attributes}
              />
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
