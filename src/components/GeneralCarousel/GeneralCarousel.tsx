import LeftIcon from '@assets/svg/left-icon.svg';
import RightIcon from '@assets/svg/right-icon.svg';

import useGeneralCarousel from '@hooks/useGeneralCarousel';

import Box from '@components/Box/Box';
import Dots from '@components/GeneralCarousel/Dots';
import {
  getButtonContainerStyling,
  getContainerStyling,
  getItemWrapperStyling,
  leftButtonStyling,
  rightButtonStyling,
  sliderWrapperStyling,
} from '@components/GeneralCarousel/GeneralCarousel.style';

export interface useGeneralCarouselProps {
  width: number;
  height: number;
  items: React.FC<React.SVGProps<SVGSVGElement>>[] | string[];
  showArrows?: boolean;
  showDots?: boolean;
}

const GeneralCarousel = ({
  width,
  height,
  items,
  showArrows = true,
  showDots = true,
}: useGeneralCarouselProps) => {
  const { viewIndex, itemRef, carouselBoxRef, handleMoveImage, handleClickLeft, handleClickRight } =
    useGeneralCarousel(items);

  return (
    <div css={getContainerStyling(width, height)} ref={carouselBoxRef}>
      {showDots && (
        <Dots imageLength={items.length} activeNumber={viewIndex} moveImage={handleMoveImage} />
      )}
      {showArrows && items.length !== 1 && (
        <div css={getButtonContainerStyling(true)}>
          <button type="button" css={leftButtonStyling} onClick={handleClickLeft}>
            <LeftIcon />
          </button>
          <button type="button" css={rightButtonStyling} onClick={handleClickRight}>
            <RightIcon />
          </button>
        </div>
      )}
      <Box css={sliderWrapperStyling}>
        {items.map((Item, index) => {
          if (typeof Item === 'string') {
            return (
              <div
                ref={index === viewIndex ? itemRef : null}
                key={crypto.randomUUID()}
                css={getItemWrapperStyling(width, height)}
              >
                <img draggable={false} src={Item} alt="이미지" />
              </div>
            );
          }
          return (
            <div
              ref={index === viewIndex ? itemRef : null}
              key={crypto.randomUUID()}
              css={getItemWrapperStyling(width, height)}
            >
              <Item />
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default GeneralCarousel;
