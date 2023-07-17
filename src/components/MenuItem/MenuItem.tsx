import { type ComponentPropsWithRef, type ForwardedRef, forwardRef } from 'react';

import { menuItemStyling } from '@components/MenuItem/MenuItem.style';

interface MenuItemProps extends ComponentPropsWithRef<'li'> {
  /** 메뉴 아이템을 클릭했을 때 실행시킬 함수  */
  onClick: () => void;
}

const MenuItem = ({ children, ...attributes }: MenuItemProps, ref: ForwardedRef<HTMLLIElement>) => {
  return (
    <li css={menuItemStyling} ref={ref} {...attributes}>
      {children}
    </li>
  );
};

export default forwardRef(MenuItem);
