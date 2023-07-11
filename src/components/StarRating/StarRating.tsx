import { ForwardedRef, MouseEvent, forwardRef, useRef } from 'react';

import { getStarRatingBoxStyling } from './StarRating.style';

interface StarRatingProps {
  rate: number;
  size?: number;
  gap?: number;
  onStarClick: (e: MouseEvent<HTMLSpanElement>) => void;
}

const StarRating = (
  { rate, size = 24, gap = 2, onStarClick }: StarRatingProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rateContainers = Array(10)
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
