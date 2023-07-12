import { useEffect, useRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { menuStyling } from '@components/Menu/Menu.style';

interface MenuProps extends ComponentPropsWithoutRef<'div'> {
  closeMenu: () => void;
}

const Menu = ({ children, closeMenu, ...attributes }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: globalThis.MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleBackdropClick);

    return () => window.removeEventListener('click', handleBackdropClick);
  }, []);

  return (
    <div ref={menuRef} css={menuStyling} {...attributes}>
      {children}
    </div>
  );
};

export default Menu;
