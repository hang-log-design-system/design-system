import { menuItemStyling } from '@components/MenuItem/MenuItem.style';

interface MenuItemProps {
  /** 메뉴 이름   */
  name: string;
  /** 메뉴를 클릭했을 때 실행시킬 함수  */
  onClick: () => void;
  /** 메뉴창을 닫는 함수 */
  closeMenu: () => void;
}

const MenuItem = ({ name, onClick, closeMenu }: MenuItemProps) => {
  const handleMenuItemClick = () => {
    onClick();
    closeMenu();
  };
  return (
    <li onClick={handleMenuItemClick} css={menuItemStyling}>
      {name}
    </li>
  );
};

export default MenuItem;
