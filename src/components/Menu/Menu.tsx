import { useEffect, useRef, useState } from 'react';

import Button from '@components/Button/Button';
import type { ButtonProps } from '@components/Button/Button';
import { menuContainerStyling, menuStyling } from '@components/Menu/Menu.style';

interface Menu {
  name: string;
  onClick: () => void;
}

interface MenuProps {
  title: string;
  titleVariant?: ButtonProps['variant'];
  menus: Menu[];
}

const Menu = ({ title, menus, titleVariant = 'text' }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (e: MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      setShowMenu(false);
    }
  };

  const handleMenuClick = (menu: Menu) => {
    menu.onClick();
    setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeMenu);

    return () => window.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div ref={menuRef}>
      <Button variant={titleVariant} onClick={toggleMenu}>
        {title}
      </Button>
      {showMenu && (
        <section css={menuContainerStyling}>
          {menus.map((menu) => (
            <div onClick={() => handleMenuClick(menu)} css={menuStyling}>
              {menu.name}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Menu;
