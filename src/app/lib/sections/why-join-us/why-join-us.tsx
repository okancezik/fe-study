import React from "react";
import styles from "./why-join-us.module.scss";
import Title from "../../atomic/title/title";
import Image from "next/image";
import Submessage from "../../atomic/submessage/submessage";
import desktopVideo from "../../../../../public/desktop-video.png";
import SecondaryButton from "../../atomic/secondary-button/secondary-button";

const Message = ({ message }: { message: string }) => {
  return (
    <div className={styles.message}>
      <Image src={"/check.svg"} alt={"check"} width={30} height={30} />
      <Submessage>{message}</Submessage>
    </div>
  );
};

const WhyJoinUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.right}>
          <Title>Why Join Us</Title>
          <div className={styles.messages}>
            <Message message="Est et in pharetra magna adipiscing ornare aliquam." />
            <Message message="Tellus arcu sed consequat ac velit ut eu blandit." />
            <Message message="Ullamcorper ornare in et egestas dolor orci." />
          </div>
          <div>
            <SecondaryButton>Sign Up Now</SecondaryButton>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <Image src={desktopVideo} alt="video" className={styles.video} />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
