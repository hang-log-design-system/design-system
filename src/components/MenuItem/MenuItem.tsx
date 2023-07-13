import type { ComponentPropsWithoutRef } from 'react';

import { menuItemStyling } from '@components/MenuItem/MenuItem.style';

interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {
  /** 메뉴 아이템 이름   */
  name: string;
  /** 메뉴 아이템을 클릭했을 때 실행시킬 함수  */
  onClick: () => void;
}

const MenuItem = ({ name, ...attributes }: MenuItemProps) => {
  return (
    <li css={menuItemStyling} {...attributes}>
      {name}
    </li>
  );
};

export default MenuItem;
