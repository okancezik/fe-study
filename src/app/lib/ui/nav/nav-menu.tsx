"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav-menu.module.scss";
import MenuItemButton from "../menu-item-button/menu-item-button";
import SecondaryButton from "../../atomic/secondary-button/secondary-button";
import { Drawer,} from "antd";
import { MenuOutlined } from '@ant-design/icons';

interface NavMenuItem {
  isitemactive: string;
  itemName: string;
  path: string;
}

const NavMenu = () => {

  const [isOpen, setOpen] = useState<boolean>(false);

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
          <SecondaryButton style={{fontSize:"16px"}}>Sign up Now</SecondaryButton>
        </div>
      </div>
      <div className={styles.mobileContainer}>
      <Link href={"/"} style={{display:"flex", alignItems:"center"}}>
          <span style={{color:"#78350F",fontSize:"32px",fontWeight:"700",lineHeight:"35.2px"}}>Collers</span>
        </Link>
        {isOpen ? (
          <Drawer onClose={() => setOpen(false)} open={isOpen} width={'75%'}>
            <div className={styles.mobileDrawer}>
              {menuItems.map((item: NavMenuItem) => (
                <MenuItemButton
                  key={item.itemName}
                  isitemactive={activePage === item.isitemactive}
                  onItemClick={() => {
                    handleMenuItemClick(item.isitemactive);
                    setOpen(false);
                  }}
                >
                  <Link href={item.path}>{item.itemName}</Link>
                </MenuItemButton>
              ))}
            </div>
          </Drawer>
        ) : (
          <MenuOutlined onClick={() => setOpen(!isOpen)} />
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
