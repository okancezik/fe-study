"use client";

import React from "react";
import Link from 'next/link';
import styles from './nav-menu.module.scss';


interface NavMenuItem {
  isitemactive: string;
  itemName: string;
  path: string;
}

const NavMenu = () => {

  const menuItems = [
    {
      isitemactive: 'product',
      itemName: 'products',
      path: '#products',
    } as NavMenuItem,
    {
      isitemactive: 'solutions',
      itemName: 'solutions',
      path: '#solutions',
    } as NavMenuItem,
    {
      isitemactive: 'pricing',
      itemName: 'pricing',
      path: '#pricing',
    } as NavMenuItem,
    {
      isitemactive: 'resources',
      itemName: 'resources',
      path: '#resources',
    } as NavMenuItem,
    {
      isitemactive: 'login',
      itemName: 'Log In',
      path: '#login',
    } as NavMenuItem,
  ]


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"}><p>Collers</p></Link>
        <div>
          {
            menuItems.map((menu: NavMenuItem) => (<p key={menu.itemName}>{menu.itemName}</p>))
          }
        </div>
      </div>

    </nav>
  );
};

export default NavMenu;
