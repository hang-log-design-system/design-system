import CloseIcon from '@assets/svg/close-icon.svg';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { backdropStyling, closeIconStyling, dialogStyling } from '@components/Modal/Modal.style';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
}

const Modal = ({ isOpen = false, onClose, hasCloseButton = true, children }: ModalProps) => {
  useEffect(() => {
    const onESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onESC);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onESC);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div css={backdropStyling} onClick={onClose} />
          <dialog css={dialogStyling}>
            {hasCloseButton && (
              <button type="button" onClick={onClose} css={closeIconStyling}>
                <CloseIcon />
              </button>
            )}
            {children}
          </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
