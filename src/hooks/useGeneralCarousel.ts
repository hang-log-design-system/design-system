import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const useGeneralCarousel = (items: React.FC<React.SVGProps<SVGSVGElement>>[] | string[]) => {
  const [viewIndex, setViewIndex] = useState(0);
  const carouselBoxRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMoveImage = (imageNumber: number) => {
    if (itemRef.current) {
      flushSync(() => {
        setViewIndex(imageNumber);
      });

      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };
  const handleClickLeft = () => {
    if (itemRef.current) {
      flushSync(() => {
        if (viewIndex === 0) setViewIndex(0);
        else setViewIndex(viewIndex - 1);
      });

      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handleClickRight = () => {
    if (itemRef.current) {
      flushSync(() => {
        if (viewIndex === items.length - 1) setViewIndex(viewIndex);
        else setViewIndex(viewIndex + 1);
      });

      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return { viewIndex, itemRef, carouselBoxRef, handleMoveImage, handleClickLeft, handleClickRight };
};

export default useGeneralCarousel;
