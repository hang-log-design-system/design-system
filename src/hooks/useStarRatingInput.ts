import { useCallback, useState } from 'react';
import type { MouseEvent } from 'react';

type InitialRateType = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export const useStarRatingInput = (initialRate: InitialRateType, onClick?: CallableFunction) => {
  const [starRate, setStarRate] = useState(initialRate);
  const [prevStarRate, setPrevStarRate] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isHoveredBefore, setIsHoveredBefore] = useState(false);

  const handleStarClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      const target = e.target as HTMLImageElement;
      const index = Array.from(target.parentNode!.childNodes).indexOf(target);
      const newRate = ((index + 1) / 2) as InitialRateType;

      if (starRate === newRate && isClicked) {
        setStarRate(0);
        setPrevStarRate(0);
        onClick?.(0);
      } else {
        setStarRate(newRate);
        setPrevStarRate(newRate);
        onClick?.(newRate);
      }

      setIsClicked(true);
    },
    [starRate, isClicked, onClick]
  );

  const handleStarHover = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLImageElement;
    const index = Array.from(target.parentNode!.childNodes).indexOf(target);
    const newRate = ((index + 1) / 2) as InitialRateType;

    setStarRate(newRate);
    setIsClicked(false);
    setIsHoveredBefore(true);
  }, []);

  const handleStarHoverOut = useCallback(() => {
    if (!isClicked && isHoveredBefore) {
      setStarRate(prevStarRate as InitialRateType);
    }
    setIsClicked(false);
    setIsHoveredBefore(false);
  }, [prevStarRate, isClicked, isHoveredBefore]);

  return {
    starRate,
    handleStarClick,
    handleStarHover,
    handleStarHoverOut,
  };
};
