import { useEffect, useRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { menuStyling } from '@components/Menu/Menu.style';

export interface MenuProps extends ComponentPropsWithoutRef<'div'> {
  closeMenu: () => void;
}

const Menu = ({ children, closeMenu, ...attributes }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: globalThis.MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      closeMenu();
    }
  };

  const handleEscClick = (e: globalThis.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleBackdropClick);
    window.addEventListener('keydown', handleEscClick);

    return () => {
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('keydown', handleEscClick);
    };
  }, []);

  return (
    <div ref={menuRef} css={menuStyling} {...attributes}>
      {children}
    </div>
  );
};

export default Menu;
