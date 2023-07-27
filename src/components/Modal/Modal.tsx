import CloseIcon from '@assets/svg/close-icon.svg';
import type { ComponentPropsWithoutRef } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  backdropStyling,
  closeButtonStyling,
  closeIconStyling,
  dialogStyling,
} from '@components/Modal/Modal.style';

export interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
  /**
   * Modal이 열려있는지에 대한 상태
   *
   * @default false
   */
  isOpen: boolean;
  /**
   * Modal에 닫기버튼에 대한 여부
   *
   * @default true
   */
  hasCloseButton?: boolean;
  /**
   * Modal Backdrop을 클릭해서 Modal을 닫을 수 있는 지에 대한 여부
   * @default true
   */
  isBackdropClosable?: boolean;
  /** Modal을 닫는 함수 */
  closeModal: () => void;
}

const Modal = ({
  closeModal,
  isOpen = false,
  hasCloseButton = true,
  isBackdropClosable = true,
  children,
  ...attributes
}: ModalProps) => {
  const onEscClicked = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isBackdropClosable) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onEscClicked);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onEscClicked);
    };
  }, [isOpen]);

  return createPortal(
    <>
      {isOpen && (
        <>
          <div css={backdropStyling} onClick={isBackdropClosable ? closeModal : () => {}} />
          <dialog css={dialogStyling} {...attributes}>
            {hasCloseButton && (
              <button
                type="button"
                aria-label="close-button"
                onClick={closeModal}
                css={closeButtonStyling}
              >
                <CloseIcon css={closeIconStyling} />
              </button>
            )}
            {children}
          </dialog>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
