import { useEffect, useRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { MenuStyling } from '@components/Menu/Menu.style';

interface MenuProps extends ComponentPropsWithoutRef<'div'> {
  closeMenu: () => void;
}

const Menu = ({ children, closeMenu }: MenuProps) => {
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
    <div ref={menuRef} css={MenuStyling}>
      {children}
    </div>
  );
};

export default Menu;
