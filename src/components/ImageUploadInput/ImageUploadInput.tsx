import CloseIcon from '@assets/svg/close-icon.svg';
import ImageIcon from '@assets/svg/image-icon.svg';
import type { ComponentPropsWithoutRef } from 'react';
import { useRef } from 'react';

import Button from '@components/Button/Button';
import Flex from '@components/Flex/Flex';
import {
  deleteButtonStyling,
  getUploadButtonStyling,
  imageStyling,
  imageWrapperStyling,
  inputStyling,
} from '@components/ImageUploadInput/ImageUploadInput.style';
import Label from '@components/Label/Label';

import { Theme } from '@styles/Theme';

import Box from '../Box/Box';

export interface ImageUploadInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  supportingText?: string;
  imageUrls: string[] | null;
  imageAltText: string;
  maxUploadCount?: number;
  onRemove: () => void;
}

const ImageUploadInput = ({
  id,
  label,
  supportingText,
  imageUrls,
  imageAltText,
  multiple,
  maxUploadCount,
  onRemove,
  ...attributes
}: ImageUploadInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadButton = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      {label && <Label id={id}>{label}</Label>}
      <Flex styles={{ align: 'flex-start', gap: Theme.spacer.spacing2 }}>
        <Button
          css={getUploadButtonStyling(!!imageUrls, imageUrls?.length === maxUploadCount)}
          type="button"
          onClick={handleImageUploadButton}
        >
          <ImageIcon />
          {!imageUrls && '이미지를 업로드해 주세요'}
        </Button>
        <input
          css={inputStyling}
          type="file"
          accept="image/*"
          id={id}
          ref={inputRef}
          {...attributes}
        />
        {imageUrls &&
          imageUrls.map((imageUrl) => (
            <Box css={imageWrapperStyling}>
              <img css={imageStyling} src={imageUrl} alt={imageAltText} />
              <button
                css={deleteButtonStyling}
                type="button"
                aria-label="이미지 삭제"
                onClick={onRemove}
              >
                <CloseIcon />
              </button>
            </Box>
          ))}
      </Flex>
    </div>
  );
};

export default ImageUploadInput;
