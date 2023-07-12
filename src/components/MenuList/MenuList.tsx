import type { ComponentPropsWithoutRef } from 'react';

import { menuListStyling } from '@components/MenuList/MenuList.style';

interface MenuListProps extends ComponentPropsWithoutRef<'div'> {}

const MenuList = ({ children, ...attributes }: MenuListProps) => {
  return (
    <div css={menuListStyling} {...attributes}>
      {children}
    </div>
  );
};

export default MenuList;
