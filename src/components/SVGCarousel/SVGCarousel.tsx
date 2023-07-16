import LeftIcon from '@assets/svg/left-icon.svg';
import RightIcon from '@assets/svg/right-icon.svg';

import { useImageCarousel } from '@hooks/useImageCarousel';

import Box from '@components/Box/Box';
import {
  dotStyling,
  getButtonContainerStyling,
  getContainerStyling,
  getDotsWrapperStyling,
  getSVGWrapperStyling,
  getSliderContainerStyling,
  leftButtonStyling,
  rightButtonStyling,
  sliderWrapperStyling,
} from '@components/SVGCarousel/SVGCarousel.style';

export interface ImageCarouselProps {
  width: number;
  height: number;
  images: React.FC<React.SVGProps<SVGSVGElement>>[];
  showArrows?: boolean;
  showDots?: boolean;
  showNavigationOnHover?: boolean;
}

const SVGCarousel = ({
  width,
  height,
  images,
  showArrows = false,
  showDots = false,
  showNavigationOnHover = false,
}: ImageCarouselProps) => {
  const {
    sliderRef,
    animate,
    currentPosition,
    translateX,
    handleSliderNavigationClick,
    handlerSliderMoueDown,
    handleSliderTouchStart,
    handleSliderTransitionEnd,
  } = useImageCarousel(width, images.length);

  return (
    <Box css={getContainerStyling(width, height)}>
      <Box css={sliderWrapperStyling}>
        <div
          ref={sliderRef}
          css={getSliderContainerStyling(currentPosition, width, translateX, animate)}
          onMouseDown={handlerSliderMoueDown}
          onTouchStart={handleSliderTouchStart}
          onTransitionEnd={handleSliderTransitionEnd}
        >
          {images.map((SVG, index) => (
            <div key={index} css={getSVGWrapperStyling(width, height)}>
              <SVG />
            </div>
          ))}
        </div>
      </Box>
      {showArrows && (
        <div css={getButtonContainerStyling(showNavigationOnHover)}>
          <button
            type="button"
            css={leftButtonStyling}
            onClick={() => handleSliderNavigationClick(currentPosition - 1)}
          >
            <LeftIcon />
          </button>
          <button
            type="button"
            css={rightButtonStyling}
            onClick={() => handleSliderNavigationClick(currentPosition + 1)}
          >
            <RightIcon />
          </button>
        </div>
      )}
      {showDots && (
        <div css={getDotsWrapperStyling(showNavigationOnHover)}>
          {Array.from({ length: images.length }, (_, index) => (
            <span
              key={index}
              css={dotStyling(currentPosition === index)}
              onClick={() => handleSliderNavigationClick(index)}
            />
          ))}
        </div>
      )}
    </Box>
  );
};

export default SVGCarousel;
