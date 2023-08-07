import { useCallback, useState } from 'react';

type InitialRateType = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export const useStarRatingInput = (initialRate: InitialRateType) => {
  const [starRate, setStarRate] = useState(initialRate);
  const [hookStarRate, setHookStarRate] = useState(initialRate);
  const [prevStarRate, setPrevStarRate] = useState(initialRate);
  const [isHoveredBefore, setIsHoveredBefore] = useState(false);

  const handleStarClick = useCallback(
    (index: number) => {
      const newRate = ((index + 1) / 2) as InitialRateType;

      if (hookStarRate === newRate) {
        setStarRate(0);
        setPrevStarRate(0);
      } else {
        setStarRate(newRate);
        setHookStarRate(newRate);
        setPrevStarRate(newRate);
      }
    },
    [hookStarRate, setHookStarRate]
  );

  const handleStarHover = useCallback((index: number) => {
    const newRate = ((index + 1) / 2) as InitialRateType;

    setStarRate(newRate);
    setIsHoveredBefore(true);
  }, []);

  const handleStarHoverOut = useCallback(() => {
    if (isHoveredBefore) {
      setStarRate(prevStarRate as InitialRateType);
    }

    setIsHoveredBefore(false);
  }, [prevStarRate, isHoveredBefore]);

  return {
    starRate,
    handleStarClick,
    handleStarHover,
    handleStarHoverOut,
  };
};
