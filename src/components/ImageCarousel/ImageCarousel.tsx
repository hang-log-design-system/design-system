import LeftIcon from '@assets/svg/left-icon.svg';
import RightIcon from '@assets/svg/right-icon.svg';

import { useImageCarousel } from '@hooks/useImageCarousel';

import Box from '@components/Box/Box';
import {
  dotStyling,
  getButtonContainerStyling,
  getContainerStyling,
  getDotsWrapperStyling,
  getImageWrapperStyling,
  getSliderContainerStyling,
  leftButtonStyling,
  rightButtonStyling,
  sliderWrapperStyling,
} from '@components/ImageCarousel/ImageCarousel.style';

export interface ImageCarouselProps {
  width: number;
  height: number;
  images: string[];
  isDraggable?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  showNavigationOnHover?: boolean;
}

const ImageCarousel = ({
  width,
  height,
  images,
  isDraggable = false,
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
    <Box css={getContainerStyling(width, height)} className="image-carousel-container">
      <Box css={sliderWrapperStyling}>
        <div
          ref={sliderRef}
          css={getSliderContainerStyling(currentPosition, width, translateX, animate)}
          onMouseDown={isDraggable ? handlerSliderMoueDown : undefined}
          onTouchStart={isDraggable ? handleSliderTouchStart : undefined}
          onTransitionEnd={isDraggable ? handleSliderTransitionEnd : undefined}
        >
          {images.map((imageUrl, index) => (
            <div key={index} css={getImageWrapperStyling(width, height)}>
              <img draggable={false} src={imageUrl} alt="이미지" />
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

export default ImageCarousel;
