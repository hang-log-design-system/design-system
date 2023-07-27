import CloseIcon from '@assets/svg/close-icon.svg';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  backdropStyling,
  closeButtonStyling,
  closeIconStyling,
  dialogStyling,
} from '@components/Modal/Modal.style';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  closeModal: () => void;
  hasCloseButton?: boolean;
  isBackdropClosable?: boolean;
}

const Modal = ({
  closeModal,
  isOpen = false,
  hasCloseButton = true,
  isBackdropClosable = true,
  children,
}: ModalProps) => {
  const onEscClicked = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
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
          <dialog css={dialogStyling}>
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
