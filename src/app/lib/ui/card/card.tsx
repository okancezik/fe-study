import React from "react";
import styles from "./card.module.scss";
import Title from "../../atomic/title/title";
import Submessage from "../../atomic/submessage/submessage";
import PrimaryButton from "../../atomic/primary-button/primary-button";
import Image, { StaticImageData } from "next/image";

interface CardItem {
  image: string |  StaticImageData;
  title: string;
  submessage: string;
  buttonMessage: string | undefined;
}

const Card = (props: CardItem) => {
  return (
    <div className={styles.card} key={props.title}>
      <Image className={styles.imgCard} src={props.image} alt={props.title} />
      <div className={styles.cardBody}>
        <Title
          style={{ fontWeight: 700, fontSize: "24px", lineHeight: "26.4px" }}
        >
          {props.title}
        </Title>
        <Submessage>{props.submessage}</Submessage>
      </div>
      {props.buttonMessage && (
        <div className={styles.cardFooter}>
          <PrimaryButton prefix={"+"}>{props.buttonMessage}</PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default Card;
