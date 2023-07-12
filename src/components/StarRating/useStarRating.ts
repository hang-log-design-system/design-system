import { useCallback, useState } from 'react';
import type { MouseEvent } from 'react';

const useStarRating = (initialRate: number) => {
  const [starRate, setStarRate] = useState(initialRate);

  const handleStarClick = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.childNodes.forEach((item, index) => {
      const node = item as HTMLImageElement;

      if (node.classList.contains('active')) setStarRate((index + 1) / 2);

      node.classList.remove('active');
    });
    (e.target as HTMLImageElement).classList.add('active');
  }, []);

  return { starRate, handleStarClick };
};

export default useStarRating;
