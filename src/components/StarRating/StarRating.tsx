import { forwardRef, useRef } from 'react';
import type { ForwardedRef, MouseEvent } from 'react';

import { getStarRatingBoxStyling } from '@components/StarRating/StarRating.style';

const STAR_RATING_EMPTY_LENGTH = 10;

interface StarRatingProps {
  /** rate는 0~5까지 0.5단위로 입력할 수 있다. */
  rate: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  size?: number;
  gap?: number;
  onStarClick: (e: MouseEvent<HTMLSpanElement>) => void;
}

const StarRating = (
  { rate, size = 24, gap = 2, onStarClick }: StarRatingProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rateContainers = Array(STAR_RATING_EMPTY_LENGTH)
    .fill(useRef(null))
    .map((ref, index) => {
      return index === rate * 2 - 1 ? <img className="active" ref={ref} /> : <img ref={ref} />;
    });

  return (
    <>
      <div className="star" ref={ref}>
        <span className="star-box" css={getStarRatingBoxStyling(size, gap)} onClick={onStarClick}>
          {rateContainers}
        </span>
      </div>
    </>
  );
};

export default forwardRef(StarRating);
