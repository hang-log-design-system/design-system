import { useCallback, useState } from 'react';
import type { MouseEvent } from 'react';

type InitialRateType = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export const useStarRating = (initialRate: InitialRateType) => {
  const [starRate, setStarRate] = useState(initialRate);

  const handleStarClick = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.childNodes.forEach((item, index) => {
      const node = item as HTMLImageElement;

      if (node.classList.contains('active')) setStarRate(((index + 1) / 2) as InitialRateType);

      node.classList.remove('active');
    });
    (e.target as HTMLImageElement).classList.add('active');
  }, []);

  return { starRate, handleStarClick };
};
