import { type ComponentPropsWithRef, type ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { menuListStyling } from '@components/MenuList/MenuList.style';

interface MenuListProps extends ComponentPropsWithRef<'div'> {}

const MenuList = (
  { children, ...attributes }: MenuListProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div css={menuListStyling} ref={ref} {...attributes}>
      {children}
    </div>
  );
};

export default forwardRef(MenuList);
