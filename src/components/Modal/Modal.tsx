import CloseIcon from '@assets/svg/close-icon.svg';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyling, closeIconStyling, dialogStyling } from '@components/Modal/Modal.style';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  closeModal: () => void;
  hasCloseButton?: boolean;
}

const Modal = ({ isOpen = false, closeModal, hasCloseButton = true, children }: ModalProps) => {
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
          <div css={backdropStyling} onClick={closeModal} />
          <dialog css={dialogStyling}>
            {hasCloseButton && (
              <button
                type="button"
                aria-label="close-button"
                onClick={closeModal}
                css={closeIconStyling}
              >
                <CloseIcon />
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
