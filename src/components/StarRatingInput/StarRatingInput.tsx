/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/* eslint-disable jsx-a11y/mouse-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef, useRef } from 'react';
import type { ForwardedRef, MouseEvent } from 'react';

import Label from '@components/Label/Label';
import {
  getStarRatingInputBoxStyling,
  inputContainerStyling,
} from '@components/StarRatingInput/StarRatingInput.style';
import SupportingText from '@components/SupportingText/SupportingText';

const STAR_RATING_EMPTY_LENGTH = 10;

export interface StarRatingInputProps {
  label?: string;
  supportingText?: string;
  required?: boolean;
  /** rate는 0~5까지 0.5단위로 입력할 수 있다. */
  rate: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  size?: number;
  gap?: number;
  onStarClick: (e: MouseEvent<HTMLSpanElement>) => void;
  onStarHover: (e: MouseEvent<HTMLSpanElement>) => void;
  onStarHoverOut: (e: MouseEvent<HTMLSpanElement>) => void;
}

const StarRatingInput = (
  {
    label,
    supportingText,
    required = false,
    rate = 0,
    size = 24,
    gap = 2,
    onStarClick,
    onStarHover,
    onStarHoverOut,
  }: StarRatingInputProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rateContainers = Array(STAR_RATING_EMPTY_LENGTH)
    .fill(useRef(null))
    .map((ref, index) => {
      const isActive = index === rate * 2 - 1;

      const handleClick = (e: MouseEvent<HTMLImageElement>) => {
        onStarClick(e);
      };

      return (
        <span key={index} ref={ref} onClick={handleClick} className={isActive ? 'active' : ''} />
      );
    });

  return (
    <div css={inputContainerStyling}>
      {label && (
        <Label id="star-rating-input" required={required}>
          {label}
        </Label>
      )}
      <div tabIndex={0} className="star" ref={ref} aria-label={label || '별점 입력'}>
        <span
          className="star-box"
          css={getStarRatingInputBoxStyling(size, gap)}
          onMouseOver={onStarHover}
          onMouseOut={onStarHoverOut}
        >
          {rateContainers}
        </span>
      </div>
      {supportingText && <SupportingText>{supportingText}</SupportingText>}
    </div>
  );
};

export default forwardRef(StarRatingInput);
