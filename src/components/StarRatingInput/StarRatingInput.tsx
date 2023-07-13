import { forwardRef, useRef } from 'react';
import type { ForwardedRef, MouseEvent } from 'react';

import { getStarRatingInputBoxStyling } from '@components/StarRatingInput/StarRatingInput.style';

const STAR_RATING_EMPTY_LENGTH = 10;

export interface StarRatingInputProps {
  /** rate는 0~5까지 0.5단위로 입력할 수 있다. */
  rate: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  size?: number;
  gap?: number;
  onStarClick: (e: MouseEvent<HTMLSpanElement>) => void;
  onStarHover: (e: MouseEvent<HTMLSpanElement>) => void;
  onStarHoverOut: (e: MouseEvent<HTMLSpanElement>) => void;
}

const StarRatingInput = (
  { rate = 0, size = 24, gap = 2, onStarClick, onStarHover, onStarHoverOut }: StarRatingInputProps,
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
        <img key={index} ref={ref} onClick={handleClick} className={isActive ? 'active' : ''} />
      );
    });

  return (
    <>
      <div className="star" ref={ref}>
        <span
          className="star-box"
          css={getStarRatingInputBoxStyling(size, gap)}
          onMouseOver={onStarHover}
          onMouseOut={onStarHoverOut}
        >
          {rateContainers}
        </span>
      </div>
    </>
  );
};

export default forwardRef(StarRatingInput);
