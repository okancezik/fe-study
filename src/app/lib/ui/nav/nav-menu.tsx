"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav-menu.module.scss";
import MenuItemButton from "../menu-item-button/menu-item-button";

interface NavMenuItem {
  isitemactive: string;
  itemName: string;
  path: string;
}

const NavMenu = () => {
  const [activePage, setActivePage] = useState<string | null>(
    typeof window !== "undefined" ? sessionStorage.getItem("active-page") : null
  );

  const menuItems = [
    {
      isitemactive: "product",
      itemName: "products",
      path: "#products",
    } as NavMenuItem,
    {
      isitemactive: "solutions",
      itemName: "solutions",
      path: "#solutions",
    } as NavMenuItem,
    {
      isitemactive: "pricing",
      itemName: "pricing",
      path: "#pricing",
    } as NavMenuItem,
    {
      isitemactive: "resources",
      itemName: "resources",
      path: "#resources",
    } as NavMenuItem,
    {
      isitemactive: "login",
      itemName: "Log In",
      path: "#login",
    } as NavMenuItem,
  ];
  const handleMenuItemClick = (page: string) => {
    setActivePage(() => {
      return page;
    });
    sessionStorage.setItem("active-page", page);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"} style={{display:"flex", alignItems:"center"}}>
          <span style={{color:"#78350F",fontSize:"32px",fontWeight:"700",lineHeight:"35.2px"}}>Collers</span>
        </Link>
        <div className={styles.menuItems}>
          {menuItems.map((item: NavMenuItem) => (
            <MenuItemButton
              key={item.itemName}
              isitemactive={activePage === item.isitemactive}
              onItemClick={() => handleMenuItemClick(item.isitemactive)}
            >
              <Link href={item.path}>{item.itemName}</Link>
            </MenuItemButton>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
