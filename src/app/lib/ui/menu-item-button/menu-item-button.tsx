import React from 'react';
import styles from './menu-item-button.module.scss';

interface MenuItemButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isitemactive: boolean;
  isVertical?: boolean;
  onItemClick?: () => void;
}

const MenuItemButton = (props: MenuItemButtonProps) => {
  return (
    <>
      <div
        onClick={props.onItemClick}
        className={
          props.isitemactive ? styles.activeMenuItemBtn : styles.menuItemBtn
        }
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default MenuItemButton;
