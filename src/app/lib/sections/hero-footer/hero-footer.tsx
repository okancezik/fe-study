import React from "react";
import styles from "./hero-footer.module.scss";
import Image from "next/image";
import Submessage from "../../atomic/submessage/submessage";
import Title from "../../atomic/title/title";

interface CardItem {
  icon: string;
  title: string;
  subtitle: string;
}

const HeroFooter = () => {
  const items = [
    {
      icon: "/hero-footer-1.svg",
      title: "Nibh viverra",
      subtitle:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    } as CardItem,
    {
      icon: "/hero-footer-2.svg",
      title: "Cursus Amet",
      subtitle:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    } as CardItem,
    {
      icon: "/hero-footer-3.svg",
      title: "İpsum Fermentum",
      subtitle:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    } as CardItem,
  ];

  return (
    <div id="brands" className={styles.container}>
      <div className={styles.heroFooterContainer}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <Image src={item.icon} alt="icon" width={45} height={45} />
            <Title style={{fontSize:"20px", lineHeight:"22px",fontWeight:"500"}}>{item.title}</Title>
            <Submessage>{item.subtitle}</Submessage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFooter;
